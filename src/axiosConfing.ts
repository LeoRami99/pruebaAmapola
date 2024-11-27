import axios from "axios";


const instance = axios.create({
    baseURL: "https://pttest.doctorone.com/api/",
    timeout: 10000,
})

export default instance;