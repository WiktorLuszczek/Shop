import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../types/types';

export const LogIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ email: string; password: string }>({
        resolver: yupResolver(loginSchema),
    });
    
    const onSubmit = ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        signIn('credentials', {email, password})
    };
    return (
        <form
            className="flex flex-col justify-center items-center pt-7 border-r min-h-minHeight w-1/2"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="text-4xl font-bold mb-5">Login</h2>
            <input
                className="border-2 text-lg rounded-md m-2 border-black p-1"
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
                className="cursor-pointer text-xl bg-black text-white px-5 py-2 rounded-lg"
                type={'submit'}
                value="Log In"
            />
        </form>
    );
};
