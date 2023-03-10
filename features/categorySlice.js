import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: {
    id: null,
    image: null,
    name: null,
    big_description: null
  },
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    }
})

// Action creators are generated for each case reducer function
export const { setCategory } = categorySlice.actions

export const selectCategory = (state) => state.category.category;

export default categorySlice.reducer