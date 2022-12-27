import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
  name: "works",
  initialState: {
    list: [
      { id: "MHVYIzdV_rF5izkpyFn5T", title: "Замена стекла", price: "22000" },
      { id: "MHVYIzdV_rF5izkpyFn5", title: "Замена дисплея", price: "20000" },
      { id: "MHVYIzdV_rF5izk", title: "Замена аккумулятора", price: "15000" },
      { id: "MHVYIzdV_rF5izkpyF", title: "Замена микрофона", price: "10000" },
    ],
    edited: { id: "", title: "", price: "" },
  },
  reducers: {
    addWork: (state, action) => {
      state.list.push(action.payload);
    },
    editWorkReducer: (state, action) => {
      const { id, title, price } = action.payload;
      state.edited = { id, title, price };
    },
    updateWork: (state, action) => {
      const { id } = action.payload;
      const ind = state.list.findIndex((el)=> el.id === id)
      state.list.splice(ind, 1, action.payload)
      state.edited = { id: "", title: "", price: "" }
    },
    editInput: (state, action) => {
      const name = Object.keys(action.payload)[0]
      state.edited[name] = action.payload[name]
    }
  },
});

export const { addWork, editWorkReducer, updateWork, editInput } = editSlice.actions;

export default editSlice.reducer;
