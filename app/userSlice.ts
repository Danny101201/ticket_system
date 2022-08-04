import { createSlice } from "@reduxjs/toolkit";
type UserState = {
  name?: string
  age?: number
}
const initialState: UserState = {

}
const userSlice = createSlice({
  name: 'Urser',
  initialState,
  reducers: {}
})
export default userSlice.reducer
