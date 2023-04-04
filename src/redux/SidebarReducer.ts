import {SidebarPageType} from "./store";

let initialState = {
    sidebarData: [
        {id: 1, name: 'Lena'},
        {id: 2, name: 'Slava'},
        {id: 3, name: 'Liza'}
    ]
}

const sidebarReducer = (state :SidebarPageType = initialState, action:any)=>{
    return state
}
export default sidebarReducer;