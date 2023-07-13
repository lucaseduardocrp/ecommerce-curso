import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import Header from '@/components/Header'
import CartProvider from '@/context/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Toaster
        position='top-center'
        reverseOrder={false}
      />
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  )
}
