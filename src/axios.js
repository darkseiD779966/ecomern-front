import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecomern-back.onrender.com",
});

export default instance;
