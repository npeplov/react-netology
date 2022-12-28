import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Fields {
  title: string;
  price: string;
}

const initialState:Fields = {
  title: '',
  price: '',
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // 1. при вводе в инпут сохранять значения в стор
    change (state, action:PayloadAction<Fields>) {
      state.title =  action.payload.title
      state.price =  action.payload.price
    },
  }
})

export default formSlice.reducer