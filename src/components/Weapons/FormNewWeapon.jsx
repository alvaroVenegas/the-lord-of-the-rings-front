import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postWeapon } from '../../api/apiWeapons';

const FormNewWeapon = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('type', data.type)
        formData.append('owner', data.owner)
        formData.append('img', data.img[0]);
        addWeapon(formData)
    }

    const addWeapon = async (weapon) => {
        try {
            const newWeapon = await postWeapon(weapon)
            if (newWeapon) {
                navigate('/weapons')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor='name'>Nombre:</label>
            <input type='text' name='name' {...register('name')} />
            
            <label htmlFor='type'>Tipo:</label>
            <input type='text' name='type' {...register('type')} />

            <label htmlFor='owner'>Propietario:</label>
            <input type='text' name='owner' {...register('owner')} />

            <label htmlFor='img'>Imagen:</label>
            <input type='file' name='img' {...register('img')} />

            <input type='submit' value='submit' />
        </form>
    )
}
export default FormNewWeapon
