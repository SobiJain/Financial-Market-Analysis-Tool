import Card from "../UI/Card";
import './CashFlows.css'
import axios from 'axios';
import React from 'react';
// class CashFlows extends React.Component {

// 	state = {
// 		details : [],
// 	}

// 	componentDidMount() {

// 		let data ;

// 		axios.get('http://localhost:8000/')
// 		.then(res => {
// 			data = res.data;
// 			this.setState({
// 				details : data	
// 			});
// 		})
// 		.catch(err => {})
// 	}
// }

const CashFlows = () => {
    return <Card>
            <div class="flex-containerqr">
                <div class="col-1qr">
                    <h2 style={{ marginLeft: '1.5%' }}>Cash Flows</h2>
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
                                    
                    </div>
                </div>

            </div>
            <div class="col-3qr">
                <table>
                    <tr>
                        <td style={{ width: '40%', marginLeft: '10%' }}>	</td>
                        <td style={{ width: '10%' }}>Sept 2017</td>
                        <td style={{ width: '10%' }}>Sept 2018</td>
                        <td style={{ width: '10%' }}>Sept 2019</td>
                        <td style={{ width: '10%' }}>Sept 2020</td>
                        <td style={{ width: '10%' }}>Sept 2021</td>
                        <td style={{ width: '10%' }}>Sept 2022</td>
                    </tr>
                    <tr>
                        <td >Total cash from operating activities</td>
                        <td ></td>
                        <td ></td>
                        <td></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>    
                </table>
            </div>
            <h6> </h6>
            <div class="col-4qr">
            </div>
        </div>
    </Card>
}

export default CashFlows;

