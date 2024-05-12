import axios from "axios";
import { toast } from "react-hot-toast";
const axiosInstance = axios.create({});
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      console.log("DID WE RUN");
      localStorage.removeItem("token");
      window.location.href = "/login";
      toast.dismiss();
      toast.error("Login expired please log in again");
    }
  }
)
export const apiConnector = ({
  method,
  url,
  bodyData,
  params,
  headers,
}) => {
  return axiosInstance({
    method: method ? `${method}` : null,
    url: url ? `${url}` : null,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  })
};
