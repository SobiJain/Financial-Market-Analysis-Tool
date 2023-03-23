
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
//import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { getData } from '../../features/company/companySlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//styling of the search component
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

};
const LandingCard = () => {
    const dispatch = useDispatch();
    const [input, setInput] = React.useState("");
    const [active, setActive] = React.useState(false);
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

    const handleInput = (value) => {
        setInput(value)
        setActive(value ? true : false)
        // console.log(value)
    }

    const navigate = useNavigate();

    // this function is used when the user search for a particular company and hit the search button
    const handleClick = () => {
        if (input) {
            setActive(false);
            //dispatching the key to the react store to forward it to the backend
            dispatch(getData(mapping[input])).then(() => {
                setActive(true)
            });
            //navigating to the user to the CompanyInfo page
            navigate('/CompanyInfo')
            // <Navigate replace to="/CompanyInfo" />
            // dispatch(getData(input.key)).then(() => {
            //     setActive(true)
            // });
        }
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{}}>
                    <header className="header" >
                        <div className="header-container" >
                            <div className="logo-container" >
                                <div style={styles}>
                                    <img src="/logo.png" alt="Logo" className="logo" />
                                </div>

                                <h1 className="punchline">
                                    <Typography align='center' sx={{ fontSize: 24 }} color="text.primary" gutterBottom >
                                        Stock analysis tool for investors
                                    </Typography>
                                </h1>
                                <div style={{ display: 'flex' }}>
                                    <Search style={{ width: "80%", marginRight: "1rem" }}>
                                        {/* <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper> */}
                                        {/* <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    /> */}
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={companyData}
                                            sx={{}}
                                            onChange={(event, value) => handleInput(value)}
                                            renderInput={(params) => <TextField {...params} label="Company" />}
                                        />
                                    </Search>
                                    <Button variant="contained" onClick={() => handleClick()} disabled={!active}><SearchIcon /></Button>
                                </div>
                            </div>

                        </div>
                    </header>
                </Box>



            </Container>
        </React.Fragment >


    );
};

export default LandingCard;
