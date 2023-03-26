import axios from "axios";

export const TestProfitLossData = async (companyKey) => {
    const expected_fields=[
        "fiscalDateEnding",
        "grossProfit",
        "costofGoodsAndServicesSold",
        "operatingIncome",
        "interestIncome",
        "depreciation",
        "incomeBeforeTax",
        "incomeTaxExpense",
        "netIncome"
    ];
    try{
        const res = await axios.get("http://127.0.0.1:8000/profitloss", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const profitLossData=res.data;
        const result=Object.keys(profitLossData);
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
        if(pass) console.log("Test for ProfitLossData Passed!");
        else console.log("Test for ProfitLossData Failed!");
    }catch(error){
        console.log("Test for ProfitLossData Failed!",error);
    }

}
