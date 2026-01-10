import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addexpense } from "../redux/expenseSlice";

const AddExpense = () => {
  const dispatch = useDispatch();
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: 0,
    category: "",
    date: "",
  });

  const [errors, setErrors] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({ ...expenseData, [name]: value });
  };
  const handleAddExpense = () => {
      dispatch(addexpense({
        title: expenseData.title,
        amount: expenseData.amount,
        category: expenseData.category,
        date: expenseData.date,
      }));

  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Add Expense
        </h2>

        <div className="flex flex-col space-y-3">
          <input
            type="text"
            name="title"
            value={expenseData.title}
            onChange={handleChange}
            placeholder="Expense Title"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            value={expenseData.amount}
            name="amount"
            onChange={handleChange}
            placeholder="Amount"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={expenseData.category}
            name="category"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="shopping">Shopping</option>
            <option value="travel">Travel</option>
            <option value="other">Other</option>
          </select>

          <input
            type="date"
            value={expenseData.date}
            name="date"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
            onClick={handleAddExpense}
          >
            Add Expense
          </button>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
