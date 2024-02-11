import axios from "axios";

const axiosInstance = axios.create({});
export const apiConnector = ({method,url,bodyData,params,headers,withCredentials})=>{
    return axiosInstance({
        method:method?`${method}`:null,
        url:url?`${url}`:null,
        data:bodyData?bodyData:null,
        headers:headers?headers:null,
        withCredentials:withCredentials?true:false,
        params:params?params:null,
    })
}