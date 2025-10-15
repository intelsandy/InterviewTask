import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CustomSlickSlider.css';
import Slider from "react-slick";
import Cards from "../Cards/Cards";
import { CardDetails } from "../../utils/data";
import { ChevronRight, ChevronLeft } from "lucide-react";

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

export default function SimpleSlider() {
  var settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
              <Cards
                heading={card.heading}
                description={card.description}
                icon={card.icon}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}