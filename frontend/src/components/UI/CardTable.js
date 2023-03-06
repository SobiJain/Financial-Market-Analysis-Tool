import React from 'react';

function CardTable() {
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
                        <td style={{ padding: '10px' }}>₹ 262,289 Cr.</td>
                        <td style={{ padding: '10px' }}>Current Price</td>
                        <td style={{ padding: '10px' }}>₹ 853</td>
                        <td style={{ padding: '10px' }}>High / Low</td>
                        <td style={{ padding: '10px' }}>₹ 970 / 618</td>
                    </tr>
                    <tr style={{ backgroundColor: '#e3eaf3' }}>
                        <td style={{ padding: '10px'}}>Stock P/E</td>
                        <td style={{ padding: '10px'}}>12.7</td>
                        <td style={{ padding: '10px'  }}>Book Value</td>
                        <td style={{ padding: '10px' }}>₹ 385</td>
                        <td style={{ padding: '10px' }}>Dividend Yield</td>
                        <td style={{ padding: '10px' }}>0.12 %</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px' }}>ROCE</td>
                        <td style={{ padding: '10px' }}>5.15 %</td>
                        <td style={{ padding: '10px' }}>ROE</td>
                        <td style={{ padding: '10px' }}>12.7 %</td>
                        <td style={{ padding: '10px' }}>Face Value</td>
                        <td style={{ padding: '10px' }}>₹ 2.00</td>
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
