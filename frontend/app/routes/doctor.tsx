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
  { name: "login", to: "/login" },
];

export default function Index() {
  const { user } = useLoaderData();
  const theme = useTheme();
  const matches = useMatches()
  const matchCandidates = matches.filter(m => routes.map(r => r.to).includes(m.pathname))
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
              const isSelected = matchCandidates.at(-1)?.pathname === route.to;
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
            <Typography variant="caption">
              Powered by <strong>Grzes</strong>hosting
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            margin: 1,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
