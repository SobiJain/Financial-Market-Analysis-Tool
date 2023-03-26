import axios from "axios";
export const getProfitlossThunk = async (companyKey, thunkAPI) => {

    try {

        const profitloss = await axios.get("http://127.0.0.1:8000/profitloss", {
            params: {
                companyKeyValue: companyKey
            }
        })

        const profitlossData = profitloss.data;
        return profitlossData;

    }
    catch(error)
    {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}