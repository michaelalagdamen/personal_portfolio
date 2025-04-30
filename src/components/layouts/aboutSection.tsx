import { Box, Typography, Button } from "@mui/material";
import * as React from "react";

export default function About() {
  return (
    <Box sx={{ marginTop: "50px", paddingX: "100px" }}>
      <Box
        sx={{
          width: "100%",
          fontFamily: "Geist",
          color: "#7AB2B2",
          fontSize: "30px",
          textAlign: "left",
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
          About Me
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
          [mention your background, e.g., graphic design, front-end development,
          etc.], I specialize in crafting user interfaces that are not only
          visually engaging but also user-centered and functional.
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "50px",
          }}
        >
          {/* Left side: Education & Certification */}
          <Box sx={{ flex: 1, minWidth: "300px" }}>
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

            {/* Tertiary Education */}
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

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    color: "#4D869C",
                    fontSize: "20px",
                    fontWeight: "300",
                    marginBottom: "5px",
                    lineHeight: "30px",
                  }}
                >
                  Benedicto College - Mandaue Campus
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    color: "#4D869C",
                    fontSize: "20px",
                    fontWeight: "300",
                    marginBottom: "5px",
                    lineHeight: "30px",
                  }}
                >
                  Bachelor of Science in Information Technology
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    color: "#4D869C",
                    fontSize: "20px",
                    fontWeight: "300",
                    marginBottom: "5px",
                    lineHeight: "30px",
                  }}
                >
                  2021 - 2025
                </Typography>
              </Box>
            </Box>

            {/* Certification */}
            <Box sx={{ marginTop: "40px" }}>
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
                  width: "70px", // adjust width as needed
                  height: "2px", // thickness of the line
                  backgroundColor: "#7AB2B2", // color of the line
                  borderRadius: "2px",
                  mt: -2, // margin top (space between text and line)
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  flexWrap: "wrap",
                  marginTop: "40px", // optional, helps on smaller screens
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    color: "#4D869C",
                    fontSize: "25px",
                    fontWeight: "600",
                  }}
                >
                  2023
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "595px",
                    textAlign: "left", // aligns text to the right
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Geist",
                      color: "#4D869C",
                      fontSize: "20px",
                      fontWeight: "300",
                      marginBottom: "5px",
                      lineHeight: "30px",
                    }}
                  >
                    PSITE Central Visayas - ICT Student Congress
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Geist",
                      color: "#4D869C",
                      fontSize: "20px",
                      fontWeight: "300",
                      marginBottom: "5px",
                      lineHeight: "30px",
                    }}
                  >
                    Cebu (CTU Main Campus)
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  flexWrap: "wrap",
                  marginTop: "40px", // optional, helps on smaller screens
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    color: "#4D869C",
                    fontSize: "25px",
                    fontWeight: "600",
                  }}
                >
                  2023
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "750px",
                    textAlign: "left", // aligns text to the right
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Geist",
                      color: "#4D869C",
                      fontSize: "20px",
                      fontWeight: "300",
                      marginBottom: "5px",
                      lineHeight: "30px",
                    }}
                  >
                    Cebu Interschool Hackathon
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Geist",
                      color: "#4D869C",
                      fontSize: "20px",
                      fontWeight: "300",
                      marginBottom: "5px",
                      lineHeight: "30px",
                    }}
                  >
                    Cebu City
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  flexWrap: "wrap",
                  marginTop: "40px", // optional, helps on smaller screens
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    color: "#4D869C",
                    fontSize: "25px",
                    fontWeight: "600",
                  }}
                >
                  2024
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "595px",
                    textAlign: "left", // aligns text to the right
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Geist",
                      color: "#4D869C",
                      fontSize: "20px",
                      fontWeight: "300",
                      marginBottom: "5px",
                      lineHeight: "30px",
                    }}
                  >
                    PSITE Central Visayas - ICT Student Congress
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Geist",
                      color: "#4D869C",
                      fontSize: "20px",
                      fontWeight: "300",
                      marginBottom: "5px",
                      lineHeight: "30px",
                    }}
                  >
                    Cebu (CIT-U Main Campus)
                  </Typography>
                </Box>
              </Box>
            </Box>
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
    </Box>
  );
}
