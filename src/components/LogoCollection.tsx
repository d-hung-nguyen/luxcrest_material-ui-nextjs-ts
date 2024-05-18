import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import { Padding } from "@mui/icons-material";

const whiteLogos = ["/lc1.svg", "/lc3.svg", "/lc4.svg", "/lc6.svg"];

const darkLogos = ["/lc1.svg", "/lc3.svg", "/lc4.svg", "/lc6.svg"];
const logoStyle = {
 padding: "1rem",
 width: "80px",
 height: "80px",
 opacity: 0.9,
 borderRadius: "50%",
};

export default function LogoCollection() {
 const theme = useTheme();
 const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

 return (
  <Box id="logoCollection">
   <Typography variant="h5" align="center">
    Trusted by partner hotels and resorts
   </Typography>
   <Grid container justifyContent="center">
    {logos.map((logo, index) => (
     <Grid item key={index} style={logoStyle}>
      <Image src={logo} alt={`logo Collection ${index + 1}`} width={70} height={70} />
     </Grid>
    ))}
   </Grid>
  </Box>
 );
}
