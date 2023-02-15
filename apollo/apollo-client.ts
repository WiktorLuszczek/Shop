import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle5fdww31dsy01urgmig8bcm/master',
    cache: new InMemoryCache(),
});
export const authorizedClient = new ApolloClient({
    uri: process.env.apolloURL,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
    }
})
export default client;
