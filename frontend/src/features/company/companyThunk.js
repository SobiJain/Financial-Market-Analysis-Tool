// import customFetch from "../../utils/axios";
import axios from "axios";
export const getCompanyThunk = async(_, thunkAPI) => {
    try{
        const resp = await axios.get("http://localhost:8000/getAll");
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const getDataThunk = async(companyKey, thunkAPI) => {
    console.log(companyKey);
    try{
        const resp = await axios.post(`http://localhost:8000/getData`, {companyKey});
        console.log(resp.data)
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}
