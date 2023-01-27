import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.apolloURL,
    cache: new InMemoryCache(),
});

export default client;

export const GET_PRODUCTS = gql`
    query Assets {
        products {
            name
            price
            slug
            id
            description
            categories {
                name
            }
            images {
                url
            }
        }
    }
`;
