import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDataThunk } from "./companyThunk";
import { toast } from "react-toastify";

const initialState = {
  isLoading: true,
  companyList: null,
  companyData: null,
}

export const getData = createAsyncThunk("company/getData", getDataThunk);

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.companyData = payload;
      console.log(state.companyData);
      toast.success(`data successful`);
    },
    [getData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.companyData = payload;
      state.isLoading = false;

      console.log(state.companyData);
      toast.success(`data successful`);
    },
    [getData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

  },
});

export default companySlice.reducer;

