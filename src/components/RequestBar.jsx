import { useState } from "react";
import { DropDown } from "./DropDown";
import { useDispatch } from "react-redux";
import { getRideDetails, setReqStatus } from "../services/auth/rideApis";
import { setRideDetails } from "../store/slices/dataSlice";
import { useParams } from "react-router-dom";
export const RequestBar = ({request}) => {
    console.log(request);
    const status = request?.status;
    const colorMap = {
    "pending": "bg-yellow-400",
    "approved": "bg-green-400",
    "rejected": "bg-red-400"
    }
    const {id} = useParams();
    const dispatcher = useDispatch()
    const setStatusHandler = async (selected)=>{
        await setReqStatus(request._id,selected);
        dispatcher(setRideDetails((await getRideDetails(id).then((value)=>{console.log(value.rideDetails);return value.rideDetails}))));
    }
  return (
    <div className="w-[100%]">{
        request&&<div className="flex justify-around items-center border-white border-b-[1px] bg-[rgba(255,255,255,0.7)] py-2 ">
            <div>{request.passenger.firstName} {request.passenger.lastName}</div>
            <div>{request.createdAt.split("T")[0]}</div>
            <div className={` px-3 py-2` }><DropDown handler={setStatusHandler} selected={status}/></div>
        </div>
    }
    </div>
  )
}
{/* {
    "_id": "65df19cccbf70ed1d138a9f3",
    "passenger": {
        "ratingStats": {
            "totalRatings": 0,
            "averageRating": null
        },
        "_id": "65df192ccbf70ed1d138a9e6",
        "firstName": "admin",
        "lastName": "admin",
        "password": "$2b$11$SeP5BjPkStrNbxoSSNlRJOVk1IAnfNSkzn5Qnp2YBiQ47Ba4f5hAO",
        "email": "admin@muj.manipal.edu",
        "verifiedEmail": true,
        "createdAt": "2024-02-28T11:29:48.299Z",
        "updatedAt": "2024-02-28T11:29:48.299Z",
        "__v": 0
    },
    "ride": "65df19b4cbf70ed1d138a9ea",
    "status": "pending",
    "createdAt": "2024-02-28T11:32:28.921Z",
    "updatedAt": "2024-02-28T11:32:28.921Z",
    "__v": 0
} */}
