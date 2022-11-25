import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { json, LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { useState } from "react";
import { loaderPocketBase } from "~/pocketbase";

export const loader: LoaderFunction = async ({ request }) => {
  const pb = loaderPocketBase(request);
  return json({ user: pb.authStore.baseModel });
};

const routes: { name: string; to: string }[] = [
  { name: "index", to: "/doctor" },
  { name: "me", to: "/doctor/me" },
  { name: "login", to: "/login" },
];

export default function Index() {
  const { user } = useLoaderData();
  const { pathname: currentPage } = useLocation();
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  return (
    <Box>
      <AppBar
        sx={{
          position: "static",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">WHIH2</Typography>
          </Box>
          <Typography>Welcome back {user.email}</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: "5cm",
            transition: "all 500ms",
            translate: menuOpen ? "0cm" : "-5cm",
          }}
        >
          <List sx={{ width: "5cm" }} component="nav">
            {routes.map((route) => (
              <Link to={route.to} key={route.to}>
                <ListItemButton selected={currentPage === route.to}>
                  <ListItemText>{route.name}</ListItemText>
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
