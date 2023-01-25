import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import categoryReducer from './features/categorySlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    category: categoryReducer,
  },
})