import axios from "axios";

//test 1
const TestProfileData = async (companyKey) => {
    const expected_fields=["Symbol","Name","Description","MarketCapitalization","BookValue","DividendYield","ReturnOnEquityTTM","52WeekHigh","52WeekLow"];
    try{
        const profile = await axios.get("http://127.0.0.1:8000/profile", {
            params: {
                companyKeyValue: companyKey
            }
        });
        const res=profile.data;
        const result=Object.keys(res);
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
        if(pass) console.log("Test for ProfileData Passed!");
        else console.log("Test for ProfileData Failed!");
    }catch(error){
        console.log("Test for ProfileData Failed!");
    }

}
