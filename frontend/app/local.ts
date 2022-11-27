import { SymptomClient } from "~/SymptomAI";

export const SymptomPredictClient = new SymptomClient({
  BASE: process.env.PREDICT ?? "http://127.0.0.1:8000",
});
