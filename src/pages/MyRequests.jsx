import { useEffect, useState } from "react";
import { rideRequestsApi } from "../services/auth/rideApis.js";
import { MdCancel } from "react-icons/md";

const colorMap = {
  "pending": "bg-yellow-400",
  "approved": "bg-green-400",
  "rejected": "bg-red-400"
}

function RequestItem({ setUserRideRequests, request }) {
  async function getRideRequests() {
    const data = await rideRequestsApi()
    console.log(data);
    setUserRideRequests(data.requests);
  }

  async function handleCancelDelete(requestId) {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const request = await fetch(`${BASE_URL}/api/rides/cancel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ requestId })
    })
    const res = await request.json();

    await getRideRequests()
  }

  return (
    <div className={`w-full  hideScrollBars flex  max-md:flex-col max-md:items-center max-md:space-y-2 justify-between py-3 px-4 rounded-lg backdrop-blur bg-white/50 border border-transparent hover:border-black/20 hover:cursor-pointer`}>
      <div className="flex gap-1 items-center ">
        <div className="font-bold">{request?.ride.from}</div>
        <p>to</p>
        <div className="font-bold">{request?.ride.to}</div>
      </div>
      <div className="flex items-center gap-1 font-bold">
        <div>{request?.ride.host.firstName}</div>
        <div>{request?.ride.host.lastName}</div>
      </div>
      <div className="flex gap-2">
        <div className={`px-4 py-2 max-h-fit text-sm rounded-md ${colorMap[request.status]}`}>{request.status}</div>
        <button onClick={(e) => handleCancelDelete(request._id)} className="bg-red-500 text-white px-4 py-2 max-h-fit rounded-md transition-all duration-300 active:scale-95 flex items-center gap-1">
          <div className="hidden sm:flex">
            <MdCancel />
          </div>
          <p className="text-sm">Cancel</p>
        </button>
      </div>
    </div >
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
    <div className={"w-screen overflow-auto hideScrollBars flex-1 p-4 sm:p-8 xl:p-10 backdrop-blur"}>
      <div className="flex flex-col overflow-auto  gap-4 w-full sm:max-w-[90%] xl:max-w-[60%] mx-auto">
        {userRideRequests?.length > 0 && userRideRequests.map(function (userRequest) {
          return <RequestItem key={userRequest._id} setUserRideRequests={setUserRideRequests} request={userRequest} />
        })}
        {userRideRequests?.length === 0 && <p className="self-center">No Requests made yet.</p>}
      </div>
    </div>
  )
}
