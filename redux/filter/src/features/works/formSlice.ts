import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Fields {
  title: string;
  price: string;
}

interface UpdateWorkData {
  title: string;
  price: string;
  id: number | undefined
}

type Form = { edit: Fields, update: UpdateWorkData }

const initialState: Form = {
  edit: {
    title: '',
    price: '',
  }, 
  update: {
    title: '',
    price: '', 
    id: undefined
  }
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // 1. при вводе в инпут сохранять значения в стор
    changeActionCrtr(state, action: PayloadAction<UpdateWorkData>) {
      state.update.title = action.payload.title
      state.update.price = action.payload.price
      state.update.id = action.payload.id
    },
    clearActionCrtr(state) {
      state.update.title = ''
      state.update.price = ''
    }
  }
})

export const { changeActionCrtr } = formSlice.actions

export default formSlice.reducer