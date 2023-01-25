import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { SchemaProduct, SchemaProductContext } from "../schema/schema";

export const OrderContext = createContext<SchemaProductContext>(null)

export default function OrderContextProvider (props: { children: React.ReactNode}) {
    const [order, setOrder] = useState<SchemaProduct[]>([])
    useEffect(() => {
      const localData = localStorage.getItem('order');
      if(localData) setOrder(JSON.parse(localData))
    }, [])
    const addProduct = (product: SchemaProduct) => {
      if(order.find(item => item.id === product.id)){
        const newOrder = order.map(item => {
          if(item.id === product.id) {
            item.amount++
            return item
          }
          else return item
        })
        localStorage.setItem('order', JSON.stringify(newOrder))
        setOrder(newOrder)
      }
      else {
        localStorage.setItem('order', JSON.stringify([...order, product]))
        setOrder([...order, product])
      }
    }
    const deleteProduct = (index: number) => {
      const newOrder = order;
      if(index !== -1){   
        newOrder.splice(index, 1)   
      }
      localStorage.setItem('order', JSON.stringify(newOrder))
      setOrder(newOrder)
    }
  
    const changeAmount = (index: number, value: string) => {
      const newOrder = order;
      newOrder[index].amount = parseInt(value);
      localStorage.setItem('order', JSON.stringify(newOrder))
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