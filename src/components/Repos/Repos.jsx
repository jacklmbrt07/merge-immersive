
import React, { useState, useEffect } from 'react';

const Repos = () => {
    const [repos, setRepo] = useState('');
    const [name, setName] = useState('');
    const [description, setDesciption] = useState('');
    const [info, setInfo] = useState({
        gRepos: null,
    });

    useEffect(() => {
        const githubURL = 'https://api.github.com/users/hoseacodes/repos';
        fetch(githubURL)
            .then(res => res.json())
            .then(info => {
                const allRepos = info.data;
                setInfo({ gRepos: allRepos });
                setData(info)
            })

    }, [setInfo]);

    const setData = ({ repos, name, description }) => {
        setRepo(repos)
        setName(name)
        setDesciption(description)
    }

    return (
        <div className='App'>
            <ul>
                <h2 className='list-head'> Repos</h2>
                {info.map((repo) => {
                    return (
                        <li key={repos} className='list'>
                            <span className='repo-text'>{name} </span>
                            <p className='repo-description'>{description}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

}

export default Repos;




