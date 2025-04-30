"use client";

import { Box, Typography, Button } from "@mui/material";
import * as React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <Box sx={{ marginTop: "80px", paddingX: "100px" }}>
      {/* Flex container for text and image */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Text content */}
        <Box>
          {["Hi!", "I'm Michaela", "UI Designer"].map((text, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <Typography
                sx={{
                  fontStyle: "Geist",
                  color: index === 2 ? "#7AB2B2" : "#4D869C",
                  fontSize: index === 2 ? "50px" : "85px",
                  fontWeight: index === 2 ? "400" : "600",
                }}
              >
                {text}
              </Typography>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button
              variant="contained"
              sx={{
                marginTop: "20px",
                width: "200px",
                height: "50px",
                fontSize: "20px",
                color: "#EEF7FF",
                bgcolor: "#7AB2B2",
                "&:hover": {
                  backgroundColor: "#4D869C",
                },
              }}
            >
              Let's Connect
            </Button>
          </motion.div>
        </Box>

        {/* Right: Image */}
        <motion.div initial="hidden" animate="visible" variants={imageVariant}>
          <Box>
            <img
              src="/assets/home.png"
              alt="My Image"
              style={{
                width: "100%",
                maxWidth: "560px",
              }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* Bottom Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ transformOrigin: "left" }}
      >
        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "#4D869C",
            borderRadius: "2px",
            marginTop: "140px",
          }}
        />
      </motion.div>
    </Box>
  );
}
