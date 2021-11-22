import { createSlice } from '@reduxjs/toolkit'

export const authSlide = createSlice({
  name: 'login',
  initialState: {
    value: false,
    user_name: ''
  },
  reducers: {
    login: (state, action) => {
        state.value = true;
        state.user_name = action.payload;
    }, 
    logout: state => {
        state.value = false;
        state.user_name = "";
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlide.actions

export default authSlide.reducer