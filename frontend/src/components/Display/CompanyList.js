import Card from '../UI/Card';
import './PF.css'
import { useState, useEffect } from "react";
import axios from 'axios'

const CompanyList = () => {

    const [cashData, setCashData] = useState({});

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/companies"

        }).then((response) => {
            const data = response.data;
            const obj = JSON.parse(data)
            console.log(obj);
            setCashData(obj);

        }).catch((error) => {
            console.log(error.response);
        })
    }

    console.log(typeof cashData) 

    return <Card>
        <div class="flex-containerpf">
            <div class="col-1pf">
                <h2 style={{ marginLeft: '1.5%' }}>Companies registered</h2>
            </div>
            <div class="col-2pf">
                <div class="flex-container1pf">
                </div>

            </div>
            <div class="col-3pf">
                <table>
                    
                        {cashData.comp && cashData.comp.slice(0, 11700).map((item) => {
                           return <tr> {item} </tr> 
                        })}
                    
                </table>
            </div>
        </div>
    </Card>



}

export default CompanyList;