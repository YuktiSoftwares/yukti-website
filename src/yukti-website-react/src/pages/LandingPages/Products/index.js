import constant from "assets/my_constants/constant";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import productbg from "assets/images/modify_images/productbg.png";
import React, { useState } from "react";
import routes from "routes";
import { Card, Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
// import MKBadge from "components/MKBadge";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
// import ProductCard from "./sections/ProductCard";
import Showcase from "./sections/ShowCase";
import data from "assets/my_constants/constant";
import ProductNavigationBar from "./sections/ProductNavigationBar";

function Products() {
  const [productState, setProductState] = useState("builder");
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
            )}, url(${productbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      ></MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", mx: "auto", px: 0.75 }}
        >
          {/* <MKBadge
            variant="contained"
            color="info"
            badgeContent={constant.homepage.designBlocks.badgeContent}
            container
            sx={{ mb: 2 }}
          /> */}

          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 3 }} pt={{ xs: 2, lg: 3 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              Flawless Web Solutions Tailored to{" "}
            </MKTypography>
            <MKTypography variant="h1" fontWeight="bold" mb={1} color="success">
              Perfection
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              We have delivered fast, secure, and user-friendly web solutions to clients across
              diverse industry verticals
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", mx: "auto", px: 0.75 }}
        >
          <ProductNavigationBar setState={setProductState} />
        </Grid>

        {/* <ProductCard /> */}
        {productState == "builder" && (
          <Showcase
            title={data.products.yuktiBuilder.title}
            description={data.products.yuktiBuilder.desc}
            images={data.products.yuktiBuilder.images}
          />
        )}
        {productState == "stepper" && (
          <Showcase
            title={data.products.stepper.title}
            description={data.products.stepper.desc}
            images={data.products.stepper.images}
          />
        )}

        {productState == "billing" && (
          <Showcase
            title={data.products.yuktiBilling.title}
            description={data.products.yuktiBilling.desc}
            images={data.products.yuktiBilling.images}
          />
        )}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Products;
