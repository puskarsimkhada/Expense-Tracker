import React from 'react'
import AddExpense from './AddExpense'
import FilterExpense from './FilterExpense'
import ListExpense from './ListExpense'

const ExpensePage = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-10 px-4">
  <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
    Expense Tracker
  </h1>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-6">
      <AddExpense />
      <FilterExpense />
    </div>

    <div>
      <ListExpense />
    </div>
  </div>
</div>

    </>
  )
}

export default ExpensePage
