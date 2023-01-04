import { useContext } from "react"
import { MyContext } from "../../context/createContext"

export const SummaryOrder = () => {
    const order = useContext(MyContext)?.order
    console.log(order)
    if(order === null || order === undefined) return null && alert("error context")
    const subtotal = () => {
        let price: number = 0;
        order.map(product => {
            price = product.amount * product.price + price
        })
        return price
    }
    return(
        <div className="w-5/12 m-2">
            <h1 className="text-3xl font-bold mb-10">Shopping summary</h1>
            <div className="grid grid-cols-3 gap-5">
                <span className="col-span-2">Subtotal</span>
                <span className="text-right">{subtotal()}.00 $</span>
                <span className="col-span-2">Estimated Shipping & Handling</span>
                <span className="text-right">{order.length === 0 ? '0.00 $' : '100.00 $'}</span>
                <span className="col-span-2 text-xl font-bold">Total</span>
                <span className="text-right text-xl font-bold">{subtotal() + 100}.00 $</span>
            </div>
        </div>
    )
}