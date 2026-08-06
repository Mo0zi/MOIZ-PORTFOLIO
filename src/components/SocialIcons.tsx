import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social" role="region" aria-label="Social Media Connections">
        <span>
          <a href="https://github.com/Mo0zi" target="_blank" rel="noopener noreferrer" aria-label="Moiz Ahmed GitHub Profile">
            <FaGithub aria-hidden="true" />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/moizahmed-developer" target="_blank" rel="noopener noreferrer" aria-label="Moiz Ahmed LinkedIn Profile — Senior Full Stack Developer & AI Engineer">
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </span>
        <span>
          <a href="https://x.com/Mo0ziofficiall" target="_blank" rel="noopener noreferrer" aria-label="Moiz Ahmed Twitter/X Profile">
            <FaXTwitter aria-hidden="true" />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/mo0zi.official/" target="_blank" rel="noopener noreferrer" aria-label="Moiz Ahmed Instagram Profile">
            <FaInstagram aria-hidden="true" />
          </a>
        </span>
        <span>
          <a href="https://www.fiverr.com/s/vvNZWK1" target="_blank" rel="noopener noreferrer" aria-label="Moiz Ahmed Fiverr Profile">
            <SiFiverr aria-hidden="true" />
          </a>
        </span>
        <span>
          <a href="https://wa.me/923249670130" target="_blank" rel="noopener noreferrer" aria-label="Moiz Ahmed WhatsApp Chat">
            <FaWhatsapp aria-hidden="true" />
          </a>
        </span>
      </div>
      <a className="resume-button" href="mailto:moizmalikofficiall@gmail.com?subject=Resume%20Request" aria-label="Request Moiz Ahmed's Resume via Email">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes aria-hidden="true" />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
