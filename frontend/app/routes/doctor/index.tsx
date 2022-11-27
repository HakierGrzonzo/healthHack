import { Box, Typography } from "@mui/material";

export default function Doctor() {
  return (
    <Box sx={{display: "flex", justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Box sx={{maxWidth: "20cm"}}>
      <img style={{maxHeight: '3cm', width: 'auto', marginBottom: "1cm"}} src="https://grzegorzkoperwas.site/transfer/logoh.png"/>
      <Typography variant="body1">
        Based on the reported patient vital we provide diagnosis suggestions and 
        risk assesments for many hearth conditions.
      </Typography>
      </Box>
    </Box>
  )
}
