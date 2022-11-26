import {
  Alert,
  Button,
  Card,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";
import { ActionFunction, json, MetaFunction, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { usePocketBase } from "~/pocketbase";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  try {
    const pb = usePocketBase();
    await pb
      .collection("users")
      .authWithPassword(formData.get("email"), formData.get("password"));
    return redirect("/doctor", {
      headers: {
        "Set-Cookie": pb.authStore.exportToCookie(),
      },
    });
  } catch {
    return json({ msg: "Wrong email or password" });
  }
};

export const meta: MetaFunction = () => {
  return { title: "Hello to NeuraHeart" };
};

export default function Login() {
  const transition = useTransition();
  const actionMsg = useActionData();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form method="post">
          <Card
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "50vw",
            }}
          >
            <img src="https://grzegorzkoperwas.site/transfer/logoh.png" />
            <Typography variant="subtitle1">Welcome to NeuraHeart</Typography>
            {actionMsg && <Alert severity="error">{actionMsg.msg}</Alert>}
            {transition.state !== "submitting" ? (
              <>
                <TextField name="email" type="email" id="email" label="email" />
                <TextField
                  name="password"
                  type="password"
                  id="password"
                  label="password"
                />
              </>
            ) : (
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
            )}
            <Button type="submit" disabled={transition.state === "submitting"}>
              Submit
            </Button>
          </Card>
        </Form>
      </Box>
    </Box>
  );
}
