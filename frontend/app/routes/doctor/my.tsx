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
import { loaderPocketBase } from "~/pocketbase";

export const loader: LoaderFunction = async ({ request }) => {
  const pb = loaderPocketBase(request);
  const patients = await pb.collection("patients").getFullList(200, {
    filter: `doctor = "${pb.authStore.baseModel.id}"`,
  });
  return json(patients);
};

interface IPatient {
  name: string;
  id: string;
  doctor: string;
}

export const meta: MetaFunction = () => {
  return { title: "My Patients" };
};

export default function () {
  const patients: IPatient[] = useLoaderData();
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
  const handleSelectChange = (patient: IPatient) => {
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
          onChange={(e) => handleSelectChange(e.target.value as IPatient)}
        >
          {patients.map((patient) => (
            <MenuItem value={patient} key={patient.id}>
              {patient.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Divider />
      <Outlet />
    </Box>
  );
}
