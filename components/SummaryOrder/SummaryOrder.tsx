import { useOrderContext } from "../../context/OrderContextProvider"

export const SummaryOrder = () => {
    const {order} = useOrderContext()
    if(order === null){ 
        return (
            <div className="w-5/12 m-2">
                <h2 className="text-3xl font-bold mb-10">Shopping summary</h2>
                <dl className="grid grid-cols-3 gap-5">
                    <dt className="col-span-2">Subtotal</dt>
                    <dd className="text-right">00.00 $</dd>
                    <dt className="col-span-2">Estimated Shipping & Handling</dt>
                    <dd className="text-right">0.00 $</dd>
                    <dt className="col-span-2 text-xl font-bold">Total</dt>
                    <dd className="text-right text-xl font-bold">00.00 $</dd>
                </dl>
            </div>
        )
    }
    const price = order.reduce((accumulator, data) => accumulator + (data.amount * data.price), 0)
    return(
        <div className="w-5/12 m-2">
            <h2 className="text-3xl font-bold mb-10">Shopping summary</h2>
            <div className="grid grid-cols-3 gap-5">
                <span className="col-span-2">Subtotal</span>
                <span className="text-right">{price}.00 $</span>
                <span className="col-span-2">Estimated Shipping & Handling</span>
                <span className="text-right">{order.length === 0 ? '0.00 $' : '100.00 $'}</span>
                <span className="col-span-2 text-xl font-bold">Total</span>
                <span className="text-right text-xl font-bold">{order.length === 0 ? '0.00 $' : `${price + 100}.00 $`}</span>
            </div>
        </div>
    )
}