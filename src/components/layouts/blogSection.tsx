import { Box, Typography } from "@mui/material";
import * as React from "react";

export default function Blogs() {
  return (
    <Box
      sx={{
        paddingX: "80px",
        paddingY: "40px", // Adds bottom space
        height: "80vh",
        position: "relative",
        overflowY: "auto", // Enables vertical scrolling
      }}
    >
      <Box
        sx={{
          width: "100%",
          fontFamily: "Geist",
          textAlign: "left",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "30px",
            fontWeight: "500",
            marginBottom: "30px",
          }}
        >
          Behind the Scenes of HACKESTATE 2025: My Journey as an Organizer and
          OJT at FilipinoHomes
        </Typography>

        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "20px",
            fontWeight: "400",
            marginBottom: "30px",
            lineHeight: "30px",
          }}
        >
          Organizing a hackathon is something I never imagined I’d experience as
          an On-the-Job Trainee—but on April 14–15, 2025, that’s exactly what
          happened. I was given the incredible opportunity to help lead and
          organize HACKESTATE: Hackathon 2025, a two-day real estate tech
          innovation event hosted under PropTech Philippines, in partnership
          with FilipinoHomes.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "20px",
            fontWeight: "400",
            marginBottom: "30px",
            lineHeight: "30px",
          }}
        >
          HACKESTATE was not just another hackathon. It was a pioneering
          initiative aimed at bringing together young developers, designers,
          data scientists, and real estate professionals to build innovative,
          tech-driven solutions for the real estate industry. The event was
          packed with energy, ideas, and problem-solving—challenging
          participants to create real-world platforms that could revolutionize
          how Filipinos buy, sell, rent, or manage properties.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "20px",
            fontWeight: "400",
            marginBottom: "30px",
            lineHeight: "30px",
          }}
        >
          As part of the core organizing team, my role involved a wide range of
          responsibilities—from event logistics, technical setup, and marketing
          coordination to managing communication between mentors, judges, and
          participants. Being an OJT, I initially felt the pressure, but thanks
          to the support from FilipinoHomes and PropTech Philippines, I quickly
          found myself growing in confidence and skill.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "20px",
            fontWeight: "400",
            marginBottom: "30px",
            lineHeight: "30px",
          }}
        >
          One of the most fulfilling parts of the experience was seeing how much
          effort went into planning something that appears seamless on the
          outside. One week of preparation, multiple coordination meetings, and
          technical rehearsals all led up to weekdays filled with innovation and
          collaboration. I learned how to manage time-sensitive tasks,
          coordinate with stakeholders, adapt quickly to changes, and solve
          problems under pressure—all crucial skills in both tech and event
          management.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "20px",
            fontWeight: "400",
            marginBottom: "30px",
            lineHeight: "30px",
          }}
        >
          Aside from the organizational experience, being immersed in the
          hackathon environment allowed me to learn from tech experts and
          innovators. I listened to keynote speakers, observed pitching
          sessions, and saw how participants approached user problems and built
          their solutions in less than 48 hours. It opened my eyes to the
          growing intersection of technology and real estate—an industry that’s
          rapidly evolving and ripe for disruption.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#4D869C",
            fontSize: "20px",
            fontWeight: "400",
            marginBottom: "30px",
            lineHeight: "30px",
          }}
        >
          This blog post is a reflection of that journey—how it challenged me,
          taught me, and inspired me to pursue opportunities where technology
          can solve real human problems. HACKESTATE 2025 wasn’t just a job
          assignment, It was a defining milestone that allowed me to contribute
          to something bigger than myself—and it’s an experience I’ll carry
          forward as I grow in the tech industry.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <img
          src="/assets/hackestate1.jpg"
          alt="Figma"
          style={{
            width: "100%",
            maxWidth: "400px",
            marginRight: "40px",
            borderRadius: "10px",
          }}
        />

        <img
          src="/assets/hackestate2.jpg"
          alt="HTML"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "10px",
          }}
        />
      </Box>
    </Box>
  );
}
