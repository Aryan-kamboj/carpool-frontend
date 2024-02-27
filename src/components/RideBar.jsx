import React from 'react'
const data = 
    {
        "_id": "65de1c99d3ebbaa1d1a9a00c",
        "host": {
            "ratingStats": {
                "totalRatings": 0,
                "averageRating": null
            },
            "_id": "65ddbe21c53210eb952c3d1b",
            "firstName": "Samarth",
            "lastName": "Bagga",
            "email": "samarthbagga@gmail.com",
            "createdAt": "2024-02-27T10:49:05.861Z",
            "updatedAt": "2024-02-27T10:49:05.861Z",
            "__v": 0
        },
        "from": "delhi",
        "to": "jaipur",
        "capacity": 1,
        "date": "2024-02-27",
        "description": "stuff",
        "requests": [],
        "createdAt": "2024-02-27T17:32:09.998Z",
        "updatedAt": "2024-02-27T17:32:09.998Z",
        "__v": 0
    }
export const RideBar = () => {
  return (
    <div>
        <div>

        </div>  
        <div>
            <div>
                Desc
            </div>
            <div>
                {firstName} {lastName}
            </div>
        </div>      
    </div>
  )
}


// {
//     "success": true,
//     "rides": [
//         {
//             "_id": "65de1c99d3ebbaa1d1a9a00c",
//             "host": {
//                 "ratingStats": {
//                     "totalRatings": 0,
//                     "averageRating": null
//                 },
//                 "_id": "65ddbe21c53210eb952c3d1b",
//                 "firstName": "Samarth",
//                 "lastName": "Bagga",
//                 "email": "samarthbagga@gmail.com",
//                 "createdAt": "2024-02-27T10:49:05.861Z",
//                 "updatedAt": "2024-02-27T10:49:05.861Z",
//                 "__v": 0
//             },
//             "from": "delhi",
//             "to": "jaipur",
//             "capacity": 1,
//             "date": "2024-02-27",
//             "description": "stuff",
//             "requests": [],
//             "createdAt": "2024-02-27T17:32:09.998Z",
//             "updatedAt": "2024-02-27T17:32:09.998Z",
//             "__v": 0
//         }
//     ]
// }