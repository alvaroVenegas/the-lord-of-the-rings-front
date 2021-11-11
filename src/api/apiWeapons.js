import{WEAPONS} from './apiRoutes';
import axios from 'axios'
import { addToken } from '../utils/jwt';

const config = {
    headers : {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
} 

export const getWeapons = async ()=>{
    try{
        config.headers.Authorization = addToken()
        const req = await axios.get(WEAPONS,config)
        return req
    }catch(error){
        console.error(error)
    }
}

export const postWeapon = async (weapon) => {
    try {
        config.headers.Authorization = addToken()
        const req = await axios.post(WEAPONS, weapon, config)
        return req
    } catch (error) {
        console.error(error)
    }
}

export const deleteWeapon = async (id) => {
    try {
        config.headers.Authorization = addToken()
        const req = await axios.delete(WEAPONS + '/' + id, config)
        return req
    } catch (error) {
        console.error()
    }
}