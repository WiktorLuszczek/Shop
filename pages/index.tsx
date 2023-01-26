import { useQuery } from "@apollo/client";
import type { SchemaProductFromGraphQL } from '../schema/schema';
import { GET_PRODUCTS } from '../apollo/apollo-client';
import { Card } from '../components/Card/Card';
import { Spinner } from '../components/Spinner/Spinner';

export default function Home() {
  const {data, loading, error} = useQuery(GET_PRODUCTS)
  if(error) return <h1>Error while downloading data</h1>
  if(loading) return <Spinner />
  const {products} = data;
  return (
    <div>
            <h1 className='font-bold text-3xl my-10'>Products</h1>
            <div className='grid grid-cols-3 gap-10 mx-auto'>
              {products.map((product: SchemaProductFromGraphQL, i: number) => <Card key={i} data={product}/>)}
            </div>
    </div>
  )
}

