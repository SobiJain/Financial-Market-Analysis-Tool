import axios from "axios";
export const getBalancedatathunk = async (companyKey, thunkAPI) => {

    try {

        const balancesheet = await axios.get("http://127.0.0.1:8000/balancesheet", {
            params: {
                companyKeyValue: companyKey
            }
        })

        const balancesheetData = balancesheet.data;
        return balancesheetData

    }
    catch(error)
    {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}