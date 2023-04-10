import React from 'react'
import './Menu.css'
import Veg1 from '../Image/veg1.jpg';
import Veg2 from '../Image/veg2.jpg';
import Veg3 from '../Image/veg3.jpg';
import Veg4 from '../Image/veg4.jpg'
import Veg5 from '../Image/veg5.jpg'
import Veg6 from '../Image/veg6.jpg'
import Footer from '../Home/Footer';
export default function Pizza() {

  return (
    <div>
<>
{/* <a href="/" class="card-link">Go back</a> */}

<h3 className='starter' data-aos="fade-right" data-aos-duration="2000">vegetarian starter</h3>
<div className='veg'data-aos="fade-up-right" data-aos-duration="2000">
<div class="card-group" >
  <div class="card">
    <img src={Veg1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Mushroom pepper fry</h6>
    </div>
  </div>
  <div class="card">
    <img src={Veg2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Baby corn pepper fry</h6>
    </div>
  </div>
  <div class="card">
    <img src={Veg3}class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Golden fry baby corn</h6>
    </div>
  </div>

  
</div>
</div>


<div className='veg'>
<div class="card-group" data-aos="fade-up-right" data-aos-duration="2000">
  <div class="card">
    <img src={Veg4} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Grilled paneer Tikka </h6>
    </div>
  </div>
  <div class="card">
    <img src={Veg5} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">BBQ -Paneer</h6>
    </div>
  </div>
  <div class="card">
    <img src={Veg6}class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Tandoori gobi</h6>
    </div>
  </div>


  



</div>
</div>



<Footer/>
</>
    </div>


  )
}
