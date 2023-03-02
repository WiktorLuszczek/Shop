import Image from 'next/image';
import Link from 'next/link';
import { SchemaProductFromGraphQL } from '../../types/types';

export function Card(props: { data: SchemaProductFromGraphQL }) {
    const { name, price, slug } = props.data;
    const image = props.data.images[0].url;
    const categories = props.data.categories[0].name;
    return (
        <Link href={`product/${slug}`}>
            <section className=" hover:bg-gray-100 p-5 rounded-xl">
                <Image
                    src={image}
                    alt={`Product ${name}`}
                    width={400}
                    height={400}
                ></Image>
                <div className="grid grid-cols-3 font-medium">
                    <p className="col-span-2">{name}</p>
                    <p className="text-right">{price}$</p>
                    <p className="font-light text-gray-500">{categories}</p>
                </div>
            </section>
        </Link>
    );
}
