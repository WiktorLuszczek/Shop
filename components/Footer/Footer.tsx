import Link from "next/link";
import { Newsletter } from "../Newsletter/Newsletter";

export function Footer () {
    return (
        <footer className="grid grid-cols-3 bg-black py-10 px-20 text-white">
            <ul className="mt-3">
                <span className= "mx-1 text-4xl fa-brands fa-facebook-f" />
                <span className="mx-1 text-4xl fa-brands fa-instagram" />
                <span className="mx-1 text-4xl fa-brands fa-twitter" />
                <span className="mx-1 text-4xl fa-brands fa-youtube" />
            </ul>
            <div className="text-center">
                <Link href="/">
                    <h1 className="font-mono text-4xl ml-2">TIENDA|DE|ROPA</h1>
                </Link>
                <span className="text-sm">© 2022 Tienda de ropa, All rights reserved</span>
            </div>
            <div className="text-right">
                <Newsletter />
            </div>
        </footer>
    )
}