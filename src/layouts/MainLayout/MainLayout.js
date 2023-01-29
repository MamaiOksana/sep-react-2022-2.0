import React from 'react';
import {SideBar} from "../../components/SideBar/SideBar";
import './MainLayout.styles.css'
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={'main-box'}>
            <SideBar/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
}