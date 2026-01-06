import { Container, Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";
import certificate from "assets/images/modify_images/Certificate dummy.png";

function Certificate() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={3} sx={{ mb: 10 }} justifyContent={"center"} textAlign="center">
        <Grid item xs={12} lg={4}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 3 }} pt={{ xs: 2, lg: 3 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              Recognizing Your{" "}
              <MKTypography variant="h3" color="success" sx={{ display: "inline" }}>
                Achievement
              </MKTypography>
            </MKTypography>

            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              Upon completing your internship, receive a professional certificate recognizing your
              skills and contributions, enhancing your portfolio and career prospects.
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
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
            src={certificate}
            opacity={0.6}
            top={0}
            left={0}
            width="100%"
            zIndex={1}
          />
          <MKBox
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bgcolor="rgba(0, 0, 0, 0.5)" // Semi-transparent black
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* Overlay Text */}
          </MKBox>
        </MKBox>
      </Container>
    </Container>
  );
}

export default Certificate;
