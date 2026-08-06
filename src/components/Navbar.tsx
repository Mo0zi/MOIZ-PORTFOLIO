import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

interface NavbarProps {
  onOpenBlog?: () => void;
}

const Navbar = ({ onOpenBlog }: NavbarProps) => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        const href = element.getAttribute("href");
        if (href === "#blog") {
          e.preventDefault();
          if (onOpenBlog) onOpenBlog();
          else window.dispatchEvent(new CustomEvent("open-blog"));
          return;
        }
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let section = element.getAttribute("data-href");
          if (section && section !== "#blog") {
            smoother.scrollTo(section, true, "top top");
          }
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, [onOpenBlog]);

  return (
    <>
      <header className="header" role="banner">
        <a href="/#" className="navbar-title" data-cursor="disable" aria-label="Moiz Ahmed Portfolio Home">
          Moiz Ahmed
        </a>
        <a
          href="mailto:moizmalikofficiall@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
          aria-label="Send Email to Moiz Ahmed"
        >
          moizmalikofficiall@gmail.com
        </a>
        <nav aria-label="Main Portfolio Navigation">
          <ul>
            <li>
              <a data-href="#about" href="#about" aria-label="Navigate to About section">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#what-i-do" href="#what-i-do" aria-label="Navigate to Services section">
                <HoverLinks text="SERVICES" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work" aria-label="Navigate to Work section">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#blog" href="#blog" aria-label="Navigate to Engineering & AI Blog Hub">
                <HoverLinks text="BLOG" />
              </a>
            </li>
            <li>
              <a data-href="#career" href="#career" aria-label="Navigate to Career section">
                <HoverLinks text="CAREER" />
              </a>
            </li>
            <li>
              <a data-href="#reviews" href="#reviews" aria-label="Navigate to Client Reviews section">
                <HoverLinks text="REVIEWS" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact" aria-label="Navigate to Contact section">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
