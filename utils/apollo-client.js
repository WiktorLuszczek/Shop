import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbc0ix0305qj01ujdqth4ltp/master",
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