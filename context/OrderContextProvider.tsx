import { createContext, useContext, useEffect, useState } from 'react';
import {
    schemaLocalStorage,
    SchemaProduct,
    SchemaProductContext,
} from '../schema/schema';

export const OrderContext = createContext<SchemaProductContext>(null);

export default function OrderContextProvider(props: {
    children: React.ReactNode;
}) {
    const [order, setOrder] = useState<SchemaProduct[]>([]);
    useEffect(() => {
        const localData = localStorage.getItem('order');
        if (localData) {
            schemaLocalStorage.isValid(JSON.parse(localData)).then((res) => {
                if (res) setOrder(JSON.parse(localData));
                else localStorage.setItem('order', JSON.stringify([]));
            });
        }
    }, []);
    const addProduct = (product: SchemaProduct) => {
        const existingItem = order.find((item) => item.id === product.id);
        if (existingItem) {
            const newOrder = order.map((item) => {
                if (item.id === existingItem.id) {
                    return { ...item, amount: existingItem.amount + 1 };
                } else return item;
            });
            localStorage.setItem('order', JSON.stringify(newOrder));
            setOrder(newOrder);
        } else {
            localStorage.setItem('order', JSON.stringify([...order, product]));
            setOrder([...order, product]);
        }
    };
    const deleteProduct = (index: number) => {
        const newOrder = order.filter((item, i) => i !== index);
        localStorage.setItem('order', JSON.stringify(newOrder));
        setOrder(newOrder);
    };

    const changeAmount = (index: number, value: string) => {
        const newOrder = order.map((item, i) => {
            if (index === i) {
                return { ...item, amount: parseInt(value) };
            } else return item;
        });
        localStorage.setItem('order', JSON.stringify(newOrder));
        setOrder(newOrder);
    };
    return (
        <OrderContext.Provider
            value={{
                order: order,
                addProduct,
                deleteProduct,
                changeAmount,
            }}
        >
            {props.children}
        </OrderContext.Provider>
    );
}

export const useOrderContext = () => {
    const orderContext = useContext(OrderContext);
    if (!orderContext) {
        throw new Error('Wrap components using CartContextProvider');
    }
    return orderContext;
};
