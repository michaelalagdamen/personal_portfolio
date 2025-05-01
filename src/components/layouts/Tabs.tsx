"use client";
import Home from "./homeSection";
import About from "./aboutSection";
import Projects from "./projectsSection";
import Blogs from "./blogSection";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%", height: "100vh" }}
    >
      {value === index && (
        <Box
          sx={{
            bgcolor:
              index === 0 ? "#EEF7FF" : index === 1 ? "#EEF7FF" : "#EEF7FF",
            p: 4,
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function SideTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center", // ⬅️ Center horizontally
        alignItems: "center", // ⬅️ Optional: also center vertically
        overflow: "hidden",
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Responsive vertical tabs"
        sx={{
          borderRight: isMobile ? 0 : 1,
          borderBottom: isMobile ? 1 : 0,
          borderColor: "#CDE8E5", // Custom divider color
          minWidth: isMobile ? "100%" : 200,
          "& .MuiTab-root": {
            color: "#7AB2B2", // Default text color
            fontFamily: "Geist",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "16px",
            alignItems: "flex-start",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#4D869C", // Hover color
              backgroundColor: "#CDE8E5",
            },
          },
          "& .Mui-selected": {
            color: "#4D869C", // Selected tab color
            backgroundColor: "#ffffff",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#4D869C", // Indicator color
          },
        }}
      >
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="About" {...a11yProps(1)} />
        <Tab label="Projects" {...a11yProps(2)} />
        <Tab label="Blog" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Projects />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Blogs />
      </TabPanel>
    </Box>
  );
}
