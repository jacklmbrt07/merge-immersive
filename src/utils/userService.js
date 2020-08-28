import tokenService from "./tokenService";


const BASE_URL = "/api/users/";

function signup(user) {
    return fetch(BASE_URL + "signup", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(user),
    })
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error("Email already taken!");
        })
        .then(({ token }) => {
            tokenService.setToken(token);
        });
}

function getUser() {
    return tokenService.getUserFromToken();
}

function logout() {
    tokenService.removeToken();
}

function login(creds) {
    return fetch(BASE_URL + "login", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(creds),
    })
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then(({ token }) => tokenService.setToken(token));
    // .catch((err) => console.log("userService: ", err));
}

function updateUser(user, info) {
    //findById?, what is userID
    return fetch(BASE_URL + `${user._id}`, {
        method: "PUT",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(info),
    }).then((res) => {
        if (res.ok) return res.json();
    });
}

function githubUser(user, info) {
    return fetch(BASE_URL + `${user._id}`, {
        method: "PUT",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(info),
    }).then((res) => {
        if (res.ok) return res.json();
    });
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
  }

export default {
    signup,
    getUser,
    logout,
    login,
    updateUser,
    githubUser,
    index
};
