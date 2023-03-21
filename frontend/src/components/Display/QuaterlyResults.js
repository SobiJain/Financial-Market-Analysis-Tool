import Card from "../UI/Card";
import './QuaterlyResults.css'
import { useState, useEffect } from "react";
import axios from 'axios'

const QuaterlyResults = () => {

    const [cashData, setCashData] = useState({});

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/quarter"

        }).then((response) => {
            const data = response.data;
            // console.log(data);
            // console.log(typeof data);
            setCashData(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    // const obj = Object.entries(cashData)
    // obj.forEach(([key, value]) => {
    //     if (key !== "symbol")
    //         console.log("Key: " + key, "value: " + value)
    // })

    console.log(cashData.quarterlyEarnings);


    return <Card>
        <div class="flex-containerqr">
            <div class="col-1qr">
                <h2 style={{ marginLeft: '1.5%' }}>Quarterly Results</h2>
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
                        <button>
                            PRODUCT SEGMENTS
                        </button>
                    </div>
                </div>

            </div>
            <div class="col-3qr">
                <table>
                    <tr>
                        <td style={{ width: '19%', marginLeft: '10%' }}>	</td>
                        <td style={{ width: '9%' }}>Dec 2020</td>
                        <td style={{ width: '9%' }}>Mar 2021</td>
                        <td style={{ width: '9%' }}>Jun 2021	</td>
                        <td style={{ width: '9%' }}>Sept 2021</td>
                        <td style={{ width: '9%' }}>Dec 2021</td>
                        <td style={{ width: '9%' }}>Mar 2022</td>
                        <td style={{ width: '9%' }}>Jun 2022</td>
                        <td style={{ width: '9%' }}>Sept 2022</td>
                        <td style={{ width: '9%' }}>Dec 2022</td>
                    </tr>
                    <tr>
                        <td>Reported EPS</td>
                        {cashData.quarterlyEarnings && cashData.quarterlyEarnings.slice(0, 9).reverse().map((item) => {
                            return <td> {item.reportedEPS} </td>
                           
                        })}
                    </tr>
                    <tr>
                        <td>Estimated EPS</td>
                        {cashData.quarterlyEarnings && cashData.quarterlyEarnings.slice(0, 9).reverse().map((item) => {
                            return <td> {item.estimatedEPS} </td>
                           
                        })}
                    </tr>
                    <tr>
                        <td>Surprise</td>
                        {cashData.quarterlyEarnings && cashData.quarterlyEarnings.slice(0, 9).reverse().map((item) => {
                            return <td> {item.surprise} </td>
                           
                        })}
                    </tr>
                    <tr>
                        <td>Surprise Percentage</td>
                        {cashData.quarterlyEarnings && cashData.quarterlyEarnings.slice(0, 9).reverse().map((item) => {
                            return <td> {item.surprisePercentage} </td>
                           
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

export default QuaterlyResults;