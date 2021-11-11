import React, { useEffect, useState } from 'react';
import { deleteCharacter, getCharacters } from '../../api/apiCharacters';

const Characters = () => {

    const [characters, setCharacters] = useState([])

    const getCharactersApi = async () => {
        try {
            const data = await getCharacters();
            setCharacters(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    const delCharacter = async (id) => {
        try {
            await deleteCharacter(id)
            const newElements = characters.filter(item => item._id !== id)
            setCharacters(newElements)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCharactersApi();
    }, [])

    return (
        <>
            <h1>Personajes</h1>
            <div>
                {characters.map(item => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <h3>Nombre: {item.name}</h3>
                            <p>Raza: {item.race}</p>
                            <p>Origen: {item.origin}</p>
                            <p>Padre: {item.father}</p>
                            {item.img && <img src={item.img} alt={item.name} />}
                            <button onClick={() => delCharacter(item._id)}>Borrar</button>
                           {/*  <button onClick={() => <FormularioCharacters character={item}/>}>Modificar</button> */}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Characters