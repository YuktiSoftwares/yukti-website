import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MKBox from "components/MKBox";

/**
 * Personal Information Section Component
 * Collects first name, last name, email, and phone number
 */
const PersonalInfoSection = ({ formData, onInputChange }) => {
  return (
    <MKBox mb={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={onInputChange}
            placeholder="John"
            variant="outlined"
            size="small"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#f8f9fa",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={onInputChange}
            placeholder="Doe"
            variant="outlined"
            size="small"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#f8f9fa",
              },
            }}
          />
        </Grid>
      </Grid>

      <MKBox mt={2}>
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="john.doe@example.com"
          variant="outlined"
          size="small"
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#f8f9fa",
            },
          }}
        />
      </MKBox>

      <MKBox mt={2}>
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onInputChange}
          placeholder="+91 98765 43210"
          variant="outlined"
          size="small"
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#f8f9fa",
            },
          }}
        />
      </MKBox>
    </MKBox>
  );
};

PersonalInfoSection.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default PersonalInfoSection;
