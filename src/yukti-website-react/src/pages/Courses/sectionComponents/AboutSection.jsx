// src/components/course/sections/AboutSection.jsx

import { Box, Typography, Grid } from "@mui/material";
import PropTypes from "prop-types";

const AboutSection = ({ title, highlight, description, image, theme = {} }) => {
  const {
    bg = "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    highlightColor = "#00eaff",
    textColor = "#ffffff",
    patternColor = "rgba(255,255,255,0.08)",
    descColor = "#fff",
  } = theme;

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        px: 2,
        background: bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Futuristic Grid Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${patternColor} 1px, transparent 1px),
                            linear-gradient(90deg, ${patternColor} 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          // backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Soft glowing effect */}
      <Box
        sx={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: highlightColor,
          filter: "blur(120px)",
          opacity: 0.2,
          top: -40,
          right: -30,
          zIndex: 0,
        }}
      />

      <Grid container spacing={4} sx={{ position: "relative", zIndex: 1 }}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: "0.85rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "'Rajdhani', sans-serif",
              color: highlightColor,
              mb: 1,
              fontWeight: 600,
            }}
          >
            {highlight}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: textColor,
              fontWeight: 800,
              fontSize: { xs: "1.9rem", md: "2.4rem" },
              lineHeight: 1.3,
              mb: 2,
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: descColor,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.7,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {description}
          </Typography>
        </Grid>

        {image && (
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={image}
              alt="about"
              sx={{
                width: { xs: "90%", md: "80%" },
                borderRadius: 3,
                filter: "drop-shadow(0 0 18px rgba(0,0,0,0.4))",
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default AboutSection;
AboutSection.propTypes = {
  title: PropTypes.string,
  highlight: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  theme: PropTypes.obj,
};
