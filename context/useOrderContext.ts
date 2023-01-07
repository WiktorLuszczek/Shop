import { useContext } from "react";
import { MyContext } from "./createContext";

export const useOrderContext = () => {
    const orderContext = useContext(MyContext);
    if (!orderContext) {
      throw new Error("Wrap components using CartContextProvider");
    }
    return orderContext;
  };

