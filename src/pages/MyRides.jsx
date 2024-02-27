import React, { useEffect, useState } from 'react'
import { RideBar } from '../components/RideBar'
import { myRidesApi } from '../services/auth/rideApis';

export const MyRides = () => {
    const [data,setData] = useState(null);
    useEffect(()=>{
        (async()=>{
            setData(await myRidesApi());
        })()
    },[]);
    console.log(data);
  return (
    <div className='backdrop-blur flex-1 pt-4 space-y-4'>   
        {data?.rides.map((ride,i)=>{
            return (<RideBar key={i} host={ride.host} description={ride.description}/>)
        })}
    </div>
  )
}
