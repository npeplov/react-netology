import { createSlice } from '@reduxjs/toolkit'

export interface IMarket {
  id: number,
  title: string,
  // под вопросом - как хранить фото, как указать можно прямую ссылку
  // можно форму загрузки
  // thumbnail:''
  link: string,
  // thumbnail: string,
  price: number,
}

interface MarketState {
  products: IMarket[]
}

const initialState: MarketState = {
  products: [
    {
      id: 1,
      title: 'Конструктор LEGO',
      link: 'httsp://ya.ru/1',
      price: 2000
    },
    {
      id: 2,
      title: 'Маршрутизатор Keenetic',
      link: 'httsp://ya.ru/2',
      price: 1000
    },
  ]
}

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    addProduct(state, action) {
      const id = Date.now()
      const price = Number(action.payload.price)
      state.products.push({ id, ...action.payload, price })
    },
  }
})

export const { addProduct } = marketSlice.actions

export default marketSlice.reducer