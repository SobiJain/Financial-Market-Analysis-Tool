
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
import { companyList } from '../../data/companyList';
import axios from 'axios';

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
// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         height: '30px',
//         [theme.breakpoints.up('sm')]: {
//             width: '120ch',
//             '&:focus': {
//                 width: '100ch',
//             },
//         },
//     },
// }));
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

    React.useEffect(() => {
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
            console.log(obj.comp);
            console.log(obj.nse);
            setCompanyData(obj.comp);

        }).catch((error) => {
            // console.log(error.response);
        })
    }

    const handleInput = (value) => {
        setInput(value)
        setActive(value ? true : false)
        console.log(value)
    }
    const handleClick = () => {
        if (input) {
            setActive(false);
            console.log(input)
            console.log(input.key)
            //redirect to CompanyInfo
            dispatch(getData(input.key)).then(() => {
                setActive(true)
            });

        }
    }

    const companyDataX = companyData;
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
                                            options={companyDataX}
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
