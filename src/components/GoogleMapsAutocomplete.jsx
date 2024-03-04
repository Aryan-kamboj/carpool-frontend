import { LoadScript, Autocomplete } from '@react-google-maps/api';
import {useEffect, useState} from "react";
import {  useLoadScript } from '@react-google-maps/api';

function GoogleMapsPlacesAutocomplete({placeholder,changeHandler}) {
    const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
    const libs = ['places']

  const { isLoaded } =  useLoadScript({
    googleMapsApiKey:apiKey,
    libraries: libs
   });
  if(!isLoaded) {
    return <div>Loading...</div>
  }
    return (

            <Autocomplete
                    onLoad={autocomplete => {console.log('Autocomplete loaded:', autocomplete)}}
                >
                    <input
                        onChange={(e)=>{console.log(e.target.value);changeHandler(e.target.value)}}
                        onBlur={(e)=>{console.log(e.target.value);changeHandler(e.target.value)}}
                        type="text"
                        placeholder={placeholder}
                        style={{
                            boxSizing: `border-box`,
                            border: `2px solid transparent`,
                            width: `100%`,
                            height: `40px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 0px 3px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                        }}
                    />
                </Autocomplete>

    );
}

//
export default GoogleMapsPlacesAutocomplete;

// import { LoadScript, Autocomplete } from '@react-google-maps/api';
//
// function GoogleMapsPlacesAutocomplete() {
//
//   const handlePlaceSelect = (place) => {
//     console.log(place);
//   };
//   const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
//   return (
//     <LoadScript
//       googleMapsApiKey={apiKey}
//       libraries={['places']}
//     >
//       <Autocomplete
//         onLoad={autocomplete => console.log('Autocomplete loaded:', autocomplete)}
//         onPlaceChanged={() => handlePlaceSelect}
//       >
//         <input
//           type="text"
//           placeholder="Enter Auto Complete Location"
//           style={{
//             boxSizing: `border-box`,
//             border: `2px solid transparent`,
//             width: `100%`,
//             height: `40px`,
//             padding: `0 12px`,
//             borderRadius: `3px`,
//             boxShadow: `0 0px 3px rgba(0, 0, 0, 0.3)`,
//             fontSize: `14px`,
//           }}
//         />
//       </Autocomplete>
//
//     </LoadScript>
//   );
// }
//
// export default GoogleMapsPlacesAutocomplete;
