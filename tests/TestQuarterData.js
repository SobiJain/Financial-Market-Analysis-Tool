import axios from "axios";

export const TestQuarterData = async (companyKey) => {
    const expected_fields = [
        "reportedEPS",
        "estimatedEPS",
        "surprise",
        "surprisePercentage"

    ];
    try {
        const res = await axios.get("http://127.0.0.1:8000/quarter", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const quarterData = res.data;
        const result = Object.keys(quarterData);
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
        if (passed) console.log("Test for QuarterData Passed!");
        else console.log("Test for QuarterData Failed!");
    } catch (error) {
        console.log("Test for QuarterData Failed!", error);
    }

}
