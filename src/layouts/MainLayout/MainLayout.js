import React from 'react';
import {Outlet} from "react-router-dom";

import {SideBar} from "../../components";
import './MainLayout.styles.css'


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
