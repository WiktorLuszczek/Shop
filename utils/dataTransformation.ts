import { SchemaDataFromGraphQL, SchemaProductFromGraphQL } from "../schema/schema";

export const dataTransformation = (data: SchemaDataFromGraphQL | undefined) => {
    if(data === undefined) return alert('dane są undefinde')
    const {products} = data
    const newProducts = products.map((product: SchemaProductFromGraphQL) => {
        return {
            name: product.name,
            description: product.description,
            id: product.id,
            slug: product.slug,
            image: product.images[0].url,
            categories: product.categories[0].name,
            amount: 1,
            price: product.price,
        }
    })
    return newProducts
}