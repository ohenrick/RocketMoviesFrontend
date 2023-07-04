import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-backend-fq91.onrender.com"
});