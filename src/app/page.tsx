import * as React from "react"
// components imports
import Introduction from "./components/Introduction";
import About from "./components/Abaout";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Box from "@mui/material/Box";

export default function Home() {

  return (
    <Box className="flex flex-col justify-evenly gap-4">
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <Stats />
      <Contact />
    </Box>
  );
}
