import { configureStore } from "redux";
import companySlice from "../features/company/companySlice"
const reducerFunction = (state, action) =>{
    reducer: {
        company: companySlice
    }
}

const store = configureStore(reducerFunction);