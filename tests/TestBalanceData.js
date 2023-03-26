import axios from "axios";

export const TestBalanceData = async (companyKey) => {
    const expected_fields = [
        "totalLiabilities",//
        "totalCurrentLiabilities",//
        "totalShareholderEquity",//
        "otherCurrentLiabilities", //
        "currentDebt", //
        "shortTermInvestments", //
        "longTermInvestments", //
        "totalAssets",//
        "inventory",//
        "otherCurrentAssets",//
    "totalCurrentAssets"//
];
    try {
        const res = await axios.get("http://127.0.0.1:8000/balancesheet", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const balanceData = res.data;
        const result = Object.keys(balanceData);
        let passed = true;
        for (let i = 0; i < expected_fields.length; i++) {
            let found = false;
            for (let j = 0; j < result.length; j++) {
                if (expected_fields[i] === result[j]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                passed = false;
                break;
            }
        }
        if (passed) console.log("Test for BalanceData Passed!");
        else console.log("Test for BalanceData Failed!");
    } catch (error) {
        console.log("Test for BalanceData Failed!", error);
    }

}
