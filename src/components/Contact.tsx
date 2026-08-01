import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <footer
      className="contact-section section-container"
      id="contact"
      aria-label="Contact Information and Footer"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="contact-container">
        <h2 className="title" style={{ fontSize: "40px", marginBottom: "30px", fontWeight: 500 }}>Contact</h2>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:moizmalikofficiall@gmail.com" data-cursor="disable" aria-label="Email Moiz Ahmed" itemProp="email">
                moizmalikofficiall@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Phone</h4>
            <p>
              <a href="tel:+923249670130" data-cursor="disable" aria-label="Call Moiz Ahmed" itemProp="telephone">
                +92 324 9670130
              </a>
            </p>
            <h4 style={{ marginTop: "1rem" }}>Location</h4>
            <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Sialkot</span>, <span itemProp="addressRegion">Punjab</span>, <span itemProp="addressCountry">Pakistan</span>
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
              aria-label="Moiz Ahmed GitHub"
            >
              Github <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Moiz Ahmed LinkedIn"
            >
              Linkedin <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://x.com/Mo0ziofficiall"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Moiz Ahmed Twitter"
            >
              Twitter <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/mo0zi.official/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Moiz Ahmed Instagram"
            >
              Instagram <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://www.fiverr.com/s/vvNZWK1"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Moiz Ahmed Fiverr"
            >
              Fiverr <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/923249670130"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Moiz Ahmed WhatsApp"
            >
              WhatsApp <MdArrowOutward aria-hidden="true" />
            </a>
          </div>
          <div className="contact-box">
            <h3 style={{ fontSize: "24px", fontWeight: 500, lineHeight: 1.3, marginBottom: "15px" }}>
              Designed and Developed <br /> by <span>Moiz Ahmed</span>
            </h3>
            <h5>
              <MdCopyright aria-hidden="true" /> 2026 Moiz Ahmed. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
