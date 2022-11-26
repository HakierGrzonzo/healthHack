from os import listdir, path
import json

ROOT = r""

patientsID = []
patientsDiseases = []

allD = []
x = 0
strNumbers = []
for i in range(10):
    strNumbers.append(str(i))

for dir in listdir(ROOT):
    ROOT2 = path.join(ROOT, dir)
    for dir2 in listdir(ROOT2):
        if dir2 == 'ecg':
            with open(path.join(ROOT2,dir2,'strip1.txt')) as strip1:
                data = json.load(strip1)
                patientsID.append(data.get("patientID"))
        diseases = []
        if dir2 == "dg.txt":
            with open(path.join(ROOT2,dir2)) as f:
                data = json.load(f)
                for i in data:
                    if i[1] not in strNumbers:
                        continue
                    diseases.append(i[0:5])
        patientsDiseases.append(diseases)
#print(patientsID)
#print(patientsDiseases)
#for i in range(len(patientsID)):
#    print(patientsID[i])
#    print(patientsDiseases[i])

y = 0
for dir in listdir(ROOT):
    ROOT2 = path.join(ROOT, dir)
    if 'ecg' in listdir(ROOT2):
        allStrips = listdir(path.join(ROOT2, 'ecg'))

        for strip in allStrips:
            print(strip)
