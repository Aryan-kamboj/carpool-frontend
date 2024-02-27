import { apiConnector } from "../apiConnection"
import { createRideEndpoints } from "../apiEndpoints"
import toast from "react-hot-toast";

export const createRideApi = async (from, to, capacity, date, desc) => {
    try {
        const bodyData={
            from, to, capacity, date, desc
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