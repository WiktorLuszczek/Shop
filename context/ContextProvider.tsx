import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState } from "react"
import { SchemaProduct } from "../schema/schema"
import { MyContext } from "./createContext"

export const ContextProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    const [order, setOrder] = useState<SchemaProduct[]>([])

    const addProduct = (product: SchemaProduct) => {
        let newOrder;
        if(order.find(obj => obj.id === product.id)){
            newOrder = order;
            const index = newOrder.findIndex(obj => obj.id === product.id)
            newOrder[index].amount++
        }
        else { 
        newOrder = [...order, product]
        }
        setOrder(newOrder);
        alert('Product added from cart')
    }

    const deleteProduct = (index: number) => {
        const newOrder = order;
        if(index !== -1){   
            newOrder.splice(index, 1)   
        }
        setOrder(newOrder)
        alert('Product has been removed from the cart')
    }

    const changeAmount = (index: number, value: string) => {
        const newOrder = order;
        newOrder[index].amount = parseInt(value);
        setOrder(newOrder)
    }
    return (
        <MyContext.Provider value={{
            order: order,
            addProduct: addProduct,
            deleteProduct: deleteProduct,
            changeAmount: changeAmount
            }}>
            {props.children}
        </MyContext.Provider>
    )
}