import Image from "next/image";
import { SchemaProduct } from "../../schema/schema";

export const Product = ({product} : {product: SchemaProduct}) => {
    const addProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("add to card")
    }
    return (
        <div className="grid grid-cols-3 gap-5">
                    <Image className="bg-gray-100 px-5 py-10 col-span-2 rounded-lg m-auto" src={product.images[0].url} alt="product photo"  width={600} height={600}></Image>
                    <div className="py-7">
                        <p className="text-5xl font-medium tracking-wide my-3">{product.name}</p>
                        <p className="text-xl my-3">{product.categories[0].name}</p>
                        <p className="text-xl my-3">{product.price} $</p>
                        <form onSubmit={(e) => addProduct(e)}>
                            <input className="w-full bg-black text-white py-4 rounded-3xl text-xl font-medium my-5 hover:cursor-pointer" type="submit" id="submit" value={"Add to cart"} />
                        </form>
                    </div>
                </div>
    )
}