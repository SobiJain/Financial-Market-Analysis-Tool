import { createSlice } from "@reduxjs/toolkit";
const companyKeySlice = createSlice({
    name: "Comapny Key",
    initialState: { companyKey: "initial key" },
    reducers: {
        getCompanyKey(state, action) {
            state.companyKey = action.payload;

        }
    }
})

export const companyActions = companyKeySlice.actions;
export default companyKeySlice.reducer;
