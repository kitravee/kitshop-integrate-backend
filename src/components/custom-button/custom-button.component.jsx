import React from "react";

import "./custom-buttom.styles.scss";

// property isGoogleSignIn if it pass to props it is "true" then render "google-sign-in"

// Add inverted button
const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    }  custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
