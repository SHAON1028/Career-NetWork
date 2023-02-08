import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../AllStateSlice/StateManageSlice";
import employeReducer from "../EmployeSlice/EmployeSlice";


const store = configureStore({
    reducer:{
        state:counterReducer,
        counter:employeReducer
    }
})
export default store