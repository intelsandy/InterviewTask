import ctaBg from "../../assets/images/cta-bg.png"
import { ChevronRight } from "lucide-react";
import ButtonGetStarted from "../ButtonGetStarted/ButtonGetStarted";


const BulidTheFeature = () => {
  return (
    <section className="build-the-feature">
      <div className="container">
          <div className="contectSec">
            <figure>
              <img src={ctaBg} alt="Build The Feature" />
              <figcaption>
                Let's build the <br />future of finance together
              </figcaption>
            </figure>
          </div>
          <div className="btn-sec">
            <figure>
              <img src={ctaBg} alt="Build The Feature" />
              <ButtonGetStarted />
            </figure>
          </div>
      </div>
    </section>
  )
}
export default BulidTheFeature;