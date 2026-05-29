import axios from "axios";

const API = axios.create({
    baseURL: "https://gramutsav.onrender.com/api/auth"
});

export default API;