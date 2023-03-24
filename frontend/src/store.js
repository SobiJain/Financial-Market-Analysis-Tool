import {configureStore} from '@reduxjs/toolkit';
import companySlice from './features/company/companySlice';
import auth from './auth/reducer'

const store = configureStore({
    reducer: {
        company: companySlice,
        auth: auth
    }
});

export default store;