import { ProductTypes } from '@/types/products-types';
import { ReactNode, createContext, useState } from 'react';

interface CartPropTypes extends ProductTypes{}

interface CartContextData {
  cart: CartPropTypes[],
  cartAmount: number,
} 

export const CartContext = createContext({} as CartContextData)

export default function CartProvider(props: {children: ReactNode}) {
  const [cart, setcart] = useState<CartPropTypes[]>([])

  return(
    <CartContext.Provider value={{ cart, cartAmount: cart.length }}>
      {props.children}
    </CartContext.Provider>
  )
}