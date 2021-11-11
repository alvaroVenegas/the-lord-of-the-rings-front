import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postCharacter } from '../../api/apiCharacters';

const FormNewCharacter = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = (data) => {
        const formData = new FormData();
        formData.append('img', data.img[0]);
        formData.append('name', data.name)
        formData.append('race', data.race)
        formData.append('origin', data.origin)
        formData.append('father', data.father)
        addCharacter(formData)
    }

    const addCharacter = async (character) => {
        try {
            const newCharacter = await postCharacter(character)
            if (newCharacter) {
                navigate('/characters')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor='name'>Nombre:</label>
            <input type='text' name='name' {...register('name')} />
            <label htmlFor='race'>race:</label>
            <input type='text' name='race' {...register('race')} />
            <label htmlFor='origin'>origin:</label>
            <input type='text' name='origin' {...register('origin')} />
            <label htmlFor='father'>father:</label>
            <input type='text' name='father' {...register('father')} />
            <label htmlFor='img'>Imagen:</label>
            <input type='file' name='img' {...register('img')} />
            <input type='submit' value='submit' />
        </form>
    )
}
export default FormNewCharacter
