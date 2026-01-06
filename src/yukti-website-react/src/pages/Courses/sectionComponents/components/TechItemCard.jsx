import { Card, Box, Tooltip, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const TechItemCard = ({ logo, name, description, theme = {} }) => {
  const { textColor, borderColor } = theme;
  return (
    <Tooltip title={description} arrow placement="top">
      <motion.div
        whileHover={{ scale: 1.08, rotate: 4 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Card
          sx={{
            bgcolor: "rgba(255,255,255,0.06)",
            border: `1px solid ${borderColor}`,
            backdropFilter: "blur(6px)",
            borderRadius: 3,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            cursor: "pointer",
            minHeight: { xs: 110, sm: 130 },
            color: textColor,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt={name}
            sx={{
              width: { xs: 40, sm: 55 },
              height: { xs: 40, sm: 55 },
              objectFit: "contain",
              mb: 1,
            }}
          />

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
          >
            {name}
          </Typography>
        </Card>
      </motion.div>
    </Tooltip>
  );
};

TechItemCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.object,
};

export default TechItemCard;
