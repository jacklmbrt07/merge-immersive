import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import EditProfilePage from "../EditProfilePage/EditProfilePage";
import userService from "../../utils/userService";
import HomePage from "../HomePage/HomePage";
import Error from "../Error/Error";

import AllUsersPage from "../AllUsersPage/AllUsersPage";
import UserDetail from "../UserDetail/UserDetail"




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  //update user
  // handleUpdateUser = () => {
  //   userService.updateUser();
  //   this.setState({ user: '' })
  // }

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignUpOrLogin={this.handleSignUpOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <LoginPage {...props} handleSignUpOrLogin={this.handleSignUpOrLogin} />
            )}
          />
          <Route path="/profile" render={() => <UserDetail user={this.state.user} />} />
          {/* <Route
            path="/allusers"
            render={() => <AllUsersPage user={this.state.user} />}
          /> */}
          <Route
            path="/edit" // :id?
            render={() => <EditProfilePage user={this.state.user} name={this.state.name} handleUpdateUser={this.handleUpdateUser} />}
          />
          <Error />
        </Switch>
      </>
    );
  }
}

export default App;
