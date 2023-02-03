import type { SchemaProduct } from '../schema/schema';
import { Card } from '../components/Card/Card';
import { Spinner } from '../components/Spinner/Spinner';
import { dataTransformation } from '../utils/dataTransformation';
import { useAssetsQuery } from '../generated/graphql';

export default function Home() {
    const { data, loading, error } = useAssetsQuery();
    if (error) return <h1>Error while downloading data</h1>;
    if (loading) return <Spinner />;
    const products = dataTransformation(data);
    if (products === undefined) return;
    return (
        <div>
            <h1 className="font-bold text-3xl my-10">Products</h1>
            <div className="grid grid-cols-3 gap-10 mx-auto">
                {products.map((product: SchemaProduct, i: number) => (
                    <Card key={i} data={product} />
                ))}
            </div>
        </div>
    );
}
