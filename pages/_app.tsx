import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo-client'
import { Layout } from '../components/Layout/Layout'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { useState } from 'react'
import { MyContext } from '../context/createContext'
import { ContextProvider } from '../context/ContextProvider'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <ApolloProvider client={client} >
        <ContextProvider>
          <Header />
          <Layout >
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      <Footer />
    </ApolloProvider>
  )
}
