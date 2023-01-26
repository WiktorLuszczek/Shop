export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="my-5">
      <div className="w-4/5 min-w-minWidth max-w-maxWidth my-12 mx-auto px-10">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}