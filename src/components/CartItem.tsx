import React, { useContext } from "react";
import { ShopContext } from ".././context/ShopContext";

interface CartItemProps {
    data: {
      id: number;
      altImage: string;
      priceTag: string;
      productImage: string;
      extraInfo: string;
      description: string;
    };
  }

export const CartItem = (props: CartItemProps) => {
    const { id, altImage, priceTag, productImage, extraInfo, description } = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext)!;

    return (
        <div className="sneaker-card">
            <div className="outer-image">
                <img className="sneaker-img" src={productImage} alt={altImage} />
            </div>
            <div className="misc-text-flex">
                <p className="extra-info-text">{extraInfo}</p>
                <p className="price-tag-text">{priceTag}</p>
            </div>
            <h4 className="sneaker-text">{description}</h4>
            <div className="countHandler">
                <button className="checkout-operation-button" onClick={() => removeFromCart(id)}> - </button>
                <input
                    className="count-between-buttons"
                    value={cartItems[id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                />
                <button className="checkout-operation-button" onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    );
};