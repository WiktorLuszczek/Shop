import Image from "next/image"

export default function OrderPage() {
    const data = [
        {
            name: "Snapback",
            image: "https://media.graphassets.com/WkzdWzzoQSKTfCbHuYiW",
            description: "Get noticed with this casual snapback repping your favorite Headless CMS.",
            href: "snapback",
            amount: 1
        },
        {
            name: "Unisex Long Sleeve Tee",
            image: "https://media.graphassets.com/6yRWKTngTCivgVzkmOMG",
            description: "Awesome GraphCMS Tshirt, available in a variety of colours, and super comfortable. Rep your favorite Headless CMS in style.",
            href: "unisex-long-sleeve-tee",
            amount: 2
        }
    ]
    return (
        <div className="w-11/12 mx-auto flex">
            <div className="m-2 w-4/6">
                <h1 className="text-3xl font-bold">Bag</h1>
                <ul>
                    {data.map((product, i) => 
                    <li key={i} className="flex border-b-2 border-gray-200 pb-4 my-5">
                        <Image className="inline-block bg-gray-100 mr-3" src={product.image} alt="product photo"  width={150} height={150}></Image>
                        <div className="ml-3">
                            <span className="block my-2">{product.name}</span>
                            <span className="my-2 text-sm text-gray-500 block">{product.description}</span>
                            <span className="my-2 text-sm block">Amount: <input defaultValue={product.amount} className="border-2 rounded-md w-12 border-black" type={"number"}></input></span>
                            <span className="my-2 text-sm block"><button>Delete</button></span>
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