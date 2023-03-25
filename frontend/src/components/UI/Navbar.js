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
import { companyList } from '../../data/companyList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { logout, companyfound } from '../../auth/actions';
import ButtonC from './ButtonC';




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
      dispatch(companyfound(mapping[input])).then(() => {
        localStorage.setItem("company", mapping[input])
        localStorage.setItem("state", 'true')
      });
      //navigating to the user to the CompanyInfo page
      navigate('/CompanyInfo')

    }


  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#7a90c1" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Financial Market Analysis Tool
          </Typography>
            <Search sx={{ backgroundColor: 'white' }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={companyData}
              sx={{
                width: '350px', // increase width to 100%
                '& .MuiInputBase-root': {
                  backgroundColor: 'white'
                }
              }}
              onChange={(event, value) => handleInput(value)}
              renderInput={(params) => <TextField color='primary' {...params} label="Company" />}
            />
          </Search>
          <Button variant="contained" onClick={() => handleClick()} disabled={!active} sx={{ ml: 1, '& .MuiInputBase-root': { backgroundColor: 'wheat' } }}><SearchIcon /></Button>
          { auth.isAuthenticated ? <>
          <ButtonC variant="contained" onClick={() => (dispatch(logout()))}>Logout</ButtonC> 
          <ButtonC variant="contained" onClick={() => (navigate('/wishlist'))} >Wishlist</ButtonC> 
          </>: 
          <>
          <ButtonC variant="contained" onClick={() => (navigate('/login'))} >Login</ButtonC>
          <ButtonC variant="contained" onClick={() => (navigate('/register'))} >Register</ButtonC>
          </>
            }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default SearchAppBar;