import { ProductTypes } from '@/types/products-types';
import { ReactNode, createContext, useState } from 'react';

interface CartPropTypes extends ProductTypes{
  amount: number,
  total: number,
}

interface CartContextData {
  cart: CartPropTypes[],
  cartAmount: number,
  addItemCart: (newItem: ProductTypes) => void;
} 

export const CartContext = createContext({} as CartContextData)

export default function CartProvider(props: {children: ReactNode}) {
  const [cart, setCart] = useState<CartPropTypes[]>([])

  const addItemCart = (newItem: ProductTypes) => {
    const indexItem = cart.findIndex(item => item.id === newItem.id)
    
    if(indexItem !== -1){
      let cartList = cart;
      
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
    
      setCart(cartList)
      return;
    }

    let data = {
      ...newItem, 
      amount: 1, 
      total: newItem.price
    }

    setCart(products => [...products, data])
  }

  return(
    <CartContext.Provider value={{
      cart, 
      cartAmount: cart.length, 
      addItemCart 
    }}>
      {props.children}
    </CartContext.Provider>
  )
}