import axios from "axios";

export const TestBalanceData = async (companyKey) => {
    const expected_fields=[
        "fiscalDateEnding",
        "totalLiabilities",
        "totalShareholderEquity",
        "capitalLeaseObligations",
        "shortTermDebt",
        "longTermDebt",
        "currentAccountsPayable",
        "cashAndCashEquivalentsAtCarryingValue",
        "totalAssets",
        "inventory",
        "currentNetReceivables",
        "intangibleAssets",
        "accumulatedDepreciationAmortizationPPE",
        "investments",
        "otherCurrentAssets"];
    try{
        const res = await axios.get("http://127.0.0.1:8000/balancesheet", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const balanceData=res.data;
        const result=Object.keys(balanceData);
        const passed=true;
        for(let i=0 ; i < expected_fields.length ; i++){
            let found=false;
            for(let j=0; j< result.length ;j++ ){
                if(expected_fields[i] === result[j]){
                    found=true;
                    break;
                }
            }
            if(!found) {
                passed=false;
                break;
            }
        }
        if(pass) console.log("Test for BalanceData Passed!");
        else console.log("Test for BalanceData Failed!");
    }catch(error){
        console.log("Test for BalanceData Failed!",error);
    }

}
