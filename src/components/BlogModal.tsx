import { useState, useMemo } from "react";
import { blogData } from "../data/blogData";
import { servicesData } from "../data/servicesData";
import { projectsData } from "../data/projectsData";
import { MdClose, MdSearch, MdArrowOutward, MdCalendarToday, MdAccessTime, MdArrowBack } from "react-icons/md";
import "./styles/CaseStudyModal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialPostSlug?: string | null;
  onSelectService?: (serviceId: string) => void;
  onSelectProject?: (projectId: string) => void;
}

export const BlogModal = ({
  isOpen,
  onClose,
  initialPostSlug,
  onSelectService,
  onSelectProject,
}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePostSlug, setActivePostSlug] = useState<string | null>(initialPostSlug || null);

  // Sync initialPostSlug when updated from props
  if (initialPostSlug && initialPostSlug !== activePostSlug && !activePostSlug) {
    setActivePostSlug(initialPostSlug);
  }

  const categories = ["All", "Artificial Intelligence", "Automation", "Full Stack Development", "Technical SEO", "AI Search Optimization"];

  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const matchesCat = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activePost = useMemo(() => {
    if (!activePostSlug) return null;
    return blogData.find((p) => p.slug === activePostSlug || p.id === activePostSlug) || null;
  }, [activePostSlug]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "900px", maxHeight: "90vh", overflowY: "auto" }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close Blog modal">
          <MdClose aria-hidden="true" />
        </button>

        {/* ── DETAIL VIEW ── */}
        {activePost ? (
          <div itemScope itemType="https://schema.org/BlogPosting">
            <button
              onClick={() => setActivePostSlug(null)}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                padding: "6px 14px",
                borderRadius: "6px",
                cursor: "pointer",
                marginBottom: "20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.85rem",
              }}
            >
              <MdArrowBack /> Back to All Articles
            </button>

            {/* Article Schema JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "headline": activePost.title,
                  "description": activePost.metaDescription,
                  "datePublished": activePost.datePublished,
                  "dateModified": activePost.dateModified,
                  "author": {
                    "@type": "Person",
                    "name": activePost.author.name,
                    "url": activePost.author.url,
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Moiz Ahmed Portfolio",
                    "url": "https://www.moizahmed.online/",
                  },
                  "keywords": activePost.tags.join(", "),
                }),
              }}
            />

            <div className="modal-header">
              <span className="modal-category" itemProp="articleSection">
                {activePost.category}
              </span>
              <h1 id="blog-modal-title" itemProp="headline" style={{ fontSize: "1.8rem", margin: "10px 0", color: "#fff", lineHeight: 1.3 }}>
                {activePost.title}
              </h1>
              <div style={{ display: "flex", gap: "15px", fontSize: "0.8rem", opacity: 0.6, marginBottom: "15px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <MdCalendarToday /> <time itemProp="datePublished" dateTime={activePost.datePublished}>{activePost.datePublished}</time>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <MdAccessTime /> {activePost.readTime}
                </span>
                <span>By {activePost.author.name}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="what-content-flex" style={{ marginBottom: "20px" }}>
              {activePost.tags.map((tag, idx) => (
                <span key={idx} className="what-tags" style={{ fontSize: "0.75rem", padding: "3px 8px" }}>
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Summary */}
            <div style={{ background: "rgba(123, 47, 255, 0.1)", borderLeft: "3px solid var(--accentColor)", padding: "14px", borderRadius: "0 8px 8px 0", marginBottom: "25px", fontSize: "0.95rem", lineHeight: 1.6 }}>
              <strong>Key Takeaway Summary:</strong> {activePost.summary}
            </div>

            {/* Full HTML Content */}
            <div
              className="blog-article-body"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: activePost.contentHtml }}
              style={{ fontSize: "0.95rem", lineHeight: 1.7, opacity: 0.9 }}
            />

            {/* FAQs inside article */}
            {activePost.faqs.length > 0 && (
              <div className="modal-section" style={{ marginTop: "30px" }}>
                <h3>Article FAQs</h3>
                {activePost.faqs.map((faq, idx) => (
                  <div key={idx} style={{ marginBottom: "12px", background: "rgba(255,255,255,0.02)", padding: "12px", borderRadius: "6px" }}>
                    <h4 style={{ margin: "0 0 4px 0", color: "#fff", fontSize: "0.9rem" }}>{faq.question}</h4>
                    <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.8 }}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Interlinked Related Services */}
            {activePost.relatedServiceIds.length > 0 && (
              <div className="modal-section">
                <h3>Related Specialization Services</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                  {activePost.relatedServiceIds.map((sId) => {
                    const serviceObj = servicesData.find((s) => s.id === sId);
                    if (!serviceObj) return null;
                    return (
                      <button
                        key={sId}
                        onClick={() => {
                          onClose();
                          if (onSelectService) onSelectService(sId);
                        }}
                        style={{
                          background: "var(--accentColor)",
                          color: "#fff",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "0.8rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {serviceObj.title} <MdArrowOutward />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Interlinked Related Case Study */}
            {activePost.relatedCaseStudyId && (
              <div className="modal-section" style={{ marginTop: "15px" }}>
                <h3>Related Project Case Study</h3>
                {(() => {
                  const projObj = projectsData.find((p) => p.id === activePost.relatedCaseStudyId);
                  if (!projObj) return null;
                  return (
                    <button
                      onClick={() => {
                        onClose();
                        if (onSelectProject) onSelectProject(projObj.id);
                      }}
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#fff",
                        padding: "8px 14px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {projObj.title} <MdArrowOutward />
                    </button>
                  );
                })()}
              </div>
            )}
          </div>
        ) : (
          /* ── LIST VIEW ── */
          <div>
            <div className="modal-header">
              <span className="modal-category">Engineering & AI Knowledge Hub</span>
              <h1 id="blog-modal-title" style={{ fontSize: "1.8rem", margin: "10px 0", color: "#fff" }}>
                Engineering <span>&</span> AI Blog
              </h1>
              <p style={{ opacity: 0.7, fontSize: "0.9rem", margin: 0 }}>
                Technical guides on Agentic AI, RAG pipelines, n8n automation, PHP MVC, and Technical SEO.
              </p>
            </div>

            {/* Search Bar */}
            <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "8px 14px", margin: "20px 0" }}>
              <MdSearch style={{ fontSize: "1.2rem", opacity: 0.6, marginRight: "8px" }} />
              <input
                type="text"
                placeholder="Search articles by topic, keyword, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ background: "transparent", border: "none", color: "#fff", width: "100%", outline: "none", fontSize: "0.9rem" }}
                aria-label="Search technical blog articles"
              />
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "10px", marginBottom: "20px" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: selectedCategory === cat ? "var(--accentColor)" : "rgba(255,255,255,0.05)",
                    border: selectedCategory === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Article Cards Grid */}
            <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActivePostSlug(post.slug)}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    padding: "16px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accentColor)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--accentColor)", fontWeight: 600 }}>{post.category}</span>
                    <h2 style={{ fontSize: "1rem", color: "#fff", margin: "6px 0 10px 0", lineHeight: 1.3 }}>{post.title}</h2>
                    <p style={{ fontSize: "0.82rem", opacity: 0.7, margin: 0, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {post.summary}
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: "0.75rem", opacity: 0.6 }}>
                    <span>{post.datePublished}</span>
                    <span style={{ color: "var(--accentColor)", display: "flex", alignItems: "center", gap: "3px" }}>
                      Read <MdArrowOutward />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
