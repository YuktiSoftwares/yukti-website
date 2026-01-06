import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function PortraitTeamCard({ image, name, title }) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container width="100%">
        <MKBox position="relative" width="100%" sx={{ aspectRatio: "16/17" }}>
          {/* Image with Aspect Ratio */}
          <MKBox
            component="img"
            src={image}
            alt={name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the image maintains its aspect ratio
              borderRadius: 2,
              boxShadow: "lg",
            }}
          />

          {/* Overlay with Text */}
          <MKBox
            position="absolute"
            bottom={10}
            left={0}
            width="100%"
            bgColor="rgba(0, 0, 0, 0.5)"
            py={1}
            px={2}
            borderRadius="0 0 md md"
            textAlign="center"
            sx={{ borderRadius: "0 0 8px 8px" }}
          >
            <MKTypography variant="h6" color="white" fontWeight="bold">
              {name}
            </MKTypography>
            <MKTypography variant="body2" color="white" fontStyle="italic" fontWeight="bold">
              {title}
            </MKTypography>
          </MKBox>
        </MKBox>
      </Grid>
    </Card>
  );
}
// Typechecking props for the HorizontalTeamCard
PortraitTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};
export default PortraitTeamCard;
