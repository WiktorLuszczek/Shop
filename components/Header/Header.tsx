import Link from "next/link";
import Script from "next/script";
import { SearchInput } from "../SearchInput/SearchInput";

export function Header () {
    return (
        <>
            <Script src="https://kit.fontawesome.com/0912d2c3f4.js" crossOrigin="anonymous"></Script>
            <header className="flex flex-row m-10">
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
            </header>
        </>
    )
}