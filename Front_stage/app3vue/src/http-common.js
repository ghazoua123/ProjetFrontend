import axios from "axios";
 
export default axios.create({
  baseURL: "http://localhost:9099/user",
  headers: {
    "Content-type": "application/json",
  }
});