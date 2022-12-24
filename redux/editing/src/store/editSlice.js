import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
  name: 'works',
  initialState: {
    list: 
    [
      {id: 'MHVYIzdV_rF5izkpyFn5T', title: 'Замена стекла', price: '22000'},
      {id: 'MHVYIzdV_rF5izkpyFn5', title: 'Замена дисплея', price: '20000'},
      {id: 'MHVYIzdV_rF5izk', title: 'Замена аккумулятора', price: '15000'},
      {id: 'MHVYIzdV_rF5izkpyF', title: 'Замена микрофона', price: '10000'},
    ]
  },
  reducers: {
    addWork: (state, action) => {
      state.list.push(action.payload)
    },
    editWork: (state, action) => {
      console.log(action.payload);
    }
  }
})

export const { addWork, editWork } = editSlice.actions

export default editSlice.reducer