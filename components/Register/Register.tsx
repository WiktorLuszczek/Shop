import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerSchema } from '../../types/types';

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ email: string; password: string; confirmPassword: string }>({
        resolver: yupResolver(registerSchema),
    });
    const [isRegister, setIsRegister] = useState(false)
    const onSubmit = handleSubmit(async ({email, password}) => {
        // eslint-disable-next-line no-undef
        const res = await fetch('/api/signin', {
            method: 'POST', 
            body:JSON.stringify({email, password})})
        setIsRegister(res.ok)
    });
    return (
        <form
            className="flex flex-col justify-center items-center border-l min-h-minHeight w-1/2"
            onSubmit={onSubmit}
        >
            {isRegister && <div role={'alert'}>Seccess register account!</div>}
            <p className="text-xl">You do not have an account?</p>
            <h2 className="text-3xl font-bold">Register</h2>
            <input
                className="border-2 text-lg rounded-md m-2 border-black p-1"
                type={'email'}
                placeholder="Email..."
                {...register('email')}
            />
            <span className="block">{errors?.email?.message}</span>
            <input
                className="border-2 text-lg rounded-md m-2 border-black p-1"
                type={'password'}
                placeholder="Password..."
                {...register('password')}
            />
            <span className="block">{errors?.password?.message}</span>
            <input
                className="border-2 text-lg rounded-md m-2 border-black p-1"
                type={'password'}
                placeholder="Confirm password..."
                {...register('confirmPassword')}
            />
            <span className="block">{errors?.confirmPassword?.message}</span>
            <input
                className="text-xl bg-black text-white px-5 py-2 rounded-lg"
                type={'submit'}
                value="Sign Up"
            />
        </form>
    );
};
