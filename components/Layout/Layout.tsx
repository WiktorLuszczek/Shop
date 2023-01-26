export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="my-12 min-w-minWidth max-w-maxWidth mx-auto px-16">
        {children}
    </div>
  );
}