import Button from "../UI/ButtonC";
import Card from "../UI/Card";
import DateTime from "./Date";
import { useState } from "react";
import CardTable from "../UI/CardTable";
import { useSelector } from 'react-redux'
import RefreshButton from "../UI/RefreshButton";
import { useDispatch } from 'react-redux';
import { getProfileData } from "../../features/company/companySlice";
import ExportButton from "../UI/ExportButton";
import { HandleExport } from "./HandleExport";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Test = () => {

    //fetching the isloading state from the redux-store setup
    const isLoading = useSelector((state) => state.company.isLoading);
    // fetching the companyData state from redux-store setup 
    const companyData = useSelector((store) => store.company);

    const summaryIsLoading = useSelector((state) => state.company.summaryIsLoading);

    let auth = useSelector((state) => state.auth);
    //temporary change function
    const [initial, setInitial] = useState(localStorage.getItem('state')==='true'? '+ FOLLOW': '- UNFOLLOW');
    // const [wishItem, setWishItem] = useState({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:localStorage.getItem('state')})
    console.log(localStorage.getItem("state"))

    const Onchange = () =>  {
        const url = "http://127.0.0.1:8000/wishlist"
        if(localStorage.getItem('state')==='true') {
            // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:'false'})
            console.log(initial)
            const wishItem = {'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:'true'};
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(wishItem),
            })
            .then(response=>{
                if(response.status!==200) {
                    console.log(response.error)
                    toast.error("Already in wishlist")
                    setInitial('- UNFOLLOW')
                    localStorage.setItem('state', 'false')
                    // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:localStorage.getItem("state")})
                }
                else {
                    toast.success("Added to wishlist successfully");
                    setInitial('- UNFOLLOW')
                    localStorage.setItem('state', 'false')
                    console.log(auth)
                    // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:localStorage.getItem("state")})
                    }
                    return response.json()
                });
        }
        else
        {
            // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:'true'})
            console.log(initial)
            const wishItem = {'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:'false'};
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(wishItem),
            })
            .then(response=>{
                if(response.status!==200) {
                    setInitial('+ FOLLOW')
                    localStorage.setItem('state', 'true')
                    // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:localStorage.getItem("state")})
                    toast.error("Never was in Wishlist")
            }
            else {
                setInitial('+ FOLLOW')
                localStorage.setItem('state', 'true')
                console.log(auth)
                toast.success("Removed from wishlist successfully ");
                // setWishItem({'email':localStorage.getItem("email"),"company":localStorage.getItem("company"), state:localStorage.getItem("state")})
                }
                return response.json()
            });
        }
        // setInitial(initial === '+ FOLLOW' ? '- UNFOLLOW' : '+ FOLLOW')
    }

    const dispatch = useDispatch();
    const SummaryHandler = () => {
        const key = localStorage.getItem('company');
        dispatch(getProfileData(key));


    }

    let summaryData = [];
    if (!isLoading && !summaryIsLoading) {
        summaryData = [{
            "Market Cap": companyData.companyData.profileDataResult.MarketCapitalization !== null,
            "High/Low": companyData.companyData.profileDataResult["52WeekHigh"] / companyData.companyData.profileDataResult["52WeekLow"],
            "Stock(P/E)": companyData.companyData.profileDataResult.PERatio,
            "Book Value": companyData.companyData.profileDataResult.BookValue,
            "Dividend Yield": companyData.companyData.profileDataResult.DividendYield,
            "Revenue": companyData.companyData.profileDataResult.RevenueTTM,
            "ROE (TTM)": companyData.companyData.profileDataResult.ReturnOnEquityTTM,
            "ROA (TTM)": companyData.companyData.profileDataResult.ReturnOnAssestsTTM,
            "Sector": companyData.companyData.profileDataResult.Sector,
            "Industry": companyData.companyData.profileDataResult.Industry,
            "Assest Type": companyData.companyData.profileDataResult.AssestType




        }];
    }

    const handleExport = () => {
        HandleExport(summaryData, "SummaryData.xlsx");

    }

    // the if statement is responsible for rendering the Card component only if the state of isLoading is false, i.e when the entire data of the company is fetched
    if (!isLoading && !summaryIsLoading)
        return <Card>
            <div style={{ display: 'flex' }}>
                <div style={{ flexBasis: '70%' }}>
                    <div >
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ flexBasis: '20%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flexBasis: '80%', paddingLeft: '1.5%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <h1 style={{ marginRight: '10px' }}> {companyData.companyData.profileDataResult.Name} </h1>
                                            <RefreshButton onClick={SummaryHandler} />

                                        </div>

                                    </div>
                                    <div style={{ flexBasis: '20%' }}>
                                        <h5 style={{ marginTop: "-18px" }}> <DateTime /> </h5></div>
                                    <div style={{ flexBasis: '40%', paddingLeft: '1.5%' }}>  <h1> {companyData.companyData.profileDataResult.Name} </h1> </div>
                                    <div style={{ flexBasis: '20%', paddingLeft: '10%' }}>
                                        <h5 style={{ marginTop: "2px" }}> <DateTime /> </h5></div>
                                </div>
                            </div>
                            <div style={{ flexBasis: '20%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flexBasis: '17%' }}>
                                        <a href="https://www.nseindia.com/get-quotes/equity?symbol=AXISBANK" target="_blank" style={{ paddingLeft: "1.5%", textDecoration: 'none', color: 'black', fontWeight: 'bold' }} rel="noreferrer">
                                            Ticker: {companyData.companyData.profileDataResult.Symbol}
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div style={{ flexBasis: '50%', }}>
                                <CardTable ></CardTable>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ flexBasis: '30%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flexBasis: '20%' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ flexBasis: '50%', marginTop: "10%", marginLeft: "10px" }}>
                                    <ExportButton onClick={handleExport}> </ExportButton>
                                </div>
                                {auth.isAuthenticated && localStorage.getItem('email')!=='' &&
                                    <div style={{ flexBasis: '50%', marginTop: "10%" }}>
                                        <Button onClick={Onchange}>
                                            {localStorage.getItem('state')==='true'? '+ FOLLOW': '- UNFOLLOW'}
                                        </Button>
                                    </div>
                                }
                                
                            </div>
                        </div>
                        {/* <div style={{ flexBasis: '20%', color: 'white' }}> dnjkdnvjjsvd </div> */}
                        <div style={{ flexBasis: '60%' }}>
                            <p>
                                ABOUT<br></br>
                                {companyData.companyData.profileDataResult.Description}
                                desc
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Card >

}

export default Test;