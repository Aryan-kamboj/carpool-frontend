import {  useParams } from "react-router-dom"
import { useSelector } from "react-redux";
export const HostRide = () => {
    // console.log("HIIII")
    // const id = document.location.pathname.split('/')[2];
    const data = useSelector((store)=>{
        console.log(store?.dataSlice?.myRides);
        return store?.dataSlice?.myRides;
    })
    console.log(data);
    // const rideData = data?.filter((item)=>{
    //     console.log(item)
    // })
    const {id} = useParams()
    console.log(id);
    return (<div className="w-screen flex-1 backdrop-blur">
        <div className="">
            
        </div>
    </div>)
}


// {
//     "_id": "65de561bf19d55df45b516fd",
//     "host": {
//         "ratingStats": {
//             "totalRatings": 0,
//             "averageRating": null
//         },
//         "_id": "65dc7de2bc7bf6161a7f8a29",
//         "firstName": "test",
//         "lastName": "test",
//         "email": "test@test.com",
//         "createdAt": "2024-02-26T12:02:42.534Z",
//         "updatedAt": "2024-02-26T12:02:42.534Z",
//         "__v": 0
//     },
//     "from": "muj",
//     "to": "delhi",
//     "capacity": 3,
//     "date": "2024-02-29",
//     "description": "this is a test description i am writing some random things in this please ignore",
//     "requests": [],
//     "createdAt": "2024-02-27T21:37:31.606Z",
//     "updatedAt": "2024-02-27T21:37:31.606Z",
//     "__v": 0
// }