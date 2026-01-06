import { Box, Typography, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CertificateSection = ({
  title = "Certificate of Achievement",
  subtitle = "Earn an industry-recognized certificate upon successful completion of the program. This certification validates your technical skills and practical knowledge, helping you stand out in the job market.",
  theme = {},
  certificateImage,
}) => {
  const {
    bg = "#ffff",
    titleColor = "#fff",
    descColor = "#fff",
    imageBorderColor = "#ffffffff",
  } = theme;
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 }, background: bg }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Text */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" fontWeight={700} mb={2} sx={{ color: titleColor }}>
              {title}
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8, color: descColor }}>
              {subtitle}
            </Typography>
          </motion.div>
        </Grid>

        {/* Certificate Image */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              component="img"
              src={certificateImage}
              alt="Certificate"
              sx={{
                width: "auto",
                height: 200,
                maxWidth: 500,
                borderRadius: 2,
                display: "block",
                mx: "auto",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                border: `2px solid ${imageBorderColor}`,
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

CertificateSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  certificateImage: PropTypes.string.isRequired,
  theme: PropTypes.object,
};

export default CertificateSection;
