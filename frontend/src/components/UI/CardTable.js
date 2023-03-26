import React from 'react';
import { useSelector } from 'react-redux';
import checkIsNan from '../Display/CheckIsNan';

function CardTable() {

    const companyData = useSelector((store) => store.company);
    const isLoading = useSelector((state) => state.company.isLoading);



    if (!isLoading) {
      
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
                            <td style={{ padding: '10px' }}>$ {checkIsNan(companyData.companyData.profileDataResult.MarketCapitalization/ 1000000000)}</td>
                            <td style={{ padding: '10px' }}>Current Price</td>
                            <td style={{ padding: '10px' }}>$ </td>
                            <td style={{ padding: '10px' }}>High / Low</td>
                            <td style={{ padding: '10px' }}>$ {checkIsNan(companyData.companyData.profileDataResult["52WeekHigh"])} / {companyData.companyData.profileDataResult["52WeekLow"]}</td>
                        </tr>
                        <tr style={{ backgroundColor: '#e3eaf3' }}>
                            <td style={{ padding: '10px' }}>Stock P/E</td>
                            <td style={{ padding: '10px' }}>{checkIsNan(companyData.companyData.profileDataResult.PERatio)}</td>
                            <td style={{ padding: '10px' }}>Book Value</td>
                            <td style={{ padding: '10px' }}>$ {checkIsNan(companyData.companyData.profileDataResult.BookValue)}</td>
                            <td style={{ padding: '10px' }}>Dividend Yield</td>
                            <td style={{ padding: '10px' }}>{checkIsNan(companyData.companyData.profileDataResult.DividendYield)} %</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}> Revenue (TTM)</td>
                            <td style={{ padding: '10px' }}> {checkIsNan(companyData.companyData.profileDataResult.RevenueTTM/ 1000000000)} </td>
                            <td style={{ padding: '10px' }}>ROE (TTM)</td>
                            <td style={{ padding: '10px' }}> {checkIsNan(companyData.companyData.profileDataResult.ReturnOnEquityTTM)} %</td>
                            <td style={{ padding: '10px' }}>ROA (TTM)</td>
                            <td style={{ padding: '10px' }}> {checkIsNan(companyData.companyData.profileDataResult.ReturnOnAssestsTTM)} </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}> Sector </td>
                            <td style={{ padding: '10px' }}> {checkIsNan(companyData.companyData.profileDataResult.Sector)} </td>
                            <td style={{ padding: '10px' }}>Industry </td>
                            <td style={{ padding: '10px' }}> {checkIsNan(companyData.companyData.profileDataResult.Industry)} %</td>
                            <td style={{ padding: '10px' }}>Assest Type</td>
                            <td style={{ padding: '10px' }}> {checkIsNan(companyData.companyData.profileDataResult.AssestType)} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CardTable;
