import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000
});

function getInstance() {
  return instance;
}

export default getInstance;
