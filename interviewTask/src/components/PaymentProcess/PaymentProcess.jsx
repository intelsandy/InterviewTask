import ContentSec from "../ContentSec/ContentSec";
import sdkImage from "../../assets/images/sdk-img.png";
import "./PaymentProcess.css";

const paymentContent = {
  heading: "Simplify the payments process",
  description: "Tools crafted to simplify and enhance your payout processes.",
  buttons: [
    { label: "Reliable, and Efficient", className: "btn btn-primary" }
  ]
};

const PaymentProcess = () => {
  return (
    <>
      <section className="paymentProcess">
      <div className="container">
        <ContentSec
          heading={paymentContent.heading}
          description={paymentContent.description}
          buttons={paymentContent.buttons}
        />
        <figure>
          <img src={sdkImage} alt={paymentContent.heading} />
        </figure>
      </div>
    </section>
    </>
  );
}

export default PaymentProcess;