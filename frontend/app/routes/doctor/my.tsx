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
  useLocation,
  useNavigate,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { fhirPatientClient } from "~/fhir";
import { Patient } from "~/Patient";

export const loader: LoaderFunction = async ({ request }) => {
  const patients = await fhirPatientClient.patient.getPatient();
  return json(JSON.parse(patients).entry.map(e => e.resource));
};


export const meta: MetaFunction = () => {
  return { title: "My Patients" };
};

export default function () {
  const patients: Patient[] = useLoaderData();
  const [currentPatient, setCurrentPatient] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    // Always make sure the url matches the selection
    const currentPatientID = location.pathname.split("/").at(-1);
    const currentPatient = patients.find((p) => p.id === currentPatientID);
    if (currentPatient && currentPatientID) {
      setCurrentPatient(currentPatientID);
    }
  }, [location, patients, setCurrentPatient]);
  const navigate = useNavigate();
  const handleSelectChange = (patient: Patient) => {
    // The select value will be extracted from the url
    navigate(`./${patient.id}`);
  };
  return (
    <Box>
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
