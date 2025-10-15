import bannerImage from "../../assets/images/hero-banner.png";
import ContentSec from "../ContentSec/ContentSec";
import "./HomeCarousel.css";
import {carouselContent} from "../../utils/data"

const HomeCarousel = () => {
  return <section className="home-carousel">
    <div className="container">
      <ContentSec
          heading={carouselContent.heading}
          description={carouselContent.description}
          buttons={carouselContent.buttons}
        />
      <div className="imageSec">
        <img src={bannerImage} alt={carouselContent.heading} />
         {carouselContent.tags.map((tag, idx) => (
            <span key={tag} className={`tags tag${idx + 1}`}>{tag}</span>
          ))}
      </div>
    </div>
  </section>;
}

export default HomeCarousel;