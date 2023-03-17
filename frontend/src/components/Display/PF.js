import Card from '../UI/Card';
import './PF.css'
import { useState, useEffect } from "react";
import axios from 'axios'

const PF = () => {

    const [cashData, setCashData] = useState({});

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/profitloss"

        }).then((response) => {
            const data = response.data;
            console.log(data);
            console.log(typeof data);
            setCashData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }


    return <Card>
        <div class="flex-containerpf">
            <div class="col-1pf">
                <h2 style={{ marginLeft: '1.5%' }}>Profit & Loss</h2>
            </div>
            <div class="col-2pf">
                <div class="flex-container1pf">
                    <div class="row-11pf">
                        <h4 style={{ marginLeft: '4.5%' }}> Consolidated Figures in Rs. Crores / View Standalone

                        </h4>
                    </div>
                    <div class="row-31pf">
                        <button>
                            PRODUCT SEGMENTS
                        </button>
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
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(16, 17).reverse().map((item) => {
                            return <td> {item.costofGoodsAndServicesSold/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(12, 13).reverse().map((item) => {
                            return <td> {item.costofGoodsAndServicesSold/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(8, 9).reverse().map((item) => {
                            return <td> {item.costofGoodsAndServicesSold/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(0, 6).reverse().map((item) => {
                            return <td> {item.costofGoodsAndServicesSold/10000000} </td>
                        })}
                    </tr>
                    <tr>
                        <td>Operating Income</td>
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(16, 17).reverse().map((item) => {
                            return <td> {item.operatingIncome/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(12, 13).reverse().map((item) => {
                            return <td> {item.operatingIncome/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(8, 9).reverse().map((item) => {
                            return <td> {item.operatingIncome/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(0, 6).reverse().map((item) => {
                            return <td> {item.operatingIncome/10000000} </td>
                        })}
                    </tr>
                    <tr>
                        <td>Operating Expenses</td>
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(16, 17).reverse().map((item) => {
                            return <td> {item.operatingExpenses/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(12, 13).reverse().map((item) => {
                            return <td> {item.operatingExpenses/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(8, 9).reverse().map((item) => {
                            return <td> {item.operatingExpenses/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(0, 6).reverse().map((item) => {
                            return <td> {item.operatingExpenses/10000000} </td>
                        })}
                    </tr>
                    <tr>
                        <td>Interest</td>
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(16, 17).reverse().map((item) => {
                            return <td> {item.interestIncome/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(12, 13).reverse().map((item) => {
                            return <td> {item.interestIncome/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(8, 9).reverse().map((item) => {
                            return <td> {item.interestIncome/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(0, 6).reverse().map((item) => {
                            return <td> {item.interestIncome/10000000} </td>
                        })}
                    </tr>
                    <tr>
                        <td>Depreciation</td>
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(16, 17).reverse().map((item) => {
                            return <td> {item.depreciation/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(12, 13).reverse().map((item) => {
                            return <td> {item.depreciation/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(8, 9).reverse().map((item) => {
                            return <td> {item.depreciation/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(0, 6).reverse().map((item) => {
                            return <td> {item.depreciation/10000000} </td>
                        })}
                    </tr>
                    <tr>
                        <td>Income before tax</td>
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(16, 17).reverse().map((item) => {
                            return <td> {item.incomeBeforeTax/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(12, 13).reverse().map((item) => {
                            return <td> {item.incomeBeforeTax/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(8, 9).reverse().map((item) => {
                            return <td> {item.incomeBeforeTax/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(0, 6).reverse().map((item) => {
                            return <td> {item.incomeBeforeTax/10000000} </td>
                        })}
                    </tr>
                    <tr>
                        <td>Tax expenses</td>
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(16, 17).reverse().map((item) => {
                            return <td> {item.incomeTaxExpense/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(12, 13).reverse().map((item) => {
                            return <td> {item.incomeTaxExpense/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(8, 9).reverse().map((item) => {
                            return <td> {item.incomeTaxExpense/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(0, 6).reverse().map((item) => {
                            return <td> {item.incomeTaxExpense/10000000} </td>
                        })}
                    </tr>
                    <tr>
                        <td><b> Net Profit</b></td>
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(16, 17).reverse().map((item) => {
                            return <td> {item.grossProfit/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(12, 13).reverse().map((item) => {
                            return <td> {item.grossProfit/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(8, 9).reverse().map((item) => {
                            return <td> {item.grossProfit/10000000} </td>
                        })}
                        {cashData.quarterlyReports && cashData.quarterlyReports.slice(0, 6).reverse().map((item) => {
                            return <td> {item.grossProfit/10000000} </td>
                        })}
                    </tr>
                </table>

            </div>
            <div class="col-4pf">
                <div class="containerpf">
                    <div class="boxpf">
                        <h4 style={{ fontWeight: '500', textAlign: 'center' }}> Compounded Sales Growth</h4>
                        <div class="containerpf">
                            <div class="columnpf-leftpf">
                                <p> 10 Years: </p>
                                <p> 5 Years: </p>
                                <p> 3 Years: </p>
                                <p> TTM: </p>

                            </div>
                            <div class="columnpf-rightpf">
                                <p >  </p>
                                <p>  </p>
                                <p>  </p>
                                <p>  </p>

                            </div>
                        </div>
                    </div>
                    <div class="boxpf">
                        <h4 style={{ fontWeight: '500', textAlign: 'center' }}> Compounded Profit Growth</h4>
                        <div class="containerpf">
                            <div class="columnpf-leftpf">
                                <p> 10 Years: </p>
                                <p> 5 Years: </p>
                                <p> 3 Years: </p>
                                <p> TTM: </p>

                            </div>
                            <div class="columnpf-rightpf">
                                <p > </p>
                                <p> </p>
                                <p> </p>
                                <p> </p>

                            </div>
                        </div>
                    </div>
                    <div class="boxpf">
                        <h4 style={{ fontWeight: '500', textAlign: 'center' }}> Stock Price CAGR</h4>
                        <div class="containerpf">
                            <div class="columnpf-leftpf">
                                <p> 10 Years: </p>
                                <p> 5 Years: </p>
                                <p> 3 Years: </p>
                                <p> 1 year: </p>
                            </div>
                            <div class="columnpf-rightpf">
                                <p>  </p>
                                <p> </p>
                                <p> </p>
                                <p> </p>

                            </div>
                        </div>
                    </div>
                    <div class="boxpf">
                        <h4 style={{ fontWeight: '500', textAlign: 'center' }}> Return on Equity</h4>
                        <div class="containerpf">
                            <div class="columnpf-leftpf">
                                <p> 10 Years: </p>
                                <p> 5 Years: </p>
                                <p> 3 Years: </p>
                                <p> Last Year: </p>

                            </div>
                            <div class="columnpf-rightpf">
                                <p> </p>
                                <p> </p>
                                <p> </p>
                                <p> </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Card>



}

export default PF;