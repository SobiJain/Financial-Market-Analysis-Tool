import React from 'react';
import { useSelector } from 'react-redux';

function CardTable() {

    const companyData = useSelector((store) => store.company);


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
                        <td style={{ padding: '10px' }}>$ {companyData.companyData.profileDataResult.MarketCapitalization}</td>
                        <td style={{ padding: '10px' }}>Current Price</td>
                        <td style={{ padding: '10px' }}>$ </td>
                        <td style={{ padding: '10px' }}>High / Low</td>
                        <td style={{ padding: '10px' }}>$ {companyData.companyData.profileDataResult["52WeekHigh"]} / {companyData.companyData.profileDataResult["52WeekLow"]}</td>
                    </tr>
                    <tr style={{ backgroundColor: '#e3eaf3' }}>
                        <td style={{ padding: '10px' }}>Stock P/E</td>
                        <td style={{ padding: '10px' }}>{companyData.companyData.profileDataResult.PERatio}</td>
                        <td style={{ padding: '10px' }}>Book Value</td>
                        <td style={{ padding: '10px' }}>$ {companyData.companyData.profileDataResult.BookValue}</td>
                        <td style={{ padding: '10px' }}>Dividend Yield</td>
                        <td style={{ padding: '10px' }}>{companyData.companyData.profileDataResult.DividendYield} %</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px' }}> Revenue (TTM)</td>
                        <td style={{ padding: '10px' }}> {companyData.companyData.profileDataResult.RevenueTTM} </td>
                        <td style={{ padding: '10px' }}>ROE (TTM)</td>
                        <td style={{ padding: '10px' }}> {companyData.companyData.profileDataResult.ReturnOnEquityTTM} %</td>
                        <td style={{ padding: '10px' }}>ROA (TTM)</td>
                        <td style={{ padding: '10px' }}> {companyData.companyData.profileDataResult.ReturnOnAssestsTTM} </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px' }}> Sector </td>
                        <td style={{ padding: '10px' }}> {companyData.companyData.profileDataResult.Sector} </td>
                        <td style={{ padding: '10px' }}>Industry </td>
                        <td style={{ padding: '10px' }}> {companyData.companyData.profileDataResult.Industry} %</td>
                        <td style={{ padding: '10px' }}>Assest Type</td>
                        <td style={{ padding: '10px' }}> {companyData.companyData.profileDataResult.AssestType} </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h5>Add ratio to table</h5>
                <input placeholder='eg: Promoter holding'>
                </input>
            </div>
        </div>
    );
}

export default CardTable;
