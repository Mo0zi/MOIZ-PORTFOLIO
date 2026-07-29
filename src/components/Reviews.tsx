import "./styles/Reviews.css";
import { FaQuoteLeft } from "react-icons/fa6";

const Reviews = () => {
  const reviews = [
    {
      name: "Haris Khan",
      role: "eCommerce Client — StitchSmart",
      text: "Moiz built StitchSmart with an AI-powered RAG chatbot and personalized recommendations. His expertise in LangChain and Gemini API delivered exactly the intelligent eCommerce experience we envisioned.",
    },
    {
      name: "Sarah Jenkins",
      role: "Marketing Client — MarketGO AI",
      text: "Moiz's Agentic AI system for MarketGO transformed our marketing strategy. The automated content generation and customer insights pipeline was seamlessly built and deployed.",
    },
    {
      name: "Ahmed Raza",
      role: "Owner — Haash Wears",
      text: "Moiz revamped our B2B website with responsive design, optimized backend, and strong SEO. Our online visibility improved significantly, and the site has been running perfectly since launch.",
    },
  ];

  return (
    <div className="reviews-section section-container" id="reviews">
      <h2 className="reviews-title">
        Client <span>Reviews</span>
      </h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-author">
              <h4>{review.name}</h4>
              <h5>{review.role}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
