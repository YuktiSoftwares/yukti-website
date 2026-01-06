// src/components/common/Roadmap/RoadmapItem.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Paper } from "@mui/material";

const RoadmapItem = ({ title, subtitle, index, showIndex, theme = {} }) => {
  const {
    cardBg = "rgba(255,255,255,0.04)",
    titleColor = "#ffffff",
    subtitleColor = "rgba(255,255,255,0.85)",
    indexBg = "linear-gradient(135deg,#00E5FF,#7C4DFF)",
    indexColor = "#000",
  } = theme;

  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: cardBg,
        p: 2,
        borderRadius: 2,
        minWidth: 180,
        maxWidth: 520,
        boxShadow: "0 6px 20px rgba(2,6,23,0.35)",
      }}
      component="article"
      aria-labelledby={`roadmap-title-${index}`}
    >
      <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
        {showIndex && (
          <Box
            sx={{
              minWidth: 44,
              minHeight: 44,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              background: indexBg,
              color: indexColor,
              fontSize: "0.95rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
            aria-hidden
          >
            {index + 1}
          </Box>
        )}

        <Box sx={{ flex: 1 }}>
          <Typography
            id={`roadmap-title-${index}`}
            sx={{ color: titleColor, fontWeight: 800, fontSize: { xs: "1rem", sm: "1.05rem" } }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography sx={{ color: subtitleColor, mt: 0.6, fontSize: "0.9rem", lineHeight: 1.4 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

RoadmapItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  index: PropTypes.number,
  showIndex: PropTypes.bool,
  theme: PropTypes.shape({
    cardBg: PropTypes.string,
    titleColor: PropTypes.string,
    subtitleColor: PropTypes.string,
    indexBg: PropTypes.string,
    indexColor: PropTypes.string,
  }),
};

RoadmapItem.defaultProps = {
  index: 0,
  showIndex: true,
  theme: {},
};

export default RoadmapItem;
