import React from 'react'
import './Home.css'
import Menu1 from '../Image/menu-1.jpg'
import Menu2 from '../Image/menu-2.jpg'
import Menu3 from '../Image/menu-3.jpg'
import Menu4 from '../Image/menu-4.jpg'
import Blend from '../Image/blend.jpg'
import Soup1 from '../Image/soup1.jpg'
import Soup2 from '../Image/soup2.jpg'
import Soup3 from '../Image/soup3.jpg'
import Soup4 from '../Image/soup4.jpg'
import Soup5 from '../Image/soup5.jpg'


import Footer from './Footer'
function Image() {
    return (
        <>
            <div className='topmain' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                <div className='mainclass'>
                    <div className='menu1'>
                        <img src={Menu1} />
                    </div>



                    <div className='menu2'>
                        <img src={Menu2} />
                    </div>

                </div>

                <div className='contentcenter'>
                    <h3 className='Taste'>Discover </h3>
                    <h5 className='menu'> Menu</h5>
                </div>



                <div className='mainclass1'>
                    <div className='menu3'>
                        <img src={Menu3} />
                    </div>


                    <div className='menu4'>
                        <img src={Menu4} />
                    </div>
                </div>

            </div>

            <div className="lastdiv">
                <img src={Blend} className='footercard' />
                <div className='lastcenter'>
                    <h3 className='Taste'>The Perfect</h3>
                    <h5 className='Deli'>Blend</h5>
                </div>

            </div>

            <h3 className='soupmagic'data-aos="fade-up" data-aos-duration="1000">  A soup whose spices are full of magic.</h3>

<div className='soupclass'  >
            <div className='Soupmenu' data-aos="fade-up">
                <div className='soupitem'>
                    <img src={Soup1} />
                </div>


                <div className='soupitem'>
                    <img src={Soup2} />
                </div>


                <div className='soupitem'>
                    <img src={Soup3} />
                </div>



            </div>






            <div className='Soupmenu'data-aos="fade-up">
                <div className='soupitem'>
                    {/* <h3>Soup</h3> */}
                    <img src={Soup4} />
                </div>


                <div className='soupitem'>
                    <img src={Soup5} />
                </div>
                <div className='soupitem'>
                    <img src={Soup1} />
                </div>
            </div>
            </div>







        </>
    )
}

export default Image
