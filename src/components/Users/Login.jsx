import React from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/apiUsers';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = (data) => {
        singIn(data)
    }

    const singIn = async (user) => {
        try {
            const token = await loginUser(user)
            localStorage.setItem('token', token)
            navigate('/characters')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor='alias'>Alias:</label>
            <input type='text' name='alias' {...register('alias')} />
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' {...register('password')} />
            <input type='submit' value='submit' />
        </form>
    )
}
export default Login