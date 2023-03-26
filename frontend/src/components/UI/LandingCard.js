import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { companyfound } from '../../auth/actions';
import './Landing.css'


// //styling of the search component
// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.black),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.black),
//     },
//     marginRight: '1rem',
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));

// const styles = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',

// };

const LandingCard = () => {

    const [companyData, setCompanyData] = React.useState({});
    const [companySymbol, setCompanySymbol] = React.useState({});

    React.useEffect(() => {
        fetchData();
    }, [])

    // fetching the list of companies to be displayed on the landing page
    const fetchData = () => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/companies"

        }).then((response) => {
            const data = response.data;
            const obj = JSON.parse(data)
            setCompanyData(obj.comp);
            setCompanySymbol(obj.nse)
        }).catch((error) => {
            console.log(error.response);
        })
    }

    // mapping the company key and their symbol fetched from the above function
    let mapping = {};
    for (var i = 1; i < companySymbol.length; i++) {
        mapping[companyData[i]] = companySymbol[i];
    }

    return (
    //     <div className="session" >
    //     <div className="left">
    //       {/*?xml version="1.0" encoding="UTF-8"?*/}
    //       <svg enableBackground="new 0 0 300 302.5" version="1.1" viewBox="0 0 300 302.5" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
    //         <style type="text/css" dangerouslySetInnerHTML={{__html: "\n          .st01 {\n            fill: #fff;\n          }\n        " }} />
    //         <path className="st01" d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z" />
    //       </svg>
    //     </div>
    //     <form action className="log-in" autoComplete="off">
    //       <h4>We are <span>FIN ANALYTICA</span></h4>
    //       <p>Welcome back! Log in to your account to view today's stats:</p>
          
    //     </form>
    //   </div>
    // <div style= {{"margin-bottom": "100px", "margin-top": "-800px"}}>
    //         <p></p> </div>
    <>
    <div class="MuiBox-root" style= {{"margin-bottom": "2300px", "margin-top": "-100px"}}>
        <div style = {{ "margin-left": "750px", "color":"black", "margin-top": "150px", "font-size":"80px"}}>
            Welcome to 
        </div>
        <div style = {{ "color":"black", "margin-top": "-20px", "font-size":"90px", "margin-left": "800px"}}>
            FinAnalytica
        </div>
    </div></>
    );
};

export default LandingCard;
