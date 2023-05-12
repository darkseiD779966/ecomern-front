import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecand.onrender.com",
});

export default instance;
