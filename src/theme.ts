"use client";
import { Prata, Italiana } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const prata = Prata({ subsets: ["latin"], weight: ["400"] });
const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });

export const theme = createTheme({
 palette: {
  mode: "light",
 },

 typography: { fontFamily: `${prata.style.fontFamily}, ${italiana.style.fontFamily}` },
});
