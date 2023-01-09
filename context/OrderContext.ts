import { useContext } from "react";
import { createContext } from "react";
import { SchemaProductContext } from "../schema/schema";

export const OrderContext = createContext<SchemaProductContext>(null)

export const useOrderContext = () => {
  const orderContext = useContext(OrderContext);
  if (!orderContext) {
    throw new Error("Wrap components using CartContextProvider");
  }
  return orderContext;
};