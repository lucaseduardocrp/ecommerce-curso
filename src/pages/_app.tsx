import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '@/components/Header'
import CartProvider from '@/context/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  )
}
