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
import axios from "axios";

// import axios from "axios"
// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./components/Globalstyle";
// import { lightTheme, darkTheme } from "./components/Themes"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      users: [],
    };
  }

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios.get('/api/users')
      .then((response) => {
        const data = response.data;
        this.setState({ users: data });
        console.log(data)
        // console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };
  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };
  handleUpdateAllUsers = (allUsers) => {
    this.setState({ allUsers });
  };
  // handleTheme = () => {
  //   const [theme, setTheme] = useState('light');
  //   const themeToggler = () => {
  //     theme === 'light' ? setTheme('dark') : setTheme('light')
  //   }
  // };

  // ---------LifeCycle Methods ----------//

  async componentDidMount() {
    const allUsers = await userService.index();
    this.setState({ allUsers });
  }

  render() {
    return (
      <>
        {/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
        {/* <GlobalStyles /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                handleLogout={this.handleLogout}
                user={this.state.user}
                users={this.state.users}
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
              <LoginPage
                {...props}
                handleSignUpOrLogin={this.handleSignUpOrLogin}
              />
            )}
          />
          <Route
            path="/profile"
            render={(props) => (
              <UserDetail
                {...props}
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            path="/allusers"
            render={() => (
              <AllUsersPage
                user={this.state.user}
                allUsers={this.state.allUsers}
                handleUpdateAllUsers={this.handleUpdateAllUsers}
              />
            )}
          />
          {/* <Route
            path="/allusers/:id"
            render={() => <AllUsersPage user={this.state.user} />}
          /> */}
          <Route
            path="/edit"
            render={(props) => (
              <EditProfilePage
                {...props}
                handleLogout={this.handleLogout}
                user={this.state.user}
                name={this.state.name}
                handleUpdateUser={this.handleUpdateUser}
              />
            )}
          />
          <Error />
        </Switch>
        {/* </ThemeProvider> */}
      </>
    );
  }
}
export default App;
