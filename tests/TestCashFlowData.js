import axios from "axios";

export const TestCashFlowData = async (companyKey) => {
    const expected_fields=[
        "fiscalDateEnding",
        "operatingCashflow",
        "paymentsForOperatingActivities",
        "changeInOperatingLiabilities",
        "changeInOperatingAssets",
        "capitalExpenditures",
        "changeInReceivables",
        "changeInInventory",
        "cashflowFromInvestment",
        "cashflowFromFinancing",
        "proceedsFromRepaymentsOfShortTermDebt",
        "dividendPayout",
        "netIncome" 
    ];
    try{
        const res = await axios.get("http://127.0.0.1:8000/cashflow", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const cashFlowData=res.data;
        const result=Object.keys(cashFlowData);
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
        if(pass) console.log("Test for CashFlowData Passed!");
        else console.log("Test for CashFlowData Failed!");
    }catch(error){
        console.log("Test for CashFlowData Failed!",error);
    }

}
