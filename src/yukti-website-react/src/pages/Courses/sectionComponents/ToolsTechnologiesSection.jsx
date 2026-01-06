import { Box, Container, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import TechItemCard from "./components/TechItemCard";

const ToolsTechnologiesSection = ({ title, subtitle, techList, theme = {} }) => {
  const {
    gradient = "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
    textColor = "#fff",
    titleColor = "#fff",
    subTitleColor = "#fff",
  } = theme;
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: gradient,
        color: textColor || "#fff",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            mb: 1,
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: titleColor,
          }}
        >
          {title || "Tools & Technologies"}
        </Typography>

        {subtitle && (
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              opacity: 0.85,
              mb: 5,
              maxWidth: "700px",
              mx: "auto",
              color: subTitleColor,
            }}
          >
            {subtitle}
          </Typography>
        )}

        <Grid container spacing={2}>
          {techList.map((tech, index) => (
            <Grid item xs={4} sm={3} md={2} key={index}>
              <TechItemCard
                logo={tech.logo}
                name={tech.name}
                description={tech.description}
                theme={theme}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

ToolsTechnologiesSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  techList: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.object,
};

export default ToolsTechnologiesSection;
