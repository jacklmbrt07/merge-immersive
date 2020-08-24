import React from "react";
import "../Feed/Feed.css"
// import { Link } from "react-router-dom";


const Feed = (props) => {
  return (
    <section className="feed">
      <div className="container">
        <div className="feed-container">
          <div className="profile-card2">
            <div className="card-header2">
              <h1>Johnathan Blackburn</h1>
              <p>SEI Immersive Student</p>
              <p>Class: 629</p>
            </div>
            <img class="image2"
              src="https://avatars2.githubusercontent.com/u/25213510?s=460&u=ccd76bfb4349453011a6f276200dbcf087be71c2&v=4"
              alt="profile" />
            <div class="card-info2">
              <p>Profile Info</p>
            </div>
          </div>
          <div className="card-container">
            <div className="post-card">
              <div className="post-card__content">
                <div className="post-card__info">
                  <h1>Merge Immersive</h1>
                  <p>This project was built with the MERN stack.</p>
                  <a href="https://github.com/Johnathanblackburncodes/merge-immersive">Github Link</a>
                </div>
              </div>
              <div className="post-card__img" id="post-card__img">
              </div>
            </div>
            <div className="post-card">
              <div className="post-card__content">
                <div className="post-card__info">
                  <h1>Merge Immersive</h1>
                  <p>This project was built with the MERN stack.</p>
                  <a href="https://github.com/Johnathanblackburncodes/merge-immersive">Github Link</a>
                </div>
              </div>
              <div className="post-card__img" id="post-card__img">
              </div>
            </div>
            <div className="post-card">
              <div className="post-card__content">
                <div className="post-card__info">
                  <h1>Merge Immersive</h1>
                  <p>This project was built with the MERN stack.</p>
                  <a href="https://github.com/Johnathanblackburncodes/merge-immersive">Github Link</a>
                </div>
              </div>
              <div className="post-card__img" id="post-card__img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feed;