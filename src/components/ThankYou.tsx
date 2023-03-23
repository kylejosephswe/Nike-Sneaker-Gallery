import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
function ThankYou() {
    return (
        <div>
            <Header />
            <div className="about-page-text thankyou-div">
                <p>Thank you for using my mock sneaker website! </p>
                <p>Check the about section for more information.</p>
            </div>
            <Link to='/about'>
                <h6 className="about-link">About</h6>
            </Link>
        </div>
    )
}

export default ThankYou