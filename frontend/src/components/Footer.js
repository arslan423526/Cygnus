import React from 'react';
import './css/footer.css'
import ScrollToTop from "react-scroll-to-top";


function Footer() {
    return <div className='footer text-black mt-3'>

        <footer style={{backgroundColor: 'rgba(50,64,94,0.88)'}} className="text-muted">
            <div className="container pt-3">
                <ScrollToTop smooth/>

                <p className=" mb-0 text-white text-center">Cygnus Ecommerce Services Ltd |
                    Address: 7 Block B, Media Town, Islamabad </p>
                <p className="mb-0 text-white text-center"> Email Address: info@cygnus.com</p>
                <p className="pb-3 mb-0 text-white text-center"> ahTech &copy; 2022</p>
            </div>
        </footer>

    </div>;
}

export default Footer;

