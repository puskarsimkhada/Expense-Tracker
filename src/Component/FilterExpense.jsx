import React from 'react'

const FilterExpense = () => {
  return (
    <>
     <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md mx-auto mb-6">
  <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter Expenses</h2>

  <div className="flex flex-col gap-3">

    <select
      className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Categories</option>
      <option value="food">Food</option>
      <option value="rent">Rent</option>
      <option value="shopping">Shopping</option>
      <option value="travel">Travel</option>
      <option value="other">Other</option>
    </select>

    <div className="flex items-center gap-2">
      <input
        type="date"
        className="border flex-1 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="date"
        className="border flex-1 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      className="bg-gray-700 text-white rounded-lg py-2 hover:bg-gray-800 transition"
    >
      Apply Filters
    </button>
  </div>
</div>
   
    </>
  )
}

export default FilterExpense
