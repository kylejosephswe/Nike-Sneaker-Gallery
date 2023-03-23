import {useContext} from 'react'
import { ShopContext } from '.././context/ShopContext'

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

function Sneaker(props: CartItemProps) {
  const { id, altImage, priceTag, productImage, extraInfo, description } = props.data
  const { addToCart, cartItems } = useContext(ShopContext)!
  const cartItemCount = cartItems[id]

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
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  )
}

export default Sneaker