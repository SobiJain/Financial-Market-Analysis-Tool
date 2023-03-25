import Button from "../UI/Button";
import Card from "../UI/Card";
import DateTime from "./Date";
import { useState } from "react";
import CardTable from "../UI/CardTable";
import { useSelector } from 'react-redux'
import RefreshButton from "../UI/RefreshButton";
import { useDispatch } from 'react-redux';
import { getProfileData } from "../../features/company/companySlice";


const Test = () => {

    //fetching the isloading state from the redux-store setup
    const isLoading = useSelector((state) => state.company.isLoading);
    // fetching the companyData state from redux-store setup 
    const companyData = useSelector((store) => store.company);

    const summaryIsLoading = useSelector((state) => state.company.summaryIsLoading);

    //temporary change function
    const [initial, setInitial] = useState('+ FOLLOW');
    const Onchange = () => {
        setInitial(initial === '+ FOLLOW' ? '- UNFOLLOW' : '+ FOLLOW')
    }

    const dispatch = useDispatch();
    const SummaryHandler = () => {
        const key = localStorage.getItem('company');
        dispatch(getProfileData(key));


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
                                            <h1 style={{marginRight: '10px'}}> {companyData.companyData.profileDataResult.Name} </h1>
                                            <RefreshButton onClick={SummaryHandler} />

                                        </div>

                                </div>
                                <div style={{ flexBasis: '20%' }}> <h5> ₹ not found </h5>
                                    <h5 style={{ marginTop: "-18px" }}> <DateTime /> </h5></div>
                            </div>
                        </div>
                        <div style={{ flexBasis: '20%' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ flexBasis: '17%', paddingLeft: '1.5%' }}>
                                    <a href="https://www.axisbank.com/" target="_blank" style={{ paddingLeft: "1%", textDecoration: 'none', color: 'black', fontWeight: 'bold' }} rel="noreferrer">
                                        not found
                                    </a>
                                </div>
                                <div style={{ flexBasis: '17%' }}>
                                    <a href="https://https://www.bseindia.com/stock-share-price/axis-bank-ltd/AXISBANK/532215/.nseindia.com/get-quotes/equity?symbol=AXISBANK" style={{ paddingLeft: "1.5%", textDecoration: 'none', color: 'black', fontWeight: 'bold' }} target="_blank" rel="noreferrer">
                                        BSE:
                                    </a>
                                </div>
                                <div style={{ flexBasis: '17%' }}>
                                    <a href="https://www.nseindia.com/get-quotes/equity?symbol=AXISBANK" target="_blank" style={{ paddingLeft: "1.5%", textDecoration: 'none', color: 'black', fontWeight: 'bold' }} rel="noreferrer">
                                        NSE : {companyData.companyData.profileDataResult.Symbol}
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div style={{ flexBasis: '50%', }}>
                            <CardTable></CardTable>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ flexBasis: '30%' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flexBasis: '20%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ flexBasis: '50%', marginTop: "10%" }}>
                                <Button>
                                    EXPORT TO EXCEL
                                </Button>
                            </div>
                            <div style={{ flexBasis: '50%', marginTop: "10%" }}>
                                <Button onClick={Onchange}>
                                    {initial}
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* <div style={{ flexBasis: '20%', color: 'white' }}> dnjkdnvjjsvd </div> */}
                    <div style={{ flexBasis: '60%' }}>
                        <p>
                            ABOUT <br></br>
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