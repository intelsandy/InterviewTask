import ContentSec from "../ContentSec/ContentSec"
import pentagraph from "../../assets/images/pentagraph.png";
import CustomScrollBar from "../CustomScrollBar/CustomScrollBar";
import "./PaymentServices.css";

const carouselContent = {
  heading: "Streamlined for Payout Ease and Efficiency",
  description: "Optimize transactions and payouts with our secure, efficient payment gateway solution, ensuring smooth operations.",
  buttons: [
    { label: "Payout Service Centric", className: "btn btn-primary" },
    { label: "Reach out", className: "btn btn-primary-typ2" },
    { label: "Get Started", className: "btn btn-primary-typ3" }
  ]
};


const PaymentServices = () => {
  return <section className="paymentServices">
    <div className="container">
      <ContentSec
          heading={carouselContent.heading}
          description={<CustomScrollBar />}
          buttons={carouselContent.buttons}
        />
        <figure>
          <img src={pentagraph} alt={carouselContent.heading} />
        </figure>
    </div>
  </section>
}

export default PaymentServices