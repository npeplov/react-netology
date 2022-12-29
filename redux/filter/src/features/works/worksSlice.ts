import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IWork {
  id: number,
  title: string,
  price: string
}

interface WorksState {
  list: IWork[],
  filter: string,
}

const initialState: WorksState = {
  list: [
    { id: 1, title: 'Замена аккумулятора', price: '5000' },
    { id: 2, title: 'Замена экрана', price: '6000' },
  ],
  filter: ''
}

export const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    // при нажатии кнопки 'добавить' дописывать в стор услугу-работу, цену и id
    addActionCrtr(state, action: PayloadAction<IWork>) {
      state.list.push(action.payload)
    },
    // при вводе в инпут filter фильтровать список услуг-работ по совпадению названия
    filterActionCrtr(state, action) {
      const inputValue = action.payload;
      state.filter = inputValue
    },
    updateActionCrtr(state, action) {
      // получаем id title price
      const { id, title, price } = action.payload
      // заменить через splice
      const ind = state.list.findIndex(el => el.id === id)
      state.list.splice(ind, 1, { id, title, price })
    }
  }
})

export const { addActionCrtr, filterActionCrtr, updateActionCrtr } = worksSlice.actions

export default worksSlice.reducer