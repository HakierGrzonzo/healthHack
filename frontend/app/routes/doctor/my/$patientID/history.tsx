import { Alert, AlertTitle, Box, Tooltip, Typography } from "@mui/material";
import { ErrorBoundaryComponent, json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ConditionCard from "~/components/ConditionCard";
import { getSymptoms } from "~/symptomMap";
import { Condition } from "~/Condition";
import { fhirConditionClient } from "~/fhir";
import { SymptomPredictClient } from "~/local";

export const loader: LoaderFunction = async ({ params }) => {
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
  const saneConditions: Condition[] = JSON.parse(conditions).entry.map(
    (e) => e.resource
  );
  const symptoms = getSymptoms(
    saneConditions.map((c) => c.code?.text).filter((v) => v)
  );
  const prediction =
    symptoms.length > 0
      ? await SymptomPredictClient.default.predictPost({
          symptoms,
        })
      : null;

  return json({
    conditions: saneConditions,
    prediction,
  });
};

interface IData {
  conditions: Condition[];
  prediction: string;
}

export default function History() {
  const { conditions, prediction }: IData = useLoaderData();
  return (
    <Box
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {prediction && (
        <Alert severity="info">
          Based on the symptoms that the patient is experiencing, it is highly
          likely that the patient might be suffering from{" "}
          <strong>{prediction}</strong>.
        </Alert>
      )}
      <ConditionCard conditions={conditions} />
    </Box>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <Tooltip title={<code>{error.stack}</code>}>
      <Alert severity="error" sx={{ margin: 1 }}>
        <AlertTitle>Failed to fetch patient history</AlertTitle>
      </Alert>
    </Tooltip>
  );
};
