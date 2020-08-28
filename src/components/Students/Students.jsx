import React, { useState, useEffect } from 'react';
import "../Students/Students.css"
import "../Students/Student.css"
import TagsInput from '../Tags/TagsInput'
// import { ReactComponent as DefaultImage } from '../../images/user.png'
import { NavDropdown, ProgressBar } from 'react-bootstrap';
import { GoMarkGithub, GoPerson, GoLocation, GoBriefcase, GoGlobe } from 'react-icons/go';
import { VscTwitter, VscBroadcast } from "react-icons/vsc";

import axios from 'axios'
// import loading-dog from '../../images/loading-dog.gif'


const Students = (props) => {

    const [img, setImg] = useState('')
    const [url, setUrl] = useState('')
    const [bio, setBio] = useState('')
    const [twitter, setTwitter] = useState('')
    const [blog, setBlog] = useState('')
    const [followers, setFollowers] = useState('')
    const [following, setFollowering] = useState('')
    const [repo, setRepo] = useState('')




    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_SERVER_URL}/profile`, {
    //         method: "PUT",
    //         body: JSON.stringify({
    //             id: props.user._id,
    //             githubUsername: props.user.githubUsername
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(res => {
    //             console.log(res)
    //             res.json().then(data => {
    //                 setData(data)
    //             })
    //         })
    // }, []);

    const setData = ({ avatar_url, html_url, bio, twitter_username, blog, followers, following, public_repos }) => {
        setImg(avatar_url);
        setUrl(html_url);
        setBio(bio);
        setTwitter(twitter_username);
        setBlog(blog);
        setFollowers(followers);
        setFollowering(following);
        setRepo(public_repos);

    }
    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_SERVER_URL}/profile`, {
    //         method: "PUT",
    //         body: JSON.stringify({
    //             id: props.user._id,
    //             githubUsername: props.user.githubUsername
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(res => {
    //             console.log(res)
    //             res.json().then(data => {
    //                 setData(data)
    //             })
    //         })
    // }, []);


    const rootUrl = 'http://api.github.com';
    const [isLoading, setIsLoading] = useState(false);
    const [requests, setRequests] = useState(0);
    const [repos, setRepos] = useState();
    const [follower, setFollower] = useState();

    const handleSubmit = () => {
        const githubUserURL = `https://api.github.com/users/${props.user.githubUsername}`;
        axios.get(githubUserURL)
            .then((response) => {
                const data = response.data;
                this.setData(data);
            })
            .catch(() => {
                alert('Error with github retrieving data!!!');
            });
    }

    // const handleSubmit = async () => {
    //     const userName = props.user.githubUsername;
    //     const githubUrl = `https://api.github.com/users/${userName}`;
    //     const response = await axios.get(githubUrl
    //         , {
    //             headers: {
    //                 "User-Agent": "hoseacodes",
    //                 "Authorization": "token " + process.env.GitHub_Token
    //             }
    //         }
    //     ).catch(err => console.log(err));
    //     if (response) {
    //         setData(response.data);
    //         const followers_url = response.data;
    //         await Promise.allSettled([
    //             axios(`${rootUrl}/users/${userName}/repo?per_page=100`),
    //             axios(`${followers_url}/?per_page=100`)
    //         ]).then((results) => {
    //             const [repos, followers] = results;
    //             setRepos(repos.data);
    //             setFollower(followers.data);
    //         }).catch((err) => console.log(err));
    //     }
    //     checkRequests();
    //     setIsLoading(false);
    // }

    // const checkRequests = () => {
    //     axios(`${rootUrl}/rate_limit`)
    //         .then((data) => {
    //             let {
    //                 rate: { remaining },
    //             } = data;
    //             setRequests(remaining);
    //         }).catch((error) => console.log(error));
    // };

    // useEffect(checkRequests, [])

    const selectedTags = tags => {
        console.log(tags);
    };

    if (isLoading) {
        return (
            <>
                <img src='../../images/loading-dog.gif' alt='loading'></img>
            </>
        )
    }
    return (
        <>
            <section className="feed">
                <div className="container">
                    <div className="feed-container">
                        <div className="profile-card2">
                            <div className="card-header2">
                                <h2>Hello {props.user.name}</h2>
                                <label>Area of Discipline: {props.user.cohort.discipline}</label>
                                <p>Class: {props.user.cohort.classNo}</p>
                            </div>
                            <img className="image2"
                                src={`https://github.com/${props.user.githubUsername}.png`} alt={props.user.name} />
                            <div className="card-info2">
                                <h5 className="profileinfo">Profile Info</h5>
                                <br />
                                <p><GoMarkGithub /> Github Username:</p>
                                <p><GoPerson /> {props.user.githubUsername}</p>
                                <p className='repo-description'>{bio}</p>
                                <hr />
                                <p>< GoLocation /> Loaction: </p>
                                <p><GoGlobe /> {props.user.location.city || 'GA Lounge Couch'}, {props.user.location.unitedState}</p>
                                <hr />
                                <p><GoBriefcase /> Current Employer:</p>
                                <p><VscBroadcast /> {props.user.company || 'Independent'}</p>
                                <hr />
                            </div>
                        </div>



                        <div className="card-container">

                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info2">
                                        <h2 className='cardtitleinfo'>Profile Progress</h2>
                                        <hr />
                                        <ProgressBar now={80} label={`${80}%`} />

                                    </div>
                                </div>
                            </div>

                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info2">
                                        <h2 className='cardtitleinfo'>User Bio</h2>
                                        <hr />
                                        <p>{props.user.bio}</p>

                                    </div>
                                </div>
                            </div>
                            {/* <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info2">
                                        <h2 className='cardtitleinfo'>Github Stats</h2>
                                        <hr />
                                        <form className='cardtitleinfo' onSubmit={handleSubmit}>
                                            <button content="search">Generate Stats</button>
                                        </form>
                                        <p>Followers: {followers}</p>
                                        <p>Following: {following}</p>
                                        <p>Repos: {repo}</p>
                                        <a className='cardtitleinfo' href={url}>Follow</a>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <div className='followers'>
                                            <h3>Followers</h3>
                                            {follower.map((follower, index) => (
                                                <article key={index}>
                                                    <img className='followerimg' src={follower.avatar_url} alt={follower.login} />
                                                    <div>
                                                        <h4>{follower.login}</h4>
                                                        <a href={follower.html_url}>{follower.html_url}</a>
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <div>
                                            <h3>Repos</h3>
                                            {repos.map((repo, index) => {
                                                const number = index + 1;
                                                return (
                                                    <li key={repo.id} className='list'>
                                                        <span className='repo-text'>Repo {number}: {repo.name} </span>
                                                        <p className='repo-description'>{repo.description}</p>
                                                        <hr />
                                                    </li>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info2">
                                        <h2 className='cardtitleinfo'> Social</h2>
                                        <hr />
                                        <p>Favorite Emoji: <span role="img" alt="aria-label">{props.user.faveEmoji || 'This is our favorite Emoji 🤠'}</span></p>
                                        <p>Twitter Handle {isLoading} <VscTwitter /> @{twitter || 'No Twitter Info.'}</p>
                                        <a href={`https://${blog}`}> {isLoading}{blog}</a>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info2">
                                        <h2 className='cardtitleinfo'>Hobbies</h2>
                                        <hr />
                                        {/* <p>{props.user.hobbies}</p> */}
                                        <TagsInput selectedTags={selectedTags} user={props.user} />
                                        <hr />

                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info2">
                                        <h2 className='cardtitleinfo'>Publications</h2>
                                        <hr />
                                        {props.user.publications.map((publication, index) => (
                                            <span key={index}>
                                                <p>{publication || 'The world is awaiting your greatness'}</p>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h2>Code Pen</h2>
                                        <div>
                                            <iframe className="iframe"
                                                scrolling="no" title="fx."
                                                src="//codepen.io/ycw/embed/JqwbQw/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info2">
                                        <h2 className='cardtitleinfo'>Projects</h2>
                                        <hr />
                                        {props.user.projects.map((project, index) => (
                                            < span key={index} >
                                                <iframe title="p" height="600" width="600" src={project || 'The world is awaiting your greatness'}
                                                    frameborder="yes" allowtransparency="true" allowfullscreen="true"></iframe>
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
}


export default Students;




