
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Students = (props) => {
    const { user } = props
    if (!user || user.length === 0) return <p>No users available</p>
    // const [info, setInfo] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     const fecthInfo = async () => {
    //         const items = await axios(`https://api.github.com/users/hoseacodes`)

    //         console.log(items.data)
    //         setInfo(items.data)
    //         setIsLoading(false)
    //     }
    //     fecthInfo();
    // })

    return (
        <>
            <h2 className='list-head'> {user.name}</h2>
            <h3 className='list-head'> {user.login}</h3>
            <img src={user.avatar_url} alt={user.name} />
            <a href={user.html_url}>{user.html_url}</a>
            <p className='repo-description'>{user.bio}</p>
            <div>
                <p>@{user.twitter_username || 'No Twitter Info.'}</p>
            </div>
            <div>
                <a href={user.html_url}>Follow</a>
            </div>
            <div>
                <p>{user.company || 'Independent'}</p>
            </div>
            <div>
                <p>{user.location || 'GA Lounge Couch'}</p>
                <a href={`https://${user.blog}`}>{user.blog}</a>
            </div>        </>
    );
};

export default Students;



// export default Students;

