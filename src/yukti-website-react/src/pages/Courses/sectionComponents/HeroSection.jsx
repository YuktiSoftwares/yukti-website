// src/components/course/sections/HeroSection.jsx

import { Box, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";

const HeroSection = ({
  title,
  subtitle,
  theme = {},
  primaryActionText = "Enroll Now",
  onPrimaryClick,
  image,
}) => {
  const {
    gradient = "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    titleColor = "#ffffff",
    subtitleColor = "rgba(255,255,255,0.8)",
    buttonColor = "#6d28d9",
  } = theme;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        gap: 2,
        py: { xs: 6, md: 10 },
        px: 2,
        background: gradient,
        borderRadius: 3,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Futuristic blurred circles */}
      <Box
        sx={{
          position: "absolute",
          width: 200,
          height: 200,
          top: -50,
          left: -30,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
          filter: "blur(28px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 250,
          height: 250,
          bottom: -60,
          right: -10,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          filter: "blur(30px)",
        }}
      />

      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "2rem", sm: "2.6rem", md: "3.4rem" },
          color: titleColor,
          textTransform: "uppercase",
          letterSpacing: "4px",
          fontFamily: "'Rajdhani', sans-serif",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" },
          color: subtitleColor,
          fontFamily: "'Poppins', sans-serif",
          maxWidth: 700,
          mx: "auto",
          opacity: 0.9,
        }}
      >
        {subtitle}
      </Typography>

      {image && (
        <Box
          component="img"
          src={image}
          alt="course banner"
          sx={{
            width: { xs: "70%", sm: "50%", md: "40%" },
            mt: 2,
            mx: "auto",
          }}
        />
      )}

      <Button
        variant="contained"
        onClick={onPrimaryClick}
        sx={{
          width: "fit-content",
          mx: "auto",
          mt: 3,
          background: buttonColor,
          fontWeight: 600,
          px: 4,
          py: 1.4,
          borderRadius: "50px",
          textTransform: "none",
          fontSize: "1rem",
          ":hover": { opacity: 0.85 },
        }}
      >
        {primaryActionText}
      </Button>
    </Box>
  );
};

export default HeroSection;
HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  theme: PropTypes.string,
  primaryActionText: PropTypes.string,
  onPrimaryClick: PropTypes.func,
  image: PropTypes.string,
};
