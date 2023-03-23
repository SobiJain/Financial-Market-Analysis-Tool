import Card from "../UI/Card";
import './BalanceSheet.css'
import { useSelector } from 'react-redux'

const BalanceSheet = () => {
    
    //fetching the isloading state from the redux-store setup
    const isLoading = useSelector((state) => state.company.isLoading);
    // fetching the companyData state from redux-store setup 
    const companyData = useSelector((store) => store.company);

    if(!isLoading)
    {
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
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.totalAssets/1000000000} </td>
                            
                            })}

                        </tr>
                        <tr>
                            <td>Total Current Assets</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.totalCurrentAssets/1000000000} </td>
                            
                            })}


                        </tr>
                        <tr>
                            <td>Other Assets</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {(item.otherCurrentAssets)/1000000000} </td>
                            
                            })}


                        </tr>
                        <tr>
                            <td>Total Liabilities</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.totalLiabilities/1000000000} </td>
                            
                            })}

                        </tr>
                        <tr>
                            <td>Total Current liabilities</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.totalCurrentLiabilities/1000000000} </td>
                            
                            })}
                        </tr>

                        <tr>
                            <td>Other liabilities</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {(item.otherCurrentLiabilities/1000000000) } </td>
                            //   + (item.otherNonCurrentLiabilities/1000000000) 
                            })}
                        </tr>
                        <tr>
                            <td>Current Debt</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.currentDebt/1000000000} </td>
                            
                            })}

                        </tr>
                        <tr>
                            <td>Short Term Investments</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.shortTermInvestments/1000000000} </td>
                            
                            })}
                        </tr>
                        <tr>
                            <td>Long Term Investments</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.longTermInvestments/1000000000} </td>
                            
                            })}
                        </tr>
                        <tr>
                            <td>Total Shareholder Equity</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
                                return <td> {item.totalShareholderEquity/1000000000} </td>
                            
                            })}
                        </tr>
                        <tr>
                            <td>Inventory</td>
                            {companyData.companyData.balanceDataResult.annualReports && companyData.companyData.balanceDataResult.annualReports.slice(0, 6).map((item) => {
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
}

export default BalanceSheet;