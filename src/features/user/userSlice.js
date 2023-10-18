import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
  },
  reducers: {
    handleLogUser: (state) => {
      state.user = document.querySelector("#users-list").value;
    },
  },
});

export const { handleLogUser } = userSlice.actions;

export default userSlice.reducer;
