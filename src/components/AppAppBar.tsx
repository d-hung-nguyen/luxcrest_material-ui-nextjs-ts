import * as React from "react";
import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ToggleColorMode from "./ToggleColorMode";
import Image from "next/image";

interface AppAppBarProps {
 mode: PaletteMode;
 toggleColorMode: () => void;
}

export default function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
 const [open, setOpen] = React.useState(false);

 const toggleDrawer = (newOpen: boolean) => () => {
  setOpen(newOpen);
 };

 const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  const offset = 128;
  if (sectionElement) {
   const targetScroll = sectionElement.offsetTop - offset;
   sectionElement.scrollIntoView({ behavior: "smooth" });
   window.scrollTo({
    top: targetScroll,
    behavior: "smooth",
   });
   setOpen(false);
  }
 };

 return (
  <AppBar
   position="fixed"
   sx={{
    boxShadow: 0,
    bgcolor: "transparent",
    backgroundImage: "none",
    mt: 2,
   }}>
   <Container maxWidth="lg">
    <Toolbar
     variant="regular"
     sx={(theme) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexShrink: 0,
      borderRadius: "999px",
      bgcolor:
       theme.palette.mode === "light" ? "hsla(220, 60%, 99%, 0.6)" : "hsla(220, 0%, 0%, 0.7)",
      backdropFilter: "blur(24px)",
      maxHeight: 40,
      border: "1px solid",
      borderColor: "divider",
      boxShadow:
       theme.palette.mode === "light"
        ? "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)"
        : "0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)",
     })}>
     <Box
      sx={{
       flexGrow: 1,
       display: "flex",
       alignItems: "center",
       px: 0,
      }}>
      <Image src="/logo.png" width={100} height={100} priority={true} alt="Luxcrest logo" />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
       <Button variant="text" color="info" size="small" onClick={() => scrollToSection("features")}>
        Home
       </Button>
       <Button
        variant="text"
        color="info"
        size="small"
        onClick={() => scrollToSection("testimonials")}>
        About us
       </Button>
       <Button
        variant="text"
        color="info"
        size="small"
        onClick={() => scrollToSection("highlights")}>
        services
       </Button>
       <Button variant="text" color="info" size="small" onClick={() => scrollToSection("pricing")}>
        team
       </Button>
       <Button
        variant="text"
        color="info"
        size="small"
        onClick={() => scrollToSection("faq")}
        sx={{ minWidth: 0 }}>
        Porfolio
       </Button>
      </Box>
     </Box>
     <Box
      sx={{
       display: { xs: "none", md: "flex" },
       gap: 0.5,
       alignItems: "center",
      }}>
      <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
      <Button color="primary" variant="text" size="small">
       Get in touch
      </Button>
     </Box>
     <Box sx={{ display: { sm: "flex", md: "none" } }}>
      <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
       <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
       <Box
        sx={{
         p: 2,
         backgroundColor: "background.default",
        }}>
        <Box
         sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
         }}>
         <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
         <IconButton onClick={toggleDrawer(false)}>
          <CloseRoundedIcon />
         </IconButton>
        </Box>
        <Divider sx={{ my: 3 }} />
        <MenuItem onClick={() => scrollToSection("features")}>Home</MenuItem>
        <MenuItem onClick={() => scrollToSection("testimonials")}>About us</MenuItem>
        <MenuItem onClick={() => scrollToSection("highlights")}> Services</MenuItem>
        <MenuItem onClick={() => scrollToSection("pricing")}> Team</MenuItem>
        <MenuItem onClick={() => scrollToSection("faq")}> Portfolio</MenuItem>
        <MenuItem></MenuItem>
        <MenuItem>
         <Button color="primary" variant="outlined" fullWidth>
          Get in touch
         </Button>
        </MenuItem>
       </Box>
      </Drawer>
     </Box>
    </Toolbar>
   </Container>
  </AppBar>
 );
}
