export function Layout({ children }: { readonly children: React.ReactNode }) {
    return (
        <main className="my-12 min-w-minWidth max-w-maxWidth mx-auto px-16">
            {children}
        </main>
    );
}
