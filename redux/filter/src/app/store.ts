import { configureStore } from "@reduxjs/toolkit";
import worksReducer from "../features/works/worksSlice"
import formReducer from "../features/works/formSlice"

export const store = configureStore({
  reducer: {
    works: worksReducer,
    form: formReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch