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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples

import teamData from "pages/Presentation/sections/data/employeeData";
import PortraitTeamCard from "examples/Cards/TeamCards/PortraitTeamCard";
import constant from "assets/my_constants/constant";
import { useRef } from "react";
import { motion } from "framer-motion";
function Employees() {
  const scrollRef = useRef(null);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h4">{constant.homepage.team.heading}</MKTypography>
          <MKTypography variant="h3" color="info" textGradient mb={2}>
            {constant.homepage.team.title}
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={2}>
            {constant.homepage.team.subtitle}
          </MKTypography>
        </Grid>

        <MKBox
          ref={scrollRef}
          sx={{
            mt: 8,
            overflowX: "hidden",
            whiteSpace: "nowrap",
            position: "relative",
            display: "flex",
          }}
        >
          <motion.div
            style={{ display: "flex", gap: "16px" }}
            animate={{ x: ["0%", "-50%"] }} // Moves left continuously
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }} // Smooth loop
          >
            {teamData.concat(teamData).map((member, index) => (
              <MKBox key={index} sx={{ minWidth: 280, maxWidth: 320 }}>
                <PortraitTeamCard image={member.image} name={member.name} />
              </MKBox>
            ))}
          </motion.div>
        </MKBox>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Employees;
