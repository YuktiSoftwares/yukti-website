import { Box, Container, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import WhyChooseUsCard from "./components/WhyChooseUsCard";

const WhyChooseUsSection = ({ title, subtitle, points, theme }) => {
  const {
    gradient = "linear-gradient(135deg, #010a15, #031a36, )",
    titleColor = "#fff",
    descColor = "#fff",
  } = theme;
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: gradient,
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mb: 1,
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: titleColor,
          }}
        >
          {title || "Why Choose Us"}
        </Typography>

        {subtitle && (
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              opacity: 0.85,
              mb: 6,
              maxWidth: 700,
              mx: "auto",
              color: descColor,
            }}
          >
            {subtitle}
          </Typography>
        )}

        <Grid container spacing={3}>
          {points.map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <WhyChooseUsCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                theme={theme}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

WhyChooseUsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.object,
};

export default WhyChooseUsSection;
