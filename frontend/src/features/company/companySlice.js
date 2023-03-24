// Importing necessary functions and libraries from Redux toolkit, Redux Thunk, and React Toastify
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCompanyThunk, getDataThunk } from "./companyThunk";
import { toast } from "react-toastify";

// Creating the initial state of the companySlice
const initialState = {
  isLoading: true,
  companyList: null,
  companyData: null,
}

// Creating the Redux async thunks to handle API requests
export const getCompany = createAsyncThunk("company/getCompany", getCompanyThunk);
export const getData = createAsyncThunk("company/getData", getDataThunk);

// Creating the companySlice
const companySlice = createSlice({
  name: "company",
  initialState,
  // Defining the reducers to handle state changes
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
  // Defining the extra reducers to handle state changes in response to async thunks
  extraReducers: {
    [getCompany.pending]: (state) => {
      state.isLoading = true;
    },
    [getCompany.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.companyList = payload.companyList;
      toast.success(`request successful`);
    },
    [getCompany.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
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

// Exporting the companySlice reducer
export default companySlice.reducer;
