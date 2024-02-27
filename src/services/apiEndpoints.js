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
    url: `${BASE_URL}/api/auth/user-requests`,
    method: "GET",
    withCredentials: true
}