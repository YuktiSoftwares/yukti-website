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

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
// import team1 from "assets/images/team-5.jpg";
// import team2 from "assets/images/bruce-mars.jpg";
// import team3 from "assets/images/ivana-squares.jpg";
// import team4 from "assets/images/ivana-square.jpg";
import constant from "assets/my_constants/constant";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              {constant.aboutus.team.headerText.desc}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={constant.aboutus.team.teamCard1.image}
                name={constant.aboutus.team.teamCard1.name}
                position={{ color: "info", label: constant.aboutus.team.teamCard1.label }}
                description={constant.aboutus.team.teamCard1.desc}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={constant.aboutus.team.teamCard2.image}
                name={constant.aboutus.team.teamCard2.name}
                position={{ color: "info", label: constant.aboutus.team.teamCard2.label }}
                description={constant.aboutus.team.teamCard2.desc}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={constant.aboutus.team.teamCard3.image}
                name={constant.aboutus.team.teamCard3.name}
                position={{ color: "info", label: constant.aboutus.team.teamCard3.label }}
                description={constant.aboutus.team.teamCard3.desc}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={constant.aboutus.team.teamCard4.image}
                name={constant.aboutus.team.teamCard4.name}
                position={{ color: "info", label: constant.aboutus.team.teamCard4.label }}
                description={constant.aboutus.team.teamCard4.desc}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
