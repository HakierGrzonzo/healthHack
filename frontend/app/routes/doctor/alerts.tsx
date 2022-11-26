import {
  Alert,
  Box,
  Button,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { differenceInYears } from "date-fns";
import { fhirPatientClient } from "~/fhir";
import { Patient } from "~/Patient";

export const loader: LoaderFunction = async ({ request }) => {
  const patients = await fhirPatientClient.patient.getPatient();
  return json(
    JSON.parse(patients)
      .entry.map((e) => e.resource)
      .slice(0, 10)
  );
};

export default function () {
  const patients: Patient[] = useLoaderData();
  const navigate = useNavigate();
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((p) => (
              <TableRow key={p.id}>
                <TableCell>
                  {p?.name?.at(0)?.given} {p?.name?.at(0)?.family}
                </TableCell>
                <TableCell>
                  {differenceInYears(new Date(), new Date(p.birthDate))}
                </TableCell>
                <TableCell>
                  <Alert sx={{}} severity="warning">
                    Patient outlook might have deteriorated
                  </Alert>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => navigate(`/doctor/my/${p.id}`)}
                    variant="contained"
                  >
                    Go to patient analysis
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
