import { useRouter } from 'next/router';
import { Product } from 'components/Product/Product';
import { Spinner } from 'components/Spinner/Spinner';
import { GetProductBySlugDocument, GetProductBySlugQuery, GetProductBySlugQueryVariables, useGetProductBySlugQuery } from 'generated/graphql';
import {client} from 'apollo/apollo-client'

import { dataTransformation } from 'utils/dataTransformation';
import { GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import { SchemaProduct } from 'types/types';
export const getServerSideProps: GetServerSideProps<GetProductBySlugQuery> = async (context) => {
    const { slug } = context.query;
    if(typeof slug !== "string") return {props: {}, notFound: true }
    const {data} = await client.query<GetProductBySlugQuery, GetProductBySlugQueryVariables>({query: GetProductBySlugDocument, variables: {
        slug
    }})
    return {
        props: {
            product: data.product
        }
    }
}
    export default function PageProduct(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
        if(!props.product) return <></>
        const {name, id, description, categories, price, images, slug} = props.product
        const product: SchemaProduct = {
            name,
            id,
            description,
            image: images[0].url,
            categories: categories[0].name,
            price,
            slug,
        }

        return <Product product={product} />;
    }