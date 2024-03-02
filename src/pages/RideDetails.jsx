import { useSelector } from 'react-redux'
import { RideBar } from '../components/RideBar'
import { reqToJoinApi } from '../services/auth/rideApis';
export const RideDetails = () => {
  const rides = useSelector((store)=>{
    console.log(store.dataSlice.searchedRides);
    return store.dataSlice.searchedRides;
  })  
  const handleJoinReq = async (id)=>{
    await reqToJoinApi(id); 
  }
  console.log(rides);
  return (
    <div className='backdrop-blur overflow-scroll hideScrollBars flex-1 py-4 max-md:px-2 px-10'>
        {rides.length>0?<div className={"space-y-4"}>{rides?.map((ride,i)=>{
          return(<div className='relative max-md:space-y-1 flex max-md:flex-col' key={i} >
            <RideBar data={ride}/>
            <button className=' p-2 max-md:static max-md:w-[95%] mx-auto absolute right-[1rem] bottom-[1rem] rounded-xl bg-orange px-6 text-white w-fit h-fit' onClick={()=>{handleJoinReq(ride._id)}}>Request to join</button>
          </div>
            )
        })}
      </div>:<div className={"items-center justify-center flex h-full"}><span className={"bg-[rgba(255,255,255,0.7)] p-8 rounded-lg text-3xl"}>No rides found for your search query</span></div>}
    </div>
  )
}
