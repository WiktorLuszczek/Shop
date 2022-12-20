import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { OrderCard } from "../OrderCard/OrderCard";
import { SearchInput } from "../SearchInput/SearchInput";

export function Header () {
    const [hidden, setHidden] = useState('hidden')
    const toggleOrderBox = () => {
        setHidden(hidden === 'hidden' ? '' : 'hidden')
    }
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
                    <Link href={"/orderpage"} onMouseOver={toggleOrderBox} onMouseOut={toggleOrderBox}>
                        <i id="toggle-button-baskets" className="text-5xl fa-regular fa-basket-shopping hover:text-gray-500"></i>
                    </Link>
                </div>
                <div className={`${hidden} absolute w-96 h-3/4 bg-white top-24 right-2 border-2 border-gray-400 rounded-lg text-center`}>
                    <OrderCard />
                </div>
            </header>
        </>
    )
}