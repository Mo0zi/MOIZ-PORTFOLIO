import "./styles/Reviews.css";
import { FaQuoteLeft, FaStar, FaBolt } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";

const Reviews = () => {
  const reviews = [
    {
      name: "Tariq Al-Mansoor",
      role: "Marketing Director — ACG (Dubai, UAE)",
      text: "Moiz took complete charge of our digital marketing campaigns at ACG. His data-driven ad strategies and performance marketing boosted our ROI across Dubai and GCC markets. Exceptional execution speed.",
    },
    {
      name: "Carlos Mendoza",
      role: "Brand Director — MAMI (Venezuela)",
      text: "Working with Moiz as our marketing agent was effortless. He automated content workflows, optimized paid ad campaigns, and expanded our brand reach dramatically within just a few weeks.",
    },
    {
      name: "Haashim Raza",
      role: "Founder & CEO — Haash Wears",
      text: "Moiz completely transformed our social media marketing and brand strategy. From content planning to running targeted campaigns, his work brought us consistent engagement and real sales growth.",
    },
    {
      name: "Dr. Farhan Malik",
      role: "Head of Tech & Media — CCPD",
      text: "Moiz handled both our PHP MVC full-stack platform development and social media channels seamlessly. Having a developer who also understands marketing and user acquisition made a massive difference.",
    },
    {
      name: "Alex Rivera",
      role: "Co-Founder — AutomateFlow AI",
      text: "Moiz built custom Agentic AI workflows and n8n automation for our backend operations. His expertise in Gemini API, LangChain, and RAG pipelines cut down our manual processing time by 80%.",
    },
  ];

  return (
    <section className="reviews-section section-container" id="reviews" aria-label="Client Testimonials and Reviews">
      <div className="reviews-header">
        <h2 className="reviews-title">
          Client <span>Reviews</span>
        </h2>
        
        <a
          href="https://www.fiverr.com/sellers/m0iz_malik"
          target="_blank"
          rel="noopener noreferrer"
          className="fiverr-badge-card"
          aria-label="Moiz Ahmed Fiverr Seller Profile with 5 Star Rating and 99% Response Rate"
        >
          <div className="fiverr-badge-left">
            <SiFiverr className="fiverr-logo" aria-hidden="true" />
            <div className="fiverr-badge-info">
              <div className="fiverr-rating">
                <span className="rating-num">5.0</span>
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className="rating-label">(5 Star Seller)</span>
              </div>
              <div className="fiverr-response">
                <FaBolt className="bolt-icon" /> 99% Response Rate
              </div>
            </div>
          </div>
          <div className="fiverr-cta">
            Order on Fiverr <MdArrowOutward aria-hidden="true" />
          </div>
        </a>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="quote-icon">
              <FaQuoteLeft aria-hidden="true" />
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-author">
              <h3>{review.name}</h3>
              <h4>{review.role}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
