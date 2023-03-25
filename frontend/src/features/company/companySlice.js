import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCompanyThunk, getDataThunk } from "./companyThunk";
import { getProfileThunk } from './profileThunk'
import { getCashdataThunk } from './cashdataThunk'
import { getBalancedatathunk } from './balancedataThunk'
import { getProfitlossThunk } from './profitlossThunk'
import { getQuaterThunk } from './quaterThunk'
import { getRatioThunk } from './ratioThunk'
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  companyList: null,
  companyData: null,
  summaryIsLoading: false,
  balanceIsLoading: false,
  cashDataIsLoading: false,
  profitLossIsLoading: false,
  quaterIsLoading: false,
  ratioIsLoading: false,

}

export const getCompany = createAsyncThunk("company/getCompany", getCompanyThunk);
export const getData = createAsyncThunk("company/getData", getDataThunk);
export const getProfileData = createAsyncThunk("company/getProfileData", getProfileThunk);
export const getBalanceData = createAsyncThunk("company/getBalanceData", getBalancedatathunk);
export const getCashData = createAsyncThunk("company/getCashData", getCashdataThunk);
export const getProfitLossData = createAsyncThunk("company/getProfitLossData", getProfitlossThunk);
export const getQuaterData = createAsyncThunk("company/getQuaterData", getQuaterThunk);
export const getRatioData = createAsyncThunk("company/getRatioData", getRatioThunk);



const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
  },
  extraReducers: {
    //data reducers Start
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

    // data Reducers End

    //Summary Reducers Start

    [getProfileData.pending]: (state) => {
      console.log("inside pending");
      state.summaryIsLoading = true;
    },
    [getProfileData.fulfilled]: (state, { payload }) => {
      state.summaryIsLoading = false;
      state.companyData = { ...state.companyData, profileDataResult: payload };
      console.log("payload of profile data:", payload);
      toast.success(`Summary Section Successfully Reloaded`);
    },
    [getProfileData.rejected]: (state, { payload }) => {
      console.log("inside rejected");
      state.summaryIsLoading = false;
      toast.error(payload);
    },

    //Summary Reducers End

    //BalanceData Reducers Start


    [getBalanceData.pending]: (state) => {
      console.log("inside pending");
      state.balanceIsLoading = true;
    },
    [getBalanceData.fulfilled]: (state, { payload }) => {
      state.balanceIsLoading = false;
      state.companyData = { ...state.companyData, balanceDataResult: payload };
      console.log("payload of profile data:", payload);
      toast.success(`Balance Section Successfully Reloaded`);
    },
    [getBalanceData.rejected]: (state, { payload }) => {
      console.log("inside rejected");
      state.balanceIsLoading = false;
      toast.error(payload);
    },

    //BalanceData reducers end

    //Cashdata reducers start

    [getCashData.pending]: (state) => {
      console.log("inside pending");
      state.cashDataIsLoading = true;
    },
    [getCashData.fulfilled]: (state, { payload }) => {
      state.cashDataIsLoading = false;
      state.companyData = { ...state.companyData, cashDataResult: payload };
      console.log("payload of profile data:", payload);
      toast.success(`Cashdata Section Successfully Reloaded`);
    },
    [getCashData.rejected]: (state, { payload }) => {
      console.log("inside rejected");
      state.cashDataIsLoading = false;
      toast.error(payload);
    },

    //cashData reducers end

    //ProfitLoss Reducers start

    [getProfitLossData.pending]: (state) => {
      console.log("inside pending");
      state.profitLossIsLoading = true;
    },
    [getProfitLossData.fulfilled]: (state, { payload }) => {
      state.profitLossIsLoading = false;
      state.companyData = { ...state.companyData, profitLossDataResult: payload };
      console.log("payload of profile data:", payload);
      toast.success(`Profit Loss Section Successfully Reloaded`);
    },
    [getProfitLossData.rejected]: (state, { payload }) => {
      console.log("inside rejected");
      state.profitLossIsLoading = false;
      toast.error(payload);
    },

    //ProfitLoss Reducers end

    //Quaterly Reducers start

    [getQuaterData.pending]: (state) => {
      console.log("inside pending");
      state.quaterIsLoading = true;
    },
    [getQuaterData.fulfilled]: (state, { payload }) => {
      state.quaterIsLoading = false;
      state.companyData = { ...state.companyData, quarterDataResult: payload };
      console.log("payload of profile data:", payload);
      toast.success(`Quaterly Result Section Successfully Reloaded`);
    },
    [getQuaterData.rejected]: (state, { payload }) => {
      console.log("inside rejected");
      state.quaterIsLoading = false;
      toast.error(payload);
    },

    //quaterly reducers end

    //ratio reducers start

    [getRatioData.pending]: (state) => {
      console.log("inside pending");
      state.ratioIsLoading = true;
    },
    [getRatioData.fulfilled]: (state, { payload }) => {
      state.ratioIsLoading = false;
      state.companyData = { ...state.companyData, ratioData: payload };
      console.log("payload of profile data:", payload);
      toast.success(`Ratio Section Successfully Reloaded`);
    },
    [getRatioData.rejected]: (state, { payload }) => {
      console.log("inside rejected");
      state.ratioIsLoading = false;
      toast.error(payload);
    },

  },
});

export default companySlice.reducer;

