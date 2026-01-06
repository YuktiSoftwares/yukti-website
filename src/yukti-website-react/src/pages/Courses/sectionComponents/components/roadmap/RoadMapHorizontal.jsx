// src/components/common/Roadmap/RoadmapHorizontal.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import RoadmapItem from "./RoadMapItem";

const RoadmapHorizontal = ({
  items,
  stageBg = "rgba(255,255,255,0.04)",
  //   activeGlow = "#00C9A7",
  //   textColor = "#fff",
  showIndex = true,
  theme = {},
}) => {
  return (
    <Box component="section" sx={{ py: { xs: 3, md: 6 }, background: "transparent" }}>
      <Container maxWidth="lg">
        <Box sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch", px: 1 }}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "stretch",
              py: 2,
              minHeight: 140,
            }}
          >
            {items.map((it, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                viewport={{ once: true, amount: 0.2 }}
                style={{ minWidth: 260 }}
              >
                <RoadmapItem
                  title={it.title}
                  subtitle={it.subtitle}
                  index={idx}
                  showIndex={showIndex}
                  theme={{
                    ...theme,
                    cardBg: stageBg,
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Optional small hint for mobile to tell user it is horizontally scrollable */}
        <Typography
          sx={{
            mt: 1,
            fontSize: "0.85rem",
            color: "text.secondary",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Swipe horizontally to view all stages
        </Typography>
      </Container>
    </Box>
  );
};

RoadmapHorizontal.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
    })
  ).isRequired,
  stageBg: PropTypes.string,
  activeGlow: PropTypes.string,
  textColor: PropTypes.string,
  showIndex: PropTypes.bool,
  theme: PropTypes.object,
};

RoadmapHorizontal.defaultProps = {
  stageBg: "rgba(255,255,255,0.04)",
  activeGlow: "#00C9A7",
  textColor: "#fff",
  showIndex: true,
  theme: {},
};

export default RoadmapHorizontal;
