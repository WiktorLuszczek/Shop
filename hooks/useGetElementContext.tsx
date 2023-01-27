import { useOrderContext } from "../context/OrderContextProvider"

export const useGetOrderFromOrderContext = () => {
    const { order } = useOrderContext()
    if(order === null){
        throw new Error("Don't find order on context");
    }
    return order
}

export const useGetAddProductFromOrderContext = () => {
    const { addProduct } = useOrderContext()
    if(addProduct === null){
        throw new Error("Don't find order on context");
    }
    return addProduct
}

export const useGetDeleteProductFromOrderContext = () => {
    const { deleteProduct } = useOrderContext()
    if(deleteProduct === null){
        throw new Error("Don't find order on context");
    }
    return deleteProduct
}

export const useGetChangeAmountFromOrderContext = () => {
    const { changeAmount } = useOrderContext()
    if(changeAmount === null){
        throw new Error("Don't find order on context");
    }
    return changeAmount
}