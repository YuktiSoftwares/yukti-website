import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import MKTypography from "components/MKTypography";

/**
 * Confirmation Dialog Component
 * Displays success or error messages after form submission
 */
const ConfirmationDialog = ({ open, onClose, type, message }) => {
  const isSuccess = type === "success";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: "center", pt: 3 }}>
        {isSuccess ? (
          <CheckCircleIcon
            sx={{ fontSize: 56, color: "#48bb78", display: "block", mx: "auto", mb: 1 }}
          />
        ) : (
          <ErrorIcon
            sx={{ fontSize: 56, color: "#f56565", display: "block", mx: "auto", mb: 1 }}
          />
        )}
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center", py: 2 }}>
        <MKTypography
          variant="h6"
          sx={{
            color: isSuccess ? "#48bb78" : "#f56565",
            fontWeight: 700,
            mb: 1,
          }}
        >
          {isSuccess ? "🎉 Registration Successful!" : "❌ Registration Error"}
        </MKTypography>
        <MKTypography variant="body2" color="textSecondary" sx={{ mt: 1, lineHeight: 1.6 }}>
          {message}
        </MKTypography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            background: isSuccess ? "#48bb78" : "#f56565",
          }}
        >
          {isSuccess ? "Great! Close" : "Try Again"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
