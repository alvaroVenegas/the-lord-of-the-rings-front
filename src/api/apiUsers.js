import { USERS, LOGIN } from "./apiRoutes";
import axios from 'axios';



const config = {
    headers : {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}

export const registerUser = async (user) => {
    try {
        const req = await axios.post(USERS,user,config)
        return req
    } catch (error) {
        console.error(error)
    }
}

export const loginUser = async (user)=>{
    try {
        const req = await axios.post(LOGIN, user, config)
        /* console.log('devuelto de back-->', req) */
        return req.data
    } catch (error) {
        console.error(error)
    }
}

export const logOut = () => {
    try {
        localStorage.setItem('token','')
    } catch (error) {
        console.error(error)
    }
}