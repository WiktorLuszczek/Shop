import Image from 'next/image';
import { useGetOrderFromOrderContext } from '../../hooks/useGetElementContext';
import type { SchemaProduct } from '../../types/types';

export const OrderCard = () => {
    const order = useGetOrderFromOrderContext();
    if (order.length === 0) {
        return (
            <>
                <h1 className="text-center m-4 text-3xl font-bold">
                    Products in the basket
                </h1>
                <p>You have no products in your shopping cart</p>
            </>
        );
    } else {
        return (
            <>
                <h1 className="text-center m-4 text-3xl font-bold">
                    Products in the basket
                </h1>
                <ul className="text-center">
                    {order.map((product: SchemaProduct, i: number) => (
                        <div key={i}>
                            <li className="m-5 text-lg border-b-2 p-3 flex justify-between w-72 mx-auto">
                                <Image
                                    className="inline-block"
                                    src={product.image}
                                    alt="product photo"
                                    width={40}
                                    height={40}
                                ></Image>
                                <span className="leading-10">
                                    {product.name}
                                </span>
                            </li>
                        </div>
                    ))}
                </ul>
            </>
        );
    }
};
