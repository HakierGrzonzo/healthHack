import {
  Box,
  Typography,
  Card,
  CardContent,
  Alert,
  AlertTitle,
  Divider,
  Tabs,
  Tab,
} from "@mui/material";
import {
  ErrorBoundaryComponent,
  json,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Outlet,
  Link,
  useLoaderData,
  useTransition,
  useMatches,
} from "@remix-run/react";
import Loader from "~/components/Loader";
import { fhirPatientClient } from "~/fhir";
import { Patient } from "~/Patient";

export const loader: LoaderFunction = async ({ params }) => {
  const patient = await fhirPatientClient.patient.getPatient1(params.patientID);
  return json({
    patient: JSON.parse(patient),
  });
};

interface IData {
  patient: Patient;
}

export const meta: MetaFunction = ({ data }) => ({
  title: `Patient statistics for ${data.patient.name.at(0).given}`,
});

export default function () {
  const { patient }: IData = useLoaderData();
  const transition = useTransition();

  if (transition.state === "loading") {
    return <Loader />;
  }

  const name = patient?.name?.at(0);
  const socialSecurity = patient.identifier?.find(
    (i) => i.type?.coding?.at(0)?.code === "SS"
  );
  const routes = [
    {
      label: "Patient Details",
      value: "routes/doctor/my/$patientID",
      to: ".",
    },
    {
      label: "Observation Graphs",
      value: "routes/doctor/my/$patientID/observation",
      to: "observation",
    },
    {
      label: "Patient history",
      value: "routes/doctor/my/$patientID/history",
      to: "history",
    },
  ];
  const matches = useMatches()
    .map((m) => m.id)
    .filter((m) => routes.map((r) => r.value).includes(m));

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
      <Card sx={{ margin: 1 }}>
        <CardContent>
          <Typography variant="h6">
            {name?.prefix} {name?.given} {name?.family} {name?.suffix}
          </Typography>
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          <Typography variant="body1">
            <strong>{socialSecurity?.type?.coding?.at(0)?.display}</strong>{" "}
            {socialSecurity?.value}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ margin: 1, flex: 1 }}>
        <CardContent>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs value={matches.at(-1)}>
              {routes.map((r) => (
                <Tab key={r.value} {...r} component={Link} />
              ))}
            </Tabs>
          </Box>
          <Outlet />
        </CardContent>
      </Card>
    </Box>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <Alert severity="error" sx={{ margin: 5, width: "calc(100vw - 10cm)" }}>
      <AlertTitle>An unexpected error has occured!</AlertTitle>
      <code>
        {error.name} - {error.message}
      </code>
      <pre>{error.stack}</pre>
    </Alert>
  );
};
