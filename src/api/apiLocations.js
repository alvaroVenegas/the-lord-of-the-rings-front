import { LOCATIONS } from './apiRoutes';
import axios from 'axios'
import { addToken } from '../utils/jwt';

const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}

export const getLocations = async () => {
    try {
        config.headers.Authorization = addToken()
        const req = await axios.get(LOCATIONS, config)
        return req
    } catch (error) {
        console.error(error)
    }
}

export const postLocation = async (location) => {
    try {
        config.headers.Authorization = addToken()
        const req = await axios.post(LOCATIONS, location, config)
        return req
    } catch (error) {
        console.error(error)
    }
}

export const deleteLocation = async (id) => {
    try {
        config.headers.Authorization = addToken()
        const req = await axios.delete(LOCATIONS + '/' + id, config)
        return req
    } catch (error) {
        console.error()
    }
}