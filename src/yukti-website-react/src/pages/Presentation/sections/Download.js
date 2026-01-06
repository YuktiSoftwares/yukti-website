/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";
// Images
import bgImage from "assets/images/shapes/waves-white.svg";
import constant from "assets/my_constants/constant";

function Download() {
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
            <MKTypography variant="h5" color="white">
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
      <Container>
        <Grid container item mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h4" mt={6} mb={3}>
              {constant.homepage.downloads.title3}
            </MKTypography>
            <Grid container spacing={3} alignItems={"center"}>
              <Grid item xs={4} lg={2}>
                <Tooltip title={constant.homepage.downloads.logo.react.title}>
                  <MKBox>
                    <MKBox
                      component="img"
                      src={constant.homepage.downloads.logo.react.image}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title={constant.homepage.downloads.logo.mui.title}>
                  <MKBox>
                    <MKBox
                      component="img"
                      src={constant.homepage.downloads.logo.mui.image}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title={constant.homepage.downloads.logo.node.title}>
                  <MKBox>
                    <MKBox
                      component="img"
                      src={constant.homepage.downloads.logo.node.image}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title={constant.homepage.downloads.logo.express.title}>
                  <MKBox>
                    <MKBox
                      component="img"
                      src={constant.homepage.downloads.logo.express.image}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title={constant.homepage.downloads.logo.tailwind.title}>
                  <MKBox>
                    <MKBox
                      component="img"
                      src={constant.homepage.downloads.logo.tailwind.image}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title={constant.homepage.downloads.logo.angular.title}>
                  <MKBox>
                    <MKBox
                      component="img"
                      src={constant.homepage.downloads.logo.angular.image}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
