import { json, LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { fhirObservationClient } from "~/fhir"
import { Observation } from "~/Observation"

export const loader: LoaderFunction = async ({request, params}) => {
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
    params.patientID,
  )
  return json(JSON.parse(observations).entry.map(o => o.resource))
}

export default function () {
  const observations: Observation[] = useLoaderData()
  return <div> {observations.map(o => o.valueQuantity?.value).map(v => (<p>{v}</p>))} </div>
}
