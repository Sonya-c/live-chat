import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlide';
import themeReducer from './features/themeSlide';

export default configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer
  },
})