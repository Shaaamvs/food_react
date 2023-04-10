import React from 'react'
import Plate from '../Image/plate1.jpg';
import  './Home.css'
import Image from './Image';
import Footer from './Footer';
import { Divider } from '@mui/material'

export default function Home() {
  return (
    <>
<br/>
  <div className="card">
  <img src={Plate} class="homepageimage"/>
  </div>


<div className='flex' data-aos="fade-up" data-aos-duration="1000">
  <h3 className='Taste'>Tasteful </h3>
  <h5 className='Deli'>Delicacies</h5>
  </div>

  <Image/>
  <Footer/>

</>

  )
}

