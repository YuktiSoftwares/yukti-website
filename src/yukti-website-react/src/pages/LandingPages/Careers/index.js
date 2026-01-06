import constant from "assets/my_constants/constant";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import routes from "routes";
import careersbg from "assets/images/modify_images/careersbg.png";
import { Card, Container, Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import Apply from "./sections/Apply";
import WhyUs from "./sections/WhyUs";
import Roles from "./sections/Roles";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import Certificate from "./sections/Certificate";
import Interns from "./sections/Interns";

function Careers() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/landing-pages/contact-us",
          label: constant.navbar.buttonText,
          color: "success",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${careersbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              component="span"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Careers with Yukti Software
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -6,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid container spacing={3} sx={{ mb: 10 }} justifyContent={"center"} textAlign="center">
          <Grid item xs={12} lg={4}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 3 }} pt={{ xs: 2, lg: 3 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Kickstart Your Career with an
              </MKTypography>
              <MKTypography variant="h2" color="success">
                Internship!
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                Join our team, learn from the best, and gain real-world experience in software
                development.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
        <Apply />
        <WhyUs />
        <Interns />
        <Roles />
        <Certificate />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Careers;
