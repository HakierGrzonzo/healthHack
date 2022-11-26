import { ScreenLockLandscapeTwoTone } from "@mui/icons-material";
import {
  CircularProgress,
  Box,
  Typography,
  Card,
  CardContent,
  Alert,
  AlertTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  ErrorBoundaryComponent,
  json,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
  useTransition,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import ConditionCard from "~/components/ConditionCard";
import { Condition } from "~/Condition";
import {
  fhirConditionClient,
  fhirObservationClient,
  fhirPatientClient,
} from "~/fhir";
import { Observation } from "~/Observation";
import { Patient } from "~/Patient";
import { group } from "~/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
  const patient = await fhirPatientClient.patient.getPatient1(params.patientID);
  const conditions = await fhirConditionClient.condition.getCondition(
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
    params.patientID
  );
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
    params.patientID
  );
  return json({
    patient: JSON.parse(patient),
    observations: JSON.parse(observations).entry.map((e) => e.resource),
    conditions: JSON.parse(conditions).entry.map((e) => e.resource),
  });
};

interface IData {
  patient: Patient;
  observations: Observation[];
  conditions: Condition[];
}

export const meta: MetaFunction = ({ data }) => ({
  title: `Patient statistics for ${data.patient.name.at(0).given}`,
});

export default function () {
  const { patient, observations, conditions }: IData = useLoaderData();
  const transition = useTransition();
  const { observationType } = useParams();
  const [selectedGroup, setSelectedGroup] = useState<string | null>(
    observationType ?? null
  );
  const navigate = useNavigate();
  useEffect(() => {
    observationType && setSelectedGroup(observationType);
  }, [observationType]);
  const handleSelectChange = (v: string) => {
    setSelectedGroup(v);
    navigate(v);
  };
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

  const name = patient?.name?.at(0);
  const address = patient?.address?.at(0);
  const socialSecurity = patient.identifier?.find(
    (i) => i.type?.coding?.at(0)?.code === "SS"
  );

  const observationGroups = group(
    observations.filter((o) => o.valueQuantity),
    (o) => o.code.coding[0].code
  );

  return (
    <>
      <Box sx={{ margin: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              {name?.prefix} {name?.given} {name?.family} {name?.suffix}
            </Typography>
            <Typography variant="body1">{address?.line}</Typography>
            <Typography variant="body1">
              {address?.postalCode} {address?.city}, {address?.state},{" "}
              {address?.country}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            {socialSecurity?.type?.coding?.at(0)?.display}:{" "}
            {socialSecurity?.value}
          </CardContent>
        </Card>
        <ConditionCard conditions={conditions} />
      </Box>
      <Card sx={{ margin: 1 }}>
        <CardContent>
          <Typography variant="h6">Observation Graphs</Typography>
          <FormControl sx={{ width: "10cm", marginTop: 1, marginBottom: 1 }}>
            <InputLabel id="my-group-select">Observation type</InputLabel>
            <Select
              labelId="my-group-select"
              label="Observation type"
              value={selectedGroup || ""}
              onChange={(e) => handleSelectChange(e.target.value)}
            >
              {Object.entries(observationGroups).map((entry) => {
                const [code, observations] = entry;
                const name = observations.at(0).code.text;
                return (
                  <MenuItem value={code} key={code}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Divider />
          <Box sx={{ marginTop: 1 }}>
            <Outlet />
          </Box>
        </CardContent>
      </Card>
    </>
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
