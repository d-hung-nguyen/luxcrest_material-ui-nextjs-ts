"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { visuallyHidden } from "@mui/utils";

// import styled from "styled-components";
import { styled } from "@mui/material";
import Image from "next/image";

const StyledBox = styled("div")(({ theme }) => ({
 alignSelf: "center",
 width: "100%",
 height: 400,
 marginTop: theme.spacing(8),
 borderRadius: theme.shape.borderRadius,
 boxShadow:
  theme.palette.mode === "light"
   ? "0 0 12px 8px hsla(220, 25%, 80%, 0.2)"
   : "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
 outline: "1px solid",
 backgroundImage: `url(${theme.palette.mode === "light" ? "/nina3.jpg" : "/nina3.jpg"})`,
 backgroundSize: "cover",
 backgroundPosition: "center",
 outlineColor:
  theme.palette.mode === "light" ? "hsla(220, 25%, 80%, 0.5)" : "hsla(210, 100%, 80%, 0.1)",
 [theme.breakpoints.up("sm")]: {
  marginTop: theme.spacing(10),
  height: 700,
 },
}));

export default function Hero() {
 return (
  <Box
   id="hero"
   sx={(theme) => ({
    width: "100%",
    backgroundImage:
     theme.palette.mode === "light"
      ? "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)"
      : "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
    backgroundRepeat: "no-repeat",
   })}>
   <Container
    sx={{
     display: "flex",
     flexDirection: { xs: "column", sm: "row" },
     alignItems: "center",
     justifyContent: "gap between",
     gap: { xs: 4, sm: 8 },

     pt: { xs: 14, sm: 20 },
     pb: { xs: 8, sm: 12 },
    }}>
    <StyledBox id="image" />
    <Stack spacing={2} alignItems="center" useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
     <Typography variant="h6">Lifestyle and hospitality</Typography>
     <Typography
      component="span"
      variant="h3"
      sx={{
       fontSize: "inherit",

       color: "inherit ",
      }}>
      <Typography
       variant="h3"
       sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column" },

        fontSize: "clamp(2rem, 10vw, 2.5rem)",
       }}>
       Establish a strong foothold in Central Europe
      </Typography>
     </Typography>
     <Typography textAlign="left" color="text.secondary" sx={{ width: { sm: "100%", md: "100%" } }}>
      With our expert consultancy services, marketing collaborations, and top-notch event
      organization, we ensure that your property stands out in the competitive luxury hospitality
      market.
     </Typography>

     <Button variant="outlined" color="primary" fullWidth>
      Get in touch
     </Button>
    </Stack>
   </Container>
  </Box>
 );
}
