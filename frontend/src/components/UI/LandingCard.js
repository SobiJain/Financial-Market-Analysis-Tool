
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.15),
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
        height: '30px',
        [theme.breakpoints.up('sm')]: {
            width: '120ch',
            '&:focus': {
                width: '100ch',
            },
        },
    },
}));
const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

};
const LandingCard = () => {
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
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </div>

                        </div>
                    </header>
                </Box>



            </Container>
        </React.Fragment >


    );
};

export default LandingCard;
