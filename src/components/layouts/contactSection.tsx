import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send the data via EmailJS, Formspree, etc.

    // Optionally reset:
    // setFormData({ name: "", email: "", message: "" });
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
      <Box sx={{ marginBottom: "40px" }}>
        <Typography
          sx={{
            fontFamily: "Geist",
            color: "#7AB2B2",
            fontSize: "30px",
            fontWeight: "600",
            marginBottom: "30px",
          }}
        >
          Let's Connect
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
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "50%",
          backgroundColor: "#EEF7FF",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(77, 134, 156, 0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Make children align left
          "& > .MuiTextField-root": {
            m: 1.5,
            width: "50ch",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#4D869C",
              color: "#7AB2B2",
            },
            "&:hover fieldset": {
              borderColor: "#4D869C",
              color: "#4D869C",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#7AB2B2",
              borderWidth: "2px",
              color: "#7AB2B2",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#4D869C",
            fontFamily: "Geist",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" name="name" variant="outlined" />
        <TextField label="Email Address" name="email" variant="outlined" />
        <TextField
          label="Want To Say Something?"
          name="message"
          variant="outlined"
          multiline
          rows={4}
        />

        {/* ✅ Here's the Submit Button */}
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#4D869C",
            color: "#fff",
            fontWeight: "bold",
            mt: 2,
            width: "150px", // or try width: 'fit-content'
            alignSelf: "center", // Align left with inputs
            "&:hover": {
              backgroundColor: "#3b6b7a",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
