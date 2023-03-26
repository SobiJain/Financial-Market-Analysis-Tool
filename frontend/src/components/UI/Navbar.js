import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { getData } from '../../features/company/companySlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { logout, companyfound } from '../../auth/actions';
import ButtonC from './ButtonC';
// import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css'
// import 'https://fonts.googleapis.com/css?family=Open+Sans:400,500|Saira+Semi+Condensed:300,500&display=swap'
import { getinfo } from './css/script.js'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
//   borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '10%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchAppBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  const [active, setActive] = React.useState(false);
  const [companyData, setCompanyData] = React.useState({});
  const [companySymbol, setCompanySymbol] = React.useState({});

  let auth = useSelector((state) => state.auth);
    getinfo();
  React.useEffect(() => {
    fetchData();
  }, [])

  // fetching the list of companies to be displayed on the navbar
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

  const handleClick = () => {
    if (input) {
      setActive(false);
      //redirect to CompanyInfo
      dispatch(getData(mapping[input])).then(() => {
        setActive(true)
      });
      dispatch(companyfound(mapping[input]));
      fetch("http://127.0.0.1:8000/iswishlist?" + new URLSearchParams({
            email: localStorage.getItem("email")}) + "&"+ new URLSearchParams({"company": localStorage.getItem("company")}))
        .then((response) => response.json())
        .then((user) => {
            console.log(user.resp)
           if(user.resp ==='Yes') {
                localStorage.setItem('state','true')
                console.log("can follow")
           } else {
                localStorage.setItem('state','false')
                console.log("already following")
           }
           console.log(auth)
        });

      //navigating to the user to the CompanyInfo page
      navigate('/CompanyInfo')
    }


  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ "background": "#cf60cb",
  "background": "-webkit-linear-gradient(45deg, #cf60cb, #6084a0)",
  "background": "linear-gradient(45deg, #cf60cb, #6084a0)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Financial Market Analysis Tool
          </Typography>
            <Search sx={{ backgroundColor: 'white', opacity: "0.8" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={companyData}
              sx={{
                width: '450px', // increase width to 100%
                height: '50%',
                '& .MuiInputBase-root': {
                    backgroundColor: 'white'
                },
              }}
              onChange={(event, value) => handleInput(value)}
              renderInput={(params) => <TextField color='primary' {...params} label="Company" />}
            />
          </Search>
          <Button variant="contained" onClick={() => handleClick()} disabled={!active} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}><SearchIcon /></Button>
          { auth.isAuthenticated ? <>
          <Button variant="contained" onClick={() => (dispatch(logout()))} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}>Logout</Button> 
          <Button variant="contained" onClick={() => (navigate('/wishlist'))} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}>Wishlist</Button> 
          </>: 
          <>
          <Button variant="contained" onClick={() => (navigate('/login'))} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}>Login</Button>
          <Button variant="contained" onClick={() => (navigate('/register'))} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}>Register</Button>
          </>
            }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default SearchAppBar;