import { Container, Grid } from "@mui/material";
import MKBadge from "components/MKBadge";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";
import data from "pages/LandingPages/Technologies/sections/data/TechStackData";
import { Link } from "react-router-dom";
import ExampleCard from "pages/Presentation/components/ExampleCard";

function TechStack() {
  const renderData = data.map(({ title, desc, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={5}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {desc}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <ExampleCard
                  image={image}
                  name={name}
                  count={count}
                  pro={pro}
                  padding={4}
                  // maxHeight={"10rem"}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));
  return (
    <MKBox component="section">
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", mb: 5, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            // badgeContent={constant.homepage.designBlocks.badgeContent}
            container
            sx={{ mb: 2 }}
          />
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 3 }} pt={{ xs: 2, lg: 3 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              Driving Digital Excellence with a
            </MKTypography>
            <MKTypography variant="h1" fontWeight="bold" mb={1} color="success">
              Cutting-Edge Tech Stack
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              At Yukti Software, we craft scalable, secure, and future-ready solutions with
              cutting-edge technology, empowering your digital transformation and keeping you ahead.
            </MKTypography>
          </MKBox>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default TechStack;
