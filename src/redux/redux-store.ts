import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleWare from 'redux-thunk'

export type AppRootStateType = ReturnType<typeof rootReducer>

let rootReducer= combineReducers({
    profilePage:profileReducer,
    messagePage:dialogReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer
})

export let store = legacy_createStore(rootReducer,applyMiddleware(thunkMiddleWare))