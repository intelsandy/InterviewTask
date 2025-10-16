import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PaymentIcon from "../../assets/images/paymentsIcon.png"
import PayoutIcon from "../../assets/images/icon-payout.png"
import PayrollIcon from "../../assets/images/icon-payroll.png"
import AiBankingIcon from "../../assets/images/icon-aiBanking.png"
import TabContentBg from "../../assets/images/tab-content-bg.png"

import EmailIcon from "../../assets/images/email-icon.png"
import SecureIcon from "../../assets/images/secure-icon.png"
import IntegrationIcon from "../../assets/images/integration-icon.png"
import ButtonGetStarted from '../ButtonGetStarted/ButtonGetStarted';

const CustomTabs =() => {
  return (
    <Tabs>
    <TabList>
      <Tab>
        <div className='tabHeading'>
          <span className='icon'><img src={PaymentIcon} /></span> Payments
        </div>
      </Tab>
      <Tab>
        <div className='tabHeading'>
          <span className='icon'><img src={PayoutIcon} /></span> Payout
        </div>
        </Tab>
      <Tab>
        <div className='tabHeading'>
          <span className='icon'><img src={PayrollIcon} /></span>Payroll
        </div>
        </Tab>
      <Tab>
        <div className='tabHeading'>
          <span className='icon'><img src={AiBankingIcon} /></span>AI Banking
        </div>
        </Tab>
    </TabList>

    <TabPanel>
      <div className='contentSec'>
        <h2>Elevate Your Online Store's Payment Experience</h2>
        <p>Our payment gateway simplifies transactions for e-commerce 
businesses, delivering fast and secure processing. With smooth 
integration, we enhance your store's payment capabilities. Optimize 
your checkout process and boost customer satisfaction easily.</p>
<ul>
  <li>
    <span className='icon'><img src={EmailIcon} /></span> Optimize Your Checkout
  </li>
  <li>
    <span className='icon'><img src={SecureIcon} /></span> Fast and Secure
  </li>
  <li>
    <span className='icon'><img src={IntegrationIcon} /></span> Smooth Integration
  </li>
</ul>
    <ButtonGetStarted />
      </div>
      <figure>
        <img src={TabContentBg} />
      </figure>
    </TabPanel>
    <TabPanel>
      <h2>Payout content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Payroll content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>AI Banking content 2</h2>
    </TabPanel>
  </Tabs>
  )
}

export default CustomTabs;