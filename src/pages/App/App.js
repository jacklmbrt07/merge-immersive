import React from "react";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import Footer from "../../components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
