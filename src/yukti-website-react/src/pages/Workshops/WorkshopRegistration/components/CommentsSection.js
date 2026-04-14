import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import MKBox from "components/MKBox";

/**
 * Comments Section Component
 * Allows users to provide additional comments
 */
const CommentsSection = ({ formData, onInputChange }) => {
  return (
    <MKBox mb={4}>
      <TextField
        fullWidth
        label="Additional Comments"
        name="comments"
        value={formData.comments}
        onChange={onInputChange}
        placeholder="Tell us about your goals or any special requirements..."
        variant="outlined"
        multiline
        rows={4}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            backgroundColor: "#f8f9fa",
          },
        }}
      />
    </MKBox>
  );
};

CommentsSection.propTypes = {
  formData: PropTypes.shape({
    comments: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CommentsSection;
