import './testimonialCard.css';

const TestimonialCard = ({ description, author, authorImage, ratings, post }) => {
  return (
    <div className="testimonialCard">
      <p className="testimonial-desc">{description}</p>
      <div className="testimonial-author">
        <img src={authorImage} alt={author} className="author-img" />
        <div className='author-details'>
          <span className='author-info'>
            <span className="author-name">{author}</span>
            <span className="author-post">{post}</span>
          </span>
          <span className="author-ratings">
           <i> {"★".repeat(ratings)}
            {"☆".repeat(5 - ratings)}</i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard;