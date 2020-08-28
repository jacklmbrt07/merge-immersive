import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import Feed from "../../components/Feed/Feed"
import Footer from "../../components/Footer/Footer"
// import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <Feed user={props.user} users={props.users} />
      <Footer />
    </>
  );
};

export default HomePage;