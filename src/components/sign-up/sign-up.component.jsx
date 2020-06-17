import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  // constructor() {
  //   super();

  //   this.state = {
  //     displayName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   };
  // }

  const [userCredentials, setCridential] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    signUpStart({ displayName, email, password });

    // this.setState({
    //   displayName: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCridential({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={displayName}
          label="displayName"
          required
        />
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
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          handleChange={handleChange}
          value={confirmPassword}
          label="confirmPassword"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign up </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
