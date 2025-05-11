import { Box, Typography, Button } from "@mui/material";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const sections = [
  {
    key: "about",
    content: (
      <Box
        sx={{
          fontFamily: "Geist",
          color: "#7AB2B2",
          textAlign: "left",
          marginBottom: "50px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#7AB2B2",
            fontSize: "40px",
            fontWeight: "400",
            marginBottom: "-20px",
          }}
        >
          About
        </Typography>

        <Box
          sx={{
            width: "70px", // adjust width as needed
            height: "2px", // thickness of the line
            backgroundColor: "#7AB2B2", // color of the line
            borderRadius: "2px",
            mt: 2, // margin top (space between text and line)
          }}
        />

        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "65px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Get To Know Me
        </Typography>

        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "20px",
            fontWeight: "300",
            marginBottom: "20px",
            lineHeight: "30px",
          }}
        >
          A passionate UI Designer with a keen eye for detail and a drive to
          create intuitive, beautiful digital experiences. With a background in
          Web Design, Figma and UI Design, I specialize in crafting user
          interfaces that are not only visually engaging but also user-centered
          and functional.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "20px",
            fontWeight: "300",
            marginBottom: "20px",
            lineHeight: "30px",
          }}
        >
          I believe great design is where aesthetics meets purpose. Whether it's
          a mobile app, web platform, or design system, I’m dedicated to
          creating seamless experiences that delight users and drive results.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "20px",
            fontWeight: "300",
            marginBottom: "20px",
            lineHeight: "30px",
          }}
        >
          Let’s build something meaningful together.
        </Typography>
      </Box>
    ),
  },

  {
    key: "education",
    content: (
      <Box
        sx={{
          fontFamily: "Geist",
          color: "#7AB2B2",
          textAlign: "left",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap", // responsive fallback
          gap: "40px", // optional spacing between sections
        }}
      >
        {/* EDUCATION SECTION */}
        <Box sx={{ flex: "1", minWidth: "300px" }}>
          <Typography
            sx={{
              fontFamily: "Geist",
              color: "#7AB2B2",
              fontSize: "30px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Education
          </Typography>

          <Box
            sx={{
              width: "70px",
              height: "2px",
              backgroundColor: "#7AB2B2",
              borderRadius: "2px",
              mt: -2,
            }}
          />

          <Box sx={{ marginTop: "40px" }}>
            <Typography
              sx={{
                fontFamily: "Geist",
                color: "#4D869C",
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              Tertiary
            </Typography>

            <Box sx={{ marginTop: "20px" }}>
              <Typography
                sx={{
                  color: "#4D869C",
                  fontSize: "20px",
                  fontWeight: 300,
                  marginBottom: "5px",
                }}
              >
                Benedicto College - Mandaue Campus
              </Typography>
              <Typography
                sx={{
                  color: "#4D869C",
                  fontSize: "20px",
                  fontWeight: 300,
                  marginBottom: "5px",
                }}
              >
                Bachelor of Science in Information Technology
              </Typography>
              <Typography
                sx={{
                  color: "#4D869C",
                  fontSize: "20px",
                  fontWeight: 300,
                }}
              >
                2021 - 2025
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* CERTIFICATION SECTION */}
        <Box sx={{ flex: "1", minWidth: "500px" }}>
          <Typography
            sx={{
              fontFamily: "Geist",
              color: "#7AB2B2",
              fontSize: "30px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Certification
          </Typography>

          <Box
            sx={{
              width: "70px",
              height: "2px",
              backgroundColor: "#7AB2B2",
              borderRadius: "2px",
              mt: -2,
            }}
          />

          {/* Repeat for each certification */}
          {[
            {
              year: "2023",
              title: "PSITE Central Visayas - ICT Student Congress",
              location: "Cebu (CTU Main Campus)",
            },
            {
              year: "2023",
              title: "Cebu Interschool Hackathon",
              location: "Cebu City",
            },
            {
              year: "2024",
              title: "PSITE Central Visayas - ICT Student Congress",
              location: "Cebu (CIT-U Main Campus)",
            },
            {
              year: "2025",
              title: "On-the-Job Training (OJT) - FilipinoHomes",
              location: "FilipinoHomes Main Office, Cebu City",
            },
          ].map((cert, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Geist",
                  color: "#4D869C",
                  fontSize: "25px",
                  fontWeight: "600",
                  width: "80px", // fix width to align nicely
                }}
              >
                {cert.year}
              </Typography>

              <Box sx={{ textAlign: "left", flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    color: "#4D869C",
                    fontSize: "20px",
                    fontWeight: "300",
                    lineHeight: "30px",
                  }}
                >
                  {cert.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    color: "#4D869C",
                    fontSize: "20px",
                    fontWeight: "300",
                    lineHeight: "30px",
                  }}
                >
                  {cert.location}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    ),
  },
  {
    key: "software",
    content: (
      <Box
        sx={{
          fontFamily: "Geist",
          color: "#7AB2B2",
          textAlign: "left",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap", // responsive fallback
          gap: "40px", // optional spacing between sections
        }}
      >
        {/* software */}
        <Box sx={{ flex: "1", minWidth: "300px" }}>
          <Typography
            sx={{
              fontFamily: "Geist",
              color: "#7AB2B2",
              fontSize: "30px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Software Skills
          </Typography>

          <Box
            sx={{
              width: "130px",
              height: "2px",
              backgroundColor: "#7AB2B2",
              borderRadius: "2px",
              mt: -2,
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "80px",
            }}
          >
            <img
              src="/assets/figma.png"
              alt="Figma"
              style={{
                width: "100%",
                maxWidth: "100px",
                marginRight: "80px",
              }}
            />

            <img
              src="/assets/html.png"
              alt="HTML"
              style={{
                width: "100%",
                maxWidth: "100px",
                marginRight: "80px",
              }}
            />

            <img
              src="/assets/css.png"
              alt="CSS"
              style={{
                width: "100%",
                maxWidth: "100px",
                marginRight: "75px",
              }}
            />

            <img
              src="/assets/next.js.png"
              alt="Next.js"
              style={{
                width: "100%",
                maxWidth: "125px",
              }}
            />
          </Box>
        </Box>
      </Box>
    ),
  },
];

export default function About() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for back

  const handleNext = () => {
    if (index < sections.length - 1) {
      setDirection(1);
      setIndex(index + 1);
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "block",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingX: "80px",
        boxSizing: "border-box",
        position: "relative",
        marginTop: "80px",
      }}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={sections[index].key}
          custom={direction}
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "1200px" }}
        >
          <Box>{sections[index].content}</Box>
        </motion.div>
      </AnimatePresence>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "800px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleBack}
          disabled={index === 0}
          sx={{
            color: "#4D869C",
            borderColor: "#4D869C",
            "&:hover": {
              backgroundColor: "#4D869C",
              color: "#EEF7FF",
            },
            "&.Mui-focusVisible, &:focus": {
              backgroundColor: "#4D869C",
              color: "#EEF7FF",
            },
          }}
        >
          Preview
        </Button>

        <Button
          variant="outlined"
          onClick={handleNext}
          disabled={index === sections.length - 1}
          sx={{
            color: "#4D869C",
            borderColor: "#4D869C",
            "&:hover": {
              backgroundColor: "#4D869C",
              color: "#EEF7FF",
            },
            "&.Mui-focusVisible, &:focus": {
              backgroundColor: "#4D869C",
              color: "#EEF7FF",
            },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
