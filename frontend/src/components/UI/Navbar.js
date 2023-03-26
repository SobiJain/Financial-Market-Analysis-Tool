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
import './css/bootstrap.min.css';
import "./css/font-awesome.min.css" 
import "./css/owl.carousel.css" 
import "./css/animate.css" 
import "./css/main.css"
import "./css/responsive.css"
import logo1 from "./images/logo.png"
import logo2 from "./images/logo-2.png"



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
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
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static" style={{ backgroundColor: "#6084a0" }}>
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="open drawer"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    //       >
    //         Financial Market Analysis Tool
    //       </Typography>
    //         <Search sx={{ backgroundColor: 'white' }}>
    //         <Autocomplete
    //           disablePortal
    //           id="combo-box-demo"
    //           options={companyData}
    //           sx={{
    //             width: '450px', // increase width to 100%
    //             '& .MuiInputBase-root': {
    //               backgroundColor: 'white'
    //             }
    //           }}
    //           onChange={(event, value) => handleInput(value)}
    //           renderInput={(params) => <TextField color='primary' {...params} label="Company" />}
    //         />
    //       </Search>
    //       <Button variant="contained" onClick={() => handleClick()} disabled={!active} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}><SearchIcon /></Button>
    //       { auth.isAuthenticated ? <>
    //       <Button variant="contained" onClick={() => (dispatch(logout()))} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}>Logout</Button> 
    //       <Button variant="contained" onClick={() => (navigate('/wishlist'))} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}>Wishlist</Button> 
    //       </>: 
    //       <>
    //       <Button variant="contained" onClick={() => (navigate('/login'))} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}>Login</Button>
    //       <Button variant="contained" onClick={() => (navigate('/register'))} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}>Register</Button>
    //       </>
    //         }
          
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <div>
        <link href="http://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        
        {/* 
	    Header start
	    ==================== */}
        <div className="navbar-default navbar-fixed-top" id="navigation">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="/">
                <img className="logo-1" src={logo1} alt="LOGO" />
                <img className="logo-2" src={logo2} alt="LOGO" />
              </a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <nav className="collapse navbar-collapse" id="navbar">
              <ul className="nav navbar-nav navbar-right" id="top-nav">
                { auth.isAuthenticated ? 
                <>
                <li className="/logout"><a href="#body" onClick={() => (dispatch(logout()))}>Logout</a></li>
                <li><a href="/wishlist">Wishlist</a></li>
                </> : 
                <>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                </>}
              </ul>
            </nav>{/* /.navbar-collapse */}
          </div>{/* /.container-fluid */}
        </div>
        <section clas="wow fadeInUp">
          <div className="map-wrapper">
          </div>
        </section>
      </div>
  );
}
export default SearchAppBar;