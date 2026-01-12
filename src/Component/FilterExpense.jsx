import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/expenseSlice";

const FilterExpense = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.items);

  const [filterData, setFilterData] = useState({
    category: "",
    startDate: "",
    endDate: "",
  });

  const [errors, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });

    if (errors[name]) {
      setError({ ...errors, [name]: "" });
    }
  };

  const handleFilter = () => {
    const newErrors = {};
    if (!filterData.startDate.trim()) {
      newErrors.startDate = "Select Start Date";
    }
    if (!filterData.endDate.trim()) {
      newErrors.endDate = "Select End Date";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return newErrors;
    }
    dispatch(setFilters(filterData));
    setFilterData({
      category: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Filter Expenses
        </h2>

        <div className="flex flex-col gap-3">
          <div>
            <select
              name="category"
              value={filterData.category}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            >
              <option value="">All Categories</option>
              <option value="food">Food</option>
              <option value="rent">Rent</option>
              <option value="shopping">Shopping</option>
              <option value="travel">Travel</option>
              <option value="other">Other</option>
            </select>
            {errors && <span className="text-red-600">{errors.category}</span>}
          </div>

          <div className="flex items-center gap-2">
            <div>
              <input
                type="date"
                name="startDate"
                value={filterData.startDate}
                onChange={handleChange}
                className="border flex-1 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors && (
                <span className="text-red-600">{errors.startDate}</span>
              )}
            </div>
            <div>
              <input
                type="date"
                name="endDate"
                value={filterData.endDate}
                onChange={handleChange}
                className="border flex-1 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors && <span className="text-red-600">{errors.endDate}</span>}
            </div>
          </div>
          <button
            className="bg-gray-700 text-white rounded-lg py-2 hover:bg-gray-800 transition cursor-pointer"
            onClick={handleFilter}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterExpense;
