import { createContext, useContext, useState } from "react";
import { SchemaProduct, SchemaProductContext } from "../schema/schema";

export const OrderContext = createContext<SchemaProductContext>(null)

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
    }
  
    const deleteProduct = (index: number) => {
      const newOrder = order;
      if(index !== -1){   
        newOrder.splice(index, 1)   
      }
      setOrder(newOrder)
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



export const useOrderContext = () => {
  const orderContext = useContext(OrderContext);
  if (!orderContext) {
    throw new Error("Wrap components using CartContextProvider");
  }
  return orderContext;
};