"use client";

import { Box, Typography } from "@mui/material";
import * as React from "react";
import { motion } from "framer-motion";

// Smooth, slow zoom fade animation
const fadeZoom = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 5,
      ease: [0.30, 1, 0.30, 1], // custom ease for smoothness
    },
  },
};

export default function Projects() {
  return (
    <Box sx={{ marginTop: "80px", paddingX: "100px", marginBottom: "80px" }}>
      {/* Animated Title */}
      <motion.div initial="hidden" animate="visible" variants={fadeZoom}>
        <Box
          sx={{
            width: "100%",
            fontFamily: "Geist",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Geist",
              color: "#4D869C",
              fontSize: "65px",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            Projects
          </Typography>
        </Box>
      </motion.div>

      {/* Animated Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeZoom}
        style={{ marginTop: "60px" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Geist",
              color: "#7AB2B2",
              fontSize: "55px",
              fontWeight: "500",
            }}
          >
            Business
          </Typography>

          <img
            src="/assets/loginPage.png"
            alt="DeveloperPage"
            style={{
              width: "800px",
              height: "600px",
              marginLeft: "20px",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
}
