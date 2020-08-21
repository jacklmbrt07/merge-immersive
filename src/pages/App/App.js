import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import Footer from "../../components/Footer/Footer";

class App extends React.Component {

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' render={() =>
            <HomePage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignUpOrLogin={this.handleSignUpOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              handleSignUpOrLogin={this.handleSignUpOrLogin}
            />
          } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
