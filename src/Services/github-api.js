
export function getGitHubUser(user) {
    const options = {
        url: `https://api.github.com/users/${user}`,
        headers: {
            "User-Agent": "hoseacodes",
            "Authorization": "token " + process.env.GitHub_Token
        }
    }
    return fetch(options, { mode: "cors" }).then(res => res.json());
}

