import { ConditionClient } from "./Condition";
import { ObservationClient } from "./Observation";
import { PatientClient } from "./Patient";

const config = {
  HEADERS: {
    "x-api-key": "A9gjcnI9EE39nWnXtPqBe6hQNQ0jn70n4R7FPSAe",
  },
};

export const fhirPatientClient = new PatientClient(config);

export const fhirObservationClient = new ObservationClient(config);

export const fhirConditionClient = new ConditionClient(config);
