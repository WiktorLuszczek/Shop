import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { GET_PRODUCTS } from "../../lib/apollo-client";
import type { SchemaProduct } from "../../schema/schema";
import { Product } from "../../components/Product/Product";
import { Spinner } from "../../components/Spinner/Spinner";
import { useAssetsQuery } from "../../generated/graphql";


export default function PageProduct () {
    const {data, loading, error} = useAssetsQuery()
    const router = useRouter()
    if(error) return <h1>Error while downloading data</h1>
    if(loading) return <Spinner />
    const {slug} = router.query
    if(data === undefined) return <Spinner />
    const product = data?.products.find((product) => product.slug === slug)
    if(product === undefined) return <Spinner />
    
    return(
        <Product product={product} />
    )
}

