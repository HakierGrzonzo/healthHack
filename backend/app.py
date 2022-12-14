from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

from Analize import createModel, getDisease
from ECG import createECGModel, getDiagnose
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    symptoms: List[str]

@app.on_event("startup")
async def startup_event():
    createModel()
    createECGModel()

@app.get('/')
def hello():
    return 'nic tu nie ma :)'

@app.post('/')
def predict(item: Item):
    return getDisease(item.symptoms)

class Fancy(BaseModel):
    file_content: str

@app.post('/ecg')
def predict(json: Fancy):
    return getDiagnose(json.file_content)

