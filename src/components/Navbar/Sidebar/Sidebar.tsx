import React from 'react';
import s from './Sidebar.module.css';

type SidebarPropsType={
    name: string
}

function Sidebar(props:SidebarPropsType) {
    return (
            <div className={s.wrapper}>
                <img className={s.img} src="https://w7.pngwing.com/pngs/791/512/png-transparent-user-profile-computer-icons-internet-bot-others-miscellaneous-monochrome-silhouette.png" />
                <div className={s.text}>{props.name}</div>
            </div>
    );
};

export default Sidebar;