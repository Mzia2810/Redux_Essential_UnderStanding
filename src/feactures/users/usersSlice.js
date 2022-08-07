import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Muhammad Zia ' },
  { id: '1', name: 'Malik Bilal Ahmad' },
  { id: '2', name: 'Dhola Meda' },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default userSlice.reducer
