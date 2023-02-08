import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { useDispatch} from 'react-redux';
import { setOnlyMenuTrue } from '../app/AllStateSlice/StateManageSlice';

const Main = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Navbar></Navbar>
            <div onClick={()=>dispatch(setOnlyMenuTrue())}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;