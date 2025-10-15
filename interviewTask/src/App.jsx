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

function App() {

  return (
    <>
      <Header />
      <HomeCarousel />
      <PaymentProcess />
      <FocusText />
      <PaymentServices />
      <CustomCarousel />
      <ReasonToPartner />
      <SimpleSlider />
      <Footer />
    </>
  )
}

export default App
