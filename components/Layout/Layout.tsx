import React, { useContext } from "react";
import { MyContext } from "../../lib/createContext";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  const context = useContext(MyContext)
  return (
    <div className="my-5">
      <div className="max-w-screen-xl mx-auto w-4/5">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}