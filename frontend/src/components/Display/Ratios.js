import Card from "../UI/Card";
import './QuaterlyResults.css'
import { useSelector } from 'react-redux'
import BalanceSheet from "./BalanceSheet";

const Ratios = () =>{
    
    const isLoading = useSelector((state) => state.company.isLoading);
    const companyData = useSelector((store) => store.company);

    if(!isLoading)
    {
        const balancesheetData = companyData.companyData.balanceDataResult
        const cashflowData = companyData.companyData.cashDataResult

        const sz = balancesheetData.annualReports.length;
        let roeList = []

        if( cashflowData.annualReports!==null && balancesheetData.annualReports!==null) {
            for (var i=0; i<sz; i++) {
                roeList.push({roe: cashflowData.annualReports[i]['netIncome']/balancesheetData.annualReports[i]['totalShareholderEquity']})
            }
        }

        console.log(roeList)
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
                            {roeList.map((item) => {
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
}

export default Ratios;