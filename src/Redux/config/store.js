import { configureStore } from "@reduxjs/toolkit";
import statesSlice from "../features/States/slice";
import DataSlice from "../features/Data Slice/DataSlice";

export default configureStore({
  reducer: {
    data: DataSlice,
    states: statesSlice,
    //her yere gonderile bilecek state var
  },
});
