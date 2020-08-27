import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Students from "../../components/Students/Students";
import Footer from "../../components/Footer/Footer"
// import Repos from "../../components/Repos/Repos";

class UserDetail extends Component {
  state = {
    students: null,
  };
  componentDidMount() { }
  render() {
    console.log(process.env.DATABASE_URL)

    return (

      <>
        <NavBar user={this.props.user} handleLogout={this.props.handleLogout} />
        <div>
          <Students />
        </div>
        <Footer />
      </>
    );
  }
}

export default UserDetail;
