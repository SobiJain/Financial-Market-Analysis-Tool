import Card from "../UI/Card";
import './BalanceSheet.css'
import { useState, useEffect } from "react";
import axios from 'axios'

const BalanceSheet = () => {
    const [cashData, setCashData] = useState({});
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/balancesheet"

        }).then((response) => {
            const data = response.data;
            console.log(data);
            console.log(typeof data);
            setCashData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    console.log(cashData.annualReports);

    return  <Card>
        <div class="flex-containerbs">
            <div class="col-1bs">
                <h2 style={{ marginLeft: '1.5%' }}>Balance Sheet</h2>
            </div>
            <div class="col-2bs">
                <div class="flex-container1bs">
                    <div class="row-11bs">
                        <h4 style={{ marginLeft: '3%' }}> Consolidated Figures in Billion USD/ View Standalone </h4>
                    </div>
                    <div class="row-21bs">
                        <h4 style={{ marginLeft: '15%' }}> </h4>
                    </div>
                    <div class="row-31bs">
                        <button>
                            CORPORATE ACTIONS
                        </button>
                    </div>
                </div>

            </div>
            <div class="col-3bs">
                <table >
                    <tr>
                        <td style={{ width: '51%', marginLeft: '10%' }}>	</td>
                        <td style={{ width: '10%' }}>Mar 2018</td>
                        <td style={{ width: '10%' }}>Mar 2019</td>
                        <td style={{ width: '10%' }}>Mar 2020</td>
                        <td style={{ width: '10%' }}>Mar 2021</td>
                        <td style={{ width: '10%' }}>Mar 2022</td>


                    </tr>
                    <tr>
                        <td >Total Assets</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.totalAssets/1000000000} </td>
                           
                        })}

                    </tr>
                    <tr>
                        <td>Total Current Assets</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.totalCurrentAssets/1000000000} </td>
                           
                        })}


                    </tr>
                    <tr>
                        <td>Other Assets</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {(item.otherCurrentAssets)/1000000000} </td>
                           
                        })}


                    </tr>
                    <tr>
                        <td>Total Liabilities</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.totalLiabilities/1000000000} </td>
                           
                        })}

                    </tr>
                    <tr>
                        <td>Total Current liabilities</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.totalCurrentLiabilities/1000000000} </td>
                           
                        })}
                    </tr>

                    <tr>
                        <td>Other liabilities</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {(item.otherCurrentLiabilities/1000000000) } </td>
                        //   + (item.otherNonCurrentLiabilities/1000000000) 
                        })}
                    </tr>
                    <tr>
                        <td>Current Debt</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.currentDebt/1000000000} </td>
                           
                        })}

                    </tr>
                    <tr>
                        <td>Short Term Investments</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.shortTermInvestments/1000000000} </td>
                           
                        })}
                    </tr>
                    <tr>
                        <td>Long Term Investments</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.longTermInvestments/1000000000} </td>
                           
                        })}
                    </tr>
                    <tr>
                        <td>Total Shareholder Equity</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.totalShareholderEquity/1000000000} </td>
                           
                        })}
                    </tr>
                    <tr>
                        <td>Inventory</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.inventory/1000000000} </td>
                           
                        })}
                    </tr>
                   
                </table>

            </div>
            <h6> </h6>
            <div class="col-4bs">

            </div>
        </div>
    </Card>

}

export default BalanceSheet;