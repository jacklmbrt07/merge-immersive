import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = (props) => {
  return (
    <div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <section className="hero">
        <h1>Merge Immersive</h1>
      </section>
      <section className="students">
        <h2>Students</h2>
      </section>
    </div>
  );
};

export default HomePage;
