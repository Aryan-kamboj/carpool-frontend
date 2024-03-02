import { IoIosMan } from "react-icons/io";
import { PiStarFill,PiStarHalfFill,PiStar } from "react-icons/pi";
export const RideDetailsCard = ({ride,setEdit}) => {
  let {averageRating,totalRatings}  = ride?.host?.ratingStats ;
  // if (ride && ride.ratingStats) {
  //   averageRating = ride.ratingStats.averageRating;
  //   totalRatings = ride.ratingStats.totalRatings;
  // }
  return (
    <div className='flex flex-col space-y-4 justify-between p-8 w-[35%] max-md:w-full  '>
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
        <div className=''>
        Cost per passenger : <span className="font-bold">{ride?.price?ride.price:"TBD"}</span>
        </div>
        <div className='text-richblack-600'>
            Ride description : {ride?.description}
        </div>
        <div className='flex items-center max-md:flex-col max-md:space-x-0 max-md:space-y-2 space-x-4'>
            <div className='h-[3rem] w-[3rem] flex items-center justify-center  border-[1px] rounded-full'>{<IoIosMan className='inline-block text-4xl'/>}</div>
            <span>{ride?.host.firstName} {ride?.host.lastName}</span>
          {ride&&<div className='flex items-center space-x-4'>
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
        <button onClick={()=>{setEdit(true)}} className="rounded-lg border-white border-[1px]  py-2 duration-300 bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.7)]">Edit Ride Details</button>
    </div>
  )
}
