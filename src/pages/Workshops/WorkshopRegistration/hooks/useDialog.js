import { useState } from "react";

/**
 * Custom hook for managing dialog state
 * Handles dialog visibility, type (success/error), and message
 */
export const useDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("success"); // 'success' or 'error'
  const [dialogMessage, setDialogMessage] = useState("");

  const openSuccessDialog = (message) => {
    setDialogType("success");
    setDialogMessage(message);
    setOpenDialog(true);
  };

  const openErrorDialog = (message) => {
    setDialogType("error");
    setDialogMessage(message);
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  return {
    openDialog,
    dialogType,
    dialogMessage,
    openSuccessDialog,
    openErrorDialog,
    closeDialog,
  };
};
