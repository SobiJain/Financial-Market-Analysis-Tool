import Card from "../UI/Card";
import './Document.css'
import axios from "axios"
import { useState, useEffect } from "react";

const Document = () => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        setData()
    }, []);

    const setData = () => {
        axios({
            method: "GET",
            url: "http://localhost:8000/document"

        }).then((response) => {
            const data = response.data;
            setDetails(data);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    return <Card>
        <div class="col-1pf">
            <h2 style={{ marginLeft: '1.5%', paddingTop: '2%' }}>Documents</h2>
        </div>
        <div class="containerdo">
            <div class="boxdo">
                <h4 style={{ fontWeight: '500', textAlign: 'flex-start', paddingLeft: '15px' }}> Compounded Sales Growth</h4>
                <div class="containerdo">
                    <div class="columndo-leftdo">
                        <p> 10 Years: </p>
                        <p> 5 Years: </p>
                        <p> 3 Years: </p>
                        <p> TTM: </p>

                    </div>
                    <div class="columndo-rightdo">
                        <p > 12% </p>
                        <p> 9% </p>
                        <p> 7% </p>
                        <p> 22% </p>

                    </div>
                </div>
            </div>
            <div class="boxdo">
                <h4 style={{ fontWeight: '500', textAlign: 'center', paddingRight: '65px' }}> Compounded Profit Growth</h4>
                <div class="containerdo">
                    <div class="columndo-leftdo">
                        <p> 10 Years: </p>
                        <p> 5 Years: </p>
                        <p> 3 Years: </p>
                        <p> TTM: </p>

                    </div>
                    <div class="columndo-rightdo">
                        <p > 12% </p>
                        <p> 22% </p>
                        <p> 25% </p>
                        <p> 29% </p>

                    </div>
                </div>
            </div>
            <div class="boxdo">
                <h4 style={{ fontWeight: '500', textAlign: 'center', paddingRight: '145px' }}> Stock Price CAGR</h4>
                <div class="containerdo">
                    <div class="columndo-leftdo">
                        <p> 10 Years: </p>
                        <p> 5 Years: </p>
                        <p> 3 Years: </p>
                        <p> 1 year: </p>
                    </div>
                    <div class="columndo-rightdo">
                        <p > 12% </p>
                        <p> 22% </p>
                        <p> 25% </p>
                        <p> 29% </p>

                    </div>
                </div>
            </div>
            <div class="boxdo">
                <h4 style={{ fontWeight: '500', textAlign: 'center', paddingRight: '145px' }}> Return on Equity</h4>
                <div class="containerdo">
                    <div class="columndo-leftdo">
                        <p> 10 Years: </p>
                        <p> 5 Years: </p>
                        <p> 3 Years: </p>
                        <p> Last Year: </p>

                    </div>
                    <div class="columndo-rightdo">
                        <p > 12% </p>
                        <p> 22% </p>
                        <p> 25% </p>
                        <p> 29% </p>

                    </div>
                </div>
            </div>
        </div>
    </Card>

}
export default Document;