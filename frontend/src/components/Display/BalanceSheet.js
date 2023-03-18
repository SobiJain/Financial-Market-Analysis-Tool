import Card from "../UI/Card";
import './BalanceSheet.css'
import axios from "axios"
import { useState, useEffect } from "react";
const BalanceSheet = () => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        setData()
    }, []);

    const setData = () => {
        axios({
            method: "GET",
            url: "http://localhost:8000/balancesheet"

        }).then((response) => {
            const data = response.data;
            setDetails(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }
    return <Card>
        <div class="flex-containerbs">
            <div class="col-1bs">
                <h2 style={{ marginLeft: '1.5%' }}>Balance Sheet</h2>
            </div>
            <div class="col-2bs">
                <div class="flex-container1bs">
                    <div class="row-11bs">
                        <h4 style={{ marginLeft: '3%' }}> Consolidated Figures in Rs. Crores / View Standalone </h4>
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
                <table style={{ fontSize: '15px' }}>
                    <tr>
                        <td style={{ width: '5%', marginLeft: '10%' }}>	</td>
                        <td style={{ width: '8.91%', fontSize: '15px' }}>Mar 2011</td>
                        <td style={{ width: '7.91%', fontSize: '15px' }}>Mar 2012</td>
                        <td style={{ width: '7.91%', fontSize: '15px' }}>Mar 2013</td>
                        <td style={{ width: '8.91%', fontSize: '15px' }}>Mar 2014</td>
                        <td style={{ width: '7.45%', fontSize: '15px' }}>Mar 2015</td>
                        <td style={{ width: '7.91%', fontSize: '15px' }}>Mar 2016</td>
                        <td style={{ width: '7.91%', fontSize: '15px' }}>Mar 2017</td>
                        <td style={{ width: '7.91%', fontSize: '15px' }}>Mar 2018</td>
                        <td style={{ width: '7.91%', fontSize: '15px' }}>Mar 2019</td>
                        <td style={{ width: '7.91%', fontSize: '15px' }}>Mar 2020</td>
                        <td style={{ width: '7.91%', fontSize: '15px' }}>Mar 2021</td>
                        <td style={{ width: '7.91%', fontSize: '15px' }}>Mar 2022</td>


                    </tr>
                    <tr>
                        <td >Share Capital</td>
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
                        <td >30.11</td>
                        <td >5.83</td>

                    </tr>
                    <tr>
                        <td>Reserves</td>
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
                        <td >30.11</td>
                        <td >5.83</td>


                    </tr>
                    <tr>
                        <td>Borrowings</td>
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
                        <td >30.11</td>
                        <td >5.83</td>

                    </tr>
                    <tr>
                        <td>Other liabilities</td>
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
                        <td >30.11</td>
                        <td >5.83</td>
                    </tr>
                    <tr>
                        <td>Total liabilities</td>
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
                        <td >30.11</td>
                        <td >5.83</td>

                    </tr>
                    <tr>
                        <td>Fixed Assests</td>
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
                        <td >30.11</td>
                        <td >5.83</td>
                    </tr>
                    <tr>
                        <td>CWIP</td>
                        <td >Axis Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>
                        <td >30.11</td>
                        <td >5.83</td>
                    </tr>
                    <tr>
                        <td>Investments</td>
                        <td >Axis Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>
                        <td >30.11</td>
                        <td >5.83</td>
                    </tr>
                    <tr>
                        <td>Other Assests</td>
                        <td >Axis Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>
                        <td >30.11</td>
                        <td >5.83</td>
                    </tr>
                    <tr>
                        <td>Total Assests</td>
                        <td >Axis Bank</td>
                        <td >1615.90</td>
                        <td>20.56</td>
                        <td >901502.84</td>
                        <td >0.96</td>
                        <td >12735.43</td>
                        <td >19.89</td>
                        <td>45002.11</td>
                        <td >30.11</td>
                        <td >5.83</td>
                        <td >30.11</td>
                        <td >5.83</td>
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