import { useEffect, useState } from "react";
import { rideRequestsApi } from "../services/auth/rideApis.js";

const colorMap = {
  "pending": "bg-yellow-400",
  "approved": "bg-green-400",
  "rejected": "bg-red-400"
}

function RequestItem({ request }) {
  return (
    <div className={`w-full flex justify-between bg-stone-100 py-3 px-4 rounded-lg`}>
      <div className="flex gap-1 items-center">
        <div className="font-bold">{request?.ride.from}</div>
        <p>to</p>
        <div className="font-bold">{request?.ride.to}</div>
      </div>
      <div className="flex items-center">
        <div>{request?.ride.host.firstName}</div>
      </div>
      <div className={`px-4 py-2 rounded-md ${colorMap[request.status]}`}>{request.status}</div>
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
    <div className={"w-screen flex-1 p-4 sm:p-8 xl:p-10"}>
      <div className="flex flex-col gap-4 w-full sm:max-w-[90%] xl:max-w-[60%] mx-auto">
        {userRideRequests?.length > 0 && userRideRequests.map(function (userRequest) {
          return <RequestItem key={userRequest._id} request={userRequest} />
        })}
        {userRideRequests?.length === 0 && <p className="self-center">No Requests made yet.</p>}
      </div>
    </div>
  )
}
