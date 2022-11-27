import {
  Box,
  Alert,
  Button,
  Typography,
  List,
  CircularProgress,
  ListItem,
  AlertTitle,
} from "@mui/material";
import { ActionFunction, redirect, json } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import {SymptomPredictClient} from "~/local"
import EcgIcon from "~/components/EcgIcon";

const codes = {
  "I48.0": "Paroxysmal atrial fibrillation",
  "I50.0": "Congestive heart failure",
  "I42.8": "Other cardiomyopathies",
  "I49.0": "Ventricular fibrillation and flutter",
  "I47.9": "Paroxysmal tachycardia, unspecified",
  "I15.1": "Hypertension secondary to other renal disorders",
  "I42.1": "Obstructive hypertrophic cardiomyopathy",
  "I49.3": "Ventricular premature depolarization",
  "I47.2": "Ventricular tachycardia",
  "I35.1": "Aortic (valve) insufficiency",
  "I46.0": "Cardiac arrest with successful resuscitation",
  "R00.2": "Palpitations",
  "I48.3": "Typical atrial flutter",
  "I10": "Essential (primary) hypertension",
  "I49.1": "Atrial premature depolarization",
  "I44.1": "Atrioventricular block, second degree",
  "I50.1": "Left ventricular failure",
  "I35.0": "Aortic (valve) stenosis",
  "I42.2": "Other hypertrophic cardiomyopathy",
  "I49.9": "Cardiac arrhythmia, unspecified",
  "I47.1": "Supraventricular tachycardia",
  "NotDiagnosed": "Not diagnosed any heart disease",
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const file: File = formData.get("file");
  const text = await file.text();
  const response = await SymptomPredictClient.default.predictEcgPost({
    file_content: text,
  })
  return json(response)
};

export default function Ecg() {
  const transition = useTransition();
  const actionMsg = useActionData();
  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <Box sx={{ maxWidth: "20cm" }}>
        <EcgIcon />
          <List>
            <ListItem>Here you can send ECG file to our server for analysis</ListItem>
            <ListItem>After analysis you will be able to see the results</ListItem>
            <ListItem>
              You will see code and description of the disease that is most
              likely to be diagnosed
            </ListItem>
            <ListItem>
              If you have any information beside "Not diagnosed any heart
              disease" please contact your doctor
            </ListItem>
            <ListItem>More files you send, more accurate results you will get</ListItem>
          </List>
        <Form encType="multipart/form-data" method="post">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {transition.state !== "submitting" ? (
              <Button component="label">
                Upload File
                <input id="file" name="file" type="file" hidden />
              </Button>
            ) : (
                <CircularProgress />
            )}
            <Button type="submit" disabled={transition.state === "submitting"}>
              Submit
            </Button>
          </Box>
        </Form>

        {actionMsg && (
          <Alert severity="success">
            <AlertTitle>Succesfully analyzed the data</AlertTitle>
            Suspected condition: {actionMsg} - {codes[actionMsg] ?? ""}
          </Alert>
        )}
      </Box>
    </Box>
  );
}
