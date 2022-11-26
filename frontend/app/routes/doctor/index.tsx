import { Box, Typography } from "@mui/material";

export default function Doctor() {
  return (
    <Box sx={{maxWidth: '20cm'}}>
      <img style={{height: '3cm'}} src="https://grzegorzkoperwas.site/transfer/logoh.png"/>
      <Typography variant="body1">
        Based on the reported patient vital we provide diagnosis suggestions and 
        risk assesments for many hearth conditions.
      </Typography>
    </Box>
  )
}
