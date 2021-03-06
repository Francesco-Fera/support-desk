import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  use: null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default authSlice.reducer
