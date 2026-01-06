import { Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";

const InstructorPointCard = ({ title, subtitle, theme = {} }) => {
  const { titleColor = "#fff", subtitleColor = "#fff", borderColor = "#fff" } = theme;
  return (
    <Card
      sx={{
        bgcolor: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(6px)",
        borderRadius: 3,
        p: 2,
        height: "100%",
        border: `1px solid ${borderColor}`,
      }}
    >
      <CardContent>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, mb: 1, textTransform: "uppercase", color: titleColor }}
        >
          {title}
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.5, color: subtitleColor }}>
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InstructorPointCard;
InstructorPointCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  theme: PropTypes.object,
};
