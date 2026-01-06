import { Card, Container, Grid, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import routes from "routes";
import constant from "assets/my_constants/constant";
import htmlcsspng from "assets/course/htmlcsspng.png";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { HtmlCssdata } from "./constant";
import HtmlCssAboutUs from "./components/HtmlCssAboutUs";
import HtmlCssAboutCourseSection from "./components/HtmlCssAboutCourseSection";
import HtmlCssOurFeaturesSection from "./components/HtmlCssOurFeaturesSection";
import HtmlCssAboutInstructor from "./components/HtmlCssAboutInstructor";
import HtmlCssToolsTechSection from "./components/HtmlCssToolsTechSection";
import HtmlCssWhyChooseUs from "./components/HtmlCssWhyChooseUs";
import HtmlCssCurriculumSection from "./components/HtmlCssCurriculumSection";
import HtmlCssCertificateSection from "./components/HtmlCssCertificateSection";
import HtmlCssEnrollCTASection from "./components/HtmlCssEnrollCTASection";
import HtmlCssRelatedCourseSection from "./components/HtmlCssRelatedCourseSection";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

const HtmlCssPage = () => {
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
            )}, url(${htmlcsspng})`,
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
              color=" #F4F4F0"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {HtmlCssdata.title}
            </Typography>
            <Typography
              variant="h1"
              color="#D1D9E0"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {HtmlCssdata.title2}
            </Typography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              {HtmlCssdata.desc}
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
        <HtmlCssAboutUs />
        <HtmlCssAboutCourseSection />
        <HtmlCssOurFeaturesSection />
        <HtmlCssAboutInstructor />
        <HtmlCssToolsTechSection />
        <HtmlCssWhyChooseUs />
        <HtmlCssCurriculumSection />
        <HtmlCssCertificateSection />
        <HtmlCssRelatedCourseSection />
        <HtmlCssEnrollCTASection />
        {/* <HtmlCssRoadMapSection /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default HtmlCssPage;
