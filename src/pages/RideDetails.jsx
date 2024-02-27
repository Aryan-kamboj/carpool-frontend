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
    <div className='backdrop-blur flex-1 pt-4 px-10'>
        {rides?.length>0&&rides.map((ride,i)=>{
          return(<div className='relative flex' key={i} >
            <RideBar host={ride.host} description={ride.description}/>
            <button className=' p-2 absolute right-[1rem] bottom-[1rem] rounded-xl bg-orange px-6 text-white w-fit h-fit' onClick={()=>{handleJoinReq(ride._id)}}>Request to join</button>
          </div>
            )
        })}
    </div>
  )
}
