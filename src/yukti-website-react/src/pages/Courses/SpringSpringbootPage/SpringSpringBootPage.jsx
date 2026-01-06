import { Card, Container, Grid, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import routes from "routes";
import constant from "assets/my_constants/constant";
import herobg from "assets/course/springSpringbootbg.png";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SpringSpringBootdata } from "./constant";
import SpringSpringBootAboutUs from "./components/SpringSpringBootAboutUs";
import SpringSpringBootAboutCourseSection from "./components/SpringSpringBootAboutCourseSection";
import SpringSpringBootOurFeaturesSection from "./components/SpringSpringBootOurFeaturesSection";
import SpringSpringBootAboutInstructor from "./components/SpringSpringBootAboutInstructor";
import SpringSpringBootToolsTechSection from "./components/SpringSpringBootToolsTechSection";
import SpringSpringBootWhyChooseUs from "./components/SpringSpringBootWhyChooseUs";
import SpringSpringBootCurriculumSection from "./components/SpringSpringBootCurriculumSection";
import SpringSpringBootCertificateSection from "./components/SpringSpringBootCertificateSection";
import SpringSpringBootEnrollCTASection from "./components/SpringSpringBootEnrollCTASection";
import SpringSpringBootRelatedCourseSection from "./components/SpringSpringBootRelatedCourseSection";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

const SpringSpringBootPage = () => {
  return (
    <>
      <MKBox>
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
      </MKBox>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${herobg})`,
          backgroundSize: "fit",
          backgroundPosition: "bottom",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center", mt: { xs: 15 }, pb: 10 }}
          >
            <Typography
              variant="h1"
              color="#ffffffff"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {SpringSpringBootdata.title}
            </Typography>
            <Typography
              variant="h1"
              color="#fff"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {SpringSpringBootdata.title2}
            </Typography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              {SpringSpringBootdata.desc}
            </MKTypography>
            <MKButton
              component={Link}
              to={"/pages/landing-pages/contact-us"}
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              Call Us
            </MKButton>
            <MKTypography variant="h6" color="white" mt={2} mb={1}>
              Follow us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.facebook.com/profile.php?id=61574013882048"
                target="_blank"
                mr={3}
              >
                <FacebookIcon />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.instagram.com/yuktisoftware?igsh=Nmc1dG8yN2p1cjk3&utm_source=qr"
                target="_blank"
                mr={3}
              >
                <InstagramIcon />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <TwitterIcon />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.linkedin.com/company/yukti-software/ "
                target="_blank"
              >
                <LinkedInIcon />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          // borderTopLeftRadius: (theme) => theme.shape.borderRadius,
          borderTopLeftRadius: 10,
        }}
      >
        <SpringSpringBootAboutUs />
        <SpringSpringBootAboutCourseSection />
        <SpringSpringBootOurFeaturesSection />
        <SpringSpringBootAboutInstructor />
        <SpringSpringBootToolsTechSection />
        <SpringSpringBootWhyChooseUs />
        <SpringSpringBootCurriculumSection />
        <SpringSpringBootCertificateSection />
        <SpringSpringBootRelatedCourseSection />
        <SpringSpringBootEnrollCTASection />
        {/* <SpringSpringBootRoadMapSection /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default SpringSpringBootPage;
