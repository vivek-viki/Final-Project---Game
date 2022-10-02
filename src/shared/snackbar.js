import { Alert, Slide, Snackbar } from "@mui/material";
import React, { useState } from "react";

export const withSnackbar = WrappedComponent => {
  return props => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("custom message");
    const [duration, setDuration] = useState(2000);
    const [severity, setSeverity] = useState(
      "success"
    ); /** error | warning | info */

    const showMessage = (message, severity = "success", duration = 2000) => {
      setMessage(message);
      setSeverity(severity);
      setDuration(duration);
      setOpen(true);
    };

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };

    return (
      <>
        <WrappedComponent {...props} snackbarShowMessage={showMessage} />
        <Snackbar sx={{ marginTop: "5%" }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          autoHideDuration={duration}
          open={open}
          onClose={handleClose}
          TransitionComponent={Slide}
        >
          <Alert variant="filled" sx={{fontFamily : 'inherit'}} onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  };
};