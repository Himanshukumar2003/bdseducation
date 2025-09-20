"use client";

// /lib/features/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // { firstName, lastName, email, avatar? }
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // { firstName, lastName, email, avatar? }
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
