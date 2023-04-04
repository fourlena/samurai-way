import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import {SidebarDataPropsType} from "../../redux/store";

type NavbarPropsType={
    sidebarData:Array<SidebarDataPropsType>
}

function Navbar(props:NavbarPropsType) {
    const sidebarElement = props.sidebarData.map(s => <Sidebar name={s.name}/>)
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><NavLink to={'/profile'}
                                                              className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}><NavLink to={'/dialog'}
                                             className={navData => navData.isActive ? s.active : s.item}>Message</NavLink>
            </div>
            <div className={s.item}><NavLink to={'/users'}
                                             className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div className={s.item}><NavLink to={'/news'}
                                             className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}><NavLink to={'/music'}
                                             className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}><NavLink to={'/settings'}
                                             className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>

            <div className={s.item}></div>
                <h4>Friends</h4>
                {/*<div className={s.wrapper}></div>*/}
                {sidebarElement}


        </nav>
    );
};

export default Navbar;