import { VALIDATION_MESSAGES } from "./constants";

/**
 * Validate individual form fields
 */
export const validateField = (fieldName, value) => {
  switch (fieldName) {
    case "firstName":
      return value.trim() ? null : VALIDATION_MESSAGES.firstName;
    case "lastName":
      return value.trim() ? null : VALIDATION_MESSAGES.lastName;
    case "email":
      return value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? null
        : VALIDATION_MESSAGES.email;
    case "phoneNumber": {
      const digitsOnly = value.trim().replace(/\D/g, "");
      // Accept 10 digits (India local) or 12 digits starting with 91 (India with country code)
      const isValid =
        (digitsOnly.length === 10 && /^\d{10}$/.test(digitsOnly)) ||
        (digitsOnly.length === 12 && digitsOnly.startsWith("91"));
      return isValid ? null : VALIDATION_MESSAGES.phoneNumber;
    }
    case "workshopId":
      return value ? null : VALIDATION_MESSAGES.workshopId;
    case "experience":
      return value ? null : VALIDATION_MESSAGES.experience;
    case "semester":
      return value ? null : VALIDATION_MESSAGES.semester;
    case "branch":
      return value ? null : VALIDATION_MESSAGES.branch;
    default:
      return null;
  }
};

/**
 * Validate entire form
 */
export const validateForm = (formData) => {
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "workshopId",
    "experience",
    "semester",
    "branch",
  ];

  for (const field of requiredFields) {
    const error = validateField(field, formData[field]);
    if (error) {
      return error;
    }
  }

  return null;
};
