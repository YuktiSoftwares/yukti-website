import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import { Container } from "@mui/material";
// import { motion } from "framer-motion";

// Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";
// import constant from "assets/my_constants/constant";
import contactbg from "assets/images/modify_images/contactbg.png";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

function ContactUs() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 1),
              rgba(gradients.dark.state, 0.7)
            )}, url(${contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={6} justifyContent="center" mx="auto" textAlign="center">
            {/* Main Header */}
            <MKTypography
              variant="h1"
              color="white"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Lets Build Your Digital Future With
            </MKTypography>

            {/* Company Name */}
            <MKTypography
              variant="h1"
              color="success"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["4xl"],
                },
              })}
            >
              Yukti Software
            </MKTypography>

            {/* Contact Us Heading */}
            {/* <MKTypography
              variant="h3"
              color="warning"
              mt={2}
              fontWeight="bold"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["2xl"],
                },
              })}
            >
              📞 Get in Touch with Us
            </MKTypography> */}

            {/* Subtitle */}
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Have questions or need help with your next project? We are here to assist you. Reach
              out today!
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container direction={"column-reverse"}>
          <Grid item xs={12} lg={6}>
            <MKBox
              display={{ xs: "none", lg: "flex" }}
              width="calc(100% - 2rem)"
              height="calc(100vh - 2rem)"
              borderRadius="lg"
              ml={2}
              mt={10}
              // sx={{ backgroundImage: `url(${constant.contactus.image})` }}
            >
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                style={{ borderRadius: "8px", border: "none" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.206468505793!2d77.51273451050578!3d28.473328091192347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7e0817a455%3A0x6bdf746d574bbd24!2sYukti%20Softwares!5e0!3m2!1sen!2sin!4v1742883351121!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.206468505793!2d77.51273451050578!3d28.473328091192347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7e0817a455%3A0x6bdf746d574bbd24!2sYukti%20Softwares!5e0!3m2!1sen!2sin!4v1742883351121!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
            </MKBox>
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            lg={6}
            xl={4}
            ml={{ xs: "auto", lg: 6 }}
            mr={{ xs: "auto", lg: 6 }}
          >
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="lg"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              mt={{ xs: 20, sm: 18, md: 20 }}
              p={3}
              border="1px solid #ddd"
            >
              {/* Header */}
              <MKBox
                variant="gradient"
                bgColor="info"
                coloredShadow="info"
                borderRadius="lg"
                p={2}
                mx={2}
                mt={-7}
                textAlign="center"
              >
                <MKTypography variant="h3" color="white">
                  Contact Us
                </MKTypography>
              </MKBox>

              {/* Address */}
              <MKBox textAlign="center" p={3}>
                <MKTypography variant="body1" color="text" mt={1}>
                  <BusinessIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                  <strong>Head Office:</strong> 5th Floor, MSX Tower 1, Commercial Belt, Alpha 1,
                  Greater Noida, UP, 201310
                </MKTypography>

                {/* Email */}
                <MKTypography variant="body1" color="text" mt={2}>
                  <EmailIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                  <strong>Email:</strong>
                  <MKTypography
                    component="a"
                    href="mailto:contact@yuktisoftware.com"
                    color="info"
                    fontWeight="bold"
                    display="inline"
                    ml={0.5}
                  >
                    contact@yuktisoftware.com
                  </MKTypography>
                </MKTypography>

                {/* Phone */}
                <MKTypography variant="body1" color="text" mt={2}>
                  <PhoneIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                  <strong>Contact:</strong>
                  <MKTypography
                    component="a"
                    href="tel:+919582815419"
                    color="info"
                    fontWeight="bold"
                    display="inline"
                    ml={0.5}
                  >
                    +91 9582815419
                  </MKTypography>
                </MKTypography>

                {/* Buttons */}
                <MKBox display="flex" justifyContent="center" gap={2} mt={3}>
                  <Button
                    variant="contained"
                    color="info"
                    startIcon={<LocationOnIcon />}
                    href="https://www.google.com/maps/place/Yukti+Softwares/@28.4733281,77.5127345,17z/"
                    target="_blank"
                  >
                    Visit Our Office
                  </Button>

                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<PhoneIcon />}
                    onClick={() => (window.location.href = "tel:+919582815419")}
                  >
                    Call Now
                  </Button>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
