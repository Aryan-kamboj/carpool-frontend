import { useRef, useState } from 'react';
import { createRideApi } from '../services/auth/rideApis';
import ReactGoogleAutocomplete from "react-google-autocomplete";
import GoogleMapsAutocomplete from "../components/GoogleMapsAutocomplete.jsx";

export const CreateRide = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    capacity: 1,
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  // const [date, setDate] = useState("")
  // const [capacity, setCapacity] = useState("")
  // const [description, setDescription] = useState("")

  const dateRef = useRef();
  const descriptionRef = useRef();
  const capacityRef = useRef();
  const perHeadRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createRideApi(from, to, capacityRef.current.value, dateRef.current.value, perHeadRef.current.value, descriptionRef.current.value)
    console.log(data)
    // const data = await createRideApi(formData.from, formData.to, formData.capacity, formData.date, formData.description);
  };

  return (
    <div className=" py-4 overflow-scroll hideScrollBars justify-center items-center flex-1  h-fit backdrop-blur ">
      <div className={" w-full "}>
      <div className="bg-white mx-auto  p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4 ">Add a Ride</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="from" className="block text-sm font-medium text-gray-600">
              From
            </label>
            {/* <input
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md" 
              placeholder="Enter starting point"
            /> */}
            {/*<ReactGoogleAutocomplete*/}
            {/*  className="w-full border border-gray-200 rounded-md mt-1 p-2"*/}
            {/*  apiKey="AIzaSyAC0nozW7irImOmfyCwDi5VPPoAlM65K10"*/}
            {/*  placeholder="Enter starting location"*/}
            {/*  onPlaceSelected={(places) => { console.log(places); setFrom(places.formatted_address) }}*/}
            {/*/>*/}
            <GoogleMapsAutocomplete placeholder={"Enter source location"} changeHandler={setFrom}/>
          </div>

          <div className="mb-4">
            <label htmlFor="to" className="block text-sm font-medium text-gray-600">
              To
            </label>
            {/* <input
              type="text"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md"
              placeholder="Enter destination"
            /> */}
            {/*<ReactGoogleAutocomplete*/}
            {/*  libraries= {['places']}*/}
            {/*  className="w-full border border-gray-200 rounded-md mt-1 p-2"*/}
            {/*  apiKey="AIzaSyAC0nozW7irImOmfyCwDi5VPPoAlM65K10"*/}
            {/*  placeholder="Enter destination"*/}
            {/*  onPlaceSelected={(places) => { console.log(places); setTo(places.formatted_address) }}*/}
            {/*/>*/}
            <GoogleMapsAutocomplete placeholder={"Enter destination"} changeHandler={setTo}/>
          </div>

          <div className="mb-4">
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-600">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              ref={capacityRef}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md"
              min="1"
              max="50"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-600">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              ref={dateRef}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md"
              placeholder="Enter date"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-600">
              Per head cost
            </label>
            <input
              type="number"
              id="perHead"
              name="perHead"
              ref={perHeadRef}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              ref={descriptionRef}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md"
              placeholder="Enter description"
            />
          </div>

          <button
            type="submit"
            className="bg-orange text-slate-100 p-2 rounded-md w-full hover:bg-orange-600 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default CreateRide;
