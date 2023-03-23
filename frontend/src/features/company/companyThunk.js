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
    // console.log(companyKey);
    try{
        // const resp = await axios.post(`http://localhost:8000/getData`, {companyKey});
        // console.log(resp.data)
        // return resp.data;
        console.log("inside getdatathunk " + companyKey);

        const quarter = axios.get("http://127.0.0.1:8000/quarter", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const cash = axios.get("http://127.0.0.1:8000/cashflow", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const balance = axios.get("http://127.0.0.1:8000/balancesheet", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const profile = axios.get("http://127.0.0.1:8000/profile", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const ratio = axios.get("http://127.0.0.1:8000/ratio", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const profitLoss = axios.get("http://127.0.0.1:8000/profitloss", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const price = axios.get("http://127.0.0.1:8000/price", {
            params: {
                companyKeyValue: companyKey
            }
        })
    
    
        const [quarterData, cashData, balanceData, profileData, ratioData, profitLossData, priceData] = await Promise.all([quarter, cash, balance, profile, ratio, profitLoss, price]);
    
        const combinedData = {
            quarterDataResult: quarterData.data,
            cashDataResult: cashData.data,
            balanceDataResult: balanceData.data,
            profileDataResult: profileData.data,
            ratioData: ratioData.data,
            profitLossDataResult: profitLossData.data,
            priceDataResult: priceData.data,
        }
        console.log(combinedData);
        return combinedData;
    
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}
