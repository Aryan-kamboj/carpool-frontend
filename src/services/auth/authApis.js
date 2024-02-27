import { apiConnector } from "../apiConnection"
import { loginEndpoint, signUpEndpoints } from "../apiEndpoints"
import toast from "react-hot-toast";

export const loginApi = async (email,password) =>{
    try {
        console.log(loginEndpoint.withCredentials);
        const bodyData={
            email,password
        }
        const request = {
            url:loginEndpoint.url,
            method:loginEndpoint.method,
            bodyData,
            withCredentials: true,
        }
        console.log(request)
        toast.loading("Logging you in");
        const {data} = await apiConnector(request);
        toast.dismiss()
        toast.success("Logged in successfudilly")
        console.log(data);
        return data;
    } catch (error) {
        toast.dismiss()
        toast.error("Could not log you in")
       console.error(error);
    }
}
export const signupApi = async (firstName,lastName,email,password)=>{
    try {
        const bodyData = {
            firstName,lastName,email,password
        }
        const request = {
            url:signUpEndpoints.url,
            method:signUpEndpoints.method,
            bodyData,
            withCredentials:signUpEndpoints.withCredentials
        }
        toast.loading("Signing you up");
        const {data} = await apiConnector(request);
        return data;
    } catch (error) {
        console.log(error)
    }
}
export const testAuth = async ()=>{
    const url = "https://carpool-backend-muj.onrender.com/api/auth/test-auth"
    console.log(await apiConnector({url,method:"GET"}));
}