import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

/**
 * Confirmation Dialog Component
 * Displays success or error confirmation after form submission
 * @param {Object} props
 * @param {boolean} props.open - Whether dialog is open
 * @param {string} props.type - Dialog type: "success" or "error"
 * @param {string} props.message - Main message to display
 * @param {string} props.registrationId - Registration ID for success dialog
 * @param {function} props.onClose - Callback when dialog closes
 */
const ConfirmationDialog = ({ open, type, message, registrationId, onClose }) => {
  const isSuccess = type === "success";

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: 2,
          minWidth: { xs: "90%", sm: 400 },
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <MKBox
        sx={{
          p: 3,
          textAlign: "center",
          background: isSuccess
            ? "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
            : "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%)",
        }}
      >
        {/* Icon Section */}
        <MKBox sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
          {isSuccess ? (
            <CheckCircleIcon
              sx={{
                fontSize: 64,
                color: "#43e97b",
                filter: "drop-shadow(0 4px 12px rgba(67, 233, 123, 0.3))",
              }}
            />
          ) : (
            <ErrorIcon
              sx={{
                fontSize: 64,
                color: "#f5576c",
                filter: "drop-shadow(0 4px 12px rgba(245, 87, 108, 0.3))",
              }}
            />
          )}
        </MKBox>

        {/* Title */}
        <MKTypography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: isSuccess ? "#2d3748" : "#c53030",
          }}
        >
          {isSuccess ? "Registration Successful!" : "Something Went Wrong"}
        </MKTypography>

        {/* Message */}
        <MKTypography
          variant="body1"
          color="textSecondary"
          sx={{
            mb: 2,
            lineHeight: 1.6,
            color: isSuccess ? "#4a5568" : "#742a2a",
          }}
        >
          {message}
        </MKTypography>

        {/* Registration ID */}
        {isSuccess && registrationId && (
          <MKBox
            sx={{
              mt: 2,
              mb: 2,
              p: 2,
              background: "white",
              borderRadius: 1,
              border: "2px solid rgba(67, 233, 123, 0.2)",
            }}
          >
            <MKTypography
              variant="caption"
              sx={{
                color: "#718096",
                textTransform: "uppercase",
                letterSpacing: 0.5,
                fontWeight: 600,
              }}
            >
              Registration ID
            </MKTypography>
            <MKTypography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                color: "#2d3748",
                fontWeight: 700,
                mt: 0.5,
                fontSize: "18px",
                letterSpacing: "2px",
              }}
            >
              {registrationId}
            </MKTypography>
          </MKBox>
        )}
      </MKBox>

      {/* Dialog Actions */}
      <DialogActions sx={{ p: 2, justifyContent: "center", gap: 1 }}>
        <MKButton
          onClick={handleClose}
          variant="contained"
          sx={{
            background: isSuccess
              ? "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
              : "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)",
            color: "white",
            px: 3,
            fontWeight: 600,
            textTransform: "capitalize",
            fontSize: "16px",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          {isSuccess ? "Close" : "Try Again"}
        </MKButton>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  message: PropTypes.string.isRequired,
  registrationId: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

ConfirmationDialog.defaultProps = {
  registrationId: null,
};

export default ConfirmationDialog;
