import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";

class AllUsersPage extends Component {
  state = {
    students: null,
  };
  componentDidMount() {}
  render() {

    return (
      <>
        <NavBar />
        <div>
          <p>Students...</p>
        </div>
      </>
    );
  }
}

export default AllUsersPage;
