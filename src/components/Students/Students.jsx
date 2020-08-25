
import React, { useState, useEffect } from 'react';

const Students = () => {
    const [name, setName] = useState('')
    const [userName, setuserName] = useState('')
    const [img, setImg] = useState('')
    const [url, setUrl] = useState('')
    const [bio, setBio] = useState('')
    const [twitter, setTwitter] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [blog, setBlog] = useState('')
    const [followers, setFollowers] = useState('')
    const [following, setFollowering] = useState('')
    const [repo, setRepo] = useState('')
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/hoseacodes')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, []);

    const setData = ({ name, login, avatar_url, html_url, bio, twitter_username, company, location, blog, followers, following, public_repos }) => {
        setName(name);
        setuserName(login);
        setImg(avatar_url);
        setUrl(html_url);
        setBio(bio);
        setTwitter(twitter_username);
        setCompany(company);
        setLocation(location);
        setBlog(blog);
        setFollowers(followers);
        setFollowering(following);
        setRepo(public_repos);

    }

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }
    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data)
            })
    }

    return (
        <>
            <h1>Hello {name}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Github User" name="github user" onChange={handleSearch} />
                <button content="search">Search</button>
            </form>
            <h3 className='list-head'> {userName}</h3>
            <img src={img} alt={name} />
            <p className='repo-description'>{bio}</p>
            <div>
                <p>Twitter Handle @{twitter || 'No Twitter Info.'}</p>
            </div>
            <div>
                <a href={url}>Follow</a>
                <p>Followers {followers}</p>
                <p>Following {following}</p>
                <p>Repos {repo}</p>
            </div>
            <div>
                <p>{company || 'Independent'}</p>
            </div>
            <div>
                <p>{location || 'GA Lounge Couch'}</p>
                <a href={`https://${blog}`}>{blog}</a>
            </div>
            <div>
                <iframe height="600" width="800" scrolling="no" title="fx." src="//codepen.io/ycw/embed/JqwbQw/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>

            </div>
        </>

    );
}


export default Students;




