import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isLoading: false,
  token: "",
  error: "",
  message: "",
};

export const loginUser = createAsyncThunk("loginUser", async (body) => {
  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    addEmail: (state, action) => {
      // state.email = localStorage.getItem("email");
      state.email = action.payload;
      console.log(state.email, "email");
    },

    addToken: (state, action)=>{
      state.token = localStorage.getItem('token')
    },

    addLogout: (state, action)=>{
      state.token = null;
      localStorage.clear();
    }
  },

  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      if (action.error) {
        state.error = action.payload;
      } else {
        state.token = action.payload.insertedId;
        localStorage.setItem("token", state.token);
      }
    },
  },
});

export const { addToken, addEmail, addLogout } = authSlice.actions;
export default authSlice.reducer;
