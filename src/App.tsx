//Library imports.
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Local File imports.
import './App.css';
import Header from './components/Header'
import Sneakers from './components/Sneakers'
import About from './components/About'
import Checkout from './components/Checkout'
import ThankYou from './components/ThankYou'
import { ShopContextProvider } from './context/ShopContext'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={
              <>
                <Header />
                <Sneakers />
                <Link to='About'>
                  <h6 className="about-link">About</h6>
                </Link>
              </>
            } />
            <Route path='/about' element={
              <About />
            } />

            <Route path='/checkout' element={
              <Checkout />
            } />

            <Route path='/thankyou' element={
              <ThankYou />
            } />

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
