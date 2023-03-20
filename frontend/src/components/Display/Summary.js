import Button from "../UI/Button";
import Card from "../UI/Card";
import DateTime from "./Date";
import { useState, useEffect } from "react";
import CardTable from "../UI/CardTable";
import axios from 'axios'


const Test = () => {

    const [initial, setInitial] = useState('+ FOLLOW');
    const [cashData, setCashData] = useState({});

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/profile"

        }).then((response) => {
            const data = response.data;
            // console.log(data);
            // console.log(typeof data);
            setCashData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }


    const Onchange = () => {
        setInitial(initial === '+ FOLLOW' ? '- UNFOLLOW' : '+ FOLLOW')
    }

    return <Card>
        <div>
            
        </div>
        <div style={{ display: 'flex' }}>
            <div style={{ flexBasis: '70%' }}>
                <div >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flexBasis: '20%' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ flexBasis: '40%', paddingLeft: '1.5%' }}>  <h1> {cashData.Name} </h1> </div>
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
                                        NSE : {cashData.Symbol}
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div style={{ flexBasis: '50%', }}>
                            {/* <div style={{ overflowX: 'auto', paddingTop: '2%', paddingLeft: '1.5%'}}>
                                <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '10px' }}>Row 1, Column 1</td>
                                            <td style={{ padding: '10px' }}>Row 1, Column 2</td>
                                            <td style={{ padding: '10px' }}>Row 1, Column 3</td>
                                        </tr>
                                        <tr >
                                            <td style={{ padding: '10px' }}>Row 2, Column 1</td>
                                            <td style={{ padding: '10px' }}>Row 2, Column 2</td>
                                            <td style={{ padding: '10px' }}>Row 2, Column 3</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '10px' }}>Row 3, Column 1</td>
                                            <td style={{ padding: '10px' }}>Row 3, Column 2</td>
                                            <td style={{ padding: '10px' }}>Row 3, Column 3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}
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
                    <div style={{ flexBasis: '20%', color: 'white' }}> dnjkdnvjjsvd </div>
                    <div style={{ flexBasis: '60%' }}>
                        <p>
                            ABOUT [ edit ] <br></br>
                            {cashData.Description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Card>

}

export default Test;