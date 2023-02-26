import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { type: "text" },
            password: { type: "password" }
          },
          async authorize(credentials, req) {
            console.log(credentials, req)
            const user = {
                id:'1',
                name: 'J Smith',
                email: 'jsmith@example.com'
            }
    
            if (user) {
              return user
            }
            return null
          }
        })
      ]
}

export default NextAuth(authOptions)