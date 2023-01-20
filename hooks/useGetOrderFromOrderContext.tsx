import { useOrderContext } from "../context/OrderContextProvider"

export const useGetOrderFromOrderContext = () => {
    const { order } = useOrderContext()
    if(order === null || order === undefined){
        throw new Error("Don't find order on context");
    }
    return order
}