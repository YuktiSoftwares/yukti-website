// src/components/common/Roadmap/RoadmapZigzag.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import RoadmapItem from "./RoadMapItem";

const RoadmapZigzag = ({
  items,
  //   design = "zigzag", // just informative
  glowColor = "#00E5FF",
  lineColor = "rgba(255,255,255,0.12)",
  bg = "transparent",
  showIndex = true,
  theme = {},
}) => {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 }, background: bg }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ position: "relative" }}>
          {/* Vertical center line for larger screens */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 4,
              transform: "translateX(-50%)",
              background: `linear-gradient(180deg, ${glowColor}, transparent)`,
              opacity: 0.18,
              borderRadius: 2,
              zIndex: 0,
            }}
            aria-hidden
          />

          {items.map((it, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <Grid
                item
                xs={12}
                md={6}
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: isLeft ? "flex-end" : "flex-start" },
                  zIndex: 1,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.06 }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ width: "100%", maxWidth: 560 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {/* Connector dot on center line (desktop only) */}
                    <Box
                      sx={{
                        display: { xs: "none", md: "flex" },
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: `radial-gradient(circle at 30% 30%, ${glowColor}, transparent 45%)`,
                        border: `3px solid ${lineColor}`,
                        ml: isLeft ? 0 : 2,
                        mr: isLeft ? 2 : 0,
                      }}
                      aria-hidden
                    />
                    <RoadmapItem
                      title={it.title}
                      subtitle={it.subtitle}
                      index={idx}
                      showIndex={showIndex}
                      theme={theme}
                    />
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

RoadmapZigzag.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
    })
  ).isRequired,
  design: PropTypes.oneOf(["zigzag"]),
  glowColor: PropTypes.string,
  lineColor: PropTypes.string,
  bg: PropTypes.string,
  showIndex: PropTypes.bool,
  theme: PropTypes.object,
};

RoadmapZigzag.defaultProps = {
  design: "zigzag",
  glowColor: "#00E5FF",
  lineColor: "rgba(255,255,255,0.12)",
  bg: "transparent",
  showIndex: true,
  theme: {},
};

export default RoadmapZigzag;
