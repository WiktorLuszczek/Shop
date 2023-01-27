import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../schema/schema';
import { Modal } from '../Modal/Modal';

export const Newsletter = () => {
    const [showModal, setShowModal] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ email: string }>({
        resolver: yupResolver(formSchema),
    });
    const onSubmit = ({ email }: { email: string }) => {
        console.log('email to newsletter', email);
        setShowModal(true);
    };
    return (
        <>
            {showModal && (
                <Modal action={setShowModal} text="You are add to newsletter" />
            )}
            <div className="text-center">
                <div className="text-xl">Join our Newsletter</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="text-black block mx-auto m-1 px-2 rounded-lg"
                        type="text"
                        placeholder="Email..."
                        {...register('email')}
                    ></input>
                    <span className="block">{errors?.email?.message}</span>
                    <input
                        className="cursor-pointer bg-gray-50 text-black px-2 rounded-lg mt-2"
                        type="submit"
                        id="submit"
                        value="Subscribe!"
                    ></input>
                </form>
            </div>
        </>
    );
};
