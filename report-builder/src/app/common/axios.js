import axios from "axios";

const instance = axios.create({
    baseURL: "https://mocki.io/v1/f72be693-f2f4-4ccb-9594-42d039d74a42",
});

export default instance;
