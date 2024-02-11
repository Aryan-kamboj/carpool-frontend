import { apiConnector } from "../apiConnection"
import { loginEndpoint } from "../apiEndpoints"

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
            withCredentials:loginEndpoint.withCredentials,
            // method:"post",
            // url:"http://localhost:4002/api/auth/login",
            // bodyData:bodyData,
            // creds:true,
        }
        console.log(request)
        const {data} = await apiConnector(request);
        console.log(data)
    } catch (error) {
       console.error(error); 
    }
}