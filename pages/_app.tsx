import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo/apollo-client'
import { Layout } from '../components/Layout/Layout'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import OrderContextProvider from "../context/OrderContextProvider"

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <ApolloProvider client={client} >
        <OrderContextProvider>
          <Header />
          <Layout >
            <Component {...pageProps} />
          </Layout>
        </OrderContextProvider>
      <Footer />
    </ApolloProvider>
  )
}
