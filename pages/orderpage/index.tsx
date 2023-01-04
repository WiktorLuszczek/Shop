import { useContext } from "react"
import { ProductInOrder } from "../../components/ProductInOrder/ProductInOrder"
import { MyContext } from "../../context/createContext"
import { SchemaProduct } from "../../schema/schema"

export default function OrderPage() {
    const order = useContext(MyContext)?.order
    
    if(order === undefined) return alert('error in context')
    if(order === null || order.length === 0) return(
        <>
            <h1 className="text-3xl font-bold">Bag</h1>
            <p>You have no products in your shopping cart</p>
        </>
    )
    
    return (
        <div className="w-11/12 mx-auto flex">
            <div className="m-2 w-4/6">
                <h1 className="text-3xl font-bold">Bag</h1>
                <ul>
                    {order.map((product: SchemaProduct, i: number) =>
                    <ProductInOrder product={product} i={i} />)}
                </ul>
            </div>
            <div className="w-2/6 m-2">
                <h1 className="text-3xl font-bold mb-10">Shopping summary</h1>
                <div className="grid grid-cols-3 gap-5">
                <span className="col-span-2">Subtotal</span>
                <span className="text-right">2000.00 $</span>
                <span className="col-span-2">Estimated Shipping & Handling</span>
                <span className="text-right">100.00 $</span>
                <span className="col-span-2 text-xl font-bold">Total</span>
                <span className="text-right text-xl font-bold">2100.00 $</span>
                </div>
            </div>
        </div>
    )
  }