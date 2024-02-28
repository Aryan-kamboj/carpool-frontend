import { useEffect } from 'react'
import { RideBar } from '../components/RideBar'
import { myRidesApi } from '../services/auth/rideApis';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMyRides } from '../store/slices/dataSlice';

export const MyRides = () => {
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
    <div className='backdrop-blur flex-1 pt-4 space-y-4'>   
        {data?.map((ride,i)=>{
            console.log(ride);
            return (<div  key={i} onClick={()=>{handleClick(ride?._id)}}>
                <RideBar host={ride.host} description={ride.description}/>
            </div>)
        })}
    </div>
  )
}
