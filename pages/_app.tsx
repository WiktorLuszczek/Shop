import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo-client'
import { Layout } from '../components/Layout/Layout'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <ApolloProvider client={client} >
      <Header />
      <Layout >
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </ApolloProvider>
  )
}
