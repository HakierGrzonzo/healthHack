import { CircularProgress, Box, Typography, Card, CardContent } from "@mui/material";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useTransition } from "@remix-run/react";
import { fhirObservationClient, fhirPatientClient } from "~/fhir";
import { Patient } from "~/Patient";

export const loader: LoaderFunction = async ({ request, params }) => {
  const patient = await fhirPatientClient.patient.getPatient1(params.patientID)
  const observations = await fhirObservationClient.observation.getObservation(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined, 
    undefined,
    undefined,
    undefined,
    undefined,
    undefined, 
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined, 
    undefined,
    undefined,
    undefined, 
    params.patientID,
  )
  return json({
    patient: JSON.parse(patient), 
    observations: JSON.parse(observations).entry.map(e=> e.resource)
  });
};

export default function () {
  const {patient, observations}: {patient: Patient, observations: Observation[]} = useLoaderData();
  console.log(observations)
  const transition = useTransition();
  if (transition.state === "loading") {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "4cm",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const name = patient?.name?.at(0)
  const address = patient?.address?.at(0)
  const socialSecurity = patient.identifier?.find(i => i.type?.coding?.at(0)?.code === "SS")

  return (
    <Box sx={{marginTop: 1, display: 'flex', flexWrap: 'wrap', gap: 4}}>
      <Card>
        <CardContent>
          <Typography variant="h6">{name?.prefix} {name?.given} {name?.family} {name?.suffix}</Typography>
          <Typography variant="body1">{address?.line}</Typography>
          <Typography variant="body1">{address?.postalCode} {address?.city}, {address?.state}, {address?.country}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          {socialSecurity?.type?.coding?.at(0)?.display}: {socialSecurity?.value}
        </CardContent>
      </Card>
      {observations.map(observation => (
      <Card key={observation.id}>
        <CardContent>
          {observation.code.text} - {observation?.valueQuantity?.value} {observation?.valueQuantity?.unit}
        </CardContent>
      </Card>
      ))}
    </Box>
  );
}
