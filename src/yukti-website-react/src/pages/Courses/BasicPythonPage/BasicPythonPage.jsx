import { Card, Container, Grid, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import routes from "routes";
import constant from "assets/my_constants/constant";
import fsd2 from "assets/course/pfsdbg.png";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BasicPythondata } from "./constant";
import BasicPythonAboutUs from "./components/BasicPythonAboutUs";
import BasicPythonAboutCourseSection from "./components/BasicPythonAboutCourseSection";
import BasicPythonOurFeaturesSection from "./components/BasicPythonOurFeaturesSection";
import BasicPythonAboutInstructor from "./components/BasicPythonAboutInstructor";
import BasicPythonToolsTechSection from "./components/BasicPythonToolsTechSection";
import BasicPythonWhyChooseUs from "./components/BasicPythonWhyChooseUs";
import BasicPythonCurriculumSection from "./components/BasicPythonCurriculumSection";
import BasicPythonCertificateSection from "./components/BasicPythonCertificateSection";
import BasicPythonEnrollCTASection from "./components/BasicPythonEnrollCTASection";
import BasicPythonRelatedCourseSection from "./components/BasicPythonRelatedCourseSection";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

const BasicPythonPage = () => {
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
            )}, url(${fsd2})`,
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
              color="#FFD43B"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {BasicPythondata.title}
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
              {BasicPythondata.title2}
            </Typography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              {BasicPythondata.desc}
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
        <BasicPythonAboutUs />
        <BasicPythonAboutCourseSection />
        <BasicPythonOurFeaturesSection />
        <BasicPythonAboutInstructor />
        <BasicPythonToolsTechSection />
        <BasicPythonWhyChooseUs />
        <BasicPythonCurriculumSection />
        <BasicPythonCertificateSection />
        <BasicPythonRelatedCourseSection />
        <BasicPythonEnrollCTASection />
        {/* <BasicPythonRoadMapSection /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default BasicPythonPage;
