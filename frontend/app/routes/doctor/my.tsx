import {
  MenuItem,
  Select,
  Box,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Outlet,
  useLoaderData,
  useParams,
  useNavigate,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { fhirPatientClient } from "~/fhir";
import { Patient } from "~/Patient";

export const loader: LoaderFunction = async ({ request }) => {
  const patients = await fhirPatientClient.patient.getPatient();
  return json(JSON.parse(patients).entry.map((e) => e.resource));
};

export const meta: MetaFunction = () => {
  return { title: "My Patients" };
};

export default function () {
  const patients: Patient[] = useLoaderData();
  const { patientID } = useParams();
  const [currentPatient, setCurrentPatient] = useState<string | null>(
    patientID ?? null
  );
  useEffect(() => {
    // Always make sure the url matches the selection
    patientID && setCurrentPatient(patientID);
  }, [patientID]);
  const navigate = useNavigate();
  const handleSelectChange = (patient: Patient) => {
    // The select value will be extracted from the url
    navigate(`./${patient.id}`);
  };
  return (
    <Box sx={{ marginTop: 1 }}>
      <FormControl sx={{ width: "8cm", margin: 1 }}>
        <InputLabel id="my-patient-select">Patient</InputLabel>
        <Select
          labelId="my-patient-select"
          label="Patient"
          value={patients.find((p) => p.id === currentPatient) ?? ""}
          onChange={(e) => handleSelectChange(e.target.value as Patient)}
        >
          {patients.map((patient) => (
            <MenuItem value={patient} key={patient.id}>
              {patient.name[0].given}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Divider />
      <Outlet />
    </Box>
  );
}
