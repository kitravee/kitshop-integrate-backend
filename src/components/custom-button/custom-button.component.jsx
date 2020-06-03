import React from "react";

import "./custom-buttom.styles.scss";

// property isGoogleSignIn if it pass to props it is "true" then render "google-sign-in"

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""}  custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
