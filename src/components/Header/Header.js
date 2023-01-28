import React from 'react';

import css from './Header.module.css'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            {/*<Link to={"/"}>home</Link>*/}
            {/*<Link to={"/users"}>users</Link>*/}
            {/*<Link to={"/post"}>post</Link>*/}

            <NavLink to={" "}>home</NavLink>
            <NavLink to={"users"}>users</NavLink>
            <NavLink to={"post"}>post</NavLink>
        </div>
    );
};

export {
    Header
}