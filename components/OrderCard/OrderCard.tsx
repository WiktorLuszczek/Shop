import Image from "next/image"
import Link from "next/link"

export const OrderCard = () => {
    const data = [
        {
            name: "Snapback",
            image: "https://media.graphassets.com/WkzdWzzoQSKTfCbHuYiW",
            href: "snapback"
        },
        {
            name: "Unisex Long Sleeve Tee",
            image: "https://media.graphassets.com/6yRWKTngTCivgVzkmOMG",
            href: "unisex-long-sleeve-tee"
        }
    ]
    return (
        <>
            <h1 className="text-center m-4 text-3xl font-bold">Products in the basket</h1>
            <ul className="text-center">
            {data.map((product, i) =>
                <Link key={i} href={product.href}>
                    <li className="m-5 text-lg border-b-2 p-3 flex justify-between w-72 mx-auto">
                        <Image className="inline-block" src={product.image} alt="product photo"  width={40} height={40}></Image>
                        <span className="leading-10">{product.name}</span>
                    </li>
                </Link>
            )}
            </ul>
        </>
    )
}