import { useState } from "react";
import axios from "axios";

export default function TripForm({ onResult }) {
  const [formData, setFormData] = useState({
    current_location: "",
    pickup_location: "",
    dropoff_location: "",
    cycle_hours_used: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://127.0.0.1:8000/api/plan-trip/",
      formData
    );
    onResult(res.data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4">
      <input
        name="current_location"
        onChange={handleChange}
        placeholder="Current Location"
        className="border w-full p-2 rounded"
      />
      <input
        name="pickup_location"
        onChange={handleChange}
        placeholder="Pickup Location"
        className="border w-full p-2 rounded"
      />
      <input
        name="dropoff_location"
        onChange={handleChange}
        placeholder="Dropoff Location"
        className="border w-full p-2 rounded"
      />
      <input
        name="cycle_hours_used"
        onChange={handleChange}
        placeholder="Cycle Hours Used"
        type="number"
        className="border w-full p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Plan Trip
      </button>
    </form>
  );
}
