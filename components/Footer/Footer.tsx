import Link from "next/link";

export function Footer () {
    return (
        <footer className="grid grid-cols-3 bg-black py-10 px-20 text-white">
            <div className="">
                <i className= "mx-1 text-4xl fa-brands fa-facebook-f"></i>
                <i className="mx-1 text-4xl fa-brands fa-instagram"></i>
                <i className="mx-1 text-4xl fa-brands fa-twitter"></i>
                <i className="mx-1 text-4xl fa-brands fa-youtube"></i>
            </div>
            <div className="text-center">
                <Link href="/">
                    <h1 className="font-mono text-4xl ml-2">TIENDA|DE|ROPA</h1>
                </Link>
            </div>
            <div className="text-right">
                <span className="text-sm leading-9">© 2022 Tienda de ropa, All rights reserved</span>
            </div>
        </footer>
    )
}