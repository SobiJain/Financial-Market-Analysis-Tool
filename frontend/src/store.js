import {configureStore} from '@reduxjs/toolkit';
// import userSlice from "./features/user/userSlice";
import companySlice from './features/company/companySlice';

const store = configureStore({
    reducer: {
        // user: userSlice,
        company: companySlice,
    }
});

export default store;