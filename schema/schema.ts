import { Dispatch, SetStateAction } from "react";

export type SchemaProductFromGraphQL =
  { __typename?: string | undefined,
    name: string,
    price: number, 
    slug: string, 
    id: string, 
    description: string,
    categories: { 
      __typename?: string | undefined,
       name: string; 
    }[],
    images: 
      { __typename?: string | undefined,
         url: string 
      }[] 
  }
export type SchemaProduct = {
  name: string,
  image: string,
  description: string,
  amount: number,
  id: string,
  slug: string,
  categories: string
}
export type SchemaProductContext = null | {
  contextValue: Array<SchemaProduct> | null
  setContextValue: Dispatch<SetStateAction<SchemaProduct[]>> | Dispatch<SetStateAction<null>>
}