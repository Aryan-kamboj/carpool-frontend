import {  useParams } from "react-router-dom"
import { PiStarFill,PiStarHalfFill,PiStar } from "react-icons/pi";
import { getRideDetails } from "../services/auth/rideApis";
import { useEffect, useState } from "react";
import { IoIosMan } from "react-icons/io";
import { FaAnglesRight } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
export const HostRide = () => {
    const {id} = useParams();
    const [ride,setRide] = useState(null);
    console.log(id);
    useEffect(()=>{
        (async()=>{
            setRide(await getRideDetails(id).then((value)=>value.rideDetails));
        })()
    },[id])
    console.log(ride);
    // const {averageRating,totalRatings} = ride?.host?.ratingStats;
    return (<div className="w-screen flex-1 backdrop-blur pt-5">
                <div className="w-[90%] backdrop-blur mx-auto overflow-hidden rounded-3xl border-[1px] border-white">
                    {ride && <div className='flex flex-col space-y-4 justify-between p-8 bg-[rgba(255,255,255,0.4)]  '>
                        <div>
                            From : <span className='font-bold'>{ride?.from}</span>
                        </div>
                        <div>
                            To : <span className='font-bold'>{ride?.to}</span>
                        </div>
                        <div>
                            Date : <span className='font-bold'>{ride?.date}</span>
                        </div>
                        <div className=''>
                        Total number of passengers : <span className="font-bold">{ride?.capacity}</span>
                        </div>
            <div className='text-richblack-600'>
                {ride?.description}
            </div>
            <div className='flex items-center space-x-4'>
                <div className='h-[3rem] w-[3rem] flex items-center justify-center  border-[1px] rounded-full'>{<IoIosMan className='inline-block text-4xl'/>}</div>
                <span>{ride?.host.firstName} {ride?.host.lastName}</span>
                {/* <div className='flex items-center space-x-4'>
                    <div className={`flex bg-clip-text text-[#e49100] relative text-transparent justify-evenly mx-0 space-x-2`}>
                        {(averageRating>=1||(averageRating>0.5))?<PiStarFill/>:(averageRating<=0.5)&&(averageRating>0)?<PiStarHalfFill/>:<PiStar/>}
                        {(averageRating>=2||(averageRating>1.5))?<PiStarFill/>:(averageRating<=1.5)&&(averageRating>1)?<PiStarHalfFill/>:<PiStar/>}
                        {(averageRating>=3||(averageRating>2.5))?<PiStarFill/>:(averageRating<=2.5)&&(averageRating>2)?<PiStarHalfFill/>:<PiStar/>}
                        {(averageRating>=4||(averageRating>3.5))?<PiStarFill/>:(averageRating<=3.5)&&(averageRating>3)?<PiStarHalfFill/>:<PiStar/>}
                        {(averageRating>=5||(averageRating>4.5))?<PiStarFill/>:(averageRating<=4.5)&&(averageRating>4)?<PiStarHalfFill/>:<PiStar/>}
                    </div>
                    <span>({totalRatings})</span>
                </div> */}
                </div>
            </div>}
            </div>
            </div>)
}

// {
//     "_id": "65df19b4cbf70ed1d138a9ea",
//     "host": "65df192ccbf70ed1d138a9e6",
//     "from": "Delhi, India",
//     "to": "Jaipur, Rajasthan, India",
//     "capacity": 50,
//     "date": "2024-02-28",
//     "description": "lets go",
//     "requests": [
//         {
//             "_id": "65df19cccbf70ed1d138a9f3",
//             "passenger": {
//                 "ratingStats": {
//                     "totalRatings": 0,
//                     "averageRating": null
//                 },
//                 "_id": "65df192ccbf70ed1d138a9e6",
//                 "firstName": "admin",
//                 "lastName": "admin",
//                 "password": "$2b$11$SeP5BjPkStrNbxoSSNlRJOVk1IAnfNSkzn5Qnp2YBiQ47Ba4f5hAO",
//                 "email": "admin@muj.manipal.edu",
//                 "verifiedEmail": true,
//                 "createdAt": "2024-02-28T11:29:48.299Z",
//                 "updatedAt": "2024-02-28T11:29:48.299Z",
//                 "__v": 0
//             },
//             "ride": "65df19b4cbf70ed1d138a9ea",
//             "status": "pending",
//             "createdAt": "2024-02-28T11:32:28.921Z",
//             "updatedAt": "2024-02-28T11:32:28.921Z",
//             "__v": 0
//         }
//     ],
//     "createdAt": "2024-02-28T11:32:04.465Z",
//     "updatedAt": "2024-02-28T11:32:29.060Z",
//     "__v": 1
// }