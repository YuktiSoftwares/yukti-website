import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

const CurriculumModule = ({ moduleTitle, moduleDescription, topics, theme }) => {
  const {
    curriculumTitleColor = "#fff",
    curriculumSubtitleColor = "#fff",
    curriculumDescColor = "#fff",
  } = theme;
  return (
    <Accordion
      sx={{
        bgcolor: "rgba(255,255,255,0.05)",
        borderRadius: 2,
        mb: 2,
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.15)",
        color: curriculumTitleColor,
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: curriculumTitleColor }}>
            {moduleTitle}
          </Typography>
          {moduleDescription && (
            <Typography variant="body2" sx={{ opacity: 0.8, color: curriculumSubtitleColor }}>
              {moduleDescription}
            </Typography>
          )}
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        {topics?.map((topic, index) => (
          <Chip
            key={index}
            label={topic}
            sx={{
              m: 0.5,
              bgcolor: "rgba(255,255,255,0.1)",
              color: curriculumDescColor,
              borderRadius: "20px",
            }}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

CurriculumModule.propTypes = {
  moduleTitle: PropTypes.string.isRequired,
  moduleDescription: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.object,
};

export default CurriculumModule;
