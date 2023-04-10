import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Seafood from './components/Seafood/Seafood';
import Blog from './components/Blog/Blog';
// import Logo from "./Image/biryani logo.png";
import Logo from './components/Image/biryani logo.png'
import './App.css';
// import Pot from './components/Image/Pot.webp'

export default function App() {
  return (

  <div className='navbarmenu'>
    <div>
<div className='displayflex'data-aos="fade-up-right" data-aos-duration="1000">
  <div class="container-fluid">
<img src={Logo} className='logo'/>
  </div>

  {/* <div class="container-fluid" data-aos="fade-up-right" data-aos-duration="1000">
<img src={Pot} className='pot'/>
  </div> */}


<div className='navbar'data-aos="fade-up-right" data-aos-duration="1000">

  <nav>
<ul>
  <li>
  <Link to='/' className='link'>Home</Link>
  </li>
  <li>
  <Link to='/menu' className='link'>Starter</Link>
  </li>
  <li>
  <Link to='/seafood' className='link'>Menu</Link>
  </li>
  <li>
  <Link to='/blog' className='link'>Blog </Link>
  </li>
  {/* <li>
  <Link to='/' className='link'>Home</Link>
  </li> */}
</ul>

  </nav>
</div>
</div>
</div>




      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/menu' Component={Menu} />
        <Route path='/seafood' Component={Seafood} />
        <Route path='/blog' Component={Blog} />
      </Routes>

    </div>
  )
}
