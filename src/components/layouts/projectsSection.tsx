import { Box, Typography, Modal, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");
  const [pageIndex, setPageIndex] = React.useState(0);

  const handleOpen = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pages = [
    [
      "/assets/loginpage1.jpg",
      "/assets/loginpage2.jpg",
      "/assets/loginpage3.jpg",
      "/assets/loginpage3.jpg",
    ],
    [
      "/assets/business1.jpg",
      "/assets/business2.jpg",
      "/assets/business3.jpg",
      
    ],
  ];

  return (
    <Box
      sx={{
        marginTop: "10px",
        paddingX: "80px",
        height: "100vh",
        position: "relative", // for absolute arrows
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Geist",
          color: "#4D869C",
          fontSize: "65px",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        {pageIndex === 0 ? "Sign Up Pages" : "Business Page"}
      </Typography>

      {/* Slider Section */}
      <Box sx={{ position: "relative" }}>
        {/* Left Arrow */}
        {pageIndex > 0 && (
          <IconButton
            onClick={() => setPageIndex((prev) => prev - 1)}
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "#CDE8E5",
              color: "#4D869C",
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "#4D869C",
                color: "#CDE8E5",
              },
            }}
          >
            <ArrowBackIos />
          </IconButton>
        )}

        {/* Right Arrow */}
        {pageIndex < pages.length - 1 && (
          <IconButton
            onClick={() => setPageIndex((prev) => prev + 1)}
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "#CDE8E5",
              color: "#4D869C",
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "#4D869C",
                color: "#CDE8E5",
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{ marginLeft: "80px", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {/* First row */}
              <Box sx={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
                {pages[pageIndex].slice(0, 2).map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Page ${pageIndex} Image ${idx + 1}`}
                    style={{
                      width: "40%",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    onClick={() => handleOpen(src)}
                  />
                ))}
              </Box>

              {/* Second row */}
              <Box sx={{ display: "flex", gap: "40px" }}>
                {pages[pageIndex].slice(2, 4).map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Page ${pageIndex} Image ${idx + 3}`}
                    style={{
                      width: "40%",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    onClick={() => handleOpen(src)}
                  />
                ))}
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Image Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
}
