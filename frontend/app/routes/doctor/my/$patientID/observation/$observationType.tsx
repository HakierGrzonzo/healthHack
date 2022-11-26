import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useTransition } from "@remix-run/react";
import { fhirObservationClient } from "~/fhir";
import { Observation } from "~/Observation";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Box, CircularProgress } from "@mui/material";

export const loader: LoaderFunction = async ({ request, params }) => {
  const observations = await fhirObservationClient.observation.getObservation(
    undefined,
    undefined,
    params.observationType,
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
  return json(JSON.parse(observations).entry.map((o) => o.resource));
};

export default function () {
  const observations: Observation[] = useLoaderData();
  const name = observations.at(0)?.code?.text;
  const unit = observations.at(0)?.valueQuantity?.unit;
  const trainsition = useTransition();
  if (trainsition.state === "loading") {
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
  const options = {
    chart: {
      zoomType: "x",
      animation: true
    },
    title: {
      text: name,
    },
    series: [
      {
        name,
        data: observations.map((o) => ({
          x: new Date(o.issued),
          y: o.valueQuantity?.value,
        })),
      },
    ],
    xAxis: { type: "datetime" },
    yAxis: { title: { text: `${name} [${unit}]` } },
  };
  return (
    <Box>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}
