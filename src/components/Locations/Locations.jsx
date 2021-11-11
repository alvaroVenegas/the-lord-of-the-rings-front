import React, { useEffect, useState } from 'react';
import { deleteLocation, getLocations } from '../../api/apiLocations';
import './Locations.scss'

const Locations = () => {
    //console.log(locations)
    const [locations, setLocations] = useState([])

    const getLocationsApi = async () => {
        try {
            const data = await getLocations()
            setLocations(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    const delLocation = async (id) => {
        try {
            await deleteLocation(id)
            const newElements = locations.filter(item => item._id !== id)
            setLocations(newElements)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getLocationsApi()
    }, [])

    return (
        <>
            <h1>Localizaciones</h1>
            <div className='c-locations'>
                {locations.map(item => {
                    return (
                        <div key={JSON.stringify(item)} className='card' >
                            <h3>Nombre: {item.name}</h3>
                            <p>Residentes: {item.residents}</p>
                            {item.img && <img src={item.img} alt={item.name} />}
                            <button onClick={() => delLocation(item._id)}>Borrar</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Locations