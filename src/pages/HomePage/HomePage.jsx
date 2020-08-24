import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import Feed from "../../components/Feed/Feed"
// import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <Feed />
    </div>
  );
};

export default HomePage;