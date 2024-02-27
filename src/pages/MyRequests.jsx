import { useEffect, useState } from "react";
import { rideRequestsApi } from "../services/auth/rideApis.js";

function RequestItem({ request }) {
  return (
    <div className={`w-full flex justify-between`}>
      <div className="flex gap-1 items-center">
        <div className="font-bold">{request?.ride.from} To </div>
        <div className="font-bold">{request?.ride.to}</div>
      </div>
      <div>{request?.ride.host}</div>
      <div>{request?.status}</div>
    </div>
  )
}

export default function MyRequests() {
  const [userRideRequests, setUserRideRequests] = useState([]);

  useEffect(() => {
    async function getRideRequests() {
      const data = await rideRequestsApi()
      console.log(data);
      setUserRideRequests(data.requests);
    }

    getRideRequests();
  }, []);

  return (
    <div className={"w-screen p-10"}>
      {userRideRequests && userRideRequests.map(function (userRequest) {
        return <RequestItem key={userRequest._id} request={userRequest} />
      })}
    </div>
  )
}