import { ApolloClient, InMemoryCache } from '@apollo/client';
import { CreateAccountDocument } from '../generated/graphql';

export const client = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle5fdww31dsy01urgmig8bcm/master',
    cache: new InMemoryCache(),
});
export const authorizedClient = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle5fdww31dsy01urgmig8bcm/master',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`
    }
})