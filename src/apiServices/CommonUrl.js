import axios from "axios";
import { toast } from "react-toastify";

const CommonUrl = axios.create({
    baseURL: "http://localhost:8001",
  });
  
CommonUrl.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(111111,error);
    if (error.response.status === 401) {
      toast.error(error.response.data.error);
    } else if (error.response.status === 404) {
      toast.error(error.message);
    } else if (error.response.status === 400) {
      toast.error(error.message);
    }
    return Promise.reject(error);
  }
);
  export default CommonUrl;