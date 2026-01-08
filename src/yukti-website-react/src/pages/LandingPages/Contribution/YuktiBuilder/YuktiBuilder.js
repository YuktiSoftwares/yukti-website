// YuktiBuilder_RKGIT_Collaboration_Page.jsx
// React + MUI + Framer Motion page component
// Usage:
// 1) Paste this file into your React project (e.g. src/pages/YuktiBuilderRKGIT.jsx)
// 2) Install dependencies if not already: @mui/material, @mui/icons-material, framer-motion
//    npm i @mui/material @mui/icons-material framer-motion
// 3) Replace placeholder image paths in `pageData` with actual image URLs / imports
// 4) This component reads all content from the `pageData` object; edit that object to manage content.

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  // Avatar,
  IconButton,
  Chip,
  Button,
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import { pageData } from "./constants";

import { Link } from "react-router-dom";
import MKButton from "components/MKButton";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i } }),
};

export default function YuktiBuilderRKGITPage() {
  const [openImage, setOpenImage] = React.useState(null);

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      sx={{ bgcolor: "#f7f8fb", pb: 10 }}
    >
      <Container sx={{ pt: { xs: 1, md: 2 } }}>
        <motion.div variants={fadeUp} custom={3}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <SchoolIcon />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Why this collaboration?
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "text.secondary" }}>
                Yukti Software partners with educational institutes to provide hands-on development
                opportunities. RKGIT students contributed to various Yukti Builder modules —
                learning production workflows, MUI-driven UIs, API integration patterns, and team
                collaboration.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      </Container>

      {/* FEATURES */}
      <Container id="features-section" sx={{ mt: 6 }}>
        <motion.div variants={fadeUp} custom={4}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Features Co-Developed with RKGIT
          </Typography>
        </motion.div>

        <Grid container spacing={3} alignItems={"stretch"}>
          {pageData.features.map((f, i) => (
            <Grid item xs={12} sm={6} md={3} key={f.id}>
              <motion.div variants={fadeUp} custom={i + 1} style={{ height: "100%" }}>
                <Card
                  sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 2 }}
                >
                  <CardMedia component="img" image={f.image} alt={f.title} sx={{ height: 160 }} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {f.title}
                      </Typography>
                      <Chip label={f.highlight} size="small" />
                    </Box>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {f.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      onClick={() =>
                        document
                          .getElementById(`${f.id}-detail`)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Learn more
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Detailed Feature Sections */}
        <Box sx={{ mt: 6 }}>
          {pageData.features.map((f, idx) => (
            <Box key={f.id} id={`${f.id}-detail`} sx={{ mb: 4 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                  <motion.div variants={fadeUp} custom={idx + 2}>
                    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                      <CardMedia
                        component="img"
                        image={f.image}
                        alt={f.title}
                        sx={{ height: 320 }}
                      />
                    </Card>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <motion.div variants={fadeUp} custom={idx + 3}>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                      {f.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mt: 1, color: "text.secondary" }}>
                      {f.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {/* <Button
                        variant="outlined"
                        onClick={() => alert("Open detailed case study or link here")}
                      >
                        View case study
                      </Button> */}
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Container>

      {/* CONTRIBUTORS */}
      {/* <Container id="contributors-section" sx={{ mt: 8 }}>
        <motion.div variants={fadeUp} custom={6}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Student Contributors
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {pageData.contributors.map((c, idx) => (
            <Grid item xs={12} sm={6} md={3} key={c.name}>
              <motion.div variants={fadeUp} custom={idx + 1} style={{ height: "100%" }}>
                <Card sx={{ textAlign: "center", p: 2, borderRadius: 2, height: "100%" }}>
                  <Avatar
                    src={c.image}
                    alt={c.name}
                    sx={{ width: 92, height: 92, mx: "auto", mb: 2, boxShadow: 3 }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {c.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {c.branch}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {c.role}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container> */}

      {/* GALLERY */}
      <Container sx={{ mt: 8 }}>
        <motion.div variants={fadeUp} custom={9}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Gallery & Collaboration Moments
          </Typography>
        </motion.div>

        <ImageList cols={3} gap={12} sx={{ mb: 3 }}>
          {pageData.gallery.map((src, i) => (
            <ImageListItem key={src} onClick={() => setOpenImage(src)} sx={{ cursor: "pointer" }}>
              <img src={src} alt={`gallery-${i}`} loading="lazy" style={{ borderRadius: 8 }} />
              <IconButton sx={{ position: "absolute", right: 8, top: 8 }}>
                <OpenInFullIcon />
              </IconButton>
            </ImageListItem>
          ))}
        </ImageList>

        <Dialog open={Boolean(openImage)} onClose={() => setOpenImage(null)} maxWidth="lg">
          <DialogContent sx={{ p: 0 }}>
            {openImage && (
              <img
                src={openImage}
                alt="open"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            )}
          </DialogContent>
        </Dialog>
      </Container>

      {/* CLOSING */}
      <Container sx={{ mt: 8 }}>
        <Card sx={{ p: 4, bgcolor: "#fff", boxShadow: 6 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                {pageData.closing.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
                {pageData.closing.text}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" } }}>
              <MKButton
                component={Link}
                to={"/pages/landing-pages/contact-us"}
                variant={"contained"}
                color={"info"}
                size="small"
                sx={() => ({
                  fontSize: { xs: "0.5rem", sm: "0.7rem" },
                })}
              >
                Partner with us
              </MKButton>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* FOOTER SPACER */}
      <Box sx={{ height: 80 }} />
    </Box>
  );
}
