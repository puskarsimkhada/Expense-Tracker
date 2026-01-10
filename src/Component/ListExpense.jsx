import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const ListExpense = () => {

  const expenses = useSelector((state) => state.expenses.items);
  const totalAmount = useSelector((state) => state.expenses.items.reduce((sum,item) => sum+Number(item.amount),0))
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

        <ul className="space-y-4">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between items-start bg-gray-50 border rounded-lg p-4"
            >
              <div className="space-y-1">
                <p className="font-medium text-gray-800 text-lg">{expense.title}</p>
                <p className="text-sm text-gray-500">
                Category: <span className="font-medium">{expense.category}</span> | {expense.date}
                </p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className="font-semibold text-blue-600">Rs. {expense.amount}</span>

                <div className="flex gap-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600 transition">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition">
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}

export default ListExpense
