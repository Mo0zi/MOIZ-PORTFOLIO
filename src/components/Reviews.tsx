import "./styles/Reviews.css";
import { FaQuoteLeft, FaStar, FaBolt } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";

/**
 * Reviews / Testimonials Section
 *
 * SEO Notes:
 * - Uses Schema.org Review + AggregateRating microdata for rich snippet eligibility
 * - Stars on Fiverr badge reinforce trust signals (E-E-A-T)
 * - Client names, roles, and company names strengthen entity associations
 * - Geographic diversity (Dubai, Venezuela, Pakistan) signals international expertise
 */

interface ReviewItem {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

const Reviews = () => {
  const reviews: ReviewItem[] = [
    {
      name: "Tariq Al-Mansoor",
      role: "Marketing Director",
      company: "ACG (Dubai, UAE)",
      text: "Moiz took complete charge of our digital marketing campaigns at ACG. His data-driven ad strategies and performance marketing boosted our ROI across Dubai and GCC markets. Exceptional execution speed.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      role: "Brand Director",
      company: "MAMI (Venezuela)",
      text: "Working with Moiz as our marketing agent was effortless. He automated content workflows, optimized paid ad campaigns, and expanded our brand reach dramatically within just a few weeks.",
      rating: 5,
    },
    {
      name: "Haashim Raza",
      role: "Founder & CEO",
      company: "Haash Wears",
      text: "Moiz completely transformed our social media marketing and brand strategy. From content planning to running targeted campaigns, his work brought us consistent engagement and real sales growth.",
      rating: 5,
    },
    {
      name: "Dr. Farhan Malik",
      role: "Head of Tech & Media",
      company: "CCPD",
      text: "Moiz handled both our PHP MVC full-stack platform development and social media channels seamlessly. Having a developer who also understands marketing and user acquisition made a massive difference.",
      rating: 5,
    },
    {
      name: "Alex Rivera",
      role: "Co-Founder",
      company: "AutomateFlow AI",
      text: "Moiz built custom Agentic AI workflows and n8n automation for our backend operations. His expertise in Gemini API, LangChain, and RAG pipelines cut down our manual processing time by 80%.",
      rating: 5,
    },
  ];

  return (
    <section
      className="reviews-section section-container"
      id="reviews"
      aria-label="Client Testimonials and Reviews for Moiz Ahmed"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* AggregateRating microdata — enables star snippets in search results */}
      <div
        style={{ display: "none" }}
        itemScope
        itemProp="aggregateRating"
        itemType="https://schema.org/AggregateRating"
      >
        <meta itemProp="ratingValue" content="5.0" />
        <meta itemProp="bestRating" content="5" />
        <meta itemProp="worstRating" content="1" />
        <meta itemProp="reviewCount" content="5" />
        <meta itemProp="ratingCount" content="5" />
      </div>

      <div className="reviews-header">
        <h2 className="reviews-title">
          Client <span>Reviews</span>
        </h2>

        <a
          href="https://www.fiverr.com/s/vvNZWK1"
          target="_blank"
          rel="noopener noreferrer"
          className="fiverr-badge-card"
          aria-label="Moiz Ahmed Fiverr 5-Star Seller Profile — 99% Response Rate — Order AI Development & Full Stack Engineering Services"
        >
          <div className="fiverr-badge-left">
            <SiFiverr className="fiverr-logo" aria-hidden="true" />
            <div className="fiverr-badge-info">
              <div className="fiverr-rating">
                <span className="rating-num">5.0</span>
                <div className="stars" aria-label="5 out of 5 stars">
                  <FaStar aria-hidden="true" />
                  <FaStar aria-hidden="true" />
                  <FaStar aria-hidden="true" />
                  <FaStar aria-hidden="true" />
                  <FaStar aria-hidden="true" />
                </div>
                <span className="rating-label">(5 Star Seller)</span>
              </div>
              <div className="fiverr-response">
                <FaBolt className="bolt-icon" aria-hidden="true" /> 99% Response Rate
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
          <div
            className="review-card"
            key={index}
            itemScope
            itemProp="review"
            itemType="https://schema.org/Review"
          >
            <div className="quote-icon">
              <FaQuoteLeft aria-hidden="true" />
            </div>
            <p className="review-text" itemProp="reviewBody">
              "{review.text}"
            </p>
            {/* Hidden rating for schema */}
            <div
              style={{ display: "none" }}
              itemScope
              itemProp="reviewRating"
              itemType="https://schema.org/Rating"
            >
              <meta itemProp="ratingValue" content={String(review.rating)} />
              <meta itemProp="bestRating" content="5" />
            </div>
            <div className="review-author">
              <h3 itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">{review.name}</span>
              </h3>
              <h4>
                <span>{review.role}</span>
                {" — "}
                <span
                  itemProp="publisher"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <span itemProp="name">{review.company}</span>
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
