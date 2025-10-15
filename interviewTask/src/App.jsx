import './assets/styles/styles.css'
import Header from './components/Header/Header'
import HomeCarousel from './components/HomeCarousel'
import Footer from './components/Footer/Footer'
import PaymentProcess from './components/PaymentProcess/PaymentProcess'
import FocusText from './components/FocusText/FocusText'
import PaymentServices from './components/PaymentServices/PaymentServices'
import CustomCarousel from './components/CustomCarousel/CustomCarousel'

function App() {

  return (
    <>
      <Header />
      <HomeCarousel />
      <PaymentProcess />
      <FocusText />
      <PaymentServices />
      <CustomCarousel />
      <Footer />
    </>
  )
}

export default App
