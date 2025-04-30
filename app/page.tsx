import HeaderNavs from "../src/components/layouts/headerSection";
import Home from "../src/components/layouts/homeSection";
import About from "../src/components/layouts/aboutSection";
import Skills from "../src/components/layouts/skillsSection";
import Projects from "../src/components/layouts/projectsSection";
import Footer from "../src/components/layouts/footer";
import * as React from "react";
import { Box } from "@mui/material";
import "./web.css";

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: "#EEF7FF" }}>
      <HeaderNavs />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 } }}></Box>
    </Box>
  );
}
