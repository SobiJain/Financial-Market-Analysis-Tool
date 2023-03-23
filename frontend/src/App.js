import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";
import CompanyInfo from './pages/CompanyInfo';
import LandingPage from './pages/LandingPage';
import "react-toastify/dist/ReactToastify.css";
import SearchAppBar from './components/UI/Navbar';
import List from './pages/CompanyList';
import CompanyList from './components/Display/CompanyList';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import WelcomePage from './pages/WelcomePage';



function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <SearchAppBar />
        <Box sx={{ paddingTop: "2em", paddingBottom: "4rem" }}>
          <Container maxWidth={false} sx={{ maxWidth: '100%' }}>
            {/* <CompanyInfo/> */}
            <Routes>
              {/* <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route> */}
              {/* <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <SharedLayout />
                </ProtectedRoutes>
              }
            > */}

              {/* OTHER PROTECTED ROUTES */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/WelcomePage" element={<WelcomePage />} />
              <Route path="/CompanyInfo" element={<CompanyInfo />} />
              <Route path="/CompanyList" element={<List />} />
              {/* </Route> */}

              {/* ERROR PAGE */}
              {/* <Route exact path="*" element={<Error />}></Route> */}
            </Routes>
            <ToastContainer position="top-center" />
          </Container>
        </Box>
      </Box>
    </BrowserRouter>
    // <CompanyList/>
  );
}

export default App;
