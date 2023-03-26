import Card from "../UI/Card";
import './QuaterlyResults.css'
import { useSelector, useDispatch } from 'react-redux'
import RefreshButton from "../UI/RefreshButton";
import { getQuaterData } from "../../features/company/companySlice";
import ExportButton from "../UI/ExportButton";
import { HandleExport } from "./HandleExport";
import checkIsNan from "./CheckIsNan";


const QuaterlyResults = () => {

    const isLoading = useSelector((state) => state.company.isLoading);
    const companyData = useSelector((store) => store.company);
    const quaterIsLoading = useSelector((state) => state.quaterIsLoading)

    const dispatch = useDispatch();
    const QuaterHandler = () => {
        const key = localStorage.getItem('company');
        dispatch(getQuaterData(key));


    }
    let data = {};
    if (!isLoading && !quaterIsLoading && companyData.companyData.quarterDataResult.quarterlyEarnings) {
        const dateArray = ["Dec 2020", "March 2021", "June 2021", "September 2021", "December 2021", "March 2022", "June 2022", "September 2022", "December 2022"]
        let obj1 = {
            "data": "Reported EPS"

        }
        let obj2 = {
            "data": "Estimated EPS"
        }

        let obj3 = {
            "data": "Surprise"
        }
        let obj4 = {
            "data" : "Surprise Percentage"

        }
        companyData.companyData.quarterDataResult.quarterlyEarnings.slice(0, 9).reverse().forEach((val, idx) => {
            obj1 = {
                ...obj1,
                [dateArray[idx]]: val.reportedEPS

            }

            obj2 = {
                ...obj2,
                [dateArray[idx]]: val.estimatedEPS

            }

            obj3 = {
                ...obj3,
                [dateArray[idx]]: val.surprise

            }

            obj4 = {
                ...obj4,
                [dateArray[idx]]: val.surprisePercentage

            }

        })


        data = [obj1, obj2, obj3, obj4]

    }

    const handleExport = () => {
        HandleExport(data, "QuaterlyData.xlsx");

    }





    if (!isLoading && !quaterIsLoading) {
        return <Card>
            <div class="flex-containerqr">
                <div class="col-1qr">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ marginLeft: '1.5%' }}>Quarterly Results</h2>
                        <RefreshButton onClick={QuaterHandler}></RefreshButton>
                    </div>
                </div>
                <div class="col-2qr">
                    <div class="flex-container1qr">
                        <div class="row-11qr">
                            <h4 style={{ marginLeft: '3%' }}> Consolidated Figures in Rs. Crores / View Standalone </h4>
                        </div>
                        <div class="row-21qr">
                            <h4 style={{ marginLeft: '15%' }}> </h4>
                        </div>
                        <div class="">
                            <ExportButton onClick={handleExport}> </ExportButton>

                        </div>
                    </div>

                </div>
                <div class="col-3qr">
                    <table>
                        <tr>
                            <td style={{ width: '19%', marginLeft: '10%' }}> Data	</td>
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
                            {companyData.companyData.quarterDataResult.quarterlyEarnings && companyData.companyData.quarterDataResult.quarterlyEarnings.slice(0, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.reportedEPS)} </td>

                            })}
                        </tr>
                        <tr>
                            <td>Estimated EPS</td>
                            {companyData.companyData.quarterDataResult.quarterlyEarnings && companyData.companyData.quarterDataResult.quarterlyEarnings.slice(0, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.estimatedEPS)} </td>

                            })}
                        </tr>
                        <tr>
                            <td>Surprise</td>
                            {companyData.companyData.quarterDataResult.quarterlyEarnings && companyData.companyData.quarterDataResult.quarterlyEarnings.slice(0, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.surprise)} </td>

                            })}
                        </tr>
                        <tr>
                            <td>Surprise Percentage</td>
                            {companyData.companyData.quarterDataResult.quarterlyEarnings && companyData.companyData.quarterDataResult.quarterlyEarnings.slice(0, 9).reverse().map((item) => {
                                return <td> {checkIsNan(item.surprisePercentage)} </td>

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
}

export default QuaterlyResults;