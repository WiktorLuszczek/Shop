import Link from 'next/link';
import { Newsletter } from '../Newsletter/Newsletter';

export function Footer() {
    return (
        <footer className="grid grid-cols-3 bg-black py-10 px-20 text-white min-w-minWidth max-w-maxWidth mx-auto">
            <ul className="mt-3 pt-4">
                <li className="inline">
                    <a href="http://www.facebook.com" target="_blank">
                        <span className="mx-1 text-4xl fa-brands fa-facebook-f" />
                    </a>
                </li>
                <li className="inline">
                    <a href="http://www.instagram.com" target="_blank">
                        <span className="mx-1 text-4xl fa-brands fa-instagram" />
                    </a>
                </li>
                <li className="inline">
                    <a href="http://www.twitter.com" target="_blank">
                        <span className="mx-1 text-4xl fa-brands fa-twitter" />
                    </a>
                </li>
                <li className="inline">
                    <a href="http://www.youtube.com" target="_blank">
                        <span className="mx-1 text-4xl fa-brands fa-youtube" />
                    </a>
                </li>
            </ul>
            <div className="text-center">
                <Link href="/">
                    <h1 className="font-mono text-4xl ml-2 pt-4">
                        TIENDA|DE|ROPA
                    </h1>
                </Link>
                <span className="text-sm">
                    © 2022 Tienda de ropa, All rights reserved
                </span>
            </div>
            <div className="text-right">
                <Newsletter />
            </div>
        </footer>
    );
}
