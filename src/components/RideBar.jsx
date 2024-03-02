import React from 'react'
import { IoIosMan } from "react-icons/io";
import { PiStarFill,PiStarHalfFill,PiStar } from "react-icons/pi";
import { FaAnglesRight } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
// const data = 
//     {
//         _id: "65de1c99d3ebbaa1d1a9a00c",
//         host: {
//             ratingStats: {
//                 totalRatings: 0,
//                 averageRating: 4.3 
//             },
//             _id: "65ddbe21c53210eb952c3d1b",
//             firstName: "Samarth",
//             lastName: "Bagga",
//             email: "samarthbagga@gmail.com",
//             createdAt: "2024-02-27T10:49:05.861Z",
//             updatedAt: "2024-02-27T10:49:05.861Z",
//             __v: 0
//         },
//         from: "delhi",
//         to: "jaipur",
//         capacity: 1,
//         date: "2024-02-27",
//         description: "stuff",
//         requests: [],
//         createdAt: "2024-02-27T17:32:09.998Z",
//         updatedAt: "2024-02-27T17:32:09.998Z",
//         __v: 0
//     }
    export const RideBar = ({data}) => {
        const {host,description}=data;
        console.log(host,description)
    const {averageRating,totalRatings} = host?.ratingStats;
    return (
    <div className='flex flex-1 flex-col justify-around w-[70%] backdrop-blur bg-[rgba(255,255,255,0.2)] border-richblack-20 border mx-auto py-4 rounded-3xl h-[25vh] '>
        {data&&<div>
                <div className='flex flex-col justify-between items-center '>
                <div className='flex items-center space-x-4'>
                    <span>
                        From : <span className='font-bold'>{data.from}</span>
                    </span>
                    <FaAnglesRight/>
                    <span>
                        To : <span className='font-bold'>{data.to}</span>
                    </span>
                </div>
                <div className='flex space-x-4'>
                    <span>
                        On : <span className='font-bold'>{data.date}</span>
                    </span>
                    <span className='space-x-1 flex items-center'>
                        <IoPeople className='inline-block'/>
                        <span className='font-bold'>{data.capacity}</span>
                    </span>
                </div>
                <div>
                    Per head cost : <span className='font-bold'>{data?.price?data.price:"TBD"}</span>
                </div>
            </div>  
            <div className='flex flex-col items-center justify-between '>
                <div className='text-richblack-600'>
                    {description}
                </div>
                <div className='flex items-center space-x-4'>

                    <div className='h-[3rem] w-[3rem] flex items-center justify-center  border-[1px] rounded-full'>{<IoIosMan className='inline-block text-4xl'/>}</div>
                    <span>{host.firstName} {host.lastName}</span>
                    {host&&<div className='flex items-center space-x-4'>
                        <div className={`flex bg-clip-text text-[#e49100] relative justify-evenly mx-0 space-x-2`}>
                            {(averageRating>=1||(averageRating>0.5))?<PiStarFill/>:(averageRating<=0.5)&&(averageRating>0)?<PiStarHalfFill/>:<PiStar/>}
                            {(averageRating>=2||(averageRating>1.5))?<PiStarFill/>:(averageRating<=1.5)&&(averageRating>1)?<PiStarHalfFill/>:<PiStar/>}
                            {(averageRating>=3||(averageRating>2.5))?<PiStarFill/>:(averageRating<=2.5)&&(averageRating>2)?<PiStarHalfFill/>:<PiStar/>}
                            {(averageRating>=4||(averageRating>3.5))?<PiStarFill/>:(averageRating<=3.5)&&(averageRating>3)?<PiStarHalfFill/>:<PiStar/>}
                            {(averageRating>=5||(averageRating>4.5))?<PiStarFill/>:(averageRating<=4.5)&&(averageRating>4)?<PiStarHalfFill/>:<PiStar/>}
                        </div>
                        <span>({totalRatings})</span>
                    </div>}
                </div>
            </div>     
        </div>} 
    </div>
  )
}


// {
//     success: true,
//     rides: [
//         {
//             _id: 65de1c99d3ebbaa1d1a9a00c,
//             host: {
//                 ratingStats: {
//                     totalRatings: 0,
//                     averageRating: null
//                 },
//                 _id: 65ddbe21c53210eb952c3d1b,
//                 firstName: Samarth,
//                 lastName: Bagga,
//                 email: samarthbagga@gmail.com,
//                 createdAt: 2024-02-27T10:49:05.861Z,
//                 updatedAt: 2024-02-27T10:49:05.861Z,
//                 __v: 0
//             },
//             from: delhi,
//             to: jaipur,
//             capacity: 1,
//             date: 2024-02-27,
//             description: stuff,
//             requests: [],
//             createdAt: 2024-02-27T17:32:09.998Z,
//             updatedAt: 2024-02-27T17:32:09.998Z,
//             __v: 0
//         }
//     ]
// }