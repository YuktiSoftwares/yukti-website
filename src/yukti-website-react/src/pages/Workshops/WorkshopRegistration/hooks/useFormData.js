import { useState } from "react";
import { INITIAL_FORM_DATA } from "../constants";

/**
 * Custom hook for managing form data
 * Handles form state, input changes, and reset
 */
export const useFormData = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    resetForm,
  };
};
