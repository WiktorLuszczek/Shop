export type SchemaProduct =
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