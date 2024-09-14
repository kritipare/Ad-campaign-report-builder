import axios from "axios";

const instance = axios.create({
    baseURL: "https://mocki.io/v1/9cf9805b-c982-4001-9a9b-cbe20c6be497",
});

export default instance;
