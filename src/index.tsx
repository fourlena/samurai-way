import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { RootStateType} from './redux/store'
import { AppRootStateType} from './redux/redux-store'

import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


export function rerenderTree (state:AppRootStateType){
    ReactDOM.render(
        <Provider store={store}>
            <App state={state}/>
        </Provider>,document.getElementById('root'));
}

rerenderTree(store.getState())




