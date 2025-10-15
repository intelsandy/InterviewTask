import PartnerImage from "../../assets/images/partner-img.png"
import './ReasonToPartner.css'

const ReasonToPartner = () => {
  return (
    <section className="reason-to-partner">
      <div className="container">
        <div className="heading">
          <span>Reasons to Partner</span>
          <h2>Exceptional Support for Your Success</h2>
        </div>
        <figure>
          <img src={PartnerImage} alt="Reason to Partner" />
        </figure>
      </div>
      </section>
  )
}

export default ReasonToPartner;