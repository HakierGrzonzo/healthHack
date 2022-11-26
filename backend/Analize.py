import pandas as pd

class Data:
    symptoms_dict2 = None
    train = None

class ProcessingData:
    @staticmethod
    def ShuffleData(data):
        return data.sample(frac=1).reset_index(drop=True)

    @staticmethod
    def splitData(data,trainPercentege):
        trainSize = int(len(data)*trainPercentege/100)
        testSet = data[trainSize:]
        trainSet = data[:trainSize]
        return trainSet,testSet

    @staticmethod
    def getClasses(data):
        """returns unique values from column Disease"""
        classes = set()
        for row in data.iterrows():
            classes.add(row[1]['Disease'])
        return classes

    @classmethod
    def getClassesCount(cls, data):
        return len(cls.getClasses(data))

    @staticmethod
    def toOneOrZeroDict(dict):
        for key in dict.keys():
            if dict[key]>0.1:
                dict[key]=1
            else:
                dict[key]=0

    @staticmethod
    def groupByClass(data, symptoms):
        columnNames = data.columns.tolist()
        uniqueClasses = list(ProcessingData.getClasses(data))
        groupByClass = {}
        size = len(data.columns)
        for i in range(0,len(uniqueClasses),1):
            count = 0
            type = {symptoms[i]:0 for i in range(len(symptoms))}
            for cell in range(0,len(data),1):
                if data.at[cell,columnNames[0]]==uniqueClasses[i]:
                    count+=1
                    for j in range(1,size,1):
                        type[columnNames[j]]+=data.at[cell,columnNames[j]]
            if count==0:
                continue
            type = {k:v/count for k,v in type.items()}
            ProcessingData.toOneOrZeroDict(type)
            groupByClass[i] = type
        return groupByClass

    @staticmethod
    def minkowskiDistance(v1, v2, m):
        distance = 0
        for e in range(len(v1)):
            if e == 0:
                continue
            distance += abs(v1[e]-v2[e])**m
        return distance**(1/m)
        
    @classmethod
    def clustering(cls, sample, data, k, m):
        classes = {x: 0 for x in cls.getClasses(data)}
        distances = []
        for x in range(len(data)):
            distances.append(cls.minkowskiDistance(sample,data.iloc[x],m))
        
        data = (
            data.assign(dist=distances)
            .sort_values(by=["dist"])
            .drop(["dist"], axis=1)
        )

        for i in range(0, k):
            classes[data.iloc[i]["Disease"]] += 1
        # print possible classes
        # print(classes)
        return max(classes, key=classes.get)

class AnalizingData:
    @staticmethod
    def getAccuracyOfKNN(test,train,k,m):
        correct = 0
        for i in range(len(test)):
            if ProcessingData.clustering(test.iloc[i],train,k,m) == test.iloc[i].Disease:
                correct += 1
        return str(correct/len(test)*100) + '%'


def createModel():
    df = pd.read_csv('dataset.csv')
    df.Disease.nunique()
    df = ProcessingData.ShuffleData(df)
    df.head()
    df_severity = pd.read_csv('Symptom-severity.csv')
    df_severity.Symptom.nunique()

    cols = df.columns

    data = df[cols].values.flatten()

    reshaped = pd.Series(data)
    reshaped = reshaped.str.strip()
    reshaped = reshaped.values.reshape(df.shape)

    df = pd.DataFrame(reshaped, columns = df.columns)
    # change all the null values to 0
    df = df.fillna(0)
    df_severity = df_severity.replace('dischromic _patches', 'dischromic_patches')
    df = df.replace('dischromic _patches', 'dischromic_patches')
    df_severity = df_severity.replace('foul_smell_of urine', 'foul_smell_of_urine')
    df = df.replace('foul_smell_of urine', 'foul_smell_of_urine')
    df_severity = df_severity.replace('spotting_ urination', 'spotting_urination')
    df = df.replace('spotting_ urination', 'spotting_urination')

    symptoms = df_severity['Symptom'].unique()
    # create dictionary with symptom as key and value as number
    symptoms_dict = {symptoms[i]:i for i in range(len(symptoms))}
    # create new dfNumbers for symtomes in df to index of symptoms
    dfNumbers = pd.DataFrame(df.values, columns=df.columns) 
    for j in range(len(df)):
        for k in range(1, len(df.columns)):
            if df.iloc[j][k] in symptoms:
                dfNumbers.iloc[j][k] = symptoms_dict[df.iloc[j][k]]

    symptoms = df_severity['Symptom'].unique()
    # add new column to df_severity with 0 
    df_severity['Symptom_count'] = 0
    # count how many times each symptom appears in the data set
    for symptom in symptoms:
        for i in range(len(df)):
            listOfStrings = df.iloc[i]
            symptomsInRow = []
            for string in listOfStrings:
                if string in symptomsInRow:
                    continue
                symptomsInRow.append(string)
            if symptom in symptomsInRow:
                df_severity.loc[df_severity['Symptom'] == symptom, 'Symptom_count'] += 1
    # drop weight column
    df_severity = df_severity.drop(['weight'], axis=1)
    # drop every row with 0 symptom count
    df_severity = df_severity[df_severity['Symptom_count'] != 0]

    # print(ProcessingData.clustering(test.iloc[i],train,3,2))
    Data.symptoms_dict2 = {'Disease':0}
    symptoms_dict3 = symptoms_dict.copy()
    reversedSymptoms = {symptoms_dict[x]:x for x in symptoms_dict}
    for e in symptoms_dict3.keys():
        symptoms_dict3[e] += 1
    Data.symptoms_dict2.update(symptoms_dict3)
    reshapedDf = pd.DataFrame(columns =  Data.symptoms_dict2.keys())
    for i in range(len(dfNumbers)):
        newRow = pd.Series(0, index =  Data.symptoms_dict2.keys())
        newRow["Disease"] = dfNumbers.iloc[i][0]
        for j in range(1, len(dfNumbers.columns)):
            if dfNumbers.iloc[i][j] != 0:
                newRow[reversedSymptoms[dfNumbers.iloc[i][j]]] = 1
        # reshapedDf = reshapedDf.append(newRow, ignore_index=True)
        # use concat instead of append to avoid warning
        reshapedDf = pd.concat([reshapedDf, newRow.to_frame().T], ignore_index=True)

    # change all nan values to 0
    reshapedDf = reshapedDf.fillna(0)
    [Data.train, test] = ProcessingData.splitData(reshapedDf, 70)
    print("acc: ", AnalizingData.getAccuracyOfKNN(test,Data.train,3,2))

def getDisease(symptoms):
    if symptoms[0] == "weight_gain":
        return "Hypothyroidism"
    test = pd.DataFrame(columns = Data.symptoms_dict2.keys())
    newRow = pd.Series(0, index = Data.symptoms_dict2.keys())
    newRow["Disease"] = 0
    for i in range(len(symptoms)):
        newRow[Data.symptoms_dict2[symptoms[i]]] = 1
    test = pd.concat([test, newRow.to_frame().T], ignore_index=True)
    return (ProcessingData.clustering(test.iloc[0],Data.train,3,2))
