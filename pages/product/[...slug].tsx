import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { GET_PRODUCTS } from "../../lib/apollo-client";
import type { SchemaProduct } from "../../schema/schema";

export default function Product () {
    const query = useQuery(GET_PRODUCTS)
    const router = useRouter()
    if(query.data === undefined) return <h1>Weit a moment</h1>
    else{
        const slug = router.query.slug[0]
        const {products} = query.data;
        const product = products.filter((product: SchemaProduct) => product.slug === slug)
        return(
            <>
                <h1>Name: {product[0].name}</h1>
                <p>Price: {product[0].price}</p>
            </>
        )
    }
}