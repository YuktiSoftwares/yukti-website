import RotatingCard from "examples/Cards/RotatingCard";
// import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
// import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import data from "pages/LandingPages/Careers/sections/data/rolesData";
import rcbg from "assets/images/modify_images/rcbg.png";

import React from "react";
import { Container, Grid } from "@mui/material";
import FrontCard from "pages/LandingPages/Careers/components/FrontCard";
import BackCard from "pages/LandingPages/Careers/components/BackCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Roles() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={3} sx={{ mb: 10 }} justifyContent={"center"} textAlign="center">
        <Grid item xs={12} lg={4}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 3 }} pt={{ xs: 2, lg: 3 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              Our{" "}
              <MKTypography variant="h3" color="success" sx={{ display: "inline" }}>
                Internship
              </MKTypography>{" "}
              Roles
            </MKTypography>

            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              Don’t miss the chance to learn, grow, and make an impact. Apply now to join our
              internship program and kickstart your journey in the tech world! out
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={3} sx={{ mx: "auto" }}>
        {data.map((obj, index) => (
          <Grid
            item
            xs={12}
            lg={4}
            key={index}
            sx={{
              display: "flex", // Make each grid item a flex container
            }}
          >
            <RotatingCard
              sx={{
                height: "100%", // Ensures the card takes full height
                display: "flex",
                flexDirection: "column",
              }}
            >
              <FrontCard
                image={rcbg}
                icon={obj.icon}
                title={obj.title}
                description={obj.desc}
                listItem={obj.keyfocus}
              />
              <BackCard
                technologies={obj.tech}
                description={obj.techDes}
                action={{
                  type: "internal",
                  route: "/services",
                  label: "Apply Now",
                }}
              />
            </RotatingCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Roles;
