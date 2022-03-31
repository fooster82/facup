import axios from 'axios';

//const API_URL = "http://127.0.0.1:8000/api/";
const API_URL = "https://facup.herokuapp.com/api";

const register = (username, email, password) => {
    return axios.post(`${API_URL}users/`, {
        "username": username,
        "email": email,
        "password": password,
    });
};

const login = async (username, password) => { 
    const userDetails = await checkUser(username, password);

    try {        
        if (userDetails.username != undefined && userDetails.password != undefined) {
            localStorage.setItem("user", JSON.stringify(userDetails));
            return userDetails;
        }        
    } catch {        
        throw new Error("Incorrect username or password!");
    };
};

const logout = () => {
    localStorage.removeItem("user");
};

async function checkUser(username, password) {
    let { data } = await axios.get(`${API_URL}users/`);

    for (let i=0 ; i < data.length ; i++) {
        if (data[i].username === username && data[i].password === password) {
            const currentUser = data[i]
            return currentUser
        }
    }
}

export default {
    register,
    login,
    logout,
};