import { FormControl, InputLabel, MenuItem, Box, Select } from "@mui/material";
import { json, LoaderFunction } from "@remix-run/node";
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { fhirObservationClient } from "~/fhir";
import { Observation } from "~/Observation";
import { group } from "~/utils";

export const loader: LoaderFunction = async ({ params }) => {
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
    observations: JSON.parse(observations).entry.map((e) => e.resource),
  });
};

export default function Observation() {
  const observations: Observation[] = useLoaderData().observations;

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
  const observationGroups = group(
    observations.filter((o) => o.valueQuantity),
    (o) => o.code.coding[0].code
  );

  return (
    <Box sx={{marginTop: 3}}>
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
      <Outlet />
    </Box>
  );
}
