import { Box, Grid, Typography, Container } from "@mui/material";

import PropTypes from "prop-types";
import InstructorPointCard from "./components/InstructorPointCard";

const AboutInstructorSection = ({
  points = [],
  title = "Know Your Mentors",
  subtitle = "",
  theme = {},
}) => {
  const { bg, gradient, textColor } = theme;
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: gradient || `linear-gradient(135deg, ${bg}, #000)`,
        color: textColor || "#fff",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            textAlign: "center",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: textColor,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: 6,
            textAlign: "center",
            opacity: 0.85,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          {subtitle}
        </Typography>

        <Grid container spacing={3}>
          {points.map((p, i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <InstructorPointCard title={p.title} subtitle={p.subtitle} theme={theme} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutInstructorSection;

AboutInstructorSection.propTypes = {
  theme: PropTypes.object,
  bg: PropTypes.string,
  gradient: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
};
