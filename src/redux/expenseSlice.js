import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    items: [],
    filters: {
      category : "",
      startDate: "",
      endDate: "",
      // search: ""
    },
    search : "",
    loading: false,
    error: null,
    selectItem: null,
  },
  reducers: {
    addexpense: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload.title,
        amount: action.payload.amount,
        category: action.payload.category,
        date: action.payload.date,
      });
    },
    seteselectedExpense: (state, action) => {
      state.selectItem = action.payload;
    },
    setSearchFilter: (state, action) => {
      state.search = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = {...state.filters, ...action.payload}
    },
    editExpense: (state, action) => {
      const updated = action.payload;
      state.items = state.items.map((item) =>
        item.id === updated.id ? updated : item
      );
      state.selectItem = null;
    },
    deleteExpense: (state, action) => {
      state.items = state.items.filter((data) => data.id !== action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { addexpense, deleteExpense, editExpense, seteselectedExpense, setFilters,setSearchFilter } =
  expenseSlice.actions;
export default expenseSlice.reducer;
