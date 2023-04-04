import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {mapStateToPropsType} from "./HeaderContainer";
function Header (props:mapStateToPropsType) {
    return (
        <header className={s.header}>
            <img
                src='https://e7.pngegg.com/pngimages/539/883/png-clipart-globe-earth-globe-miscellaneous-blue.png'></img>
            <div>
                {props.isAuth ? props.login : <NavLink to={'/login'} className={navData => navData.isActive ? s.active : s.link}> Login </NavLink> }
            </div>
        </header>

    );
};

export default Header;
