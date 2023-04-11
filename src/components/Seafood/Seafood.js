import React from 'react'
import Sea1 from '../Image/sea1.jpg'
import Sea2 from '../Image/sea2.jpg'
import Sea3 from '../Image/sea3.jpg'
import Sea4 from '../Image/sea4.jpg'
import Sea5 from '../Image/sea5.jpg'
import Sea6 from '../Image/sea6.jpg'
import Sea7 from '../Image/sea7.jpg'
import '../Menu/Menu.css'
import Footer from '../Home/Footer';
import { Container } from '@mui/material'

export default function Seafood() {
  return (

    <>
    <Container>
    <h3 className='starter'data-aos="fade-up-right" data-aos-duration="2000">Sea food starter</h3>
    <div className='seaimage'data-aos="fade-up-right" data-aos-duration="2000">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Sea1} class="d-block w-100" alt="..." className='sea'/>
    </div>
    <div class="carousel-item">
      <img src={Sea2} class="d-block w-100" alt="..." className='sea'/>
    </div>
    <div class="carousel-item">
      <img src={Sea3} class="d-block w-100" alt="..." className='sea'/>
    </div>
  </div>
</div>
</div>

<h3 className='freshsea'data-aos="fade-up-right" data-aos-duration="2000">Fresh seafood is the best!
</h3>



<div className='topmain' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                <div className='seafooditem'>
                    <div className='menu1'>
                        <img src={Sea4} className='sea'/>
                        <h5 class="card-title">Vanjaram Fish</h5>
                    </div>



                    <div className='menu2'>
                        <img src={Sea5} className='sea'/>
        <h5 class="card-title">Tavamean Rost</h5>

                    </div>

                </div>

                <div className="centersea">
                    <h3 className='Taste'>Discover </h3>
                    <h5 className='menu'> Menu</h5>
                </div>



                <div className='seafooditem2'>
                    <div className='menu3'>
                        <img src={Sea6} className='sea'/>
                        <h5 className="card-title">Tavamean Rost</h5>

                    </div>


                    <div className='menu4'>
                        <img src={Sea7} className='seas'/>
        <h5 class="card-title">Nethili-Fish-Fry.</h5>

                    </div>

                </div>

            </div>


 </Container>
 <Footer/>
 </>
 

 
  )
}
