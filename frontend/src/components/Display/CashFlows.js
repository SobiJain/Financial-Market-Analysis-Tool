import Card from "../UI/Card";
import './CashFlows.css'
import { useSelector } from 'react-redux'
import React from 'react';


const CashFlows = () => {
    //fetching the isloading state from the redux-store setup
    const isLoading = useSelector((state) => state.company.isLoading);
    // fetching the companyData state from redux-store setup 
    const companyData = useSelector((store) => store.company);

    if(!isLoading)
    {
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
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.operatingCashflow/1000000000} </td>
                            
                            })}

                        </tr>
                        <tr>
                            <td>Cashflow from Investment</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.cashflowFromInvestment/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Cashflow from Financing</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.cashflowFromFinancing/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Dividend Payout</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.dividendPayout/1000000000} </td>
                            
                            })}

                        </tr>
                        <tr>
                            <td>Net Income</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.netIncome/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Capital Expenditure</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.capitalExpenditures/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Change in Receivables</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.changeInReceivables/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Change in Inventory</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.changeInInventory/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Change in Operating Liabilities</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.changeInOperatingLiabilities/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Change in Operating Assets</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.changeInOperatingAssets/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Payments for Operating Activities</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.paymentsForOperatingActivities/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Proceeds from Repurchase of Equity</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.proceedsFromRepurchaseOfEquity/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Proceeds From Repayments Of Short Term Debt</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.proceedsFromRepaymentsOfShortTermDebt/1000000000} </td>
                            
                            })}

                        </tr>

                        <tr>
                            <td>Proceeds From Issuance Of Long Term Debt And Capital Securities Net</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
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
}

export default CashFlows;

