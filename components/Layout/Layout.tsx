import React from "react";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto my-0">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}