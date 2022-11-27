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
  CardActions,
  Button,
  Tooltip,
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
import { differenceInYears } from "date-fns";
import FakeButton from "~/components/FakeButton";
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
    <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start", flexWrap: 'wrap' }}>
      <Box sx={{ margin: 1, display: "flex", gap: 3, flexDirection: "column" }}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              {name?.prefix} {name?.given} {name?.family} {name?.suffix}
            </Typography>
            <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
            <Typography variant="body1">
              <strong>{socialSecurity?.type?.coding?.at(0)?.display}</strong>{" "}
              {socialSecurity?.value}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">Patient information</Typography>
            <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
            <Box
              sx={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 1 }}
            >
              <Typography variant="body1">
                <strong>Age</strong>
              </Typography>
              <Typography variant="body1">
                {differenceInYears(new Date(), new Date(patient.birthDate))}
              </Typography>
              <Typography variant="body1">
                <strong>Birthday</strong>
              </Typography>
              <Typography variant="body1">
                {Intl.DateTimeFormat("en", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(patient.birthDate))}
              </Typography>
              <Typography variant="body1">
                <strong>Marital status</strong>
              </Typography>
              <Typography variant="body1">
                {patient.maritalStatus?.text}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <FakeButton tooltip="Current user has no write permissions" text="Edit"/>
          </CardActions>
        </Card>
        <Card>
          <CardContent sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
            <Typography variant="h6">Patient treatment</Typography>
            <Divider/>
            <FakeButton tooltip="Current user has no note access" text="Patient notes"/>
            <FakeButton tooltip="Current user has no medication access" text="View patient medications"/>
          </CardContent>
        </Card>
      </Box>
      <Card sx={{ margin: 1, flex: 1, minWidth: "10cm" }}>
        <CardContent>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs value={matches.at(-1)} scrollButtons>
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
