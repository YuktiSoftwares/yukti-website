import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import MKBox from "components/MKBox";
import { WORKSHOPS, EXPERIENCE_OPTIONS } from "../constants";

/**
 * Workshop Selection Section Component
 * Allows users to select a workshop and experience level
 */
const WorkshopSelectionSection = ({ formData, onInputChange }) => {
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
    <>
      <MKBox mb={3}>
        <TextField
          fullWidth
          select
          label="Select Workshop"
          name="workshopId"
          value={formData.workshopId}
          onChange={onInputChange}
          variant="outlined"
          required
          sx={dropdownSx}
        >
          <MenuItem value="">
            <em>Choose a workshop</em>
          </MenuItem>
          {WORKSHOPS.map((workshop) => (
            <MenuItem key={workshop.id} value={workshop.id}>
              {workshop.name}
            </MenuItem>
          ))}
        </TextField>
      </MKBox>

      <MKBox mb={3}>
        <TextField
          fullWidth
          select
          label="Experience Level"
          name="experience"
          value={formData.experience}
          onChange={onInputChange}
          variant="outlined"
          required
          sx={dropdownSx}
        >
          <MenuItem value="">
            <em>Select level</em>
          </MenuItem>
          {EXPERIENCE_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </MKBox>
    </>
  );
};

export default WorkshopSelectionSection;
