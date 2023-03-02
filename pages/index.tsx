import type { SchemaProductFromGraphQL } from '../types/types';
import { Card } from '../components/Card/Card';
import { Spinner } from '../components/Spinner/Spinner';
import { useGetProductsQuery } from '../generated/graphql';
import { signIn } from 'next-auth/react';


export default function Home() {
    const { data, loading, error } = useGetProductsQuery();
    if (error) return <h1>Error while downloading data</h1>;
    if (loading || !data) return <Spinner />;
    const products = data.products
    if (products === undefined) return;
    return (
        <div>
            <button onClick={() => signIn()}>Sign In</button>
            <h1 className="font-bold text-3xl my-10">Products</h1>
            <div className="grid grid-cols-3 gap-10 mx-auto">
                {products.map((product: SchemaProductFromGraphQL, i: number) => (
                    <Card key={i} data={product} />
                ))}
            </div>
        </div>
    );
}
