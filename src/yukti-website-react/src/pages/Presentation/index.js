// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Download from "pages/Presentation/sections/Download";
// import Testimonials from "pages/Presentation/sections/Testimonials";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

//Newly added routes
import constant from "assets/my_constants/constant";
// Images
// import bgImage from "assets/images/bg-presentation.jpg";
import logo from "assets/images/modify_images/heroImage.png";
//import logo from "assets/images/homepagebg.png";
import Employees from "pages/Presentation/sections/Employees";
// import VideoFeedback from "./sections/VideoFeedback";

function Presentation() {
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
          sticky
        />
      </MKBox>

      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6), // Increased opacity for better contrast
              rgba(gradients.dark.state, 0.6)
            )}, url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Prevents repetition
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={8}
            mx="auto"
            sx={{ justifyContent: { xs: "flex-start", md: "center" } }}
          >
            <MKTypography
              variant="h1"
              color="white"
              mb={1}
              sx={{
                textAlign: { xs: "left", sm: "center" }, // Responsive alignment
              }}
            >
              {constant.homepage.headerImageText.title}
            </MKTypography>

            <MKTypography
              variant="h1"
              color="success"
              mb={1}
              sx={{
                textAlign: { xs: "left", md: "center" },
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              {constant.companyName}
            </MKTypography>

            <MKTypography
              color="white"
              mt={1}
              variant="h5" // ✅ Use variant instead of manual fontSize
              sx={{
                textAlign: { xs: "left", md: "center" },
              }}
            >
              {constant.homepage.headerImageText.subtitle}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title={constant.homepage.fiCard.process.title}
                description={constant.homepage.fiCard.process.desc}
                action={{
                  type: "internal",
                  route: constant.homepage.fiCard.process.action.route,
                  label: constant.homepage.fiCard.process.action.label,
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title={constant.homepage.fiCard.technologies.title}
                description={constant.homepage.fiCard.technologies.desc}
                action={{
                  type: "internal",
                  route: constant.homepage.fiCard.technologies.action.route,
                  label: constant.homepage.fiCard.technologies.action.label,
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title={constant.homepage.fiCard.portfolio.title}
                description={constant.homepage.fiCard.portfolio.desc}
                action={{
                  type: "internal",
                  route: constant.homepage.fiCard.portfolio.action.route,
                  label: constant.homepage.fiCard.portfolio.action.label,
                }}
              />
            </Grid>
          </Grid>
        </Container>
        {/* <Testimonials /> */}
        {/* <VideoFeedback />*/}
        <Employees />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3} alignItems="center">
              {/* Title & Subtitle */}
              <Grid item xs={12} lg={5} sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  {constant.homepage.shareButtons.title}
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  {constant.homepage.shareButtons.subtitle}
                </MKTypography>
              </Grid>

              {/* Social Buttons */}
              <Grid
                item
                xs={12}
                lg={6}
                container
                spacing={2}
                justifyContent={{ xs: "center", lg: "flex-end" }}
              >
                <Grid item>
                  <MKSocialButton
                    component="a"
                    href="https://www.instagram.com/yuktisoftware?igsh=Nmc1dG8yN2p1cjk3&utm_source=qr"
                    target="_blank"
                    color="instagram"
                  >
                    <i className="fab fa-instagram" />
                    &nbsp;Instagram
                  </MKSocialButton>
                </Grid>
                <Grid item>
                  <MKSocialButton
                    component="a"
                    href="https://www.facebook.com/profile.php?id=61574013882048"
                    target="_blank"
                    color="facebook"
                  >
                    <i className="fab fa-facebook" />
                    &nbsp;Facebook
                  </MKSocialButton>
                </Grid>
                <Grid item>
                  <MKSocialButton
                    component="a"
                    href="https://www.linkedin.com/company/yukti-software/ "
                    target="_blank"
                    color="linkedin"
                  >
                    <i className="fab fa-linkedin" />
                    &nbsp;LinkedIn
                  </MKSocialButton>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
