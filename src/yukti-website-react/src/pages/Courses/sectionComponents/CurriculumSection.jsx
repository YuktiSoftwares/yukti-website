import { Box, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";
import CurriculumModule from "./components/CurriculumModule";

const CurriculumSection = ({ title, subtitle, curriculumList, theme = {} }) => {
  const {
    titleColor = "#fff",
    subtitleColor = "#fff",
    gradient = "linear-gradient(135deg, #010a15, #031a36)",
  } = theme;
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: gradient,
        color: titleColor,
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
            letterSpacing: 1,
            color: titleColor,
          }}
        >
          {title || "Curriculum"}
        </Typography>

        {subtitle && (
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              opacity: 0.8,
              mb: 5,
              maxWidth: 700,
              mx: "auto",
              color: subtitleColor,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {curriculumList.map((module, i) => (
          <CurriculumModule
            key={i}
            moduleTitle={module.moduleTitle}
            moduleDescription={module.moduleDescription}
            topics={module.topics}
            theme={theme}
          />
        ))}
      </Container>
    </Box>
  );
};

CurriculumSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  curriculumList: PropTypes.arrayOf(
    PropTypes.shape({
      moduleTitle: PropTypes.string.isRequired,
      moduleDescription: PropTypes.string,
      topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  theme: PropTypes.object,
};

export default CurriculumSection;
