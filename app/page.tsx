
import SideTabs from "../src/components/layouts/Tabs";

import * as React from "react";
import { Box } from "@mui/material";
import "./web.css";

export default function HomePage() {
  return (
    <Box sx={{ width: "100%", height: "100vh", overflowX: "hidden" }}>
      <SideTabs />
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      ></Box>
    </Box>
  );
}
