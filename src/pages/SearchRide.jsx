import { useState } from "react";
import { searchRidesApi } from '../services/auth/rideApis';


export const SearchRide = () => {
    const [searchData, setSearchData] = useState({
        from: '',
        to: '',
        date: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchData((prevSearchData) => ({
          ...prevSearchData,
          [name]: value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await searchRidesApi(searchData.from, searchData.to, searchData.date);
      };

    return (
        <div className="flex justify-center items-center max-h-screen h-[90vh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Search for a ride</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="from" className="block text-sm font-medium text-gray-600">
              From
            </label>
            <input
              type="text"
              id="from"
              name="from"
              value={searchData.from}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md" 
              placeholder="Enter starting point"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="to" className="block text-sm font-medium text-gray-600">
              To
            </label>
            <input
              type="text"
              id="to"
              name="to"
              value={searchData.to}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md" 
              placeholder="Enter destination"
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
              value={searchData.date}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md" 
              placeholder="Enter date"
            />
          </div>

          <button
            type="submit"
            className="bg-orange text-slate-100 p-2 rounded-md w-full hover:bg-orange-600 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </div>
    )
}