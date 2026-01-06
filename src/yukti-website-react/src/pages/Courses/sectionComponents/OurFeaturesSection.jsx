import { Box, Typography, Grid, Paper } from "@mui/material";
import PropTypes from "prop-types";

const OurFeaturesSection = ({
  title = "Our Features",
  subtitle = "Why students choose us",
  features = [],
  theme = {},
}) => {
  const {
    bg = "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
    titleColor = "#ffffff",
    subtitleColor = "rgba(255,255,255,0.75)",
    cardBg = "rgba(255,255,255,0.06)",
    cardHover = "rgba(255,255,255,0.12)",
    iconColor = "#00eaff",
    textColor = "rgba(255,255,255,0.85)",
    borderColor = "rgba(255,255,255,0.2)",
  } = theme;

  console.log("Features : ", features);
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 8 },
        px: 2,
        background: bg,
        // borderRadius: 3,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.8rem", md: "2.3rem" },
          fontWeight: 800,
          color: titleColor,
          mb: 1,
          textTransform: "uppercase",
          fontFamily: "'Rajdhani', sans-serif",
          letterSpacing: "2px",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 5,
          color: subtitleColor,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {subtitle}
      </Typography>

      <Grid container spacing={2}>
        {features.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                height: "100%",
                p: 3,
                borderRadius: 2,
                background: cardBg,
                border: `1px solid ${borderColor}`,
                backdropFilter: "blur(8px)",
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  background: cardHover,
                  transform: "translateY(-5px)",
                },
              }}
            >
              {/* Icon Container */}
              <Box sx={{ mb: 2 }}>
                {item.icon && <Box sx={{ fontSize: "2rem", color: iconColor }}>{item.icon}</Box>}
              </Box>

              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: titleColor,
                  mb: 1,
                  fontFamily: "'Rajdhani', sans-serif",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: textColor,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {item.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurFeaturesSection;
OurFeaturesSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  theme: PropTypes.object,
};
