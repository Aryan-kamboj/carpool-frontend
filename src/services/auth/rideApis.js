import { apiConnector } from "../apiConnection"
import {createRideEndpoints, getRideRequestsEndpoints, myRidesEndpoint, searchRideEndpoints} from "../apiEndpoints"
import toast from "react-hot-toast";

export const createRideApi = async (from, to, capacity, date, description) => {
    try {
        const bodyData={
            from, to, capacity, date, description
        }
        const request = {
            url:createRideEndpoints.url,
            method:createRideEndpoints.method,
            bodyData,
            withCredentials: true,
        }
        console.log(request)
        toast.loading("Creating the ride...");
        const {data} = await apiConnector(request);
        toast.dismiss()
        toast.success("Ride created!")
        console.log(data);
        return data;
    } catch (error) {
        toast.dismiss()
        toast.error("Could not create the ride")
       console.error(error);
    }
}
export const searchRidesApi = async (from, to, date) => {
    try {
        const bodyData={
            from, to, date
        }
        const request = {
            url:searchRideEndpoints.url,
            method:searchRideEndpoints.method,
            bodyData,
            withCredentials: true,
        }
        console.log(request)
        toast.loading("Search for rides...");
        const {data} = await apiConnector(request);
        toast.dismiss()
        console.log(data);
        return data;
    } catch (error) {
        toast.dismiss()
        toast.error("Could not get rides")
       console.error(error);
    }
}
export async function rideRequestsApi() {
    try {
        const request = {
            url: getRideRequestsEndpoints.url,
            method: getRideRequestsEndpoints.method,
            withCredentials: getRideRequestsEndpoints.withCredentials
        };
        toast.loading("Fetching user ride requests");
        const { data } = await apiConnector(request);
        toast.dismiss();
        return data;
    } catch (err) {
        toast.dismiss();
        toast.error("Could not fetch user ride requests");
        console.error(err);
    } 
}
export const myRidesApi = async ()=>{
    try {
        const request = {
            method:myRidesEndpoint.method,
            url:myRidesEndpoint.url,
            withCredentials:myRidesEndpoint.withCredentials,
        }
        toast.loading("Getting your rides");
        const {data} = await apiConnector(request);
        toast.dismiss();
        toast.success("Your rides fetched");
        return data;
    } catch (error) {
        toast.dismiss();
        toast.error("Could not fetch rides");
        console.log(error)
    }
}