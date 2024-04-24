import { apiConnector } from "../apiConnection";
import {
  createRideEndpoints,
  getRideRequestsEndpoints,
  myRidesEndpoint,
  reqToJoinEndpoint,
  searchRideEndpoints,
  getRideDetailsEndpoint,
  setReqStatusEndpoint
} from "../apiEndpoints";
import toast from "react-hot-toast";
const login = localStorage.getItem("token");
export const createRideApi = async (from, to, capacity, date, price, description) => {
  try {
    const bodyData = {
      from,
      to,
      capacity,
      date,
      price,
      description,
    };
    const request = {
      url: createRideEndpoints.url,
      method: createRideEndpoints.method,
      bodyData,
      headers: {
        'Authorization': `Bearer ${login}`,
      }
    };
    console.log(request);
    toast.loading("Creating the ride...");
    const { data } = await apiConnector(request);
    toast.dismiss();
    toast.success("Ride created!");
    console.log(data);
    return data;
  } catch (error) {
    toast.dismiss();
    toast.error("Could not create the ride");
    console.error(error);
  }
};
export const searchRidesApi = async (from, to, date) => {
  try {
    const bodyData = {
      from,
      to,
      date,
    };
    const request = {
      url: searchRideEndpoints.url,
      method: searchRideEndpoints.method,
      bodyData,
      headers: {
        'Authorization': `Bearer ${login}`,
      }
    };
    console.log(request);
    toast.loading("Search for rides...");
    const { data } = await apiConnector(request);
    toast.dismiss();
    console.log(data);
    return data;
  } catch (error) {
    toast.dismiss();
    toast.error("Could not get rides");
    console.error(error);
  }
};
export async function rideRequestsApi() {
  try {
    const request = {
      url: getRideRequestsEndpoints.url,
      method: getRideRequestsEndpoints.method,
      withCredentials: getRideRequestsEndpoints.withCredentials,
      headers: {
        'Authorization': `Bearer ${login}`,
      }
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
export const myRidesApi = async () => {
  try {
    const request = {
      method: myRidesEndpoint.method,
      url: myRidesEndpoint.url,
      withCredentials: myRidesEndpoint.withCredentials,
      headers: {
        'Authorization': `Bearer ${login}`,
      }
    };
    toast.loading("Getting your rides");
    const { data } = await apiConnector(request);
    toast.dismiss();
    toast.success("Your rides fetched");
    return data;
  } catch (error) {
    toast.dismiss();
    toast.error("Could not fetch rides");
    console.log(error);
  }
};
export const reqToJoinApi = async (id)=>{
  try {
    const bodyData = {
      rideId:id
    }
    const request = {
      url:reqToJoinEndpoint.url,
      method:reqToJoinEndpoint.method,
      withCredentials:reqToJoinEndpoint.withCredentials,
      bodyData,
      headers: {
        'Authorization': `Bearer ${login}`,
      }
    }
    toast.loading("Sending your request to host");
    await apiConnector(request);
    toast.dismiss();
    toast.success("Request sent to host");
  } catch (error) {
    toast.dismiss();
    toast.error("Could not send your request");
    console.log(error)
  }
}
export const getRideDetails = async (id)=>{
  try {

    const request = {
      url:`${getRideDetailsEndpoint.url}/get/${id}`,
      method:getRideDetailsEndpoint.method,
      withCredentials:getRideDetailsEndpoint.withCredentials,
      headers: {
        'Authorization': `Bearer ${login}`,
      }
    }
    toast.loading("Fetching ride detail");
    const {data} = await apiConnector(request);
    console.log(data)
    toast.dismiss();
    toast.success("Ride details fetched");
    return data;
  } catch (error) {
    toast.dismiss();
    toast.error("Could not get ride details");
    console.log(error)
  }
}
export const setReqStatus = async (requestId,status)=>{
  try {
    const bodyData = {
      requestId,status
    } 
    const request = {
      url:`${setReqStatusEndpoint.url}`,
      method:setReqStatusEndpoint.method,
      withCredentials:setReqStatusEndpoint.withCredentials,
      bodyData,
      headers: {
        'Authorization': `Bearer ${login}`,
      }
    }
    toast.loading("Updating request status");
    await apiConnector(request);
    toast.dismiss();
    toast.success("Ride status updated");
  }catch (error) {
    toast.dismiss();
    toast.error("Could not get ride details");
    console.log(error)
  }
}
// export const setRequestStatus = async (updated)=>{
//   try {
    
//   } catch (error) {
//     toast.dismiss();
//     toast.error("Could not update request status");
//     return 
//   }
// }