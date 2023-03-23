//Library imports.
import { Link } from 'react-router-dom'
import { useContext } from 'react'
//Local files.
import Header from "./Header"
import Cart from "./Cart"
import { ShopContext } from ".././context/ShopContext";

function Checkout() {
  const { getTotalCartAmount } = useContext(ShopContext)!;
  const totalAmount = getTotalCartAmount();
  return (
    <div>
      <Header />
      <Cart />
      {totalAmount > 0 ?
        <div className="button-div">
          <Link to='/'>
            <button className="continue-shopping-button">Continue Shopping</button>
          </Link>
          <Link to='/thankyou'>
            <button className="continue-shopping-button">Checkout</button>
          </Link>
        </div>
        :
        <h2 style={{ display: 'none' }}>display nothing</h2>
      }

    </div>
  )
}

export default Checkout