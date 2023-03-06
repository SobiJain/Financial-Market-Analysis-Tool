import Card from "../UI/Card";
import './QuaterlyResults.css'
const Ratios = () =>{
    return <Card>
        <div class="flex-containerrs">
            <div class="col-1rs">
                <h2 style={{ marginLeft: '1.5%', paddingTop: '1.5%' }}>Ratios</h2>
            </div>
            <div class="col-2rs">
                <div class="flex-container1rs">
                    <div class="row-11rs">
                        <h4 style={{ marginLeft: '1.5%' }}> Consolidated Figures in Rs. Crores / View Standalone </h4>
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
                        <td style={{ width: '10%' }}>ROCE %</td>

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