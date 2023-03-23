import { createContext, useState } from 'react';
import { SNEAKERS } from '.././components/SneakerCollection';

type CartItems = Record<number, number>;

interface ShopContextProps {
  cartItems: CartItems;
  addToCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
}

interface Props {
  children: React.ReactNode
}

export const ShopContext = createContext<ShopContextProps | null>(null);

const getDefaultCart = (): CartItems => {
  let cart: CartItems = {};
  for (let i = 1; i < SNEAKERS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider: React.FC<Props> = (props) => {
  const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart());

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = SNEAKERS.find((sneaker) => sneaker.id === Number(item));
        if (itemInfo) {
        totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = (): void => {
    setCartItems(getDefaultCart());
  };

  const contextValue: ShopContextProps = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};