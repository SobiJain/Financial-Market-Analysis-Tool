import axios from "axios";
// import { useSelector } from 'react-redux';

export const CombinedObject = async (companyKey) => {

    // const companyKey = useSelector((state) => state.companyKeyData.companyKey);
    console.log("CompanyKeyValue from CombinedObject: " + companyKey);

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


    const [quarterData, cashData, balanceData, profileData, ratioData, profitLossData] = await Promise.all([quarter, cash, balance, profile, ratio, profitLoss]);

    const combinedData = {
        quarterDataResult: quarterData.data,
        cashDataResult: cashData.data,
        balanceDataResult: balanceData.data,
        profileDataResult: profileData.data,
        ratioData: ratioData.data,
        profitLossDataResult: profitLossData.data
    }
    console.log(combinedData)
    return combinedData;

}