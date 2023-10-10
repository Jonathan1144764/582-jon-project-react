import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
  },
  reducers: {
    logUser: (state) => {
      state.user = document.querySelector("#users-list").value;
    },
  },
});

export const { logUser } = userSlice.actions;

export default userSlice.reducer;
