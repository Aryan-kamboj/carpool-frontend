import { useSelector } from 'react-redux'
import { RideBar } from '../components/RideBar'
export const RideDetails = () => {
  const rides = useSelector((store)=>{
    console.log(store.dataSlice.searchedRides);
    return store.dataSlice.searchedRides;
  })  
  console.log(rides);
  return (
    <div className='backdrop-blur flex-1 pt-4'>
        {rides.length>0&&rides.map((ride,i)=>{
          return(<div className='relative' key={i} >
            <RideBar host={ride.host} description={ride.description}/>
            <button className='absolute top-[4rem] right-[14.5rem]  p-2 rounded-xl bg-orange px-6 text-white'>Request to join</button>
          </div>
            )
        })}
    </div>
  )
}
