import axios from "axios";

const instanse = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY':'da6a5b05-3cd4-4d2e-961e-5e12d6571fb2'}
})

export const  userApi ={
    getUsers (currentPage:number,pageSize:number){
        return instanse.get(`users?page=${currentPage}&count=${pageSize}` )
            .then(response => response.data)
    },
    follow (id:string){
        return instanse.post(`follow/${id}`,{} )
            .then(response => response.data)
    },
    unfollow (id:string){
        return instanse.delete(`follow/${id}` )
            .then(response => response.data)
    },
    getProfile (userId:string){
        console.warn('Use profileApi')
        return profileApi.getProfile(userId)
    }
}
export const  profileApi ={
    getProfile (userId:string){
        return instanse.get(`profile/` + userId )
            .then(response => response.data)
    },
    getStatus (userId:string){
        return instanse.get(`profile/status/` + userId )
            .then(response => response.data)
    },
    updateStatus (status:string){
        return instanse.put('profile/status',{status:status} )
            .then(response => response.data)
    },
}

export const  authApi ={
    me (){
        return instanse.get(`auth/me` )
            .then(response => response.data)
    }
}




