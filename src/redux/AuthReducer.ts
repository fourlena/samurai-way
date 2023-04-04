import {MainActionType} from "./store";
import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {SetUsersProfileAC} from "./ProfileReducer";

export  type AuthReducerType = DataUserType & {isAuth: boolean}
type DataUserType ={
    userId:  number | null
    email: string | null
    login: string | null
}
export type SetAuthUserDataActionType = {
    type: "SET-AUTH-USER-DATA"
    data: DataUserType
}


export let SetAuthUserDataAC = (userId: number | null,email : string | null,login :string | null): SetAuthUserDataActionType => {
    return {type: 'SET-AUTH-USER-DATA', data:{userId,email,login}}
}

export const setUsersProfileTC = () => {
    return (dispatch: Dispatch)=> {
        authApi.me().then(data => {
            if(data.resultCode === 0){
                let {id,email,login} = data.data
                dispatch(SetAuthUserDataAC(id,email,login))
            }
        })
    }
}

let initialState: AuthReducerType = {
    userId:null,
    email:null,
    login:null,
    isAuth: false
};

const authReducer = (state: AuthReducerType = initialState, action: MainActionType):AuthReducerType => {
    switch (action.type) {
        case  'SET-AUTH-USER-DATA':
        return{
            ...state,
            ...action.data,
            isAuth:true
        }

        default :
            return state;
    }

};

export default authReducer;