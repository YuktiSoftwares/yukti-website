import React from "react";
import careerbg from "assets/images/modify_images/careerbg.png";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";

import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import MKTypography from "components/MKTypography";

function Apply() {
  return (
    <Container>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={careerbg}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.1}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Take the First Step Toward Your Dream Career!
            </MKTypography>

            <MKTypography variant="body2" color="white" mb={6}>
              Don’t miss the chance to learn, grow, and make an impact. Apply now to join our
              internship program and kickstart your journey in the tech world!
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component={Link}
              // to={constant.homepage.downloads.route}
            >
              Apply Now
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </Container>
  );
}

export default Apply;
