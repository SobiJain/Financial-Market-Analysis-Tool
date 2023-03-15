import Card from "../UI/Card";
import './PeerComp.css'
import axios from "axios"
import { useState, useEffect } from "react";
const PeerComp = () => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        setData()
    }, []);

    const setData = () => {
        axios({
            method: "GET",
            url: "http://localhost:8000/peercomparison"

        }).then((response) => {
            const data = response.data;
            setDetails(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    return <Card>
        <div class="flex-container">
            <div class="col-1">
                <h2 style={{ marginLeft: '1.5%' }}>Peer Comparison</h2>
            </div>
            <div class="col-2">
                <div class="flex-container1">
                    <div class="row-11">
                        <h4 style={{ marginLeft: '15%' }}> Sector : Banks </h4>
                    </div>
                    <div class="row-21">
                        <h4 style={{ marginLeft: '15%' }}> Industry: Banks - Private Sector</h4>
                    </div>
                    <div class="row-31">
                        <button>
                            EDIT COLUMNS
                        </button>
                    </div>
                </div>

            </div>
            <div class="col-3">
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
            <div class="col-4">
                <h4 style={{ marginLeft: '1.5%' }}> Detailed Comparison with : </h4>
                <input placeholder="eg: Infosys" style={{ marginLeft: '1.5%' }}>
                </input>

            </div>
        </div>

    </Card>

}
export default PeerComp;
