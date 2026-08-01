import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about" aria-label="About Moiz Ahmed">
      <div className="about-me">
        <h2 className="title">About <span>Me</span></h2>
        <p className="para">
          <strong>Moiz Ahmed</strong> is a <strong>Senior Full Stack Developer &amp; Agentic AI Engineer</strong> based in <strong>Sialkot, Punjab, Pakistan</strong>. He specializes in engineering high-availability web platforms, enterprise PHP MVC systems, custom Shopify themes, and autonomous AI systems using Retrieval-Augmented Generation (RAG) and LLM agentic workflows.
        </p>
        <p className="para" style={{ marginTop: "1rem" }}>
          With deep technical expertise spanning <strong>React.js, Node.js, Express, PHP MVC, MySQL, MongoDB, and Shopify Liquid</strong>, Moiz integrates modern AI technologies including <strong>LangChain, FAISS vector databases, Google Gemini API, and OpenAI API</strong>. He designs scalable web architectures, optimizes database queries for low latencies, and automates multi-step business operations for clients worldwide.
        </p>
      </div>
    </section>
  );
};

export default About;
