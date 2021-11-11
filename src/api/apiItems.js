import { ITEMS } from './apiRoutes';
import axios from 'axios'
import { addToken } from '../utils/jwt';

const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}

export const getItems = () => {
    try {
        config.headers.Authorization = addToken()
        const req = axios.get(ITEMS, config)
        return req
    } catch (error) {
        console.error(error)
    }
}

export const postItem = (item) => {
    try {
        config.headers.Authorization = addToken()
        const req = axios.post(ITEMS, item, config)
        return req
    } catch (error) {
        console.error(error)
    }
}

export const deleteItem = async (id) => {
    try {
        config.headers.Authorization = addToken()
        const req = await axios.delete(ITEMS + '/' + id, config)
        return req
    } catch (error) {
        console.error()
    }
}