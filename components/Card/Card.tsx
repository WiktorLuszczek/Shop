import Image from "next/image";
import Link from "next/link";
import { SchemaProduct } from "../../schema/schema";

export function Card (props: {data: SchemaProduct}) {
    const {url} = props.data.images[0]
    return(
        <Link href={`product/${props.data.slug}`}>
            <section className=" hover:bg-gray-100 p-5 rounded-xl">
                <Image src={url} alt={"product photo"} width={400} height={400}></Image>
                <div className="grid grid-cols-3 font-medium">
                    <p className="col-span-2">{props.data.name}</p>
                    <p className="text-right">{props.data.price}$</p>
                    <p className="font-light text-gray-500">{props.data.categories[0].name}</p>
                </div>
            </section>
        </Link>
    )
}