import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import MKBox from "components/MKBox";
import { SEMESTER_OPTIONS, BRANCH_OPTIONS } from "../constants";

/**
 * Academic Details Section Component
 * Collects semester and branch information
 */
const AcademicDetailsSection = ({ formData, onInputChange }) => {
  const dropdownSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      border: "2px solid #e2e8f0",
      py: 0.8,
      transition: "all 0.3s ease",
      "&:hover": {
        borderColor: "#667eea",
        backgroundColor: "#f8faff",
      },
      "&.Mui-focused": {
        borderColor: "#667eea",
        boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
        backgroundColor: "#f8faff",
      },
    },
    "& .MuiOutlinedInput-input": {
      py: 1.2,
      fontWeight: 500,
      color: "#2d3748",
    },
    "& .MuiInputBase-formControl": {
      minHeight: "48px",
    },
    "& .MuiInputLabel-root": {
      color: "#667eea",
      fontWeight: 600,
      fontSize: "14px",
      "&.Mui-focused": {
        color: "#667eea",
      },
    },
    "& .MuiInputLabel-shrink": {
      color: "#667eea !important",
      fontWeight: 600,
      transform: "translate(12px, -9px) scale(0.85)",
    },
  };

  return (
    <MKBox mb={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Current Semester"
            name="semester"
            value={formData.semester}
            onChange={onInputChange}
            variant="outlined"
            required
            sx={dropdownSx}
          >
            <MenuItem value="">
              <em>Select semester</em>
            </MenuItem>
            {SEMESTER_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Branch/Department"
            name="branch"
            value={formData.branch}
            onChange={onInputChange}
            variant="outlined"
            required
            sx={dropdownSx}
          >
            <MenuItem value="">
              <em>Select branch</em>
            </MenuItem>
            {BRANCH_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </MKBox>
  );
};

export default AcademicDetailsSection;
