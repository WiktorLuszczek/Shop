import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { GET_PRODUCTS } from "../../lib/apollo-client";
import type { SchemaProduct } from "../../schema/schema";
import { Product } from "../../components/Product/Product";

export default function PageProduct () {
    const query = useQuery(GET_PRODUCTS)
    const router = useRouter()
    if(query.data === undefined) return <h1>Weit a moment</h1>
    const {slug} = router.query
    const {products} = query.data;
    const product = products.find((product: SchemaProduct) => product.slug === slug[0])
    if(product === undefined) return <h1>Weit a moment</h1>
    return(
        <Product product={product} />
    )
}