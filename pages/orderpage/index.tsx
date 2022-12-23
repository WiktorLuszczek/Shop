import Image from "next/image"
import Link from "next/link"
import { ButtonHTMLAttributes, useContext } from "react"
import { MyContext } from "../../lib/createContext"
import { SchemaProduct } from "../../schema/schema"

export default function OrderPage() {
    const contextValue = useContext(MyContext)?.contextValue
    const setContextValue = useContext(MyContext)?.setContextValue
    if(contextValue === undefined || contextValue === null || contextValue.length === 0 || setContextValue === undefined) return(
        <>
            <h1 className="text-3xl font-bold">Bag</h1>
            <p>You have no products in your shopping cart</p>
        </>
    )
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault()
        if(index !== -1){
            const newContextValue = contextValue;
            newContextValue.splice(index, 1)
            setContextValue(newContextValue)
        }
    }
    return (
        <div className="w-11/12 mx-auto flex">
            <div className="m-2 w-4/6">
                <h1 className="text-3xl font-bold">Bag</h1>
                <ul>
                    {contextValue.map((product: SchemaProduct, i: number) =>
                    <li key={i} className="flex border-b-2 border-gray-200 pb-4 my-5">
                        <Link href={`/product/${product.slug}`}><Image className="inline-block bg-gray-100 mr-3" src={product.image} alt="product photo"  width={150} height={150}></Image></Link>
                        <div className="ml-3">
                            <Link href={`/product/${product.slug}`}><span className="block my-2">{product.name}</span></Link>
                            <span className="my-2 text-sm text-gray-500 block">{product.description}</span>
                            <span className="my-2 text-sm block">Amount: <input defaultValue={product.amount} className="border-2 rounded-md w-12 border-black" type={"number"} min={0}></input></span>
                            <span className="my-2 text-sm block"><button onClick={e => handleDelete(e, i)}>Delete</button></span>
                        </div>
                    </li>)}
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