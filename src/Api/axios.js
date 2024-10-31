import axios from "axios"

const axiosInstance = axios.create({
  
  // baseURL: "http://127.0.0.1:5001/clone-a862d/us-central1/api",
  //  baseURL:"http://localhost:5000",
   baseURL:"https://amazon-clone-2024-827l.onrender.com",

});

export {axiosInstance}