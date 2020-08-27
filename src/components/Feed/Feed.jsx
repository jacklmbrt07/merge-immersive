import React from "react";
import "../Feed/Feed.css"
import { Link } from "react-router-dom";


const Feed = (props) => {
  console.log(props.user);
  let feed = props.user ? (
    <section className="feed">
      <div className="container">
        <div className="feed-container">
          <div className="profile-card2">
            <div className="card-header2">
              <span>
                <h2>{props.user.name}</h2>
              </span>
              <p>SEI Immersive Student - static</p>
              <p>Class: 629 - static</p>
            </div>
            <img className="image2"
              src="https://avatars2.githubusercontent.com/u/25213510?s=460&u=ccd76bfb4349453011a6f276200dbcf087be71c2&v=4"
              alt="profile" />
            <div className="card-info2">
              <p>Image static ^ Profile Info</p>
            </div>
          </div>
          <div className="card-container">
            <div className="post-card">
              <div className="post-card__content">
                <div className="post-card__info">
                  <h2>Merge Immersive</h2>
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
                  <h2>Merge Immersive</h2>
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
                  <h2>Merge Immersive</h2>
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
  ) : (
      <section className="feed">
        <div className="container">
          <div className="feed-container">
            <div className="profile-card2">
              <div className="card-header2">
                <span>
                  <h2>Login or sign up!</h2>
                </span>
                <Link to="/signup">SIGN UP</Link>
                <Link to="/login">LOG IN</Link>
              </div>
              <img className="image2"
                src="https://avatars2.githubusercontent.com/u/25213510?s=460&u=ccd76bfb4349453011a6f276200dbcf087be71c2&v=4"
                alt="profile" />
              <div className="card-info2">
                <p>Profile Info</p>
              </div>
            </div>
            <div className="card-container">
              <div className="post-card">
                <div className="post-card__content">
                  <div className="post-card__info">
                    <h2>Merge Immersive</h2>
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
                    <h2>Merge Immersive</h2>
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
                    <h2>Merge Immersive</h2>
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
    )
  return (
    <> {feed} </>
  );
};

export default Feed;