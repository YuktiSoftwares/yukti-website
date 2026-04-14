import { useState } from "react";
import { API_ENDPOINT, WORKSHOPS } from "../constants";
import { validateForm } from "../utils";

/**
 * Custom hook for handling workshop registration submission
 * Manages API calls, loading state, and error handling
 */
export const useWorkshopSubmission = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitRegistration = async (formData) => {
    // Validate form
    const validationError = validateForm(formData);
    if (validationError) {
      return {
        success: false,
        error: validationError,
      };
    }

    setIsLoading(true);

    try {
      // Send registration request to server
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          workshopName: WORKSHOPS.find((w) => w.id == formData.workshopId)?.name,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      // Parse response and get registrationId
      const responseData = await response.json();
      const regId = responseData.registrationId || "N/A";
      const workshopName = WORKSHOPS.find((w) => w.id == formData.workshopId)?.name;

      return {
        success: true,
        registrationId: regId,
        workshopName: workshopName,
        email: formData.email,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message || "An error occurred. Please try again later.",
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    submitRegistration,
  };
};
