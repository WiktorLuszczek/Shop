import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { useGetAddProductFromOrderContext } from '../../hooks/useGetElementContext';
import { SchemaProduct, SchemaProductInOrder } from '../../types/types';
import { Modal } from '../Modal/Modal';

export const Product = ({ product }: { product: SchemaProduct }) => {
    const addProduct = useGetAddProductFromOrderContext();
    const [showModal, setShowModal] = useState(false);
    const data: SchemaProductInOrder = {
        name: product.name,
        description: product.description,
        id: product.id,
        slug: product.slug,
        image: product.image,
        categories: product.categories,
        price: product.price,
        amount: 1
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addProduct(data);
        setShowModal(!showModal);
    };
    return (
        <>
            {showModal && (
                <Modal action={setShowModal} text="Product added to order" />
            )}
            <div className="grid grid-cols-3 gap-5">
                <Image
                    className="bg-gray-100 px-5 py-10 col-span-2 rounded-lg m-auto"
                    src={product.image}
                    alt="product photo"
                    width={600}
                    height={600}
                ></Image>
                <div className="py-7">
                    <p className="text-5xl font-medium tracking-wide my-3">
                        {product.name}
                    </p>
                    <p className="text-xl my-3">{product.categories}</p>
                    <p className="text-xl my-3">{product.price} $</p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input
                            className="w-full bg-black text-white py-4 rounded-3xl text-xl font-medium my-5 hover:cursor-pointer"
                            type="submit"
                            id="submit"
                            value={'Add to cart'}
                        />
                    </form>
                </div>
            </div>
        </>
    );
};
