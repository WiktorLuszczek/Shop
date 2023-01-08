import { useContext } from "react";
import { OrderContext } from "./createContext";

export const useOrderContext = () => {
    const orderContext = useContext(OrderContext);
    if (!orderContext) {
      throw new Error("Wrap components using CartContextProvider");
    }
    return orderContext;
  };

