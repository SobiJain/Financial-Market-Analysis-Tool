import axios from "axios";

// Creating a thunk function to retrieve a list of companies
export const getCompanyThunk = async (_, thunkAPI) => {
    try {
        // Making a GET request to retrieve a list of companies from the server
        const resp = await axios.get("http://localhost:8000/getAll");
        // Returning the retrieved data if the request is successful
        return resp.data;
    } catch (error) {
        // Rejecting the request with an error message if it fails
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

// Creating a thunk function to retrieve financial data for a specific company
export const getDataThunk = async (companyKey, thunkAPI) => {
    try {
        console.log("inside getdatathunk " + companyKey);
        // Making multiple HTTP requests to retrieve financial data for the specified company using different endpoints
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

        //The responses are collected using Promise.all to wait for all of the requests to complete before proceeding. The data is then combined into a single object combinedData.
        const [quarterData, cashData, balanceData, profileData, ratioData, profitLossData] = await Promise.all([quarter, cash, balance, profile, ratio, profitLoss]);
        //Each property of combinedData corresponds to a type of financial data, and its value is the data retrieved from the respective API request.
        const combinedData = {
            quarterDataResult: quarterData.data,
            cashDataResult: cashData.data,
            balanceDataResult: balanceData.data,
            profileDataResult: profileData.data,
            ratioData: ratioData.data,
            profitLossDataResult: profitLossData.data,
            // priceDataResult: priceData.data,
        }
        console.log(combinedData);
        //combinedData is returned as the fulfilled value of the getData action. If any of the requests fail, the function rejects the promise with the error message returned by the server.
        return combinedData;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}
