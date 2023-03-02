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
    products: SchemaProductFromGraphQL[];
};
export type SchemaProduct = {
    name: string;
    image: string;
    description: string;
    id: string;
    slug: string;
    categories: string;
    price: number;
};
export type SchemaProductInOrder = {
    name: string;
    image: string;
    description: string;
    id: string;
    slug: string;
    categories: string;
    price: number;
    amount: number;
};
export type SchemaProductContext = null | {
    order: Array<SchemaProductInOrder> | null;
    addProduct: (product: SchemaProductInOrder) => void;
    deleteProduct: (index: number) => void;
    changeAmount: (index: number, value: string) => void;
};

export const newsletterSchema = yup.object().shape({
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
export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter the appropriate email address')
        .required(),
    password: yup
        .string()
        .min(4, 'The password must contain at least 4 characters')
        .max(64, 'The password can contain up to 64 characters')
        .required(''),
});

export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter the appropriate email address')
        .required(),
    password: yup
        .string()
        .min(4, 'The password must contain at least 4 characters')
        .max(64, 'The password can contain up to 64 characters')
        .required(''),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'The passwords are not the same '),
});
