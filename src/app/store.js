import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlide'

export default configureStore({
  reducer: {
      auth: authReducer
  },
})