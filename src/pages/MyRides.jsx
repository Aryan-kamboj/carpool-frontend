import { useEffect } from 'react'
import { RideBar } from '../components/RideBar'
import { myRidesApi } from '../services/auth/rideApis';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMyRides } from '../store/slices/dataSlice';
import Cookies from 'js-cookie';
export const MyRides = () => {
    console.log(Cookies.get("secret-token"));
    // console.log(document.cookie);
    const dispatcher = useDispatch();
    const data = useSelector((store)=>{
        console.log(store?.dataSlice?.myRides);
        return store?.dataSlice?.myRides;
    })
    useEffect(()=>{
        (async()=>{
            dispatcher(setMyRides(await myRidesApi().then((value)=>{console.log(value);return value.rides;})));
        })()
    },[]);
    console.log(data);
    const navigator = useNavigate();
    const handleClick = (id)=>{
        navigator(`/my-rides/${id}`)
        console.log(id);
    }
  return (
    <div className='backdrop-blur hideScrollBars overflow-y-scroll flex-1 pt-4 space-y-4'>   
        {data?.length>0?data?.map((ride,i)=>{
            console.log(ride);
            return (<div  key={i} onClick={()=>{handleClick(ride?._id)}}>
                <RideBar data={ride}/>
            </div>)
        }):<div className='flex items-center flex-col space-y-2 justify-center text-3xl h-full'><span className='bg-[rgba(255,255,255,0.7)] p-8 rounded-lg '>No Rides created yet</span><button onClick={()=>navigator("/create")} className='text-sm bg-orange rounded-md p-2 text-white border-black border-[2px]'>Click here to create a ride</button></div>}
    </div>
  )
}
