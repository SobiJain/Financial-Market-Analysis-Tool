import axios from "axios";

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
        const profitLoss = axios.get("http://127.0.0.1:8000/profitloss", {
            params: {
                companyKeyValue: companyKey
            }
        });
        // const price = axios.get("http://127.0.0.1:8000/price", {
        //     params: {
        //         companyKeyValue: companyKey
        //     }
        // })
    
    
        const [quarterData, cashData, balanceData, profileData, profitLossData] = await Promise.all([quarter, cash, balance, profile, profitLoss]);
    
        const combinedData = {
            quarterDataResult: quarterData.data,
            cashDataResult: cashData.data,
            balanceDataResult: balanceData.data,
            profileDataResult: profileData.data,
            profitLossDataResult: profitLossData.data,
            // priceDataResult: priceData.data,
        }
        console.log(combinedData);
        return combinedData;
    
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}
