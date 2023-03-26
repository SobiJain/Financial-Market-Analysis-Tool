import axios from "axios";
export const getCashdataThunk = async (companyKey, thunkAPI) => {

    try {

        const cashflow = await axios.get("http://127.0.0.1:8000/cashflow", {
            params: {
                companyKeyValue: companyKey
            }
        })

        const cashflowData = cashflow.data;
        return cashflowData;

    }
    catch(error)
    {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}