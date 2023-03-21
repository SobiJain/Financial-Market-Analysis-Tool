import Card from "../UI/Card";
import './QuaterlyResults.css'
import { useState, useEffect } from "react";
import axios from 'axios'
const Ratios = () =>{
    const [cashData, setCashData] = useState({});
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/ratio"

        }).then((response) => {
            const data = response.data;
            // console.log(data);
            // console.log(typeof data);
            setCashData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    console.log(cashData.annualROE);

    return <Card>
        <div class="flex-containerrs">
            <div class="col-1rs">
                <h2 style={{ marginLeft: '1.5%', paddingTop: '1.5%' }}>Ratios</h2>
            </div>
            <div class="col-2rs">
                <div class="flex-container1rs">
                    <div class="row-11rs">
                        <h4 style={{ marginLeft: '1.5%' }}> Consolidated Figures / View Standalone </h4>
                    </div>
                    <div class="row-21rs">
                        <h4 style={{ marginLeft: '15%' }}> </h4>
                    </div>
                    <div class="row-31rs">
                        {/* <button>
                            PRODUCT SEGMENTS
                        </button> */}
                    </div>
                </div>

            </div>
            <div class="col-3rs">
                <table>
                    <tr>
                        <td style={{ width: '5%', marginLeft: '10%' }}></td>
                        <td style={{ width: '10%' }}>Dec 2018</td>
                        <td style={{ width: '10%' }}>Dec 2019</td>
                        <td style={{ width: '10%' }}>Dec 2020</td>
                        <td style={{ width: '10%' }}>Dec 2021</td>
                        <td style={{ width: '10%' }}>Dec 2022</td>

                    </tr>
                    <tr>
                        <td >ROE</td>
                         {cashData.annualROE && cashData.annualROE.slice(0, 6).map((item) => {
                            return <td> {item.roe} </td>
                           
                        })}

                    </tr>
                </table>

            </div>
                <h6> </h6>
            <div class="col-4rs">
                        <h7 style= {{color: 'white'}}>hbhdbcjbdj</h7>
            </div>
        </div>
    </Card>

}

export default Ratios;