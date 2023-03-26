import Card from '../UI/Card';
import './PF.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProfitLossData } from "../../features/company/companySlice";
import RefreshButton from '../UI/RefreshButton';
import ExportButton from '../UI/ExportButton';
import { HandleExport } from './HandleExport';
import checkIsNan from './CheckIsNan';


const PF = () => {

    //fetching the isloading state from the redux-store setup
    const isLoading = useSelector((state) => state.company.isLoading);
    // fetching the companyData state from redux-store setup 
    const companyData = useSelector((store) => store.company);
    const PFIsLoading = useSelector((state) => state.profitLossIsLoading)

    const dispatch = useDispatch();

    const PFHandler = () => {
        const key = localStorage.getItem('company');
        dispatch(getProfitLossData(key));


    }

    let data = {};
    if (!isLoading && !PFIsLoading && companyData.companyData.profitLossDataResult.quarterlyReports) {
        const dateArray = ["Dec 2018", "Dec 2019", "Dec 2020", "Sept 2021", "Dec 2021", "Mar 2022", "Jun 2022", "Sept 2022", "Dec 2022"]
        let obj1 = {
            "data": "Goods Cost"

        }
        let obj2 = {
            "data": "Operating Income"
        }

        let obj3 = {
            "data": "Operating Expenses"
        }
        let obj4 = {
            "data": "Interest Income"

        }
        let obj5 = {
            "data": "Interest Expense"

        }
        let obj6 = {
            "data": "Depreciation"

        }
        let obj7 = {
            "data": "Income before tax"


        }
        let obj8 = {
            "data": "Tax expenses"

        }
        let obj9 = {
            "data": "Net Profit"

        }
        companyData.companyData.profitLossDataResult.quarterlyReports.slice(16, 17).reverse().forEach((val, idx) => {
            obj1 = {
                ...obj1,
                [dateArray[idx]]: val.costofGoodsAndServicesSold / 10000000

            }

            obj2 = {
                ...obj2,
                [dateArray[idx]]: val.operatingIncome / 10000000

            }

            obj3 = {
                ...obj3,
                [dateArray[idx]]: val.operatingExpenses / 10000000

            }

            obj4 = {
                ...obj4,
                [dateArray[idx]]: val.interestIncome / 10000000

            }
            obj5 = {
                ...obj5,
                [dateArray[idx]]: val.interestExpense / 10000000

            }
            obj6 = {
                ...obj6,
                [dateArray[idx]]: val.depreciation / 10000000

            }
            obj7 = {
                ...obj7,
                [dateArray[idx]]: val.incomeBeforeTax / 10000000

            }
            obj8 = {
                ...obj8,
                [dateArray[idx]]: val.incomeTaxExpense / 10000000

            }
            obj9 = {
                ...obj9,
                [dateArray[idx]]: val.grossProfit / 10000000

            }


        })

        companyData.companyData.profitLossDataResult.quarterlyReports.slice(12, 13).reverse().forEach((val, idx) => {
            obj1 = {
                ...obj1,
                [dateArray[idx]]: val.costofGoodsAndServicesSold / 10000000

            }

            obj2 = {
                ...obj2,
                [dateArray[idx]]: val.operatingIncome / 10000000

            }

            obj3 = {
                ...obj3,
                [dateArray[idx]]: val.operatingExpenses / 10000000

            }

            obj4 = {
                ...obj4,
                [dateArray[idx]]: val.interestIncome / 10000000

            }
            obj5 = {
                ...obj5,
                [dateArray[idx]]: val.interestExpense / 10000000

            }
            obj6 = {
                ...obj6,
                [dateArray[idx]]: val.depreciation / 10000000

            }
            obj7 = {
                ...obj7,
                [dateArray[idx]]: val.incomeBeforeTax / 10000000

            }
            obj8 = {
                ...obj8,
                [dateArray[idx]]: val.incomeTaxExpense / 10000000

            }
            obj9 = {
                ...obj9,
                [dateArray[idx]]: val.grossProfit / 10000000

            }


        })

        companyData.companyData.profitLossDataResult.quarterlyReports.slice(8, 9).reverse().forEach((val, idx) => {
            obj1 = {
                ...obj1,
                [dateArray[idx]]: val.costofGoodsAndServicesSold / 10000000

            }

            obj2 = {
                ...obj2,
                [dateArray[idx]]: val.operatingIncome / 10000000

            }

            obj3 = {
                ...obj3,
                [dateArray[idx]]: val.operatingExpenses / 10000000

            }

            obj4 = {
                ...obj4,
                [dateArray[idx]]: val.interestIncome / 10000000

            }
            obj5 = {
                ...obj5,
                [dateArray[idx]]: val.interestExpense / 10000000

            }
            obj6 = {
                ...obj6,
                [dateArray[idx]]: val.depreciation / 10000000

            }
            obj7 = {
                ...obj7,
                [dateArray[idx]]: val.incomeBeforeTax / 10000000

            }
            obj8 = {
                ...obj8,
                [dateArray[idx]]: val.incomeTaxExpense / 10000000

            }
            obj9 = {
                ...obj9,
                [dateArray[idx]]: val.grossProfit / 10000000

            }


        })

        companyData.companyData.profitLossDataResult.quarterlyReports.slice(0, 6).reverse().forEach((val, idx) => {
            obj1 = {
                ...obj1,
                [dateArray[idx]]: val.costofGoodsAndServicesSold / 10000000

            }

            obj2 = {
                ...obj2,
                [dateArray[idx]]: val.operatingIncome / 10000000

            }

            obj3 = {
                ...obj3,
                [dateArray[idx]]: val.operatingExpenses / 10000000

            }

            obj4 = {
                ...obj4,
                [dateArray[idx]]: val.interestIncome / 10000000

            }
            obj5 = {
                ...obj5,
                [dateArray[idx]]: val.interestExpense / 10000000

            }
            obj6 = {
                ...obj6,
                [dateArray[idx]]: val.depreciation / 10000000

            }
            obj7 = {
                ...obj7,
                [dateArray[idx]]: val.incomeBeforeTax / 10000000

            }
            obj8 = {
                ...obj8,
                [dateArray[idx]]: val.incomeTaxExpense / 10000000

            }
            obj9 = {
                ...obj9,
                [dateArray[idx]]: val.grossProfit / 10000000

            }


        })






        data = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9]

    }


    const handleExport = () => {
        HandleExport(data, "ProfitLossData.xlsx");

    }







    if (!isLoading && !PFIsLoading) {
        return <Card>
            <div class="flex-containerpf">
                <div class="col-1pf">
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <h2 style={{ marginLeft: '1.5%' }}>Profit & Loss</h2>
                        <RefreshButton onClick={PFHandler}></RefreshButton>
                    </div>
                </div>
                <div class="col-2pf">
                    <div class="flex-container1pf">
                        <div class="row-11pf">
                            <h4 style={{ marginLeft: '4.5%' }}> Consolidated Figures in Rs. Crores / View Standalone

                            </h4>
                        </div>
                        <div class="row-31pf">
                            <ExportButton onClick={handleExport} > </ExportButton>
                        </div>
                    </div>

                </div>
                <div class="col-3pf">
                    <table>
                        <tr>
                            <td style={{ width: '19%', marginLeft: '10%' }}>	</td>
                            <td style={{ width: '9%' }}>Dec 2018</td>
                            <td style={{ width: '9%' }}>Dec 2019 </td>
                            <td style={{ width: '9%' }}>Dec 2020</td>
                            <td style={{ width: '9%' }}>Sept 2021</td>
                            <td style={{ width: '9%' }}>Dec 2021</td>
                            <td style={{ width: '9%' }}>Mar 2022</td>
                            <td style={{ width: '9%' }}>Jun 2022</td>
                            <td style={{ width: '9%' }}>Sept 2022</td>
                            <td style={{ width: '9%' }}>Dec 2022</td>
                        </tr>
                        <tr>
                            <td>Goods Cost</td>
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(16, 17).reverse().map((item) => {
                                return <td> {checkIsNan(item.costofGoodsAndServicesSold/ 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(12, 13).reverse().map((item) => {
                                return <td> {checkIsNan(item.costofGoodsAndServicesSold / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(8, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.costofGoodsAndServicesSold / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(0, 6).reverse().map((item) => {
                                return <td> {checkIsNan(item.costofGoodsAndServicesSold / 10000000)} </td>
                            })}
                        </tr>
                        <tr>
                            <td>Operating Income</td>
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(16, 17).reverse().map((item) => {
                                return <td> {checkIsNan(item.operatingIncome / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(12, 13).reverse().map((item) => {
                                return <td> {checkIsNan(item.operatingIncome / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(8, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.operatingIncome / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(0, 6).reverse().map((item) => {
                                return <td> {checkIsNan(item.operatingIncome / 10000000)} </td>
                            })}
                        </tr>
                        <tr>
                            <td>Operating Expenses</td>
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(16, 17).reverse().map((item) => {
                                return <td> {checkIsNan(item.operatingExpenses / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(12, 13).reverse().map((item) => {
                                return <td> {checkIsNan(item.operatingExpenses / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(8, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.operatingExpenses / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(0, 6).reverse().map((item) => {
                                return <td> {checkIsNan(item.operatingExpenses / 10000000)} </td>
                            })}
                        </tr>
                        <tr>
                            <td>Interest Income</td>
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(16, 17).reverse().map((item) => {
                                return <td> {checkIsNan(item.interestIncome / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(12, 13).reverse().map((item) => {
                                return <td> {checkIsNan(item.interestIncome / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(8, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.interestIncome / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(0, 6).reverse().map((item) => {
                                return <td> {checkIsNan(item.interestIncome / 10000000)} </td>
                            })}
                        </tr>
                        <tr>
                            <td>Interest Expense</td>
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(16, 17).reverse().map((item) => {
                                return <td> {checkIsNan(item.interestExpense / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(12, 13).reverse().map((item) => {
                                return <td> {checkIsNan(item.interestExpense / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(8, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.interestExpense / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(0, 6).reverse().map((item) => {
                                return <td> {checkIsNan(item.interestExpense / 10000000)} </td>
                            })}
                        </tr>
                        <tr>
                            <td>Depreciation</td>
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(16, 17).reverse().map((item) => {
                                return <td> {checkIsNan(item.depreciation / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(12, 13).reverse().map((item) => {
                                return <td> {checkIsNan(item.depreciation / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(8, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.depreciation / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(0, 6).reverse().map((item) => {
                                return <td> {checkIsNan(item.depreciation / 10000000)} </td>
                            })}
                        </tr>
                        <tr>
                            <td><b>Income before tax</b></td>
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(16, 17).reverse().map((item) => {
                                return <td> {checkIsNan(item.incomeBeforeTax / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(12, 13).reverse().map((item) => {
                                return <td> {checkIsNan(item.incomeBeforeTax / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(8, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.incomeBeforeTax / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(0, 6).reverse().map((item) => {
                                return <td> {checkIsNan(item.incomeBeforeTax / 10000000)} </td>
                            })}
                        </tr>
                        <tr>
                            <td>Tax expenses</td>
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(16, 17).reverse().map((item) => {
                                return <td> {checkIsNan(item.incomeTaxExpense / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(12, 13).reverse().map((item) => {
                                return <td> {checkIsNan(item.incomeTaxExpense / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(8, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.incomeTaxExpense / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(0, 6).reverse().map((item) => {
                                return <td> {checkIsNan(item.incomeTaxExpense / 10000000)} </td>
                            })}
                        </tr>
                        <tr>
                            <td><b> Net Profit</b></td>
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(16, 17).reverse().map((item) => {
                                return <td> {checkIsNan(item.grossProfit / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(12, 13).reverse().map((item) => {
                                return <td> {checkIsNan(item.grossProfit / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(8, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.grossProfit / 10000000)} </td>
                            })}
                            {companyData.companyData.profitLossDataResult.quarterlyReports && companyData.companyData.profitLossDataResult.quarterlyReports.slice(0, 6).reverse().map((item) => {
                                return <td> {checkIsNan(item.grossProfit / 10000000)} </td>
                            })}
                        </tr>
                    </table>

                </div>
            </div>
        </Card>
    }
}

export default PF;