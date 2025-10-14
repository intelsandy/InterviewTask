import { ChevronRight } from "lucide-react";
import bannerImage from "../assets/images/hero-banner.png";

const buttonData = [
  { label: "Pay Smart. Pay Fast", className: "btn btn-primary", type: "button" },
  { label: "Reach out", className: "btn btn-primary-typ2", type: "button", icon: <ChevronRight /> },
  { label: "Get Started", className: "btn btn-primary-typ3", type: "button", icon: <ChevronRight /> }
];

const carouselContent = {
  heading: "End-to-End Payout & Payroll Solutions for Digital Era.",
  description:
    "Optimize transactions and payouts with our secure, efficient payment gateway solution, ensuring smooth operations."
};

const HomeCarousel = () => {
  return <div className="home-carousel">
    <div className="container">
      <div className="contectSec">
        {buttonData.slice(0, 1).map((btn, idx) => (
            <button key={idx} type={btn.type} className={btn.className}>
              {btn.label}
              {btn.icon && btn.icon}
            </button>
          ))}
         <h1>{carouselContent.heading}</h1>
        <p>{carouselContent.description}</p>
        <div className="btn-sec">
          {buttonData.slice(1).map((btn, idx) => (
              <button key={idx} type={btn.type} className={btn.className}>
                {btn.label} {btn.icon && btn.icon}
              </button>
            ))}
        </div>
      </div>
      <div className="imageSec">
        <img src={bannerImage} alt="banner" />
      </div>
    </div>
  </div>;
}

export default HomeCarousel;