import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../SlickCarousel/CustomSlickSlider.css';
import Slider from "react-slick";
import Cards from "../Cards/Cards";
import { TestimonialCardDetails } from "../../utils/data";
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
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        // slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // slidesToScroll: 2
      }
    },
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 2,
        // slidesToScroll: 2,
         centerPadding: "50px",
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };
  return (
    <section className="slick-carousel center">
      <div className="container">
        <div className="heading">
          <span>Client Feedbacks</span>
          <h2>Trusted by 
Businesses Like Yours</h2>
        </div>
        <Slider {...settings} >
          {TestimonialCardDetails.map((card, idx) => (
            <div key={idx}>
              <TestimonialCard
      description={card.description}
      author={card.author}
      authorImage={card.authorImage}
      ratings={card.ratings}
      post={card.post}
    />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}