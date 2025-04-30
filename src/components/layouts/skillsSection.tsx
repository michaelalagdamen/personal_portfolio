import { Box, Typography, Button } from "@mui/material";
import * as React from "react";

export default function Skills() {
  return (
    <Box sx={{ marginTop: "50px", paddingX: "100px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100%",
            fontSize: "30px",
            marginRight: "auto",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Geist",
              color: "#4D869C",
              fontSize: "60px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Software
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            marginRight: "20%",
          }}
        >
          <img
            src="/assets/figma.png"
            alt="Figma"
            style={{
              width: "100%",
              maxWidth: "80px",
              marginRight: "60px",
            }}
          />

          <img
            src="/assets/html.png"
            alt="HTML"
            style={{
              width: "100%",
              maxWidth: "80px",
              marginRight: "60px",
            }}
          />

          <img
            src="/assets/css.png"
            alt="CSS"
            style={{
              width: "100%",
              maxWidth: "80px",
              marginRight: "55px",
            }}
          />

          <img
            src="/assets/next.js.png"
            alt="Next.js"
            style={{
              width: "100%",
              maxWidth: "100px",
            }}
          />
        </Box>
      </Box>

      {/* Bottom Line */}
      <Box
        sx={{
          width: "100%",
          height: "2px",
          backgroundColor: "#4D869C",
          borderRadius: "2px",
          marginTop: "50px",
        }}
      />
    </Box>
  );
}
