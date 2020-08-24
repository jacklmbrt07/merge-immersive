import React, { useState, useEffect } from 'react';
import mockUser from '../components/context/mockData.js/mockUser';
import mockRepos from '../components/context/mockData.js/mockRepos';
import mockFollowers from '../components/context/mockData.js/mockFollowers';
import axios from 'axios';
import { response } from 'express';

const rootURL = 'https://api.github.com/';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [gUser, setGUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    const [requests, setRequests] = useState(0);
    const [error, setError] = useState({ show: false, msg: "" })

    const searchGitHubUser = async (user) => {
        const respone = await axios(`${rootURL}/users/${user}`)
            .catch(err => console.log(err))
        if (respone) {
            setGUser(respone.data);
            const { login, followers_url } = respone.data;
            axios(`${rootURL}/users/${login}/repos?per_page=100`)
                .then((response) => setRepos(response.data));
            axios(`${followers_url}?per_page=100`)
                .then((response) => setFollowers(response.data));
        }
        else {
            toggleError(true, 'There is no user with that username')
        }
    };

    const checkRequsts = () => {
        axios(`${rootURL}/rate_limit`)
            .then((data) => {
                let { rate: { remaining } } = data;

                setRequests(remaining);
                if (remaining === 0) {
                    toggleError(true, 'Sorry, you have excessed your hourly limit')
                }
            })
            .catch((err) => console.log(err));
    }
    function toggleError(show = false, msg) {
        setError({ show, msg })
    }
    useEffect(checkRequsts, []);

    return (<GithubProvider.Provider value={{ gUser, repos, followers, requests, error, searchGitHubUser }}>{children}</GithubProvider.Provider>);
}

export { GithubProvider, GithubContext };