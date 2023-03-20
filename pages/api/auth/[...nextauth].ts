import { authorizedClient } from "apollo/apollo-client";
import type { GetAccountByEmailQuery, GetAccountByEmailQueryVariables } from "generated/graphql";
import { GetAccountByEmailDocument } from "generated/graphql";
import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions:AuthOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { type: "text" },
            password: { type: "password" }
          },
          async authorize(credentials) {
            if(!credentials){
              return null;
            }
            const {data} = await authorizedClient.query<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>({
              query: GetAccountByEmailDocument,
              variables:{
                email:credentials.email
              }
            })
            if(data.account) return {id: data.account?.id, email: data.account.email}
            return null
        }})
    ]
}

export default NextAuth(authOptions)