import { useState } from 'react';
import { createRideApi } from '../services/auth/rideApis';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createRideApi(formData.from, formData.to, formData.capacity, formData.date, formData.description);
  };

  return (
    <div className="flex justify-center items-center max-h-screen h-[90vh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Add a Ride</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="from" className="block text-sm font-medium text-gray-600">
              From
            </label>
            <input
              type="text"
              id="from"
              name="from"
              value={formData.from}
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
              value={formData.to}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md" 
              placeholder="Enter destination"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-600">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
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
              value={formData.date}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-200 rounded-md" 
              placeholder="Enter date"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
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
  );
};

export default CreateRide;
