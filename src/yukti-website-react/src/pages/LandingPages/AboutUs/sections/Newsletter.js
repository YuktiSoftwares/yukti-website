/* eslint-disable react/jsx-no-duplicate-props */
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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
// import macbook from "assets/images/macbook.png";
import constant from "assets/my_constants/constant";
import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">{constant.aboutus.newsletter.title}</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Your company may not be in the software business, but eventually, a software company
              will be in your business.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <MKInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton
                  variant="gradient"
                  to="/pages/landing-pages/contact-us"
                  color="info"
                  sx={{ height: "100%" }}
                  component={Link}
                >
                  {" "}
                  Subscribe{" "}
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox
                component="img"
                src={constant.aboutus.newsletter.image}
                alt="macbook"
                width="100%"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
