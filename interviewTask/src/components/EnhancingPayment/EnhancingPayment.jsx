import CustomTabs from "../CustomTabs/CustomTabs";
import "./EnhancingPayment.css";

const EnhancingPayment = () => {
  return (
    <section className="enhancing-payment">
      <div className="container">
        <div className="heading">
          <span>Enhancing Payment</span>
          <h2>Seamless, Secure, and Swift Transactions</h2>
        </div>
      </div>
      <div className="tabs-container">
        <CustomTabs />
      </div>
    </section>
  )
} 

export default EnhancingPayment;