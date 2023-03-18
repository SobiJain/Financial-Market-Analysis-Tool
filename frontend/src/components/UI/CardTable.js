import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'

function CardTable() {

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
            console.log(data);
            console.log(typeof data);
            setCashData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    return (
        <div style={{
            borderRadius: '10px',
            border: '1px solid #777',
            padding: '20px',
            marginTop: '2%',
            boxSizing: 'border-box',
            marginRight: '1%',
            marginBottom: '1%',
            margin: '2% 2% 1% 1%'
        }}>
            <table style={{
                borderRadius: '10px',
                borderCollapse: 'collapse',
                width: '100%',
                marginBottom: '20px',
            }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px' }}>Market Cap</td>
                        <td style={{ padding: '10px' }}>$ {cashData.MarketCapitalization}</td>
                        <td style={{ padding: '10px' }}>Current Price</td>
                        <td style={{ padding: '10px' }}>$ </td>
                        <td style={{ padding: '10px' }}>High / Low</td>
                        <td style={{ padding: '10px' }}>$ {cashData["52WeekHigh"]} / {cashData["52WeekLow"]}</td>
                    </tr>
                    <tr style={{ backgroundColor: '#e3eaf3' }}>
                        <td style={{ padding: '10px'}}>Stock P/E</td>
                        <td style={{ padding: '10px'}}>{cashData.PERatio}</td>
                        <td style={{ padding: '10px'  }}>Book Value</td>
                        <td style={{ padding: '10px' }}>$ {cashData.BookValue}</td>
                        <td style={{ padding: '10px' }}>Dividend Yield</td>
                        <td style={{ padding: '10px' }}>{cashData.DividendYield} %</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px' }}>ROCE</td>
                        <td style={{ padding: '10px' }}> %</td>
                        <td style={{ padding: '10px' }}>ROE (TTM)</td>
                        <td style={{ padding: '10px' }}> {cashData.ReturnOnEquityTTM} %</td>
                        <td style={{ padding: '10px' }}>Face Value</td>
                        <td style={{ padding: '10px' }}>$ </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h5>Add ratio to table</h5>
                <input placeholder= 'eg: Promoter holding'>
                </input>
            </div>
        </div>
    );
}

export default CardTable;
