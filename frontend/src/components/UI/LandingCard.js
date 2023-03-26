
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
//import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { getData } from '../../features/company/companySlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RefreshButton from './RefreshButton';
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
        <div className="GeeksForGeeks" style= {{"padding-bottom": "0px", "padding-top": "0px"}}>
            <h1>.</h1>
        </div>
    );
};

export default LandingCard;
