import Card from '../UI/Card';
import './PF.css'
import axios from "axios"
import { useState, useEffect } from 'react';
const PF = () => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        setData()
    }, []);

    const setData = () => {
        axios({
            method: "GET",
            url: "http://localhost:8000/profitloss"

        }).then((response) => {
            const data = response.data;
            setDetails(data);

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
                        <td style={{ width: '5%', marginLeft: '10%' }}>S.No.	</td>
                        <td style={{ width: '10%' }}>Name</td>
                        <td style={{ width: '10%' }}>CMP Rs</td>
                        <td style={{ width: '5%' }}>P/E	</td>
                        <td style={{ width: '10%' }}>Mar Cap Rs.Cr.</td>
                        <td style={{ width: '10%' }}>Div Yld %</td>
                        <td style={{ width: '10%' }}>NP Qtr Rs.Cr.</td>
                        <td style={{ width: '10%' }}>Qtr Profit Var %</td>
                        <td style={{ width: '10%' }}>Sales Qtr Rs.Cr.</td>
                        <td style={{ width: '10%' }}>Qtr Sales Var %</td>
                        <td style={{ width: '20%' }}>ROCE %</td>

                    </tr>
                    <tr>
                        <td >1</td>
                        <td >HDFC Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td >HDFC Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>


                    </tr>
                    <tr>
                        <td>3</td>
                        <td >HDFC Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td >HDFC Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td >HDFC Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>

                    </tr>
                    <tr>
                        <td>6</td>
                        <td >HDFC Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td >HDFC Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>
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
                                <p > 12% </p>
                                <p> 9% </p>
                                <p> 7% </p>
                                <p> 22% </p>

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
                                <p > 12% </p>
                                <p> 22% </p>
                                <p> 25% </p>
                                <p> 29% </p>

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
                                <p > 12% </p>
                                <p> 22% </p>
                                <p> 25% </p>
                                <p> 29% </p>

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
                                <p > 12% </p>
                                <p> 22% </p>
                                <p> 25% </p>
                                <p> 29% </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Card>



}

export default PF;