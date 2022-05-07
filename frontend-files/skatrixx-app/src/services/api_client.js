import axios from "axios";
export const loggedUser = localStorage.getItem("userId")



export default axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-type": "application/json"
  }
});