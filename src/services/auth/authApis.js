import { apiConnector } from "../apiConnection"
import { loginEndpoint, signUpEndpoints } from "../apiEndpoints"
import toast from "react-hot-toast";
const login = localStorage.getItem("login")

// export const loginApi = async (email,password) =>{
//     try {
//         console.log(loginEndpoint.withCredentials);
//         const bodyData={
//             email,password
//         }
//         const request = {
//             url:loginEndpoint.url,
//             method:loginEndpoint.method,
//             bodyData,
//             withCredentials: true,
//         }
//         console.log(request)
//         toast.loading("Logging you in");
//         const {data} = await apiConnector(request);
//         toast.dismiss()
//         toast.success("Logged in successfudilly")
//         console.log(data);
//         return data;
//     } catch (error) {
//         toast.dismiss()
//         toast.error("Could not log you in")
//        console.error(error);
//     }
// }
export const loginApi = async ({email,password})=>{
    try {
        const bodyData={
            email:email,
            password:password,
        }
        const request = {
            method:loginEndpoint.method,
            url:loginEndpoint.url,
            bodyData:bodyData,
            creds:true,
        }
        toast.loading("Logining you in");
        const {data} = await apiConnector(request);
        toast.dismiss();
        localStorage.removeItem("token");
        console.log(localStorage);
        localStorage.setItem("token",`${data.token}`)
        store.dispatch(updateUserType(data.user))
        toast.success("User logged in");
        window.location.href="/";
        return data;
    } catch (error) {
        console.log(error);
        toast.dismiss();
        toast.error(error.response.data.message);
        updateUserType(null);
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
        toast.dismiss();
        toast.success("User registered successfully");
        return data;
    } catch (error) {
        toast.dismiss();
        toast.error("Could not register user");
        console.log(error)
    }
}
export const testAuth = async ()=>{
    const url = "https://carpool-backend-muj.onrender.com/api/auth/test-auth"
    console.log(await apiConnector({url,method:"GET"}));
}