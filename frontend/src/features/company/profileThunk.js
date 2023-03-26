import axios from "axios";
export const getProfileThunk = async (companyKey, thunkAPI) => {

    try {
        console.log("inside profile thunk entering");
        const profile = await axios.get("http://127.0.0.1:8000/profile", {
            params: {
                companyKeyValue: companyKey
            }
        })

        const profileData = profile.data;
        console.log("inside profile thunk", profileData);
        return profileData;

    }
    catch(error)
    {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}