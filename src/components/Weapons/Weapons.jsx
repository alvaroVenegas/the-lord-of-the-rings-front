import React, { useEffect, useState } from 'react';
import { deleteWeapon, getWeapons } from '../../api/apiWeapons';


const Weapons = () => {

    const [weapons, setWeapons] = useState([])

    const getWeaponsApi = async () => {
        try {
            const data = await getWeapons();
            setWeapons(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    const delWeapon = async (id) => {
        try {
            await deleteWeapon(id)
            const newElements = weapons.filter(item => item._id !== id)
            setWeapons(newElements)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getWeaponsApi();
    }, [])

    return (
        <>
            <h1>Weapons</h1>
            {weapons.map(item => {
                return (
                    <div key={JSON.stringify(item)}>
                        <h3>{item.name}</h3>
                        <p>{item.type}</p>
                        <p>{item.owner}</p>
                        {item.img && <img src={item.img} alt={item.name} />}
                        <button onClick={() => delWeapon(item._id)}>Borrar</button>
                    </div>
                )
            }
            )}
        </>
    )
}

export default Weapons