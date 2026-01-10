import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expenses",
    initialState : {
        items: [],
        loading: false,
        error: null
    },
    reducers: {
        addexpense: (state, action) => {
            state.items.push({
                id : Date.now(),
                title : action.payload.title,
                amount : action.payload.amount,
                category : action.payload.category,
                date : action.payload.date
            })
        },

    },
    extraReducers : (builder) => {

    }
});

export const {addexpense} = expenseSlice.actions;
export default expenseSlice.reducer;