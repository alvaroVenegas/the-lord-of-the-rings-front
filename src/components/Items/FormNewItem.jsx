import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postItem } from '../../api/apiItems';

const FormNewItem = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('img', data.img[0]);
        addItem(formData)
    }

    const addItem = async (item) => {
        try {
            const newItem = await postItem(item)
            if (newItem) {
                navigate('/items')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor='name'>Nombre:</label>
            <input type='text' name='name' {...register('name')} />
            
            <label htmlFor='img'>Imagen:</label>
            <input type='file' name='img' {...register('img')} />
            
            <input type='submit' value='submit' />
        </form>
    )
}
export default FormNewItem
