
import { useState, useEffect } from 'react';
import './customcaeousel.css';
import BigText from "../../assets/images/BigText.svg";
const CustomCarousel = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://picsum.photos/1920/1080?random=1',
    'https://picsum.photos/1920/1080?random=2',
    'https://picsum.photos/1920/1080?random=3',
    'https://picsum.photos/1920/1080?random=4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="custom-carousel">
      <div className='container'>
        <div className="slider-container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}


        

        <div className="text-overlay">
          <div 
            className="bizsettle-text"
            style={{
              backgroundImage: `url(${images[currentSlide]})`
            }}
          >
           <img src={BigText} alt="payment-process" />
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}

export default CustomCarousel;  