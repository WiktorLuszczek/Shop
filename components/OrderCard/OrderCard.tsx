import { empty } from "@apollo/client"
import Image from "next/image"
import { useContext } from "react"
import { MyContext } from "../../lib/createContext"
import { SchemaProduct, SchemaProductContext } from "../../schema/schema"

export const OrderCard = () => {
    const context = useContext(MyContext)
    const contextValue = context?.contextValue
    if(contextValue === null || contextValue === undefined || contextValue.length === 0) return (
        <>
            <h1 className="text-center m-4 text-3xl font-bold">Products in the basket</h1>
            <p>You have no products in your shopping cart</p>
        </>
    )
    return (
        <>
            <h1 className="text-center m-4 text-3xl font-bold">Products in the basket</h1>
            <ul className="text-center">
            {contextValue.map((product: SchemaProduct, i: number) =>
                <div key={i}>
                    <li className="m-5 text-lg border-b-2 p-3 flex justify-between w-72 mx-auto">
                        <Image className="inline-block" src={product.image} alt="product photo"  width={40} height={40}></Image>
                        <span className="leading-10">{product.name}</span>
                    </li>
                </div>
            )}
            </ul>
        </>
    )
}