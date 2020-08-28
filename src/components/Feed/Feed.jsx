import React from "react";
import "../Feed/Feed.css"
import { Link } from "react-router-dom";


const Feed = (props) => {
  let feed = props.user ? (
    <section className="feed">
      <div className="container">
        <div className="feed-container">
          <div className="profile-card2">
            <div className="card-header2">
              <span>
                <h2>{props.user.name}</h2>
              </span>
              <p>{props.user.cohort.discipline}</p>
              <p>Class: {props.user.cohort.classNo} </p>
            </div>
            <img className="image2"
              src={`https://github.com/${props.user.githubUsername}.png`}
              alt="profile" />
            <div className="card-info2">
              {/* <p>Image static ^ Profile Info</p> */}
            </div>
          </div>
          <div className="card-container">

            {props.users.map((user, idx) => (
              <div key={idx} className="post-card">
                <div className="post-card__content">
                  <div className="post-card__info">
                    <h2>{user.name}</h2>
                    <p>{user.cohort.discipline}</p>
                    <p>{user.cohort.classNo}</p>
                    {/* <p>{user.location.city || 'GA Lounge Couch'}</p> */}
                    <a href={`https://github.com/${user.githubUsername}`} target="_blank" rel="noopener noreferrer">Github Link</a>
                  </div>
                </div>
                <div className="post-card__img" id="post-card__img" style={{ backgroundImage: `url(https://github.com/${user.githubUsername}.png)` }}></div>
              </div>
            ))}

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
                <Link className="nav-link-right" to="/signup">SIGN UP</Link>
                <Link className="nav-link-right" to="/login">LOG IN</Link>
              </div>
              {/* <img className="image2"
                src="https://avatars2.githubusercontent.com/u/25213510?s=460&u=ccd76bfb4349453011a6f276200dbcf087be71c2&v=4"
                alt="profile" /> */}
              <div className="card-info2">
                <p>Sign in to see your profile info</p>
              </div>
            </div>
            <div className="card-container">

              {props.users.map((user, idx) => (
                <div key={idx} className="post-card">
                  <div className="post-card__content">
                    <div className="post-card__info">
                      <h2>{user.name}</h2>
                      <p>{user.cohort.discipline}</p>
                      <p>{user.cohort.classNo}</p>
                      <a href={`https://github.com/${user.githubUsername}`} target="_blank" rel="noopener noreferrer">Github Link</a>
                    </div>
                  </div>
                  <div className="post-card__img" id="post-card__img" style={{ backgroundImage: `url(https://github.com/${user.githubUsername}.png)` }}></div>
                </div>
              ))}

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