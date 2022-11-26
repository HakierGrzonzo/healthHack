import { Box, Tooltip, Typography } from "@mui/material";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fhirPatientClient } from "~/fhir";
import { Patient } from "~/Patient";
export const loader: LoaderFunction = async ({ params }) => {
  const patient = await fhirPatientClient.patient.getPatient1(params.patientID);
  return json({
    patient: JSON.parse(patient),
  });
};

export default function PatientDetails() {
  const patient: Patient = useLoaderData().patient;
  const address = patient?.address?.at(0);
  return (
    <Box
      sx={{
        marginTop: 1,
        display: "flex",
        gap: 6,
      }}
    >
      <Box>
        <Typography variant="h6">Address:</Typography>
        <Typography variant="body1">{address?.line}</Typography>
        <Typography variant="body1">
          {address?.postalCode} {address?.city}, {address?.state},{" "}
          {address?.country}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Contact Details:</Typography>
        {patient.telecom.map((t) => (
          <Typography key={t.id}>
            <strong>{t.system}</strong>{" "}
            <Tooltip title={t.use}>
              <span>{t.value}</span>
            </Tooltip>
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
