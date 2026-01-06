// src/components/common/Roadmap/RoadmapVertical.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import RoadmapItem from "./RoadMapItem";

const RoadmapVertical = ({
  items,
  glowColor = "#7C4DFF",
  lineColor = "#4f46e5",
  bg = "transparent",
  showIndex = true,
  theme = {},
}) => {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 }, background: bg }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ position: "relative" }}>
          {items.map((it, idx) => (
            <Grid key={idx} item xs={12}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                {/* Vertical connector + dot */}
                <Box
                  sx={{
                    width: 54,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: 0.8,
                  }}
                  aria-hidden
                >
                  <Box
                    sx={{
                      width: 3,
                      flex: 1,
                      bgcolor: lineColor,
                      opacity: 0.12,
                      borderRadius: 2,
                    }}
                  />
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      mt: -2,
                      background: `radial-gradient(circle at 30% 30%, ${glowColor}, transparent 50%)`,
                      border: `3px solid ${lineColor}`,
                    }}
                  />
                </Box>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ flex: 1 }}
                >
                  <RoadmapItem
                    title={it.title}
                    subtitle={it.subtitle}
                    index={idx}
                    showIndex={showIndex}
                    theme={theme}
                  />
                </motion.div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

RoadmapVertical.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
    })
  ).isRequired,
  glowColor: PropTypes.string,
  lineColor: PropTypes.string,
  bg: PropTypes.string,
  showIndex: PropTypes.bool,
  theme: PropTypes.object,
};

RoadmapVertical.defaultProps = {
  glowColor: "#7C4DFF",
  lineColor: "#4f46e5",
  bg: "transparent",
  showIndex: true,
  theme: {},
};

export default RoadmapVertical;
