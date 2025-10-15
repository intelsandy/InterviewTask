
import bannerImage from "../assets/images/hero-banner.png";
import ContentSec from "./ContentSec/ContentSec";

const carouselContent = {
  heading: "End-to-End Payout & Payroll Solutions for Digital Era.",
  description: "Optimize transactions and payouts with our secure, efficient payment gateway solution, ensuring smooth operations.",
  buttons: [
    { label: "Pay Smart. Pay Fast", className: "btn btn-primary" },
    { label: "Reach out", className: "btn btn-primary-typ2" },
    { label: "Get Started", className: "btn btn-primary-typ3" }
  ]
};

const HomeCarousel = () => {
  return <section className="home-carousel">
    <div className="container">
      <ContentSec
          heading={carouselContent.heading}
          description={carouselContent.description}
          buttons={carouselContent.buttons}
        />
      <div className="imageSec">
        <img src={bannerImage} alt="banner" />
        <span className="tags tag1">Sales Product Screening</span>
        <span className="tags tag2">Payout process</span>
        <span className="tags tag3">Transactions</span>
      </div>
    </div>
  </section>;
}

export default HomeCarousel;