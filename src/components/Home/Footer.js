import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Home.css'
function Footer() {
  return (
    <div className='bottomfooter'>
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/login.php/" >
            {/* <i className="fab fa-facebook-f"></i> */}
            <FacebookIcon/>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/accounts/login/" >
            <InstagramIcon/>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/home?originalSubdomain=in" >
            <LinkedInIcon/>
          </a>

        </section>
      </div>

      <div className='caption'>
      Biryani is nothing but, just a state of happiness.
      </div>
    </footer>
    </div>
  );
}

export default Footer;
