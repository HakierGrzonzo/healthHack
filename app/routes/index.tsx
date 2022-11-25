import { Card } from "@mui/material";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { loaderPocketBase } from "~/pocketbase";

export const loader: LoaderFunction = async ({ request }) => {
  const pb = loaderPocketBase(request);
  return json(pb.authStore.baseModel);
};

export default function Index() {
  const data = useLoaderData();
  return <Card>Hello {data.email}!</Card>;
}
