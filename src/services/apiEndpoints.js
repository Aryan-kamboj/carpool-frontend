// console.log(process.env)
const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL)
// process.env.REACT_APP_BASE_URL;
export const loginEndpoint = {
    url:`${BASE_URL}/api/auth/login`,
    method:"POST",
    withCredentials: true,
}
export const signUpEndpoints = {
    url:`${BASE_URL}/api/auth/register`,
    method:"POST",
    withCredentials:true,
}
export const createRideEndpoints = {
    url:`${BASE_URL}/api/rides/create`,
    method:"POST",
    withCredentials:true,
}
export const searchRideEndpoints = {
    url: `${BASE_URL}/api/rides/search`,
    method:"POST",
    withCredentials:true,
}
export const getRideRequestsEndpoints = {
    url: `${BASE_URL}/api/rides/user-requests`,
    method: "GET",
    withCredentials: true
}
export const myRidesEndpoint = {
    url: `${BASE_URL}/api/rides/user-created`,
    method: "GET",
    withCredentials: true    
}
export const reqToJoinEndpoint = {
    url: `${BASE_URL}/api/rides/request`,
    method: "POST",
    withCredentials: true 
}
export const getRideDetailsEndpoint = {
    url: `${BASE_URL}/api/rides`,
    method: "POST",
    withCredentials: true  
}