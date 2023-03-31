import Card from "../UI/Card";
import './CashFlows.css'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import { getCashData } from "../../features/company/companySlice";
import RefreshButton from "../UI/RefreshButton";
import { HandleExport } from "./HandleExport";
import ExportButton from "../UI/ExportButton";
import checkIsNan from "./CheckIsNan";



const CashFlows = () => {
    //fetching the isloading state from the redux-store setup
    const isLoading = useSelector((state) => state.company.isLoading);
    // fetching the companyData state from redux-store setup 
    const companyData = useSelector((store) => store.company);
    const cashIsLoading = useSelector((state) => state.cashDataIsLoading);

    const dispatch = useDispatch();

    const CashHandler = () => {
        const key = localStorage.getItem('company');
        dispatch(getCashData(key));


    }
    let data = {}

    if (!isLoading && !cashIsLoading && companyData.companyData.cashDataResult.annualReports) {
        const dateArray = ["Dec 2018", "Dec 2019", "Dec 2020", "Dec 2021", "Dec 2022"]
        let obj1 = {
            "data": "Operating Cashflow "

        }
        let obj2 = {
            "data": "Cashflow from Investment "
        }

        let obj3 = {
            "data": "Cashflow from Financing"
        }
        let obj4 = {
            "data": "Dividend Payout "

        }
        let obj5 = {
            "data": "Net Income"

        }
        let obj6 = {
            "data": "Capital Expenditure "

        }
        let obj7 = {
            "data": "Change in Receivables"


        }
        let obj8 = {
            "data": "Change in Inventory"

        }
        let obj9 = {
            "data": "Change in Operating Liabilities"

        }
        let obj10 = {
            "data": "Change in Operating Assets"

        }
        let obj11 = {
            "data": "Payments for Operating Activities"

        }
        let obj12 = {
            "data": "Proceeds from Repurchase of Equity"

        }
        let obj13 = {
            "data": "Proceeds From Repayments Of Short Term Debt"

        }
        let obj14 = {
            "data": "Proceeds From Issuance Of Long Term Debt And Capital Securities Net"

        }
        companyData.companyData.cashDataResult.annualReports.slice(0, 6).forEach((val, idx) => {
            obj1 = {
                ...obj1,
                [dateArray[idx]]: val.operatingCashflow / 1000000000

            }

            obj2 = {
                ...obj2,
                [dateArray[idx]]: val.cashflowFromInvestment / 1000000000

            }

            obj3 = {
                ...obj3,
                [dateArray[idx]]: val.cashflowFromFinancing / 1000000000

            }
            obj4 = {
                ...obj4,
                [dateArray[idx]]: val.dividendPayout / 1000000000

            }
            obj5 = {
                ...obj5,
                [dateArray[idx]]: val.netIncome / 1000000000

            }
            obj6 = {
                ...obj6,
                [dateArray[idx]]: val.capitalExpenditures / 1000000000

            }
            obj7 = {
                ...obj7,
                [dateArray[idx]]: val.changeInReceivables / 1000000000

            }
            obj8 = {
                ...obj8,
                [dateArray[idx]]: val.changeInInventory / 1000000000

            }
            obj9 = {
                ...obj9,
                [dateArray[idx]]: val.changeInOperatingLiabilities / 1000000000

            }
            obj10 = {
                ...obj10,
                [dateArray[idx]]: val.changeInOperatingAssets / 1000000000

            }
            obj11 = {
                ...obj11,
                [dateArray[idx]]: val.paymentsForOperatingActivities / 1000000000

            }
            obj12 = {
                ...obj12,
                [dateArray[idx]]: val.proceedsFromRepurchaseOfEquity / 1000000000

            }
            obj13 = {
                ...obj13,
                [dateArray[idx]]: val.proceedsFromRepaymentsOfShortTermDebt / 1000000000

            }
            obj14 = {
                ...obj14,
                [dateArray[idx]]: val.proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet / 1000000000

            }


        })






        data = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14]

    }
    const handleExport = () => {
        HandleExport(data, "CashFlow.xlsx");

    }


    if (!isLoading && !cashIsLoading) {
        return <Card>
            <div class="flex-containerqr">
                <div class="col-1qr">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ marginLeft: '1.5%' }}>Cash Flows</h2>
                        <RefreshButton onClick={CashHandler}></RefreshButton>
                    </div>
                </div>
                <div class="col-2qr">
                    <div class="flex-container1qr">
                        <div class="row-11qr">
                            <h4 style={{ marginLeft: '3%' }}> Consolidated Figures in Rs. Crores   </h4>
                        </div>
                        <div class="row-21qr">
                            <h4 style={{ marginLeft: '15%' }}> </h4>
                        </div>
                        <div class="">
                            <ExportButton onClick={handleExport}> </ExportButton>

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
                                return <td> {checkIsNan(item.operatingCashflow / 1000000000)} </td>

                            })}

                        </tr>
                        <tr>
                            <td>Cashflow from Investment</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.cashflowFromInvestment / 1000000000)} </td>


                            })}

                        </tr>

                        <tr>
                            <td>Cashflow from Financing</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.cashflowFromFinancing / 1000000000)} </td>

                            })}

                        </tr>

                        <tr>
                            <td>Dividend Payout</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.dividendPayout / 1000000000)} </td>

                            })}

                        </tr>
                        <tr>
                            <td>Net Income</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.netIncome / 1000000000)} </td>

                            })}

                        </tr>

                        <tr>
                            <td>Capital Expenditure</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.capitalExpenditures / 1000000000)} </td>

                            })}

                        </tr>

                        <tr>
                            <td>Change in Receivables</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.changeInReceivables / 1000000000)} </td>

                            })}

                        </tr>

                        <tr>
                            <td>Change in Inventory</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.changeInInventory / 1000000000)} </td>

                            })}

                        </tr>

                        <tr>
                            <td>Change in Operating Liabilities</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.changeInOperatingLiabilities / 1000000000)} </td>

                            })}

                        </tr>

                        <tr>
                            <td>Change in Operating Assets</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.changeInOperatingAssets / 1000000000)} </td>

                            })}

                        </tr>

                        <tr>
                            <td>Payments for Operating Activities</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.paymentsForOperatingActivities / 1000000000)} </td>

                            })}

                        </tr>

                        <tr>
                            <td>Proceeds from Repurchase of Equity</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.proceedsFromRepurchaseOfEquity / 1000000000)} </td>

                            })}

                        </tr>

                        <tr>
                            <td>Proceeds From Repayments Of Short Term Debt</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.proceedsFromRepaymentsOfShortTermDebt / 1000000000)} </td>

                            })}

                        </tr>

                        <tr>
                            <td>Proceeds From Issuance Of Long Term Debt And Capital Securities Net</td>
                            {companyData.companyData.cashDataResult.annualReports && companyData.companyData.cashDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet / 1000000000)} </td>

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

