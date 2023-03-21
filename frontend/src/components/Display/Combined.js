import { useState, useEffect } from "react";
import axios from 'axios'

const SingleObj = () => {
    const [quarterData, setQuarterData] = useState({});

    useEffect(() => {
        fetchQuarter();
    }, [])

    const fetchQuarter = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/quarter"

        }).then((response) => {
            const data = response.data;
            console.log("QuaterData: " + data);
            setQuarterData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    const [cashData, setCashData] = useState({});

    useEffect(() => {
        fetchCash();
    }, [])

    const fetchCash = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/cashflow"

        }).then((response) => {
            const data = response.data;
            console.log("Cash Data: " + data);
            setCashData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    const [balanceData, setBalanceData] = useState({});

    useEffect(() => {
        fetchBalance();
    }, [])

    const fetchBalance = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/balancesheet"

        }).then((response) => {
            const data = response.data;
            console.log("Balance Data: " + data);
            setBalanceData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        fetchProfile();
    }, [])

    const fetchProfile = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/profile"

        }).then((response) => {
            const data = response.data;
            console.log("Profile Data: " + data);
            setProfileData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    const [ratioData, setRatioData] = useState({});

    useEffect(() => {
        fetchRatio();
    }, [])

    const fetchRatio = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/ratio"

        }).then((response) => {
            const data = response.data;
            console.log("Ratio Data: " + data);
            setRatioData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    const [profitData, setProfitData] = useState({});

    useEffect(() => {
        fetchProfit();
    }, [])

    const fetchProfit = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/profitloss"

        }).then((response) => {
            const data = response.data;
            console.log("Profile Data: " + data);
            setProfitData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    const allData = {
        profile: profileData,
        cashflow: cashData,
        balancesheet: balanceData,
        profitloss: profitData,
        ratio: ratioData,
        quarter: quarterData
    }

    console.log("All combined data: " + allData)
    
}

export default SingleObj;