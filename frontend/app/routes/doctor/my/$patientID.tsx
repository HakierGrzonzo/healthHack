import { CircularProgress, Box } from "@mui/material";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useTransition } from "@remix-run/react";
import { loaderPocketBase } from "~/pocketbase";

export const loader: LoaderFunction = async ({ request, params }) => {
  const pb = loaderPocketBase(request);
  const patient = await pb.collection("patients").getOne(params.patientID);
  return json(patient);
};

export default function () {
  const patient = useLoaderData();
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
  return (
    <p>
      {patient.name}, {transition.state}
    </p>
  );
}
