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
  removeItemCart: (product: CartPropTypes) => void
  total: string
} 

export const CartContext = createContext({} as CartContextData)

export default function CartProvider(props: {children: ReactNode}) {
  const [cart, setCart] = useState<CartPropTypes[]>([]);
  const [total, setTotal] = useState('');

  const addItemCart = (newItem: ProductTypes) => {
    const indexItem = cart.findIndex(item => item.id === newItem.id)
    
    if(indexItem !== -1){
      let cartList = cart;
      
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
    
      setCart(cartList)
      totalResultCart(cartList)
      return;
    }

    let data = {
      ...newItem, 
      amount: 1, 
      total: newItem.price
    }

    setCart(products => [...products, data])
    totalResultCart([...cart, data]);
    return;
  }

  const removeItemCart = (product: CartPropTypes) => {
    const indexItem = cart.findIndex(index => index.id === product.id)

    if(cart[indexItem]?.amount > 1){
      let productCount = cart;
      productCount[indexItem].amount = productCount[indexItem].amount - 1;
      productCount[indexItem].total = productCount[indexItem].total - productCount[indexItem].price 

      setCart(productCount);
      totalResultCart(productCount);
      return;
    }

    const removeItem = cart.filter(index => index.id !== product.id);
    setCart(removeItem)
    totalResultCart(removeItem)
  }

  function totalResultCart(item: CartPropTypes[]) {
    let myCart = item;
    let result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0)
    const resultFormated = result.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    setTotal(resultFormated)
  }

  return(
    <CartContext.Provider value={{
      cart, 
      cartAmount: cart.length, 
      addItemCart,
      removeItemCart,
      total 
    }}>
      {props.children}
    </CartContext.Provider>
  )
}