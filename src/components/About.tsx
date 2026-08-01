import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about" aria-label="About Moiz Ahmed">
      <div className="about-me">
        <h2 className="title">About <span>Me</span></h2>
        <p className="para">
          I build high-performance software that solves real business challenges — from scalable <strong>Full-Stack Web Applications</strong> and enterprise <strong>PHP MVC systems</strong> to autonomous <strong>Agentic AI systems</strong> that reason, retrieve context, and execute complex workflows.
        </p>
        <p className="para" style={{ marginTop: "1rem" }}>
          Based in <strong>Sialkot, Pakistan</strong>, I work with global engineering teams and eCommerce brands. My expertise spans <strong>React.js, Node.js, Express, MongoDB, MySQL, and Shopify Liquid development</strong>, coupled with cutting-edge AI integrations using <strong>LangChain, FAISS vector databases, RAG architectures, and the Google Gemini API</strong>. I turn ambitious ideas into robust, production-grade applications.
        </p>
      </div>
    </section>
  );
};

export default About;
