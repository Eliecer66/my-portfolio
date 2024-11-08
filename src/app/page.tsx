import * as React from "react"
// components imports 
import Introduction from "./components/Introduction";
import About from "./components/Abaout";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <Stats />
    </div>
  );
}
