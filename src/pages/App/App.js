import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getGithubInfo } from "../../Services/github-api";
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
      person: null
      // gUser: "",
      // repos: "",
      // repoName: "",
    };
  }


  async componentDidMount() {
    const user = userService.getUser();
    const rootURL = "https://api.github.com/";
    const userURL = {
      url: rootURL + 'users/' + user,
      headers: {
        "User-Agent": "hoseacodes",
        "Authorization": "token " + process.env.GitHub_Token
      }
    }
    const repsonse = await fetch(userURL);
    const data = await repsonse.json();
    console.log(data)
    this.setState({ person: data.results[0] })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

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
          <Route path="/profile" render={() => <UserDetail user={this.state.user} studentData={this.state.name} />} />
          <Route
            path="/allusers"
            render={() => <AllUsersPage user={this.state.user} />}
          />
          <Route
            path="/edit" // :id?
            render={() => <EditProfilePage user={this.state.user} />}
          />
          <Error />
        </Switch>
      </>
    );
  }
}

export default App;
