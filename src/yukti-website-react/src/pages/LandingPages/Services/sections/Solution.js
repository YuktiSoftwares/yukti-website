import { Card, Divider, Grid, Icon } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";
import data from "pages/LandingPages/Services/sections/data/solutionData";

function Solution() {
  console.log(data);
  return (
    <>
      {" "}
      <Grid container spacing={3} sx={{ mb: 10 }} justifyContent={"center"} textAlign="center">
        <Grid item xs={12} lg={4}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 3 }} pt={{ xs: 2, lg: 10 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              Comprehensive Solutions{" "}
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              We offer tailored solutions that cover every aspect of application development, from
              mobile apps and web platforms to cutting-edge cloud technologies, ensuring innovation,
              scalability, and seamless integration for your business success.
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {data.map((obj, index) => (
          <Grid item key={index} xs={12} lg={4}>
            <Card>
              <MKBox sx={{ textAlign: "center", py: 1.5, px: 2 }}>
                <MKTypography variant="h1" my={2} color={obj.color}>
                  <Icon>{obj.icon}</Icon>
                </MKTypography>
                <Divider></Divider>
                <MKTypography variant="h2" mt={2} fontWeight="bold">
                  {obj.title}
                </MKTypography>
                {/* <MKTypography variant="h5" mt={2} fontWeight="bold"></MKTypography> */}
                <MKTypography variant="body2" color="secondary" mt={1.7}>
                  {obj.desc}
                </MKTypography>
              </MKBox>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Solution;
