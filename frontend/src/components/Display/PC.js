import Card from "../UI/Card";


const PC = () => {

    return <Card>
        <div style={{
            borderRadius: '10px',
            border: '1px solid #ccc',
            padding: '20px',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div style={{
                border: '1px solid green',
                width: '100%',
                boxSizing: 'border-box',
                padding: '10px',
                borderRadius: '12px'
            }}>
                <h2>PROS</h2>
                <ul>
                    <li>Company has delivered good profit growth of 29.0% CAGR over last 5 years</li>
                    <li>Company's working capital requirements have reduced from 147 days to 78.0 days</li>
                   
                </ul>
            </div>
            <div style={{
                border: '1px solid red',
                width: '100%',
                boxSizing: 'border-box',
                padding: '10px',
                marginLeft: '2%',
                borderRadius: '12px'
            }}>
                <h2>CONS</h2>
                <ul>
                    <li>Company has low interest coverage ratio.</li>
                    <li>Promoter holding has decreased over last quarter: -1.50%2</li>
                    <li>The company has delivered a poor sales growth of 8.79% over past five years.</li>
                    <li>Promoter holding is low: 8.19%</li>
                    <li> Company has a low return on equity of 8.19% over last 3 years.</li>
                    <li>Contingent liabilities of Rs.1,360,180 Cr.</li>
                    <li>Company might be capitalizing the interest cost</li>
                    <li>Earnings include an other income of Rs.18,003 Cr.</li>
                </ul>
            </div>

        </div>
    </Card>



}

export default PC;