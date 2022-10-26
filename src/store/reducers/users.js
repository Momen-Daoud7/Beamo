import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "../../firebase/firebase";

export const login = createAsyncThunk("users/logins", async () => {
  const results = await auth.signInWithPopup(provider);
  return results;
});

const userSlice = createSlice({
  name: "users",
  initialState: { user: {} },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
