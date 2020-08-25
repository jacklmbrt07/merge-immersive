import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
// import Students from "../../components/Students/Students";
import "../UserDetail/UserDetail.css"

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
        <section className="feed">
          <div className="container">
            <div className="feed-container">
              <div className="profile-card2">
                <div className="card-header2">
                  <span>
                    <h2>Johnathan</h2>
                  </span>
                  <p>SEI Immersive Student</p>
                  <p>Class: 629</p>
                </div>
                <img className="image2"
                  src="https://avatars2.githubusercontent.com/u/25213510?s=460&u=ccd76bfb4349453011a6f276200dbcf087be71c2&v=4"
                  alt="profile" />
                <div className="card-info2">
                  <p>Profile Info</p>
                </div>
              </div>
              <div className="card-container">

              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default UserDetail;
