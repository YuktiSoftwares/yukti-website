import {
  Card,
  Grid,
  Icon,
  Step,
  StepButton,
  Stepper,
  // useMediaQuery,
  // useTheme,
} from "@mui/material";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import phases from "pages/LandingPages/Services/sections/data/phaseData";
import { useState } from "react";
function ServicePhase() {
  const [activeStep, setActiveStep] = useState(0);
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const currentCard = phases[activeStep];
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid container spacing={3} sx={{ mb: 10 }} justifyContent={"center"} textAlign="center">
        <Grid item xs={12} lg={4}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 3 }} pt={{ xs: 2, lg: 3 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              Our Development Process
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              &quot;We follow a structured approach to deliver exceptional results, ensuring every
              phase aligns with your business needs.&quot;
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} lg={7} sx={{ overflowX: "auto", width: "100%" }}>
          <MKBox px={{ xs: 2, sm: 4, md: 6, lg: 4 }} sx={{ minHeight: "6rem" }}>
            <Stepper
              alternativeLabel
              nonLinear
              activeStep={activeStep}
              // orientation={isMobile ? "vertical" : "horizontal"}
              sx={{ width: "45rem" }}
            >
              {phases.map((phase, index) => (
                <Step key={index}>
                  {/* <StepLabel></StepLabel> */}
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    {phase.title}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </MKBox>
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent={"center"} mt={2}>
        <Grid item xs={12} lg={5}>
          <Card>
            <MKBox
              component="img"
              src={currentCard.image}
              //   alt={name}
              width="100%"
              my="auto"
              //   opacity={pro ? 0.6 : 1}
              pb={2}
              minHeight="25rem"
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={5} key={currentCard.title}>
          <Card>
            <MKBox sx={{ textAlign: "center", py: 1.5, px: 2, minHeight: "25rem" }}>
              <MKTypography variant="h1" color={currentCard.color} my={2}>
                <Icon>{currentCard.icon}</Icon>
              </MKTypography>
              <MKTypography variant="h2" mt={2} fontWeight="bold">
                {currentCard.title}
              </MKTypography>
              <MKTypography variant="h5" mt={2} fontWeight="bold">
                &quot;{currentCard.title2} &quot;
              </MKTypography>
              <MKTypography variant="body2" color="secondary" mt={1.7}>
                {currentCard.description}
              </MKTypography>
            </MKBox>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
export default ServicePhase;
