import axios from "axios";

export const TestProfileData = async (companyKey) => {
    const expected_fields = [
        "Symbol",
        "Name",
        "Description",
        "MarketCapitalization",
        "BookValue",
        "DividendYield",
        "ReturnOnEquityTTM",
        "52WeekHigh",
        "52WeekLow",
        "PERatio",
        "RevenueTTM",
        "ReturnOnAssestsTTM",
        "Sector",
        "Industry",
        "AssestType"];
    try {
        const res = await axios.get("http://127.0.0.1:8000/profile", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const profileData = res.data;
        const result = Object.keys(profileData);
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
        if (passed) console.log("Test for ProfileData Passed!");
        else console.log("Test for ProfileData Failed!");
    } catch (error) {
        console.log("Test for ProfileData Failed!", error);
    }

}
