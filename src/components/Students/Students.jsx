// import React, { Component } from 'react';

// class Students extends Component {
//     studentDiv = React.createRef();


//     render() {
//         return (
//             <div ref={this.studentDiv} >
//                 <form action="/" method="POST">
//                     <input type="text" name='username'
//                         class="form-contorl" placeholder="Enter a GitHub Username"></input>
//                     <button class=" btn btn-sucess" type="submit">GO!</button>
//                 </form>
//             </div>
//         );
//     }
// }




import React from 'react';

const Students = (props) => {
    const { user } = props;
    if (!user || user.length === 0) return <p>No users available</p>;

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

