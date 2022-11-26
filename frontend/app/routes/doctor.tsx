import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { json, LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useMatches } from "@remix-run/react";
import { useState } from "react";
import { loaderPocketBase } from "~/pocketbase";

export const loader: LoaderFunction = async ({ request }) => {
  const pb = loaderPocketBase(request);
  return json({ user: pb.authStore.baseModel });
};

const routes: { name: string; to: string }[] = [
  { name: "Dashboard", to: "/doctor" },
  { name: "My Patients", to: "/doctor/my" },
  { name: "Patient alerts", to: "/doctor/alerts" },
  { name: "logout", to: "/login" },
];

export default function Index() {
  const { user } = useLoaderData();
  const theme = useTheme();
  const matches = useMatches();
  const matchCandidate = matches
    .filter((m) => routes.map((r) => r.to).includes(m.pathname))
    .at(-1);
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
            <Typography variant="h6">NeuraHeart</Typography>
          </Box>
          <Typography variant="h6">
            {routes.find((r) => matchCandidate?.pathname === r.to)?.name}
          </Typography>
          <Typography>Welcome back {user.name}</Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "calc(100vh - 64px)",
        }}
      >
        <Box
          sx={{
            width: menuOpen ? "5cm" : "0cm",
            overflow: "visible",
            transition: "all 500ms",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            translate: menuOpen ? "0cm" : "-5cm",
          }}
        >
          <List sx={{ width: "5cm" }} component="nav">
            {routes.map((route) => {
              const isSelected = matchCandidate?.pathname === route.to;
              return (
                <Link
                  to={route.to}
                  key={route.to}
                  style={{
                    color: isSelected
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                    textDecoration: "none",
                  }}
                >
                  <ListItemButton selected={isSelected}>
                    <ListItemText>{route.name}</ListItemText>
                  </ListItemButton>
                </Link>
              );
            })}
          </List>
          <Box sx={{ padding: 1, width: "5cm" }}>
            <img
              src="https://grzegorzkoperwas.site/transfer/logoh.png"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            height: "calc(100vh - 64px - 16px)",
            margin: 1,
          }}
        >
          <Box sx={{
            overflowY: "auto",
            overflowX: "hidden",
            height: "calc(100vh - 64px - 16px - 1cm)"
            }}>
            <Outlet />
          </Box>
          <Box sx={{height: '1cm', display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="caption">
              <Link to="/support" style={{color: theme.palette.grey[600]}}>Support</Link>{" "}
              <a href="https://github.com/HakierGrzonzo/healthHack" style={{color: theme.palette.grey[600]}}>Github</a>
            </Typography>
            <Typography variant="caption" color={theme.palette.grey[600]}><strong>NOT FIT FOR MEDICAL USE</strong></Typography>
            <Typography variant="caption" color={theme.palette.grey[600]}>Copyright 2022 <code>[object Object]</code> for EHH 2022</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
