import axios from "axios";
const API_URL = "http://localhost:8080/";
 
const API = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export default API;

