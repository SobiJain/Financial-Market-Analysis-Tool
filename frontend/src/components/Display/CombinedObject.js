import axios from "axios"
export const CombinedObject = async () => {

    const quarter = axios.get("http://127.0.0.1:8000/quarter");
    const cash = axios.get("http://127.0.0.1:8000/cashflow");
    const balance = axios.get("http://127.0.0.1:8000/balancesheet");
    const profile = axios.get("http://127.0.0.1:8000/profile");
    const ratio = axios.get("http://127.0.0.1:8000/ratio");
    const profitLoss = axios.get("http://127.0.0.1:8000/profitloss");


    const [quarterData, cashData, balanceData, profileData, ratioData, profitLossData] = await Promise.all([quarter, cash, balance, profile, ratio, profitLoss]);

    const combinedData = {
        quarterDataResult: quarterData.data,
        cashDataResult: cashData.data,
        balanceDataResult: balanceData.data,
        profileDataResult: profileData.data,
        ratioData: ratioData.data,
        profitLossDataResult: profitLossData.data

    }
    return combinedData;

}