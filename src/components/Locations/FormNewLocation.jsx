import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postLocation } from '../../api/apiLocations';

const FormNewLocation = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('residents', data.residents)
        formData.append('img', data.img[0]);
        addLocation(formData)
    }

    const addLocation = async (location) => {
        try {
            const newLocation = await postLocation(location)
            if (newLocation) {
                navigate('/locations')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor='name'>Nombre:</label>
            <input type='text' name='name' {...register('name')} />
            
            <label htmlFor='residents'>Residentes:</label>
            <input type='text' name='residents' {...register('residents')} />
            
            <label htmlFor='img'>Imagen:</label>
            <input type='file' name='img' {...register('img')} />
            
            <input type='submit' value='submit' />
        </form>
    )
}
export default FormNewLocation
