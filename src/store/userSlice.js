import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("/user/fetchUser", async (token) => {
  if (token) {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.user;
    } catch (error) {
      throw new Error(error?.response?.data?.message || error.message);
    }
  } else {
    throw new Error("Not Logged In");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, status: "idle", error: null },
  reducers: {
    setUsers: (state, action) => {
      state.user = action.payload;
    },
    removeUsers: (state, actions) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = "loading";
      state.user = null;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "loaded";
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = "loaded";
      state.user = null;
      state.error = action.error.message;
    });
  },
});
