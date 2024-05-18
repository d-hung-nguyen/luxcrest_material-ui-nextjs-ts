import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@/theme";

export default function RootLayout(props: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <title>luxcrest</title>
    <style>
     @import
     url('https://fonts.googleapis.com/css2?family=Italiana&family=Manrope&family=Roboto+Flex:opsz,slnt,wdth,wght,GRAD,XOPQ,XTRA,YTDE,YTFI@8..144,-4,82.6,100..1000,45,62,392,-126,767&display=swap');
    </style>
   </head>
   <body>
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
     <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {props.children}
     </ThemeProvider>
    </AppRouterCacheProvider>
   </body>
  </html>
 );
}
