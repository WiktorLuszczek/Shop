import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { GET_PRODUCTS } from "../../lib/apollo-client";
import type { SchemaProduct } from "../../schema/schema";
import { Product } from "../../components/Product/Product";
import { Spinner } from "../../components/Spinner/Spinner";

export default function PageProduct () {
    const {data, loading, error} = useQuery(GET_PRODUCTS)
    const router = useRouter()
    if(error) return <h1>Error while downloading data</h1>
    if(loading) return <Spinner />
    const {slug} = router.query
    const {products} = data;
    const product = products.find((product: SchemaProduct) => product.slug === slug[0])
    if(product === undefined) return <Spinner />
    return(
        <Product product={product} />
    )
}