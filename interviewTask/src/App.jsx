import { useState } from 'react'
import './assets/styles/styles.css'
import Header from './components/Header/Header'
import HomeCarousel from './components/HomeCarousel'
import Footer from './components/Footer/Footer'
import PaymentProcess from './components/PaymentProcess/PaymentProcess'
import FocusText from './components/FocusText/FocusText'
import PaymentServices from './components/PaymentServices/PaymentServices'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomeCarousel />
      <PaymentProcess />
      <FocusText />
      <PaymentServices />
      <Footer />
    </>
  )
}

export default App
