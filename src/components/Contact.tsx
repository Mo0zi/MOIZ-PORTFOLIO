import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

/**
 * Contact / Footer Section
 *
 * SEO Notes:
 * - Schema.org Person microdata with correct itemProp attributes
 * - All social links have descriptive rel="noopener noreferrer" for security
 * - Email & phone links use proper mailto: and tel: protocols for SEO & accessibility
 * - NAP (Name, Address, Phone) consistency reinforces Local SEO signals
 * - LinkedIn URL corrected to actual profile (was generic https://www.linkedin.com)
 * - Footer content serves as trust signals for E-E-A-T evaluation
 */
const Contact = () => {
  return (
    <footer
      className="contact-section section-container"
      id="contact"
      aria-label="Contact Moiz Ahmed — AI Developer & Full Stack Engineer"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Hidden NAP microdata for Local SEO consistency */}
      <meta itemProp="name" content="Moiz Ahmed" />
      <meta itemProp="jobTitle" content="Senior Full Stack Developer & Agentic AI Engineer" />
      <link itemProp="url" href="https://www.moizahmed.online/" />

      <div className="contact-container">
        <h2
          className="title"
          style={{ fontSize: "40px", marginBottom: "30px", fontWeight: 500 }}
        >
          Contact
        </h2>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:moizmalikofficiall@gmail.com"
                data-cursor="disable"
                aria-label="Send an email to Moiz Ahmed at moizmalikofficiall@gmail.com"
                itemProp="email"
                title="Email Moiz Ahmed — AI Developer & Full Stack Engineer"
              >
                moizmalikofficiall@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-box">
            <h4>Phone</h4>
            <p>
              <a
                href="tel:+923249670130"
                data-cursor="disable"
                aria-label="Call Moiz Ahmed at +92 324 9670130"
                itemProp="telephone"
                title="Call or WhatsApp Moiz Ahmed"
              >
                +92 324 9670130
              </a>
            </p>
            <h4 style={{ marginTop: "1rem" }}>Location</h4>
            <p
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="addressLocality">Sialkot</span>,{" "}
              <span itemProp="addressRegion">Punjab</span>,{" "}
              <span itemProp="addressCountry">Pakistan</span>
              <meta itemProp="postalCode" content="51310" />
              <meta itemProp="addressCountry" content="PK" />
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Mo0zi"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Moiz Ahmed GitHub — View Code Repositories and Open Source Projects"
              title="Moiz Ahmed GitHub Profile"
              itemProp="sameAs"
            >
              Github <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/moizahmed-developer"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Moiz Ahmed LinkedIn Profile — Connect for Professional Opportunities"
              title="Moiz Ahmed LinkedIn Profile"
              itemProp="sameAs"
            >
              Linkedin <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://x.com/Mo0ziofficiall"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Moiz Ahmed Twitter/X Profile @Mo0ziofficiall"
              title="Moiz Ahmed X (Twitter) Profile"
              itemProp="sameAs"
            >
              Twitter / X <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/mo0zi.official/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Moiz Ahmed Instagram Profile @mo0zi.official"
              title="Moiz Ahmed Instagram"
              itemProp="sameAs"
            >
              Instagram <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://www.fiverr.com/s/vvNZWK1"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Moiz Ahmed Fiverr — 5 Star Seller, 99% Response Rate, Order AI & Web Development Services"
              title="Moiz Ahmed Fiverr 5-Star Profile"
              itemProp="sameAs"
            >
              Fiverr (5★ Seller) <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/923249670130"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Chat with Moiz Ahmed on WhatsApp — Fastest Response via WhatsApp"
              title="WhatsApp Moiz Ahmed"
              itemProp="sameAs"
            >
              WhatsApp <MdArrowOutward aria-hidden="true" />
            </a>
          </div>

          <div className="contact-box">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: 1.3,
                marginBottom: "15px",
              }}
            >
              Designed and Developed <br /> by <span>Moiz Ahmed</span>
            </h3>
            <h5>
              <MdCopyright aria-hidden="true" /> 2026 Moiz Ahmed. All rights
              reserved.
            </h5>
            <p style={{ fontSize: "0.75rem", opacity: 0.5, marginTop: "0.5rem" }}>
              Senior Full Stack Developer & Agentic AI Engineer · Sialkot, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
