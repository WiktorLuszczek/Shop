import Image from "next/image";
import Link from "next/link";
import { SchemaProductFromGraphQL } from "../../schema/schema";

export function Card (props: {data: SchemaProductFromGraphQL}) {
    const {name, price, categories, images, slug} = props.data
    const {url} = images[0]
    return(
        <Link href={`product/${slug}`}>
            <section className=" hover:bg-gray-100 p-5 rounded-xl">
                <Image src={url} alt={`Product ${name}`} width={400} height={400}></Image>
                <div className="grid grid-cols-3 font-medium">
                    <p className="col-span-2">{name}</p>
                    <p className="text-right">{price}$</p>
                    <p className="font-light text-gray-500">{categories[0].name}</p>
                </div>
            </section>
        </Link>
    )
}