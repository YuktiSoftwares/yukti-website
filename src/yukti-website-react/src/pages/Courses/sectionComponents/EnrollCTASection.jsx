import { Box, Typography, Button, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const EnrollCTASection = ({
  title = "Ready to Start Your Learning Journey?",
  subtitle = "Enroll now and take the first step toward building a strong tech career with us!",
  buttonText = "Enroll Now",
  onEnrollClick,
  phone = "+91-98765-43210",
  whatsapp = "+91-98765-43210",
  email = "admissions@yuktisoftware.com",
  theme = {},
}) => {
  const {
    bg = "#ffffffff",
    buttonColor = "",
    textColor = "#000000ff",
    titleColor = "text.primary",
    subtitleColor = "text.secondary",
  } = theme;
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
        color: textColor,
        background: bg,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" fontWeight={700} mb={2} sx={{ color: titleColor }}>
          {title}
        </Typography>

        <Typography variant="body1" sx={{ color: subtitleColor, mb: 3, maxWidth: 600, mx: "auto" }}>
          {subtitle}
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={onEnrollClick}
          sx={{ px: 4, py: 1.4, fontWeight: 600, mb: 3, color: "#fff", background: buttonColor }}
        >
          {buttonText}
        </Button>
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" spacing={3} mt={3}>
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneInTalkIcon fontSize="small" />
            <Typography
              variant="body2"
              fontWeight={"bold"}
              component="a"
              href={`tel:${9582815419}`}
              sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              {phone}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <WhatsAppIcon fontSize="small" />
            <Typography
              variant="body2"
              fontWeight={"bold"}
              component="a"
              href={`https://api.whatsapp.com/send/?phone=919582815419&text&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              {whatsapp}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon fontSize="small" />
            <Typography
              variant="body2"
              fontWeight={"bold"}
              component="a"
              href={`mailto:${email}`}
              sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              {email}
            </Typography>
          </Stack>
        </Stack>
      </motion.div>
    </Box>
  );
};

EnrollCTASection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  onEnrollClick: PropTypes.func,
  phone: PropTypes.string,
  whatsapp: PropTypes.string,
  email: PropTypes.string,
  theme: PropTypes.object,
};

export default EnrollCTASection;
