import { Box, Typography, useTheme } from "@mui/material";

export default function ObservationIndex() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderStyle: "dashed",
        borderWidth: 8,
        height: "10cm",
        padding: 1,
        borderColor: theme.palette.grey[200],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h3" color={theme.palette.grey[200]}>Select graph type</Typography>
    </Box>
  );
}
