import axios from "axios";

const api = axios.create({          //axiosInstance
    baseURL : "http://localhost:5000",
})

export default api;