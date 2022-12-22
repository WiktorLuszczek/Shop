import { createContext, SetStateAction } from "react";
import { SchemaProductContext } from "../schema/schema";

export const MyContext = createContext<SchemaProductContext>(null)