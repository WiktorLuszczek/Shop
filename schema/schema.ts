export type SchemaProduct = {
    name: string,
    price: number,
    slug: string,
    id: string,
    images: {
      url: string
    }
    categories: {
      name: string
    }
  }