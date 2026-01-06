import { Card, CardContent, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const WhyChooseUsCard = ({ icon, title, description, theme }) => {
  const { titleColor = "#fff", subtitleColor = "#fff", borderColor = "#fff" } = theme;
  return (
    <motion.div
      whileHover={{ scale: 1.06, translateY: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={{ height: "100%" }}
    >
      <Card
        sx={{
          p: 2,
          borderRadius: 3,
          textAlign: "center",
          height: "100%",
          backdropFilter: "blur(8px)",
          bgcolor: "rgba(255,255,255,0.05)",
          border: `1px solid ${borderColor}`,
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          color: titleColor || "#fff",
        }}
      >
        <Box sx={{ fontSize: 42, mb: 1 }}>{icon}</Box>

        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{ mt: 1, opacity: 0.85, lineHeight: 1.5, color: subtitleColor }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

WhyChooseUsCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.object,
};

export default WhyChooseUsCard;
