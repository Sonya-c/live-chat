import { createSlice } from '@reduxjs/toolkit'

export const themeSlide = createSlice({
  name: 'changeTheme',
  initialState: {
    dark: true
  },
  reducers: {
    changeTheme(state, action) {
        let prev = state.dark;
        state.dark = !prev;
    }
  }
})

console.log(themeSlide)

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlide.actions

export default themeSlide.reducer