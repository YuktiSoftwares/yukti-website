import React from "react";
import data from "pages/LandingPages/Careers/sections/data/diCardData";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import { Container, Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

function WhyUs() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={3} sx={{ mb: 10 }} justifyContent={"center"} textAlign="center">
        <Grid item xs={12} lg={4}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 3 }} pt={{ xs: 2, lg: 3 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              Why{" "}
              <MKTypography variant="h3" color="success" sx={{ display: "inline" }}>
                Intern
              </MKTypography>{" "}
              with Us?
            </MKTypography>

            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              At <strong>Yukti Software</strong> , our internship program goes beyond just
              learning—it’s about transforming potential into expertise. Here’s what makes us stand
              out
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
      <Container>
        <Grid container spacing={3}>
          {data.map((obj, index) => (
            <Grid item xs={12} md={4} key={index}>
              <DefaultInfoCard icon={obj.icon} title={obj.title} description={obj.desc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default WhyUs;
