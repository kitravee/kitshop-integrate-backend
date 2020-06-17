import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCridential] = useState({
    email: "",
    password: "",
  });
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: "",
  //     password: "",
  //   };
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCridential({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            // type = "button to not "
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
