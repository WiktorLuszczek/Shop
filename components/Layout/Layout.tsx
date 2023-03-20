import { useSession } from "next-auth/react";
import React from "react";

export function Layout({ children }: { readonly children: React.ReactNode }) {
    const s = useSession().status
    return (
        <main className="my-12 min-w-minWidth max-w-maxWidth mx-auto px-16 min-h-minHeight">
            {s}
            {children}
        </main>
    );
}
