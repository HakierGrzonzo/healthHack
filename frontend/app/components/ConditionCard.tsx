import { Typography, Card, CardContent, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Condition } from "~/Condition";

const COLUMN_DEFS: GridColDef[] = [
  {
    field: "onsetDateTime",
    headerName: "Onset Date",
    width: 120,
  },
  {
    field: "name",
    headerName: "Type",
    width: 200,
  },
];

export default function ConditionCard(props: { conditions: Condition[] }) {
  const { conditions } = props;
  const dateFormater = Intl.DateTimeFormat("en", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Patient History</Typography>
        <Box
          sx={{
            height: "10cm",
          }}
        >
          <DataGrid
            rows={conditions
              .sort((a, b) => {
                return (
                  new Date(b.onsetDateTime).valueOf() -
                  new Date(a.onsetDateTime).valueOf()
                );
              })
              .map((c) => ({
                onsetDateTime: dateFormater.format(new Date(c.onsetDateTime)),
                name: c.code.text,
                id: c.id,
              }))}
            columns={COLUMN_DEFS}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
