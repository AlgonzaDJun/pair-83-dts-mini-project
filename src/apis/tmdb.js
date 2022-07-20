import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
    baseURL: baseUrl,
})

export default tmdb;