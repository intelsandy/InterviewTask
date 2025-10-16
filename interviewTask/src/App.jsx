import './assets/styles/styles.css'
import Header from './components/Header/Header'
import HomeCarousel from './components/HomeCarousel/HomeCarousel'
import Footer from './components/Footer/Footer'
import PaymentProcess from './components/PaymentProcess/PaymentProcess'
import FocusText from './components/FocusText/FocusText'
import PaymentServices from './components/PaymentServices/PaymentServices'
import CustomCarousel from './components/CustomCarousel/CustomCarousel'
import SimpleSlider from './components/SlickCarousel/SlickCarousel'
import ReasonToPartner from './components/ReasonToPartner/ReasonToPartner'
import BulidTheFeature from './components/BulidTheFeature/BulidTheFeature'
import EnhancingPayment from './components/EnhancingPayment/EnhancingPayment'
import CenterCarousel from './components/CenterCarousel/CenterCarousel'

function App() {

  return (
    <>
      <Header />
      <HomeCarousel />
      <PaymentProcess />
      <FocusText />
      <PaymentServices />
      <CustomCarousel />
      <BulidTheFeature />
      <ReasonToPartner />
      <SimpleSlider />
      <EnhancingPayment />
      {/* <CenterCarousel /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
