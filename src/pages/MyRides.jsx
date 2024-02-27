import React, { useEffect } from 'react'
import { RideBar } from '../components/RideBar'
import { myRidesApi } from '../services/auth/rideApis';

export const MyRides = () => {
    let data = undefined;
    useEffect(()=>{
        (async()=>{
            data = await myRidesApi();
            console.log(data);
        })()
    },[]);
  return (
    <div className='backdrop-blur flex-1 space-y-4'>   
        {/* {data?data?.map((ride)=>{

        })} */}
    </div>
  )
}
