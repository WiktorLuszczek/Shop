import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { SchemaProduct } from '../../schema/schema';
import Image from 'next/image';
import { Modal } from '../Modal/Modal';
import {
    useGetChangeAmountFromOrderContext,
    useGetDeleteProductFromOrderContext,
} from '../../hooks/useGetElementContext';

export const ProductInOrder = ({
    product,
    i,
}: {
    product: SchemaProduct;
    i: number;
}) => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const deleteProduct = useGetDeleteProductFromOrderContext();
    const changeAmount = useGetChangeAmountFromOrderContext();
    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        index: number,
    ) => {
        deleteProduct(index);
        setShowModal(true);
        setModalType('delete');
    };
    const handleAmount = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        changeAmount(index, value);
        setShowModal(true);
        setModalType('amount');
    };
    const handleModal = () => {
        if (modalType === 'delete')
            return (
                <Modal
                    action={setShowModal}
                    text="Product has been removed from the order"
                />
            );
        else if (modalType === 'amount')
            return (
                <Modal
                    action={setShowModal}
                    text="The quantity of products in the order has been changed"
                />
            );
        else null;
    };
    return (
        <>
            {showModal && handleModal()}
            <li key={i} className="flex border-b-2 border-gray-200 pb-4 my-5">
                <Link href={`/product/${product.slug}`}>
                    <Image
                        className="inline-block bg-gray-100 mr-3  rounded-lg"
                        src={product.image}
                        alt="product photo"
                        width={150}
                        height={150}
                    ></Image>
                </Link>
                <div className="ml-3">
                    <Link href={`/product/${product.slug}`}>
                        <span className="block my-2">{product.name}</span>
                    </Link>
                    <span className="my-2 text-sm text-gray-500 block">
                        {product.description}
                    </span>
                    <span className="my-2 text-sm block">
                        Amount:{' '}
                        <input
                            onChange={(e) => handleAmount(e, i)}
                            defaultValue={product.amount}
                            className="border-2 rounded-md w-12 border-black"
                            type={'number'}
                            min={0}
                            max={99}
                        ></input>
                    </span>
                    <span className="my-2 text-sm block">
                        <button onClick={(e) => handleDelete(e, i)}>
                            Delete
                        </button>
                    </span>
                </div>
            </li>
        </>
    );
};
