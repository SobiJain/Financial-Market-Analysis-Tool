import axios from "axios";
export const getQuaterThunk = async (companyKey, thunkAPI) => {

    try {

        const quater = await axios.get("http://127.0.0.1:8000/quarter", {
            params: {
                companyKeyValue: companyKey
            }
        })

        const quaterData = quater.data;
        return quaterData;

    }
    catch(error)
    {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}