import {configureStore} from '@reduxjs/toolkit';
// import userSlice from "./features/user/userSlice";
import {ereducer} from './features/company/companySlice';

const store = configureStore({
    reducer: {
        // user: userSlice,
        company: ereducer.companySlice,
        companyKeyData: ereducer.companyKeySlice
    }
});

export default store;