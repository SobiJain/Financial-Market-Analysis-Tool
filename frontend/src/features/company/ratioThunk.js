import axios from "axios";
export const getRatioThunk = async (companyKey, thunkAPI) => {

    try {

        const ratio = await axios.get("http://127.0.0.1:8000/ratio", {
            params: {
                companyKeyValue: companyKey
            }
        })

        const ratioData = ratio.data;
        return ratioData

    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}