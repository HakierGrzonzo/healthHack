import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Alert,
  Button,
  Typography,
  List,
  CircularProgress,
} from "@mui/material";
import { ActionFunction, redirect, json } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import EcgIcon from "~/components/EcgIcon";
import { loaderPocketBase, usePocketBase } from "~/pocketbase";

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
  const data = {
    strip: text,
  };
  try {
    const pb = loaderPocketBase(request);
    await pb.collection("stripes").create(data);
    return null;
  } catch {
    return json({ msg: "something went wrong" });
  }
};

export default function Ecg() {
  const transition = useTransition();
  const actionMsg = useActionData();
  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <Box sx={{ maxWidth: "20cm" }}>
        <EcgIcon />
        <Typography variant="body1">
          <ul>
            <li>Here you can send ECG file to our server for analysis</li>
            <li>After analysis you will be able to see the results</li>
            <li>
              You will see code and description of the disease that is most
              likely to be diagnosed
            </li>
            <li>
              If you have any information beside "Not diagnosed any heart
              disease" please contact your doctor
            </li>
            <li>More files you send, more accurate results you will get</li>
          </ul>
        </Typography>
        <Form encType="multipart/form-data" method="post">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {actionMsg && <Alert severity="error">{actionMsg.msg}</Alert>}
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

        <Typography variant="h5">Results</Typography>
        <List>
          <li>
            <Typography variant="body1">I48.0</Typography>
            <Typography variant="body1">
              Paroxysmal atrial fibrillation
            </Typography>
          </li>
        </List>
      </Box>
      <Box sx={{ maxWidth: "20cm" }}>tu będzie wykres jak będzie czas</Box>
    </Box>
  );
}
