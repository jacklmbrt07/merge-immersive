import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";

class UserDetail extends Component {
  state = {
    students: null,
  };
  componentDidMount() {}
  render() {
    console.log(process.env.DATABASE_URL);

    return (
      <>
        <NavBar />
        <div>
          <p>Profile</p>
        </div>
      </>
    );
  }
}

export default UserDetail;
