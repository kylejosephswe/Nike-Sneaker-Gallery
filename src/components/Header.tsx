//Library Imports.
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header-flex">
      <div className="nike-icon">
        <Link to='/' >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.756 192.756">
          <g fill-rule="evenodd" clip-rule="evenodd">
            <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z" />
            <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" />
          </g>
        </svg>
        </Link>
      </div>
      <Link to='/'>
      <div className="header-title">Sneaker Gallery</div>
      </Link>
      <div className="cart-icon">
        <Link to='/checkout'>
        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
        </Link>
      </div>
    </div>
  )
}

export default Header