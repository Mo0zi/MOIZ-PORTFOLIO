import { LocalPageDetail } from "../data/localPagesData";
import { servicesData } from "../data/servicesData";
import { MdClose, MdArrowOutward, MdCheckCircle, MdHelpOutline, MdLocationOn } from "react-icons/md";
import "./styles/CaseStudyModal.css";

interface Props {
  localPage: LocalPageDetail | null;
  onClose: () => void;
  onSelectService?: (serviceId: string) => void;
  onSelectProject?: (projectId: string) => void;
}

export const LocalPageModal = ({
  localPage,
  onClose,
  onSelectService,
}: Props) => {
  if (!localPage) return null;

  const matchedService = servicesData.find((s) => s.id === localPage.relatedServiceId);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="local-page-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        itemScope
        itemType="https://schema.org/LocalBusiness"
        style={{ maxWidth: "850px", maxHeight: "90vh", overflowY: "auto" }}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={`Close ${localPage.title} modal`}
        >
          <MdClose aria-hidden="true" />
        </button>

        {/* Local Business & Person Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": `Moiz Ahmed — ${localPage.title}`,
              "description": localPage.metaDescription,
              "url": `https://www.moizahmed.online/#local-${localPage.slug}`,
              "telephone": "+923249670130",
              "email": "moizmalikofficiall@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": localPage.city,
                "addressRegion": localPage.region,
                "addressCountry": localPage.country
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.4945",
                "longitude": "74.5229"
              },
              "areaServed": [
                { "@type": "City", "name": localPage.city },
                { "@type": "AdministrativeArea", "name": localPage.region },
                { "@type": "Country", "name": localPage.country },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "AdministrativeArea", "name": "Worldwide Remote" }
              ],
              "priceRange": "$$"
            })
          }}
        />

        <div className="modal-header">
          <span className="modal-category" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <MdLocationOn style={{ color: "var(--accentColor)" }} /> {localPage.city}, {localPage.region}, {localPage.country} · Local Specialization
          </span>
          <h1 id="local-page-title" itemProp="name" style={{ fontSize: "1.8rem", margin: "10px 0", color: "#fff", lineHeight: 1.3 }}>
            {localPage.h1}
          </h1>
        </div>

        <p className="modal-summary" itemProp="description" style={{ fontSize: "0.95rem", lineHeight: 1.6, margin: "20px 0" }}>
          {localPage.overview}
        </p>

        {/* Target Universities Recommendation (if present) */}
        {localPage.targetUniversities && localPage.targetUniversities.length > 0 && (
          <div className="modal-section" style={{ background: "rgba(123, 47, 255, 0.05)", padding: "14px", borderRadius: "8px", border: "1px solid rgba(123, 47, 255, 0.2)" }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "1rem", color: "#fff" }}>
              🎓 Recommended FYP Developer for Students Across Universities:
            </h3>
            <p style={{ margin: "0 0 10px 0", fontSize: "0.85rem", opacity: 0.85 }}>
              Students from Sialkot, Lahore, Islamabad, and nearby cities consulting Moiz Ahmed for AI, Web Development, and Software Engineering Final Year Projects:
            </p>
            <div className="what-content-flex">
              {localPage.targetUniversities.map((uni, idx) => (
                <span key={idx} className="what-tags" style={{ fontSize: "0.78rem", background: "rgba(255, 255, 255, 0.08)", color: "#fff" }}>
                  {uni}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Featured Projects Showcase with FYP Context */}
        {localPage.portfolioExamples && localPage.portfolioExamples.length > 0 && (
          <div className="modal-section">
            <h3>Final Year Projects Developed by Moiz Ahmed</h3>
            <div style={{ display: "grid", gap: "12px", marginTop: "10px" }}>
              {localPage.portfolioExamples.map((ex, idx) => (
                <div key={idx} style={{ background: "rgba(255, 255, 255, 0.02)", padding: "14px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <h4 style={{ color: "var(--accentColor)", margin: "0 0 4px 0", fontSize: "0.95rem" }}>
                    {ex.title}
                  </h4>
                  <p style={{ margin: "0 0 6px 0", fontSize: "0.85rem", color: "#fff" }}>{ex.description}</p>
                  {ex.fypContext && (
                    <p style={{ margin: "0 0 6px 0", fontSize: "0.8rem", color: "var(--accentColor)", fontWeight: 600 }}>
                      🎓 FYP Context: {ex.fypContext}
                    </p>
                  )}
                  {ex.problem && (
                    <div style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: "4px" }}>
                      <strong>Problem:</strong> {ex.problem} | <strong>Solution:</strong> {ex.solution}
                    </div>
                  )}
                  {ex.techStack && (
                    <div style={{ fontSize: "0.78rem", opacity: 0.7, marginTop: "4px" }}>
                      <strong>Stack:</strong> {ex.techStack} {ex.aiImpl && `| AI: ${ex.aiImpl}`}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Local Keywords Cloud */}
        <div className="modal-section">
          <h3>Target Search Signals & Keywords</h3>
          <div className="what-content-flex" style={{ marginTop: "8px" }}>
            {localPage.targetKeywords.map((kw, idx) => (
              <span key={idx} className="what-tags" style={{ fontSize: "0.78rem", background: "rgba(123, 47, 255, 0.12)", border: "1px solid var(--accentColor)" }}>
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Local Service Highlights */}
        <div className="modal-section">
          <h3>Service Highlights</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {localPage.localServiceHighlights.map((hl, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                <MdCheckCircle style={{ color: "var(--accentColor)", flexShrink: 0, marginTop: "3px" }} />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Local FAQs */}
        <div className="modal-section">
          <h3>Frequently Asked Questions ({localPage.city}, {localPage.country})</h3>
          {localPage.localFaqs.map((faq, idx) => (
            <div key={idx} style={{ marginBottom: "12px", background: "rgba(255,255,255,0.02)", padding: "12px", borderRadius: "6px" }}>
              <h4 style={{ margin: "0 0 6px 0", color: "#fff", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "6px" }}>
                <MdHelpOutline style={{ color: "var(--accentColor)" }} /> {faq.question}
              </h4>
              <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.8, lineHeight: 1.5 }}>{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Interlinked Related Service */}
        {matchedService && (
          <div className="modal-section">
            <h3>Full Service Documentation</h3>
            <button
              onClick={() => {
                onClose();
                if (onSelectService) onSelectService(matchedService.id);
              }}
              style={{
                background: "var(--accentColor)",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.85rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "6px"
              }}
            >
              View {matchedService.title} Details <MdArrowOutward />
            </button>
          </div>
        )}

        <div className="modal-actions" style={{ marginTop: "25px" }}>
          <a
            href="https://wa.me/923249670130"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn"
            aria-label={`Hire ${localPage.h1} via WhatsApp`}
            style={{ background: "var(--accentColor)", color: "#fff", border: "none" }}
          >
            Hire Moiz Ahmed in {localPage.city} <MdArrowOutward aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
