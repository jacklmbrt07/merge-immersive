import React, { useState } from "react";
import "../Students/Students.css";
import "../Students/Student.css";
import TagsInput from "../Tags/TagsInput";
import { ProgressBar } from "react-bootstrap";
import {
  GoMarkGithub,
  GoPerson,
  GoLocation,
  GoBriefcase,
  GoGlobe,
} from "react-icons/go";
import { VscTwitter, VscBroadcast } from "react-icons/vsc";


const Students = (props) => {
  const [setImg] = useState("");
  const [setUrl] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [blog, setBlog] = useState("");
  const [setFollowers] = useState("");
  const [setFollowering] = useState("");
  const [setRepo] = useState("");

  const setData = ({
    avatar_url,
    html_url,
    bio,
    twitter_username,
    blog,
    followers,
    following,
    public_repos,
  }) => {
    setImg(avatar_url);
    setUrl(html_url);
    setBio(bio);
    setTwitter(twitter_username);
    setBlog(blog);
    setFollowers(followers);
    setFollowering(following);
    setRepo(public_repos);
  };

  const [isLoading] = useState(false);

  const selectedTags = (tags) => {
    console.log(tags);
  };

  if (isLoading) {
    return (
      <>
        <img src="../../images/loading-dog.gif" alt="loading"></img>
      </>
    );
  }
  return (
    <>
      <section className="feed">
        <div className="container">
          <div className="feed-container">
            <div className="profile-card2">
              <div className="card-header2">
                <h2>Hello {props.user.name}</h2>
                <label>
                  Area of Discipline: {props.user.cohort.discipline}
                </label>
                <p>Class: {props.user.cohort.classNo}</p>
              </div>
              <img
                className="image2"
                src={`https://github.com/${props.user.githubUsername}.png`}
                alt={props.user.name}
              />
              <div className="card-info2">
                <h5 className="profileinfo">Profile Info</h5>
                <br />
                <p>
                  <GoMarkGithub /> Github Username:
                </p>
                <p>
                  <GoPerson /> {props.user.githubUsername}
                </p>
                <p className="repo-description">{bio}</p>
                <hr />
                <p>
                  <GoLocation /> Loaction:{" "}
                </p>
                <p>
                  <GoGlobe /> {props.user.location.city || "GA Lounge Couch"},{" "}
                  {props.user.location.unitedState}
                </p>
                <hr />
                <p>
                  <GoBriefcase /> Current Employer:
                </p>
                <p>
                  <VscBroadcast /> {props.user.company || "Independent"}
                </p>
                <hr />
              </div>
            </div>

            <div className="card-container">
              <div className="post-card">
                <div className="post-card__content">
                  <div className="post-card__info2">
                    <h2 className="cardtitleinfo">Profile Progress</h2>
                    <hr />
                    <ProgressBar now={80} label={`${80}%`} />
                  </div>
                </div>
              </div>

              <div className="post-card">
                <div className="post-card__content">
                  <div className="post-card__info2">
                    <h2 className="cardtitleinfo">User Bio</h2>
                    <hr />
                    <p>{props.user.bio}</p>
                  </div>
                </div>
              </div>
              <div className="post-card">
                <div className="post-card__content">
                  <div className="post-card__info2">
                    <h2 className="cardtitleinfo"> Social</h2>
                    <hr />
                    <p>
                      Favorite Emoji:{" "}
                      <span role="img" alt="aria-label">
                        {props.user.faveEmoji ||
                          "This is our favorite Emoji 🤠"}
                      </span>
                    </p>
                    <p>
                      Twitter Handle {isLoading} <VscTwitter /> @
                      {twitter || "No Twitter Info."}
                    </p>
                    <a href={`https://${blog}`}>
                      {" "}
                      {isLoading}
                      {blog}
                    </a>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="post-card">
                <div className="post-card__content">
                  <div className="post-card__info2">
                    <h2 className="cardtitleinfo">Hobbies</h2>
                    <hr />
                    <TagsInput selectedTags={selectedTags} user={props.user} />
                    <hr />
                  </div>
                </div>
              </div>
              <div className="post-card">
                <div className="post-card__content">
                  <div className="post-card__info2">
                    <h2 className="cardtitleinfo">Publications</h2>
                    <hr />
                    {props.user.publications.map((publication, index) => (
                      <span key={index}>
                        <p>
                          {publication ||
                            "The world is awaiting your greatness"}
                        </p>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="post-card">
                <div className="post-card__content">
                  <div className="post-card__info2">
                    <h2 className="cardtitleinfo">Projects</h2>
                    <hr />
                    {props.user.projects.map((project, index) => (
                      <span key={index}>
                        <iframe
                          title="p"
                          height="600"
                          width="600"
                          src={
                            project || "The world is awaiting your greatness"
                          }
                          frameborder="yes"
                          allowtransparency="true"
                          allowfullscreen="true"
                        ></iframe>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Students;
