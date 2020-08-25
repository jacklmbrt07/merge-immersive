import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Students from "../../components/Students/Students";


class UserDetail extends Component {
  state = {
    students: null,
  };
  componentDidMount() { }
  render() {
    console.log(process.env.DATABASE_URL)

    return (

      <>
        <NavBar />
        <Students />
      </>
    );
  }
}

export default UserDetail;
