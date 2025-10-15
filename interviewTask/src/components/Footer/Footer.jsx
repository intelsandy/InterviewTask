import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className='container'>
          <div className='footer-details'>
            <div className='logo'>UzOPay</div>
            <p className='comp-info'>Our payment gateway simplifies transactions for e-commerce 
businesses, delivering fast and secure processing. With smooth 
integration, we enhance your store's payment capabilities. Optimize 
your checkout process and boost customer satisfaction easily.</p>
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
              <ul className='bottom_menu'>
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
        <div className="container">
          <p>© 2024 UzOPay. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;