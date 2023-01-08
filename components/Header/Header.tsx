import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { useOrderContext } from "../../context/useOrderContext";
import { OrderCard } from "../OrderCard/OrderCard";
import { SearchInput } from "../SearchInput/SearchInput";

export function Header () {
    const {order} = useOrderContext()
    const [hidden, setHidden] = useState('hidden')
    const toggleOrderBoxOn = () => {
        setHidden('')
    }
    const toggleOrderBoxOff = () => {
        setHidden('hidden')
    }
    if(order === null || order === undefined) return null && alert('error context')
    return (
        <>
            <Script src="https://kit.fontawesome.com/0912d2c3f4.js" crossOrigin="anonymous"></Script>
            <header className="flex flex-row p-10 bg-gray-100">
                <div className="basis-1/2">
                    <Link href="/">
                        <h1 className="font-mono text-5xl ml-2">TIENDA|DE|ROPA</h1>
                    </Link>
                </div>
                <div className="basis-1/4 text-right">
                    <SearchInput />
                </div>
                <div className="basis-1/4 text-right">
                    <i className="mx-1 text-5xl fa-brands fa-facebook-f"></i>
                    <i className="mx-1 text-5xl fa-brands fa-instagram"></i>
                    <i className="mx-1 text-5xl fa-brands fa-twitter"></i>
                    <i className="mx-1 text-5xl fa-brands fa-youtube"></i>
                </div>
                <div className="ml-20">
                    <Link href={"/orderpage"} className={'hover:text-gray-500'} onMouseOver={toggleOrderBoxOn} onMouseOut={toggleOrderBoxOff}>
                        <i id="toggle-button-baskets" className="text-5xl fa-regular fa-basket-shopping"></i>
                        {order.length === 0 ? null : <div className="absolute top-70px right-9 bg-white w-7 h-7 text-center rounded-full border-solid border-gray-500 border-2 hover:text-gray-500">{order.length}</div>}
                    </Link>
                </div>
                <div className={`${hidden} absolute w-96 h-3/4 bg-white top-24 right-2 border-2 border-gray-400 rounded-lg text-center`}>
                    <OrderCard />
                </div>
            </header>
        </>
    )
}