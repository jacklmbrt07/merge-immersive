import React from "react";
import "../Feed/Feed.css"
// import { Link } from "react-router-dom";


const Feed = (props) => {
  return (
    <section className="feed">
      <div className="container">
        <div className="post-card">
          <div className="post-card__content">
            <div className="post-card__info">
              <h1>Merge Immersive</h1>
              <p>This project was built with the MERN stack.</p>
              <a href="https://github.com/Johnathanblackburncodes/merge-immersive">Github Link</a>
            </div>
          </div>
          <div className="post-card__img" id="post-card__img" >
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
          <div className="post-card__img" id="post-card__img" >
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
          <div className="post-card__img" id="post-card__img" >
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feed;