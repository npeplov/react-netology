import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IWork {
  id: number,
  title: string,
  price: string
}

interface WorksState {
  list: IWork[]
}

const initialState: WorksState = {
  list: [
    {id: 1, title: 'Замена аккумулятора', price: '5000'},
    {id: 2, title: 'Замена экрана', price: '6000'},
],
}

export const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    // при нажатии кнопки 'добавить' дописывать в стор услугу-работу, цену и id
    addReducer: (state, action: PayloadAction<IWork>) => {
      state.list.push(action.payload)
    }
    // при вводе в инпут filter фильтровать список услуг-работ по совпадению названия
  }
})

export const { addReducer } = worksSlice.actions

export default worksSlice.reducer