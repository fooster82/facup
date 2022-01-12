import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://127.0.0.1:8000/api/content/";

const getPublicContent = async () => {
    return await axios.get(`${API_URL}all`);
};

const getUserContent = async () => {
    return await axios.get(`${API_URL}user`, { headers: authHeader() });
};

const getAdminContent = async () => {
    return await axios.get(`${API_URL}admin`, { headers: authHeader() });
};

export default {
    getPublicContent,
    getUserContent,
    getAdminContent,
};