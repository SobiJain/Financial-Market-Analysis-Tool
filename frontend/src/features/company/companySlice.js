import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCompanyThunk, getDataThunk } from "./companyThunk";
import { toast } from "react-toastify";
import { CombinedObject } from "../../data/combinedObject";

const initialState = {
  isLoading: false,
  companyList: null,
  companyData: null,
}

export const getCompany = createAsyncThunk("company/getCompany", getCompanyThunk);
export const getData = createAsyncThunk("company/getData", CombinedObject);

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getCompany.pending]: (state) => {
      state.isLoading = true;
    },
    [getCompany.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.companyList = payload.companyList;
      toast.success(`darquasth successful`);
    },
    [getCompany.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.companyData = payload.companyData;
      console.log(state.companyData);
      toast.success(`data successful`);
    },
    [getData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

  },
});

const companyKeySlice = createSlice({
  name: "Comapny Key",
  initialState: { companyKey: "" },
  reducers: {
    getCompanyKey(state, action) {
      state.companyKey = action.payload;

    }
  }
})

export const companyActions = companyKeySlice.actions

//export const { } = companySlice.actions;
export const ereducer = {
  companySlice: companySlice.reducer,
  companyKeySlice: companyKeySlice.reducer
}
// export default companySlice.reducer;
// export default companyKeySlice.reducer;
