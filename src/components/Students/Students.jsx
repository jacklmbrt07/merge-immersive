import React, { useState, useEffect } from 'react';
import "../Students/Students.css"
import "../Students/Student.css"
import TagsInput from '../Tags/TagsInput'
import { ReactComponent as DefaultImage } from '../../images/user.png'
import { NavDropdown, ProgressBar } from 'react-bootstrap';

import axios from 'axios'


const Students = (props) => {

    const rootUrl = 'http://api.github.com';

    const [img, setImg] = useState('')
    const [url, setUrl] = useState('')
    const [bio, setBio] = useState('')
    const [twitter, setTwitter] = useState('')
    const [blog, setBlog] = useState('')
    const [followers, setFollowers] = useState('')
    const [following, setFollowering] = useState('')
    const [repo, setRepo] = useState('')
    const [userInput, setUserInput] = useState('')



    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/profile`, {
            method: "PUT",
            body: JSON.stringify({
                id: props.user._id,
                githubUsername: props.user.githubUsername
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res)
                res.json().then(data => {
                    setData(data)
                })
            })
    }, []);

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

    const handleSubmit = async () => {
        const userName = props.user.githubUsername;
        const githubUrl = `https://api.github.com/users/${userName}`;
        const response = await axios(githubUrl, {
            headers: {
                "User-Agent": "hoseacodes",
                "Authorization": "token " + process.env.GitHub_Token
            }
        }).catch(err => console.log(err));
        if (response) {
            setData(response.data)
        }
    }

    const [loading, setIsLoading] = useState(true);
    const [requests, setRequests] = useState(0);

    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
            .then((data) => {
                let {
                    rate: { remaining },
                } = data;
                setRequests(remaining);
                if (remaining === 0) {

                }
            })
            .catch((error) => console.log(error));
    };

    useEffect(checkRequests, [])

    const selectedTags = tags => {
        console.log(tags);
    };


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
                                <h5>Profile Info</h5>
                                <br />
                                <p>Github Username:</p>
                                <p> {props.user.githubUsername}</p>
                                <p className='repo-description'>{bio}</p>
                                <hr />
                                <p>Loaction: </p>
                                <p>{props.user.location.city || 'GA Lounge Couch'}, {props.user.location.unitedState}</p>
                                <hr />
                                <p>Current Employer:</p>
                                <p>{props.user.company || 'Independent'}</p>
                                <hr />
                            </div>
                        </div>



                        <div className="card-container">

                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h2>Profile Progress</h2>
                                        <ProgressBar now={80} label={`${80}%`} />

                                    </div>
                                </div>
                            </div>

                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h2>User Bio</h2>
                                        <p>{props.user.bio}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h2>User Bio</h2>
                                        <p>{props.user.bio}</p>

                                    </div>
                                </div>
                            </div>

                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h1> Github Stats</h1>

                                        <form onSubmit={handleSubmit}>
                                            {requests > 0 &&
                                                <button content="search">Generate</button>
                                            }
                                            <h3>Requests Remaining: {requests} / 60</h3>
                                        </form>
                                        <p>Followers: {followers}</p>
                                        <p>Following: {following}</p>
                                        <p>Repos: {repo}</p>
                                        <a href={url}>Follow</a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h1>Social</h1>
                                        <p>Favorite Emoji: <span role="img" alt="aria-label">{props.user.faveEmoji || 'This is our favorite Emoji 🤠'}</span></p>
                                        <hr />
                                        <h6>Social Media</h6>
                                        <hr />
                                        <p>Twitter Handle @{twitter || 'No Twitter Info.'}</p>
                                        <a href={`https://${blog}`}>{blog}</a>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h1>Hobbies</h1>
                                        <p>{props.user.hobbies}</p>
                                        <TagsInput selectedTags={selectedTags} user={props.user} />
                                        <hr />

                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h1>Publications</h1>
                                        {props.user.publications.map((publication, index) => (
                                            <span key={index}>
                                                <p>{publication || 'The world is awaiting your greatness'}</p>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
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
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h1>Projects</h1>
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




