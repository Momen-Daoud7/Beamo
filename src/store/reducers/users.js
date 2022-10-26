import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "../../firebase/firebase";

export const login = createAsyncThunk("users/logins", async () => {
  try {
    const results = await auth.signInWithPopup(provider);
    return results;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: { user: {} },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user.multiFactor.user;
    },
  },
});

export default userSlice.reducer;
