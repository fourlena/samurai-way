import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainActionType, RootStateType} from "./redux/store";
import {AppRootStateType} from "./redux/redux-store";
import {EmptyObject, Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";




type AppPropsType={
    // state:RootStateType
    state:AppRootStateType
    // store: Store<EmptyObject & AppRootStateType, any>
}

function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <Navbar sidebarData={props.state.sidebar.sidebarData}/>
                <div className='content'>
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/profile/" element={<ProfileContainer/>}/>
                    <Route path={'/dialog/*'} element={<DialogsContainer /> }/>
                    <Route path={'/users/*'} element={<UsersContainer /> }/>
                    <Route path={'/login/*'} element={<Login /> }/>
                </Routes>
                </div>
                {/*<Profileinfo />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
