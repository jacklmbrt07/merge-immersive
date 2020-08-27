export function getGithubInfo(props) {
    const rootURL = "https://api.github.com/";
    const userURL = {
        url: rootURL + 'users/' + props.userName,
        method: 'GET',
        headers: {
            "User-Agent": "hoseacodes",
            "Authorization": "token " + process.env.GitHub_Token
        }
    }
    return fetch(userURL, { mode: 'cors' }).then(res => res.json())
}



