import Card from "../UI/Card";
import './BalanceSheet.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileData } from "../../features/company/companySlice";
import RefreshButton from "../UI/RefreshButton";
import checkIsNan from "./CheckIsNan";


const BalanceSheet = () => {

    //fetching the isloading state from the redux-store setup
    const isLoading = useSelector((state) => state.company.isLoading);
    // fetching the companyData state from redux-store setup 
    const companyData = useSelector((store) => store.company);
    const balanceIsLoading = useSelector((state) => state.balanceIsLoading)

    const dispatch = useDispatch();
    const BalanceHandler = () => {
        const key = localStorage.getItem('company');
        dispatch(getProfileData(key));


    }

    if (!isLoading && balanceIsLoading) {
        return <Card>
            <div class="flex-containerbs">
                <div class="col-1bs">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ marginLeft: '1.5%' }}>Balance Sheet</h2>
                        <RefreshButton onClick={BalanceHandler}></RefreshButton>
                    </div>
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
                               EXPORT TO EXCEL
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
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.totalAssets / 1000000000)} </td>

                            })}

                        </tr>
                        <tr>
                            <td>Total Current Assets</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.totalCurrentAssets / 1000000000)} </td>

                            })}


                        </tr>
                        <tr>
                            <td>Other Assets</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {(checkIsNan(item.otherCurrentAssets) / 1000000000)} </td>

                            })}


                        </tr>
                        <tr>
                            <td>Total Liabilities</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.totalLiabilities / 1000000000)} </td>

                            })}

                        </tr>
                        <tr>
                            <td>Total Current liabilities</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.totalCurrentLiabilities / 1000000000)} </td>

                            })}
                        </tr>

                        <tr>
                            <td>Other liabilities</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {(checkIsNan(item.otherCurrentLiabilities / 1000000000))} </td>
                                //   + (item.otherNonCurrentLiabilities/1000000000) 
                            })}
                        </tr>
                        <tr>
                            <td>Current Debt</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.currentDebt / 1000000000)} </td>

                            })}

                        </tr>
                        <tr>
                            <td>Short Term Investments</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.shortTermInvestments / 1000000000)} </td>

                            })}
                        </tr>
                        <tr>
                            <td>Long Term Investments</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.longTermInvestments / 1000000000)} </td>

                            })}
                        </tr>
                        <tr>
                            <td>Total Shareholder Equity</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.totalShareholderEquity / 1000000000)} </td>

                            })}
                        </tr>
                        <tr>
                            <td>Inventory</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {checkIsNan(item.inventory / 1000000000)} </td>

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
}

export default BalanceSheet;