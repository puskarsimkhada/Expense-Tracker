import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addexpense } from "../redux/expenseSlice";
import { editExpense } from "../redux/expenseSlice";
import { seteselectedExpense } from "../redux/expenseSlice";

const AddExpense = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.expenses.selectItem)
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    if(selectedItem){
     setExpenseData({
      title: selectedItem.title,
      amount: selectedItem.amount,
      category: selectedItem.category,
      date: selectedItem.date,
     })
    }
  },[selectedItem]);


  console.log("EditExpense:",selectedItem);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({ ...expenseData, [name]: value });

    console.log("ADDSEARCH : ",value)

    if(errors[name]){
      setErrors({...errors, [name] : ""})
    }

  };
  const handleAddExpense = () => {
    const newErrors = {};    
    if(!expenseData.title.trim()){
      newErrors.title = "Title is required";
    }
    if(!expenseData.amount.trim()){
      newErrors.amount = "Amount is required";
    }
    if(!expenseData.category.trim()){
      newErrors.category = "Please select category";
    }
    if(!expenseData.date.trim()){
      newErrors.date = "Plese Select Date";
    }

    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);
      return newErrors;
    }
    if(selectedItem){
      dispatch(editExpense({
        id: selectedItem.id,
        ...expenseData,
      }))
    }else{
      dispatch(addexpense(expenseData));
    }
      setExpenseData({
        title : "",
        amount: "",
        category: "",
        date: "",

      })
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Add Expense
        </h2>

        <div className="flex flex-col space-y-3">
          <div>
            <input
            type="text"
            name="title"
            value={expenseData.title}
            onChange={handleChange}
            placeholder="Expense Title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors && <span className="text-red-600">{errors.title}</span>}
          </div>

          <div>
          <input
            type="number"
            value={expenseData.amount}
            name="amount"
            onChange={handleChange}
            placeholder="Amount"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors && <span className="text-red-600">{errors.amount}</span>}
          </div>
          <div>
          <select
            value={expenseData.category}
            name="category"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="shopping">Shopping</option>
            <option value="travel">Travel</option>
            <option value="other">Other</option>
          </select>
          {errors && <span className="text-red-600">{errors.category}</span>}
        </div>

        <div>
          <input
            type="date"
            value={expenseData.date}
            name="date"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors && <span className="text-red-600">{errors.date}</span>}
          </div>
          <button
            className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition cursor-pointer"
            onClick={handleAddExpense}
          >
            {selectedItem ?  "Edit Expense": "Add Expense"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
