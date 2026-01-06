import React from "react";
import { Grid, Card } from "@mui/material";
import MKBox from "components/MKBox"; // Assuming you're using Material Kit React
import MKTypography from "components/MKTypography";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Showcase = ({ title, description, images }) => {
  return (
    <Grid container spacing={5} justifyContent="center" mt={2}>
      {/* General Introduction */}
      <Grid item xs={12} textAlign="center" mt={5}>
        <MKTypography variant="h3" fontWeight="bold">
          {title}
        </MKTypography>
        <MKTypography variant="body1" color="text.secondary" mt={2} maxWidth="800px" mx="auto">
          {description}
        </MKTypography>
      </Grid>

      {/* Image Showcase with Scroll Animation */}
      {images.map((img, index) => (
        <Grid item xs={12} lg={10} key={index}>
          {console.log(img)}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card sx={{ p: 3, borderRadius: "lg", boxShadow: 3, textAlign: "center" }}>
              <Grid container spacing={4} alignItems="center">
                {/* Text Content */}
                <Grid item xs={12} lg={6}>
                  <MKTypography variant="h4" fontWeight="bold">
                    {img.title}
                  </MKTypography>
                  <MKTypography variant="body2" color="text.secondary" mt={2}>
                    {img.desc}
                  </MKTypography>
                </Grid>
                {/* Image */}
                <Grid item xs={12} lg={6}>
                  <MKBox
                    component="img"
                    src={img.src}
                    alt={img.name}
                    width="100%"
                    sx={{ maxHeight: "25rem", objectFit: "cover", borderRadius: "lg" }}
                  />
                </Grid>
              </Grid>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Showcase;
Showcase.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
