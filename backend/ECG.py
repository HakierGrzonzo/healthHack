import pandas as pd
import numpy as np
import math
import json 
import os
import time
from sklearn.neighbors import KNeighborsClassifier

class Data:
    arrayOfLeads = ['leadI', 'leadII', 'leadIII', 'AVR', 'AVL', 'AVF']
    folders = []
    measurementTuple = []
    dataFrameMeasurementTuple = []
    folderCodeDict = {}
    allCodes = set()
    codeAndDataDict = {}
    neigh = KNeighborsClassifier(n_neighbors=3, weights='distance', algorithm='auto', leaf_size=30, p=2, metric='minkowski')

class ProcessingData:
    @staticmethod
    def getLeadsAsDF(leads, dataFromDF):
        leadsAsDF = []
        for lead in leads:
            if lead in dataFromDF['samples']:
                leadsAsDF.append(dataFromDF['samples'][lead][5000:8000])
            else:
                return None
        return leadsAsDF

    @classmethod
    def getLeadAsDF(cls, folderName, fileName):
        with open(F"hackathon-alivecors/{folderName}/ecg/{fileName}") as f:
            data = f.readlines()
        parsedAsJson = [json.loads(line) for line in data]
        df = pd.DataFrame(parsedAsJson)
        dataFromDF = df['data'][0]['enhanced']
    
        leadsDF = cls.getLeadsAsDF(Data.arrayOfLeads, dataFromDF)
        if leadsDF is None:
            return None
        leadsDF = pd.DataFrame(leadsDF)
        leadsDF = leadsDF.transpose()
        leadsDF.columns = Data.arrayOfLeads
        return leadsDF

    @staticmethod
    # save all folder names from /hackathon-alivecors/ to measurements array
    def readMeasurements():
        measurements = []
        for measurement in os.listdir('hackathon-alivecors/'):
            if (F'hackathon-alivecors/{measurement}/dg.txt') is not None:
                measurements.append(measurement)
        return measurements

    @staticmethod
    def getTxtFilesFromMeasurementFolder(measurement):
    # for each measurement folder get all txt files and save them to array 
        txtFiles = []
        if os.path.exists('hackathon-alivecors/' + measurement + '/ecg/'):
            for file in os.listdir('hackathon-alivecors/' + measurement + '/ecg/'):
                if file.endswith('.txt'):
                    txtFiles.append(file)
            return txtFiles

    @staticmethod
    def createTupleWithMeasurement(measurement, x):
        return (measurement, x)

    @classmethod
    def getLeadsAsDFForAllTxtFiles(cls, measurementTuple):
        for measurement in measurementTuple:
            if measurement[1] is not None:
                for file in measurement[1]:
                    temp = cls.getLeadAsDF(measurement[0], file)
                    if temp is not None:
                        Data.dataFrameMeasurementTuple.append(cls.createTupleWithMeasurement(measurement[0],temp))
    
    @staticmethod
    def cleanFolderCodeDict(folderCodeDict):
        for key in list(folderCodeDict):
            if not folderCodeDict[key]:
                del folderCodeDict[key]

    @staticmethod
    def changeFolderCodeDictToNotDiagnosed(folderCodeDict):
        for key in folderCodeDict:
            if not folderCodeDict[key]:
                folderCodeDict[key] = set()
                folderCodeDict[key].add("NotDiagnosed")

    @staticmethod
    def folderNameToCodeDict(folders):
        for key in folders:
            if key == '.DS_Store':
                continue
            diags = set()
            if os.path.exists('hackathon-alivecors/' + key + '/dg.txt'):
                with open(F"hackathon-alivecors/{key}/dg.txt", "rb") as f:
                    text = f.read().decode("windows-1250")
                    text = text.split('"')
                    for i in range(len(text)):
                        if text[i].startswith("R00.2") or text[i].startswith("I"):
                            if text[i].find(":") != -1:
                                diags.add(text[i].split(":")[0])
                                Data.allCodes.add(text[i].split(":")[0])
                Data.folderCodeDict[key] = diags

    @staticmethod
    # iterate over folderCodeDict and add diagnosis to dataFrameMeasurementTuple
    def convertTupleToDict(dataFrameMeasurementTuple, folderCodeDict):
        for measurement in dataFrameMeasurementTuple:
            if measurement[0] in folderCodeDict:
                for x in folderCodeDict[measurement[0]]:
                    if x in Data.codeAndDataDict:
                        Data.codeAndDataDict[x].append(measurement[1])
                    else:
                        Data.codeAndDataDict[x] = []
                        Data.codeAndDataDict[x].append(measurement[1])

    @staticmethod
    def createInput(codeAndDataDict):
        numberArray = []
        inputArray = []
        advancedInputArray = []
        for key in codeAndDataDict:
            for data in codeAndDataDict[key]:
                advancedInputArray.append(data)
                flatten = data.values.flatten()
                reshaped = np.reshape(flatten, (1, -1))
                array = reshaped.tolist()
                if len(array[0]) != 18000:
                    break
                inputArray.append(array[0])
                numberArray.append(key)
        return advancedInputArray, inputArray, numberArray


def createECGModel():
    Data.folders = ProcessingData.readMeasurements()

    for measurement in Data.folders:
        Data.measurementTuple.append(ProcessingData.createTupleWithMeasurement(measurement, ProcessingData.getTxtFilesFromMeasurementFolder(measurement)))
    
    ProcessingData.getLeadsAsDFForAllTxtFiles(Data.measurementTuple)

    ProcessingData.folderNameToCodeDict(Data.folders)

    ProcessingData.changeFolderCodeDictToNotDiagnosed(Data.folderCodeDict)

    ProcessingData.convertTupleToDict(Data.dataFrameMeasurementTuple, Data.folderCodeDict)
    
    advancedInputArray, inputArray, numberArray = ProcessingData.createInput(Data.codeAndDataDict)

    Data.neigh.fit(inputArray, numberArray)



def getDiagnose(fileAsStr):
    parsedAsJson = json.loads(fileAsStr)
    df = pd.DataFrame(parsedAsJson)
    # print(df['data'].keys())
    dataFromDF = df['data']['enhanced']

    leadsDF = ProcessingData.getLeadsAsDF(Data.arrayOfLeads, dataFromDF)
    if leadsDF is None:
        return None
    leadsDF = pd.DataFrame(leadsDF)
    leadsDF = leadsDF.transpose()
    leadsDF.columns = Data.arrayOfLeads

    flatten = leadsDF.values.flatten()
    reshaped = np.reshape(flatten, (1, -1))
    array = reshaped.tolist()
    if len(array[0]) != 18000:
        return None
    return Data.neigh.predict(array)[0]
