import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo-client'
import { Layout } from '../components/Layout/Layout'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { useState } from 'react'
import { MyContext } from '../lib/createContext'

export default function App({ Component, pageProps }: AppProps) {
  const [contextValue, setContextValue] = useState(null)
  return ( 
    <ApolloProvider client={client} >
      <MyContext.Provider value={{contextValue, setContextValue}}>
        <Header />
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </MyContext.Provider>
      <Footer />
    </ApolloProvider>
  )
}
