import { useRouter } from 'next/router';
import { Product } from '../../components/Product/Product';
import { Spinner } from '../../components/Spinner/Spinner';
import { useAssetsQuery } from '../../generated/graphql';
import { dataTransformation } from '../../utils/dataTransformation';

export default function PageProduct() {
    const { data, loading, error } = useAssetsQuery();
    const router = useRouter();
    if (error) return <h1>Error while downloading data</h1>;
    if (loading) return <Spinner />;
    const { slug } = router.query;
    if (data === undefined) return <Spinner />;
    const product = dataTransformation(data)?.find((product) => product.slug === slug);
    if (product === undefined) return <Spinner />;

    return <Product product={product} />;
}
