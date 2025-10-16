import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import FB_ICON from '../../assets/images/fb-icon.png'
import X_ICON from '../../assets/images/x-icon.png'
import INSTA_ICON from '../../assets/images/insta-icon.png'
import Scroll_Top from '../../assets/images/scrollTop.png'
import './Footer.css';


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className='container'>
          <div className='footer-details'>
            <div className='logo'>UzOPay</div>
            <p className='comp-info'>Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities. Optimize your checkout process and boost customer satisfaction easily.</p>
          <ul className='social_Icons'>
            <li>
              <img src={FB_ICON} />
            </li>
            <li>
              <img src={X_ICON} />
            </li>
            <li>
              <img src={INSTA_ICON} />
            </li>
          </ul>
          </div>
          <div className='bottom_links'>
            <div>
              <label className='label'>Payment</label>
            <ul className='bottom_menu'>
              <li><Link to="/">Payment Gateway</Link></li>
              <li><Link to="/">Payment Links</Link></li>
              <li><Link to="/">Payment Methods</Link></li>
              <li><Link to="/">Bulk Payment</Link></li>
              <li><Link to="/">Invoice</Link></li>
            </ul>
            </div>
            <div className='typ2'>
              <label className='label'>AI Banking</label>
              <ul className='bottom_menu twoCol'>
                <li><Link to="/">Current Account</Link></li>
                <li><Link to="/">Accounting</Link></li>
                <li><Link to="/">API Banking</Link></li>
                <li><Link to="/">UPI Autopay</Link></li>
                <li><Link to="/">Tax Payment</Link></li>
                <li><Link to="/">Cards</Link></li>
                <li><Link to="/">CMS</Link></li>
              </ul>
            </div>
            <div>
              <label className='label'>Company</label>
              <ul className='bottom_menu typ2'>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Contact us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className='container'>
            <p>© 2024 UzOPay. All rights reserved.</p>
            <ul>
              <li>
                <Link>Terms of Service</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
               {showScrollTop && (
                  <button
                    type="button"
                    className="scroll-top-btn"
                    onClick={scrollToTop}
                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                    aria-label="Scroll to top"
                  >
                    <img src={Scroll_Top} alt="Scroll to top" />
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;