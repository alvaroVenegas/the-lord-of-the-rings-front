import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../api/apiUsers';
import {useNavigate} from 'react-router-dom'

const Register = () => {
    
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const submit = (data) => {
        addUser(data)
    }

    const addUser = async (user) => {
        try {
            const newUser = await registerUser(user)
            if (newUser){
                navigate('users/login')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor='name'>Nombre:</label>
            <input type='text' name='name' {...register('name')}/>
            <label htmlFor='alias'>Alias:</label>
            <input type='text' name='alias' {...register('alias')}/>
            <label htmlFor='password'>Password:</label>
            <input type='text' name='password' {...register('password')}/>
            <input type='submit' value='submit'/>

        </form>
        </>
    )
}
export default Register