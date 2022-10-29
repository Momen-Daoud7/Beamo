import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "../../firebase/firebase";

export const login = createAsyncThunk("users/logins", async () => {
  try {
    const results = await auth.signInWithPopup(provider);
    // store user in local storage
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...results.user.multiFactor.user,
      })
    );
    return results;
  } catch (error) {
    console.log(error);
  }
});

// init userToken value from localStorage
const initUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const userSlice = createSlice({
  name: "users",
  initialState: { user: initUser },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user.multiFactor.user;
    },
  },
});

export default userSlice.reducer;
