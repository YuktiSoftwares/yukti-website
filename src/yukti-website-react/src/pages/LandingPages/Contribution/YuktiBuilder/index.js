import React from "react";
import YuktiBuilderRKGITPage from "./YuktiBuilder";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/collaborations/rkgitCollabbg.png";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { pageData } from "./constants";

function YuktiBuilder() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i } }),
  };
  return (
    <div>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 1),
              rgba(gradients.dark.state, 0.7)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div variants={fadeUp} custom={1}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: "#fff" }}>
                  {pageData.hero.title}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.95, mb: 3, color: "#fff" }}>
                  {pageData.hero.subtitle}
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    color="white"
                    onClick={() =>
                      document
                        .getElementById("features-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {pageData.hero.ctaText}
                  </Button>
                  {/* <Button
                    variant="outlined"
                    size="large"
                    onClick={() =>
                      document
                        .getElementById("contributors-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Meet Contributors
                  </Button> */}
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5}>
              <motion.div variants={fadeUp} custom={2}>
                {/* <Card sx={{ boxShadow: 6, borderRadius: 2, overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    image={pageData.features[0].image}
                    alt="feature sample"
                    sx={{ height: 240 }}
                  />
                </Card> */}
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <YuktiBuilderRKGITPage />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </div>
  );
}

export default YuktiBuilder;
