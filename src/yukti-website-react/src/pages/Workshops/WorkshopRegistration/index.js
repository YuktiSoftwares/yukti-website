import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Icons
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import SendIcon from "@mui/icons-material/Send";

// Custom hooks
import { useFormData, useDialog, useWorkshopSubmission } from "./hooks";

// Subcomponents
import PersonalInfoSection from "./components/PersonalInfoSection";
import AcademicDetailsSection from "./components/AcademicDetailsSection";
import WorkshopSelectionSection from "./components/WorkshopSelectionSection";
import CommentsSection from "./components/CommentsSection";
import WorkshopPreview from "./components/WorkshopPreview";
import InfoCards from "./components/InfoCards";
import ConfirmationDialog from "./components/ConfirmationDialog";

/**
 * WorkshopRegistration Component
 * Main component that orchestrates the workshop registration form
 * Refactored with custom hooks and subcomponents for better maintainability
 */
function WorkshopRegistration() {
  // Custom hooks for state management
  const { formData, handleInputChange, resetForm } = useFormData();
  const { openDialog, dialogType, dialogMessage, openSuccessDialog, openErrorDialog, closeDialog } =
    useDialog();
  const { isLoading, submitRegistration } = useWorkshopSubmission();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit registration using custom hook
    const result = await submitRegistration(formData);

    if (result.success) {
      // Display success message with registration ID
      const successMessage = `Welcome to ${result.workshopName}! Your registration is confirmed.\n\nRegistration ID: ${result.registrationId}\n\nWe'll send you further details at ${result.email}.`;
      openSuccessDialog(successMessage);
      resetForm();
    } else {
      // Display error message
      openErrorDialog(result.error);
    }
  };

  return (
    <>
      <DefaultNavbar routes={routes} sticky />

      {/* Hero Section */}
      <MKBox
        minHeight="35vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.85),
              rgba(gradients.info.state, 0.9)
            )}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container>
          <Grid container justifyContent="center" textAlign="center">
            <Grid item xs={12} md={10}>
              <MKTypography
                variant="h2"
                color="white"
                mb={2}
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.5px",
                }}
              >
                🚀 Join Our Exclusive Workshops
              </MKTypography>
              <MKTypography
                variant="h6"
                color="white"
                opacity={0.9}
                sx={{
                  fontWeight: 300,
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Accelerate your career with industry-expert led training. Limited seats available.
                Register now and start your transformation today!
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      {/* Main Registration Section */}
      <MKBox component="section" py={{ xs: 8, lg: 10 }} sx={{ backgroundColor: "#f5f7fa" }}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            {/* Left Side - Registration Form */}
            <Grid item xs={12} lg={7}>
              <Card
                sx={{
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.12)",
                  },
                }}
              >
                {/* Card Header */}
                <MKBox
                  sx={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    px: { xs: 3, md: 4 },
                    py: 3,
                  }}
                >
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <PersonIcon sx={{ fontSize: 32, color: "white" }} />
                    </Grid>
                    <Grid item>
                      <MKTypography
                        variant="h5"
                        color="white"
                        sx={{ fontWeight: 700, letterSpacing: "-0.5px" }}
                      >
                        Your Information
                      </MKTypography>
                    </Grid>
                  </Grid>
                </MKBox>

                {/* Card Content - Registration Form */}
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <MKBox component="form" onSubmit={handleSubmit}>
                    {/* Personal Information Section */}
                    <PersonalInfoSection formData={formData} onInputChange={handleInputChange} />

                    <Divider sx={{ my: 3 }} />

                    {/* Academic Information Section Header */}
                    <Grid container alignItems="center" spacing={1} mb={2}>
                      <Grid item>
                        <SchoolIcon sx={{ fontSize: 24, color: "#667eea" }} />
                      </Grid>
                      <Grid item>
                        <MKTypography
                          variant="subtitle1"
                          sx={{ fontWeight: 700, color: "#2d3748" }}
                        >
                          Academic Details
                        </MKTypography>
                      </Grid>
                    </Grid>

                    {/* Academic Information Section */}
                    <AcademicDetailsSection formData={formData} onInputChange={handleInputChange} />

                    <Divider sx={{ my: 3 }} />

                    {/* Workshop Selection Section Header */}
                    <Grid container alignItems="center" spacing={1} mb={2}>
                      <Grid item>
                        <InfoIcon sx={{ fontSize: 24, color: "#667eea" }} />
                      </Grid>
                      <Grid item>
                        <MKTypography
                          variant="subtitle1"
                          sx={{ fontWeight: 700, color: "#2d3748" }}
                        >
                          Workshop & Preference
                        </MKTypography>
                      </Grid>
                    </Grid>

                    {/* Workshop Selection Section */}
                    <WorkshopSelectionSection formData={formData} onInputChange={handleInputChange} />

                    {/* Additional Comments Section */}
                    <CommentsSection formData={formData} onInputChange={handleInputChange} />

                    {/* Selected Workshop Preview */}
                    <WorkshopPreview workshopId={formData.workshopId} />

                    {/* Submit Button */}
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      type="submit"
                      disabled={isLoading}
                      endIcon={
                        isLoading ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                      sx={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "#ffffff",
                        py: 2,
                        fontWeight: 800,
                        borderRadius: 2,
                        fontSize: "18px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        transition: "all 0.3s ease",
                        mt: 2,
                        boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 16px 40px rgba(102, 126, 234, 0.5)",
                          background: "linear-gradient(135deg, #5568d3 0%, #6a398b 100%)",
                          color: "#ffffff",
                        },
                        "&:disabled": {
                          background: "linear-gradient(135deg, #cbd5e0 0%, #a0aec0 100%)",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                          color: "#7a8092",
                        },
                      }}
                    >
                      {isLoading ? "Processing..." : "Complete Registration"}
                    </Button>
                  </MKBox>
                </CardContent>
              </Card>
            </Grid>

            {/* Right Side - Information Panel */}
            <InfoCards />
          </Grid>
        </Container>
      </MKBox>

      {/* Confirmation Dialog */}
      <ConfirmationDialog
        open={openDialog}
        onClose={closeDialog}
        type={dialogType}
        message={dialogMessage}
      />

      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default WorkshopRegistration;
