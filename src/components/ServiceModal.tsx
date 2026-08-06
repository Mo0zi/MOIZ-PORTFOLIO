import { ServiceDetail } from "../data/servicesData";
import { projectsData } from "../data/projectsData";
import { MdClose, MdArrowOutward, MdCheckCircle, MdHelpOutline } from "react-icons/md";
import "./styles/CaseStudyModal.css"; // Reuse existing dark glassmorphic modal CSS

interface Props {
  service: ServiceDetail | null;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const ServiceModal = ({ service, onClose, onSelectProject }: Props) => {
  if (!service) return null;

  const relatedProjects = projectsData.filter((p) =>
    service.relatedCaseStudyIds.includes(p.id)
  );

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        itemScope
        itemType="https://schema.org/Service"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={`Close ${service.title} service modal`}
        >
          <MdClose aria-hidden="true" />
        </button>

        {/* Dynamic Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "description": service.metaDescription,
              "provider": {
                "@type": "Person",
                "name": "Moiz Ahmed",
                "url": "https://www.moizahmed.online/"
              },
              "areaServed": "Worldwide",
              "serviceType": service.category,
              "termsOfService": "https://www.moizahmed.online/#terms"
            })
          }}
        />

        <div className="modal-header">
          <span className="modal-category" itemProp="serviceType">
            {service.category} · Service Specialization
          </span>
          <h1 id="service-title" itemProp="name" style={{ fontSize: "2rem", margin: "10px 0", color: "#fff" }}>
            {service.h1}
          </h1>
          <h2 style={{ fontSize: "1.1rem", opacity: 0.8, fontWeight: 400, color: "var(--accentColor)" }}>
            {service.h2}
          </h2>
        </div>

        <p className="modal-summary" itemProp="description" style={{ fontSize: "1rem", lineHeight: 1.6, margin: "20px 0" }}>
          {service.overview}
        </p>

        {/* Key Benefits */}
        <div className="modal-section">
          <h3>Key Client Benefits</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {service.benefits.map((benefit, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                <MdCheckCircle style={{ color: "var(--accentColor)", flexShrink: 0, marginTop: "3px" }} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process Steps */}
        <div className="modal-section">
          <h3>Implementation Process</h3>
          <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {service.process.map((p, idx) => (
              <div key={idx} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "14px", borderRadius: "8px" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--accentColor)", fontWeight: 700 }}>STEP {p.step}</span>
                <h4 style={{ margin: "4px 0 8px 0", color: "#fff", fontSize: "0.95rem" }}>{p.title}</h4>
                <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0, lineHeight: 1.4 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="modal-section">
          <h3>Technologies & Frameworks</h3>
          <div className="what-content-flex" style={{ marginTop: "10px" }}>
            {service.technologies.map((tech, idx) => (
              <div key={idx} className="what-tags" style={{ background: "rgba(123, 47, 255, 0.15)", border: "1px solid var(--accentColor)" }}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Related Case Studies (Internal Linking) */}
        {relatedProjects.length > 0 && (
          <div className="modal-section">
            <h3>Featured Case Studies & Work</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
              {relatedProjects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    onClose();
                    if (onSelectProject) onSelectProject(proj.id);
                  }}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  {proj.title} <MdArrowOutward />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {service.faqs.length > 0 && (
          <div className="modal-section">
            <h3>Service FAQs</h3>
            {service.faqs.map((faq, idx) => (
              <div key={idx} style={{ marginBottom: "14px", background: "rgba(255,255,255,0.02)", padding: "12px", borderRadius: "6px" }}>
                <h4 style={{ margin: "0 0 6px 0", color: "#fff", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "8px" }}>
                  <MdHelpOutline style={{ color: "var(--accentColor)" }} /> {faq.question}
                </h4>
                <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.8, lineHeight: 1.5 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="modal-actions" style={{ marginTop: "25px" }}>
          <a
            href="https://wa.me/923249670130"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn"
            aria-label={`${service.ctaText} via WhatsApp`}
            style={{ background: "var(--accentColor)", color: "#fff", border: "none" }}
          >
            {service.ctaText} <MdArrowOutward aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
