// src/components/course/sections/AboutCourseSection.jsx

import { Box, Typography, Grid, Paper } from "@mui/material";
import PropTypes from "prop-types";

const AboutCourseSection = ({ title, description, points = [], theme = {} }) => {
  const {
    bg = "#ffffff",
    titleColor = "#0f172a",
    descColor = "#334155",
    pointTitleColor = "#0ea5e9",
    pointBg = "rgba(255,255,255,0.08)",
    borderColor = "rgba(255,255,255,0.15)",
    pointTextColor = "#fff",
  } = theme;

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 8 },
        px: 2,
        background: bg,
        position: "relative",
      }}
    >
      <Grid container spacing={4}>
        {/* LEFT Content */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              fontWeight: 800,
              color: titleColor,
              mb: 2,
              fontFamily: "'Rajdhani', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              color: descColor,
              lineHeight: 1.7,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {description}
          </Typography>
        </Grid>

        {/* RIGHT Points */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {points.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 2,
                    borderRadius: 2,
                    background: pointBg,
                    border: `1px solid ${borderColor}`,
                    backdropFilter: "blur(6px)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: pointTitleColor,
                      fontFamily: "'Rajdhani', sans-serif",
                      textTransform: "uppercase",
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: pointTextColor,
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCourseSection;

AboutCourseSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  theme: PropTypes.obj,
  points: PropTypes.obj,
};
