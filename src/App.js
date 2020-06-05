import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

//convert to class component because we whant to contain state
class App extends React.Component {
  // constructor() {
  //   super();
  //   //user that loging in
  //   //comment out because of intregrad
  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  //create method equal to null
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // when Auth state Change if refrash it will also return same user until you sign out
    // ⭐ A Observable can have three different states as well : Subscribed, Error, Completed.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //createUserProfileDocument return documentReference
        const UserRef = await createUserProfileDocument(userAuth);

        UserRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // if there is not thing in userAuth
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    // #86 to unsubscribe/close auth

    this.unsubscribeFromAuth();
  }
  // Route render for ()=>() inline function
  // component for component
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// to check CurrentUser for redirect to "/"
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

// dispatch is way for redux to know that whatever object you're passing me. it going to be an action object that I'm going to pass to every reducer
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// App.js only set currentUser that we will use mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(App);
