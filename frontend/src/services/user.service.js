import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://127.0.0.1:8000/api/test/";

const getPublicContent = async () => {
    return await axios.get(`${API_URL}all`);
};

const getUserBoard = async () => {
    return await axios.get(`${API_URL}user`, { headers: authHeader() });
};

const getModeratorBoard = async () => {
    return await axios.get(`${API_URL}mod`, { headers: authHeader() });
};

const getAdminBoard = async () => {
    return await axios.get(`${API_URL}admin`, { headers: authHeader() });
};

export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};