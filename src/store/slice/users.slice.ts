import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: (state) => {
      state.loading = true
    },
    fetchUsersSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchUsers, fetchUsersSuccess, fetchUsersFailure } = usersSlice.actions

export default usersSlice.reducer
