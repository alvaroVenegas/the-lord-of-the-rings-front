import React, {  useEffect, useState } from 'react';
import { deleteItem, getItems } from '../../api/apiItems';



const Items = () => {
    
    const [items, setItems]= useState([])
    
    const getItemsApi = async () =>{
        try{
            const data = await getItems();
            setItems(data.data)
        }catch(error){
            console.error(error)
        }
    }

    const delItem = async (id) => {
        try {
            await deleteItem(id)
            const newElements = items.filter(item => item._id !== id)
            setItems(newElements)
        } catch (error) {
            console.error(error)
        }
    }
 
    useEffect(()=>{
        getItemsApi()
    },[]) 

    return (
        <div className='c-object'>
            <h1>Objetos</h1>
            <div>
            {items.map(item => {
                return (
                    <div key={JSON.stringify(item)}>
                        <h3>{item.name}</h3>
                        {item.img && <img src={item.img} alt={item.name} />}
                        <button onClick={() => delItem(item._id)}>Borrar</button>

                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Items