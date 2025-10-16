import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../SlickCarousel/CustomSlickSlider.css';
import Slider from "react-slick";
import Cards from "../Cards/Cards";
import { CardDetails } from "../../utils/data";
import { ChevronRight, ChevronLeft } from "lucide-react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

function SampleNextArrow(props) {
  const { className, onClick, } = props;
  return (
    <div
      className={className}
      onClick={onClick}>
      <ChevronRight />
    </div>
   
  );
}

function SamplePrevArrow(props) {
  const { className,  onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}>
      <ChevronLeft />
    </div>
  );
}

export default function CenterCarousel() {
  var settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className="slick-carousel">
      <div className="container">
        <div className="heading">
          <span>Our Experties</span>
          <h2>Redefining Payment Processing for You</h2>
        </div>
        <Slider {...settings} >
          {CardDetails.map((card, idx) => (
            <div key={idx}>
              <TestimonialCard />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}