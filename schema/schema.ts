import { type } from 'os';
import * as yup from 'yup';

export type SchemaProductFromGraphQL = {
    __typename?: string | undefined;
    name: string;
    price: number;
    slug: string;
    id: string;
    description: string;
    categories: {
        __typename?: string | undefined;
        name: string;
    }[];
    images: { __typename?: string | undefined; url: string }[];
};
export type SchemaDataFromGraphQL = {
    products: SchemaProductFromGraphQL[]
}
export type SchemaProduct = {
    name: string;
    image: string;
    description: string;
    amount: number;
    id: string;
    slug: string;
    categories: string;
    price: number;
};
export type SchemaProductContext = null | {
    order: Array<SchemaProduct> | null;
    addProduct: (product: SchemaProduct) => void;
    deleteProduct: (index: number) => void;
    changeAmount: (index: number, value: string) => void;
};

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'Name must have minimum 3 chars')
        .max(64, 'Name must have maximum 64 chars')
        .required(),
    email: yup
        .string()
        .email('Please enter the appropriate email address')
        .required(),
});

export const schemaLocalStorage = yup.array(
    yup.object().shape({
        name: yup.string().required(),
        description: yup.string().required(),
        id: yup.string().required(),
        slug: yup.string().required(),
        image: yup.string().required(),
        categories: yup.string().required(),
        amount: yup.number().required(),
        price: yup.number().required(),
    }),
);
