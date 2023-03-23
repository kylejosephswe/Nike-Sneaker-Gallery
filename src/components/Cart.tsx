import { useContext } from "react";
import { ShopContext } from ".././context/ShopContext";
import { SNEAKERS } from "./SneakerCollection";
import { CartItem } from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext)!;
  const totalAmount = getTotalCartAmount();
  console.log("Total Amount: ", totalAmount)

  return (
    <div>
      <div className="sneaker-grid2">
        {SNEAKERS.map((sneaker) => {
          if (cartItems[sneaker.id] !== 0) {
            return <CartItem data={sneaker} />;
          }
        return null})}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal-price"> Subtotal: ${totalAmount} </p>
        </div>
      ) : (
        <h1 style={{ textAlign: 'center', marginBottom: '1%', display: 'none' }}> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart