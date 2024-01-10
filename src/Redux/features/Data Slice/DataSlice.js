import { createSlice } from "@reduxjs/toolkit";
import { fetchData, postData } from "../../ThunkApi/AsyncThunk";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // GET
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
      state.data = [];
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    // POST
    builder.addCase(postData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(postData.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
