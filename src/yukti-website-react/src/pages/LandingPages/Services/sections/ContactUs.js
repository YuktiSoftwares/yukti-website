// import { Grid } from "@mui/material";
// import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
// import MKTypography from "components/MKTypography";
// import React from "react";
// import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";
// Images
import bgImage from "assets/images/shapes/waves-white.svg";
import constant from "assets/my_constants/constant";

function ContactUs() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              {constant.homepage.downloads.title1}
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              {constant.homepage.downloads.title2}
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              {constant.homepage.downloads.subtitle}
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component={Link}
              to={constant.homepage.downloads.route}
              sx={{ mb: 2 }}
            >
              {constant.homepage.downloads.buttonText}
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default ContactUs;

// function ContactUs() {
//   return (
//     <MKBox textAlign="center" mt={12}>
//       <Grid container>
//         <Grid item xs={8}>
//           <MKTypography variant="h4" fontWeight="bold">
//             Ready to bring your ideas to life?
//           </MKTypography>
//         </Grid>
//         <Grid item xs={4}>
//           <MKButton
//             component={Link}
//             to="/pages/landing-pages/contact-us"
//             variant="gradient"
//             color="info"
//             size="large"
//             mt={2}
//           >
//             Contact Us Now
//           </MKButton>
//         </Grid>
//       </Grid>
//     </MKBox>
//   );
// }

// export default ContactUs;
