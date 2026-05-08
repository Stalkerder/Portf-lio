import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Início" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a className="navbar-brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">MF</span>
          <span className="brand-name">Marco Germano</span>
        </a>
        <button
          className={`navbar-toggler ${expanded ? "open" : ""}`}
          type="button"
          aria-controls="navbar-menu"
          aria-expanded={expanded}
          aria-label="Abrir menu"
          onClick={() => setExpanded((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${expanded ? "show" : ""}`} id="navbar-menu">
          <div className="navbar-links">
            {links.map((link) => (
              <a className="navbar-link" href={link.href} onClick={closeMenu} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="navbar-actions">
            <a className="social-link" href="https://github.com/Stalkerder" aria-label="GitHub">
              GH
            </a>
            <a className="social-link" href="https://www.linkedin.com" aria-label="LinkedIn">
              IN
            </a>
            <a className="connect-button" href="#contact" onClick={closeMenu}>
              Vamos conversar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
