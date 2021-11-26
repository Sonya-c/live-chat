import { createSlice } from '@reduxjs/toolkit'

export const usersSlide = createSlice({
  name: 'users',
  initialState: {
    user_list: []
  },
  reducers: {
    addUser: (state, action) => {
        state.user_list.push({
            username: action.payload,
            conected: true
        })
    },
    disconectUser: (state, action) => {
        state.user_list.find((user, i) => {
            if (user.username === action.payload) {
                user.conected = false;
                return true;
            }
            return false;
        });
    }
  }
})

export const { addUser, disconectUser } = usersSlide.actions

export default usersSlide.reducer