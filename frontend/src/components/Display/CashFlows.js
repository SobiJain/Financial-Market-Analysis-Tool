import Card from "../UI/Card";
import './CashFlows.css'
// import axios from 'axios';
import { useState, useEffect } from "react";
import axios from 'axios'

import React from 'react';


const CashFlows = () => {
    const [cashData, setCashData] = useState({});
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/cashflow"

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

    return <Card>
            <div class="flex-containerqr">
                <div class="col-1qr">
                    <h2 style={{ marginLeft: '1.5%' }}>Cash Flows</h2>
                </div>
            <div class="col-2qr">
                <div class="flex-container1qr">
                    <div class="row-11qr">
                        <h4 style={{ marginLeft: '3%' }}> Consolidated Figures in Rs. Crores / View Standalone </h4>
                    </div>
                    <div class="row-21qr">
                        <h4 style={{ marginLeft: '15%' }}> </h4>
                    </div>
                    <div class="row-31qr">
                                    
                    </div>
                </div>

            </div>
            <div class="col-3qr">
                <table>
                    <tr>
                        <td style={{ width: '40%', marginLeft: '10%' }}>	</td>
                        <td style={{ width: '10%' }}>Dec 2018</td>
                        <td style={{ width: '10%' }}>Dec 2019</td>
                        <td style={{ width: '10%' }}>Dec 2020</td>
                        <td style={{ width: '10%' }}>Dec 2021</td>
                        <td style={{ width: '10%' }}>Dec 2022</td>
                    </tr>
                    <tr>
                        <td>Operating Cashflow</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.operatingCashflow/1000000000} </td>
                           
                        })}

                    </tr>
                    <tr>
                        <td>Cashflow from Investment</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.cashflowFromInvestment/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Cashflow from Financing</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.cashflowFromFinancing/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Dividend Payout</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.dividendPayout/1000000000} </td>
                           
                        })}

                    </tr>
                    <tr>
                        <td>Net Income</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.netIncome/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Capital Expenditure</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.capitalExpenditures/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Change in Receivables</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.changeInReceivables/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Change in Inventory</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.changeInInventory/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Change in Operating Liabilities</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.changeInOperatingLiabilities/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Change in Operating Assets</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.changeInOperatingAssets/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Payments for Operating Activities</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.paymentsForOperatingActivities/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Proceeds from Repurchase of Equity</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.proceedsFromRepurchaseOfEquity/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Proceeds From Repayments Of Short Term Debt</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.proceedsFromRepaymentsOfShortTermDebt/1000000000} </td>
                           
                        })}

                    </tr>

                    <tr>
                        <td>Proceeds From Issuance Of Long Term Debt And Capital Securities Net</td>
                        {cashData.annualReports && cashData.annualReports.slice(0, 6).map((item) => {
                            return <td> {item.proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet/1000000000} </td>
                           
                        })}

                    </tr>

                </table>
            </div>
            <h6> </h6>
            <div class="col-4qr">
            </div>
        </div>
    </Card>
}

export default CashFlows;

