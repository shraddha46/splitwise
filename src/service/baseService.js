import axios from 'axios';
export const baseURL= process.env.NODE_ENV === "production" ? "api" : "http://localhost:3001/api";

const baseService=axios.create({
    baseURL:baseURL
})

export default baseService;