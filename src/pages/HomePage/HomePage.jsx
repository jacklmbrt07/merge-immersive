import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = (props) => {
  return (
    <div>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <section className="home-hero">
        <h1>Merge Immersive</h1>
      </section>
      <section className="students">
        <div className="container">
          <h2>Students</h2>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
