import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PriceComparisonSection = ({ productId, price, setRechartDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchComparisonData = async () => {
      try {
        if (selectedDate) {
          const res = await axiosSecure.get(
            `/compare-price?productId=${productId}&date=${selectedDate}`
          );
          setRechartDate(res.data);
        }
      } catch (err) {
        console.error("Comparison error:", err);
      }
    };

    if (selectedDate && productId) {
      fetchComparisonData();
    }
  }, [selectedDate, productId, axiosSecure]);

  return (
    <div className="mt-10 p-4 rounded-md border bg-white shadow">
      <h3 className="font-bold mb-3 text-lg text-primary">
        📊 Compare with Previous Data
      </h3>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <select
          className="select select-bordered"
          onChange={(e) => setSelectedDate(e.target.value)}
          value={selectedDate}
        >
          <option value="">set previous date</option>
          {price?.map((p, index) => (
            <option key={index} value={p.date}>
              {" "}
              {p.date}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PriceComparisonSection;
