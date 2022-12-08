import Head from 'next/head';
import { useQuery } from "@apollo/client";
import Link from 'next/link';
import type { SchemaProduct } from '../schema/schema';
import { GET_PRODUCTS } from '../lib/apollo-client';


export default function Home() {
  const query = useQuery(GET_PRODUCTS)
  
if(query.data === undefined) return <h1>Weit a moment</h1>
else{
  const {products} = query.data;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-screen">
        <ul>
          {products.map((product: SchemaProduct, i: number) => <Link key={i} href={`product/${product.slug}`}><li>{product.name} | Price: {product.price}</li></Link>)}
        </ul>
      </section>
    </div>
  )
}
}
