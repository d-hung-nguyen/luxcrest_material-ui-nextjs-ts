import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

const userTestimonials = [
 {
  avatar: "/nina1.jpeg",
  name: "Nina Flores",
  occupation: "Senior Engineer",
  testimonial:
   "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
 },
 {
  avatar: "/nina1.jpeg",
  name: "Nina Flores",
  occupation: "Senior Engineer",
  testimonial:
   "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
 },

 // Add more unique testimonials here
];

const whiteLogos = ["/lc1.svg", "/lc1.svg", "/lc4.svg", "/lc5.svg", "/lc6.svg"];
const darkLogos = ["/lc1.svg", "/lc1.svg", "/lc4.svg", "/lc5.svg", "/lc6.svg"];

const logoStyle = {
 width: "80px",
 opacity: 0.9,
};

export default function Testimonials() {
 const theme = useTheme();
 const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

 return (
  <Container
   id="testimonials"
   sx={{
    pt: { xs: 4, sm: 12 },
    pb: { xs: 8, sm: 16 },
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: { xs: 3, sm: 6 },
   }}>
   <Box
    sx={{
     width: { sm: "100%", md: "60%" },
     textAlign: { sm: "left", md: "center" },
    }}>
    <Typography component="h2" variant="h4" color="text.primary">
     Testimonials
    </Typography>
    <Typography variant="body1" color="text.secondary">
     See what our customers have to say about their experience with our services.
    </Typography>
   </Box>
   <Grid container spacing={2}>
    {userTestimonials.map((testimonial, index) => (
     <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
      <Card
       sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        p: 1,
       }}>
       <CardHeader
        avatar={<Avatar alt={testimonial.name} src={testimonial.avatar} />}
        title={testimonial.name}
        subheader={testimonial.occupation}
       />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
         {testimonial.testimonial}
        </Typography>
       </CardContent>
       <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
        <img src={logos[index % logos.length]} alt={`Logo ${index + 1}`} style={logoStyle} />
       </Box>
      </Card>
     </Grid>
    ))}
   </Grid>
  </Container>
 );
}
