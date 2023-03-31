import Card from "../UI/Card";
import './QuaterlyResults.css'
import { useSelector, useDispatch } from 'react-redux'
import RefreshButton from "../UI/RefreshButton";
import { getRatioData } from "../../features/company/companySlice";
import { HandleExport } from "./HandleExport";
import ExportButton from "../UI/ExportButton";
import checkIsNan from "./CheckIsNan";


const Ratios = () => {

    const isLoading = useSelector((state) => state.company.isLoading);
    const companyData = useSelector((store) => store.company);
    const ratioIsLoading = useSelector((state) => state.ratioIsLoading);

    const dispatch = useDispatch();

    const RatioHandler = () => {
        const key = localStorage.getItem('company');
        dispatch(getRatioData(key));


    }

    let data = {}

    const handleExport = () => {
        HandleExport(data, "Ratio.xlsx");

    }





    if (!isLoading && !ratioIsLoading) {
        const balancesheetData = companyData.companyData.balanceDataResult
        const cashflowData = companyData.companyData.cashDataResult

        const sz = balancesheetData.annualReports.length;
        let roeList = []

        if (cashflowData.annualReports !== null && balancesheetData.annualReports !== null) {
            for (var i = 0; i < sz; i++) {
                roeList.push({ roe: cashflowData.annualReports[i]['netIncome'] / balancesheetData.annualReports[i]['totalShareholderEquity'] })
            }
        }

        const dateArray = ["Dec 2018", "Dec 2019", "Dec 2020", "Dec 2021", "Dec 2022"]
        let obj1 = {
            "data": "ROE"

        }
        roeList.forEach((val, idx) => {
            obj1 = {
                ...obj1,
                [dateArray[idx]]: val.roe

            }



        })


        data = [obj1]

        console.log(roeList)
        return <Card>
            <div class="flex-containerrs">
                <div class="col-1rs">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ marginLeft: '1.5%', paddingTop: '1.5%' }}>Ratios</h2>
                        <RefreshButton onClick={RatioHandler} />

                    </div>
                </div>
                <div class="col-2rs">
                    <div class="flex-container1rs">
                        <div class="row-11rs">
                            <h4 style={{ marginLeft: '1.5%' }}> Consolidated Figures   </h4>
                        </div>
                        <div class="row-21rs">
                            <h4 style={{ marginLeft: '15%' }}> </h4>
                        </div>
                        <div class="row-31rs">
                            <ExportButton onClick={handleExport}></ExportButton>
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
                                return <td> {checkIsNan(item.roe)} </td>

                            })}

                        </tr>
                    </table>

                </div>
                <h6> </h6>
                <div class="col-4rs">
                    <h7 style={{ color: 'white' }}>hbhdbcjbdj</h7>
                </div>
            </div>
        </Card>
    }
}

export default Ratios;