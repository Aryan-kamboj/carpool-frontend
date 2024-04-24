import { toast } from "react-hot-toast";
import { axios } from "axios";

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log("DID WE RUN");
    if (error.response.sattus === 401) {
      localStorage.removeItem("token");
      toast.dismiss();
      toast.error("Login expired please log in again");
    }
  }
);
