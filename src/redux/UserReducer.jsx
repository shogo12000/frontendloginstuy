// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    username: "",
    email: "",

  },
  reducers: {
    setUser: (state, action) => { 
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.token = "";
      state.username = "";
      state.email = "";
    }, 
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
