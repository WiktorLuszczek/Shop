import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newsletterSchema } from '../../types/types';
import { Modal } from '../Modal/Modal';
import { schemaMailerliteApi } from 'pages/api/newsletter';

export const Newsletter = () => {
    const [showModal, setShowModal] = useState(false);
    const [textModal, setTextModal] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ email: string }>({
        resolver: yupResolver(newsletterSchema),
    });
    const onSubmit = async( data: {email: string }) => {
        const response = await fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        const { status, email } = schemaMailerliteApi.validateSync(
            await response.json()
        );
        setTextModal(`${status} newsletter in email ${email}`)
        setShowModal(true);
    };
    return (
        <>
            {showModal && (
                <Modal action={setShowModal} text={textModal} />
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
                    <button
                        className="cursor-pointer bg-gray-50 text-black px-2 rounded-lg mt-2"
                        type="submit"
                        id="submit"
                    >Subscribe!</button>
                </form>
            </div>
        </>
    );
};
