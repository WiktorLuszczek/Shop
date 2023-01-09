import { useState } from "react";
import { SchemaProduct } from "../schema/schema";
import { OrderContext } from "./OrderContext";

export default function OrderContextProvider (props: { children: React.ReactNode}) {
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
        <OrderContext.Provider value={{
            order: order,
            addProduct,
            deleteProduct,
            changeAmount
            }}>
            {props.children}
        </OrderContext.Provider>
    )
  }