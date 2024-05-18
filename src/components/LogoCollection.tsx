import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

const whiteLogos = [
 "https://logo.clearbit.com/hyatt.com",
 "https://logo.clearbit.com/kerzner.com",
 "https://logo.clearbit.com/velaaprivateisland.com",
 "https://logo.clearbit.com/so-hotels.com",
];

const darkLogos = [
 "https://logo.clearbit.com/hyatt.com  ",
 "https://logo.clearbit.com/kerzner.com",
 "https://logo.clearbit.com/velaaprivateisland.com",
 "https://logo.clearbit.com/so-hotels.com",
];

const logoStyle = {
 width: "auto",
 height: "30 px",
 padding: "30px",
 filter: "grayscale(1)",
 opacity: 0.8,
 alignSelf: "center",
};

export default function LogoCollection() {
 const theme = useTheme();
 const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

 return (
  <Box id="logoCollection" sx={{ py: 4 }}>
   <Typography component="p" variant="subtitle2" align="center" color="text.secondary">
    Trusted by the best companies
   </Typography>
   <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
    {logos.map((logo, index) => (
     <Grid item key={index}>
      <img src={logo} alt={`Fake company number ${index + 1}`} className="logo" />
     </Grid>
    ))}
   </Grid>
  </Box>
 );
}
