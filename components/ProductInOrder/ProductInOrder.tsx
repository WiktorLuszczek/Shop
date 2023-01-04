import Link from "next/link";
import { useContext, ChangeEvent } from "react";
import { MyContext } from "../../context/createContext";
import { SchemaProduct } from "../../schema/schema";
import Image from "next/image";

export const ProductInOrder = ({product, i} : {product: SchemaProduct, i:number}) => {
    const deleteProduct = useContext(MyContext)?.deleteProduct
    const changeAmount = useContext(MyContext)?.changeAmount
    if(deleteProduct === undefined || changeAmount === undefined) return null && alert('error context')
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault();
        deleteProduct(index)
    }
    const handleAmount = (e: ChangeEvent<HTMLInputElement>,index: number) => {
        e.preventDefault();
        const value = e.target.value;
        changeAmount(index, value);
    }
    return(
            <li key={i} className="flex border-b-2 border-gray-200 pb-4 my-5">
                <Link href={`/product/${product.slug}`}><Image className="inline-block bg-gray-100 mr-3  rounded-lg" src={product.image} alt="product photo"  width={150} height={150}></Image></Link>
                <div className="ml-3">
                    <Link href={`/product/${product.slug}`}><span className="block my-2">{product.name}</span></Link>
                    <span className="my-2 text-sm text-gray-500 block">{product.description}</span>
                    <span className="my-2 text-sm block">Amount: <input onChange={e => handleAmount(e, i)} defaultValue={product.amount} className="border-2 rounded-md w-12 border-black" type={"number"} min={0} max={99}></input></span>
                    <span className="my-2 text-sm block"><button onClick={e => handleDelete(e, i)}>Delete</button></span>
                </div>
            </li>)
}