import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteExpense, setFilters } from "../redux/expenseSlice";
import { editExpense } from "../redux/expenseSlice";
import { seteselectedExpense, setSearchFilter } from "../redux/expenseSlice";

const ListExpense = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.items);
  const filterItems = useSelector((state) => state.expenses.filters);
  const searchItems = useSelector((state) => state.expenses.search);

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(setSearchFilter(searchData));
  },[searchData]);

    const handleSearchExpense = (e) => {
    setSearchData(e.target.value);
    
  };


  console.log("Searchhh : ", searchData);
  console.log("Searchhh : ", filterItems);
  console.log("Searchhh ITTTEEM: ", searchItems);

  let filteredData = expenses;

  if (filterItems.category) {
    filteredData = filteredData.filter(
      (item) => item.category === filterItems.category
    );
  }
  if (filterItems.startDate) {
    filteredData = filteredData.filter(
      (item) => item.date >= filterItems.startDate
    );
  }
  if (filterItems.endDate) {
    filteredData = filteredData.filter(
      (item) => item.date <= filterItems.endDate
    );
  }
  if (searchItems) {
    filteredData = filteredData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchItems.toLowerCase()) || item.amount.includes(searchItems.toLowerCase()) || item.category.toLowerCase().includes(searchItems.toLowerCase())
    );
  }


  // Calculating total amount
  const totalAmount = filteredData.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  // Handle Edit Expenses
  const handleEdit = (expense) => {
    dispatch(seteselectedExpense(expense));
  };

  // Handle Delete Expenses
  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-auto bg-white border shadow-md rounded-lg p-6 space-y-5">
        {/* Title + Total */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Expenses</h2>
          <span className="text-lg font-semibold text-blue-600">
            Total: Rs. {totalAmount}
          </span>
        </div>
        <div>
          <input
            type="text"
            name="search"
            value={searchData}
            onChange={handleSearchExpense}
            placeholder="Search Expense Data"
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {filteredData.length > 0 ? (
          <ul className="space-y-4">
            {filteredData.map((expense) => (
              <li
                key={expense.id}
                className="flex justify-between items-start bg-gray-50 border rounded-lg p-4"
              >
                <div className="space-y-1">
                  <p className="font-medium text-gray-800 text-lg">
                    {expense.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    Category:{" "}
                    <span className="font-medium">{expense.category}</span> |{" "}
                    {expense.date}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="font-semibold text-blue-600">
                    Rs. {expense.amount}
                  </span>

                  <div className="flex gap-2">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600 transition"
                      onClick={() => handleEdit(expense)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
                      onClick={() => handleDelete(expense.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No expense Found</p>
        )}
      </div>
    </>
  );
};

export default ListExpense;
