import axios from 'axios';
import { CHARACTERS } from './apiRoutes';

const config = {
    headers : {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}

export const getCharacters = () => {
    try {
        const req = axios.get(CHARACTERS, config)
        //console.log(req)
        return req
    } catch (error) {
        console.error(error)
    }
}

export const postCharacter = async (character) => {
    try {
        const req = await axios.post(CHARACTERS, character, config)
        return req
    } catch (error) {
        console.error(error)
    }
}

export const deleteCharacter = async (id) => {
    try {
        const req = await axios.delete(CHARACTERS + '/' + id, config)
        return req
    } catch (error) {
        console.error()
    }
}




/* export const getCharacters = async () =>{
    const request = await fetch(CHARACTERS,{
        method:'GET',
        headers:headers,
    })
    const response = await request.json()
    return response
} */

/* export const postCharacter = async (character) =>{
    try{
        const req = await fetch(CHARACTERS,{
            method:'POST',
            headers:headers,
            body: JSON.stringify(character)
        })
        const res = await req.json()
        return res
    }catch(error){
        console.error(error)
    }
}  */

/* export const deleteCharacter = async (id) => {
    try {
        const req = await fetch(CHARACTERS + '/' + id, {
            method: 'DELETE',
            headers: headers
        })
        const res = await req.json()
        return res

    } catch (error) {
        console.error(error)
    }
} */