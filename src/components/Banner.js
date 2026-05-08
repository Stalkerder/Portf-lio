import { useEffect, useState } from "react";
import character from "../assets/img/Person.png";

const words = ["Full Stack Developer", "React + TypeScript", ".NET + Python"];

export const Banner = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 45 : 92;
    const pauseAfterTyping = 1100;
    const pauseAfterDeleting = 260;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === currentWord) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && displayText === "") {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
          return;
        }

        setDisplayText((current) =>
          isDeleting
            ? currentWord.substring(0, current.length - 1)
            : currentWord.substring(0, current.length + 1)
        );
      },
      !isDeleting && displayText === currentWord
        ? pauseAfterTyping
        : isDeleting && displayText === ""
          ? pauseAfterDeleting
          : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="banner" id="home">
      <div className="container banner-grid">
        <div className="banner-copy">
          <span className="tagline">Bem-vindo ao meu Portfólio</span>
          <h1>
            Olá! Eu sou
            <br />
            Marco Germano,
            <br />
            <span className="txt-rotate" aria-live="polite">
              <span className="wrap">{displayText || "\u00a0"}</span>
            </span>
          </h1>
          <p>
            Desenvolvo soluções corporativas com React, .NET, Python e Banco de dados, transformando processos manuais em sistemas modernos, automatizados e escaláveis. 
            Atuo na criação de interfaces intuitivas, APIs robustas, dashboards analíticos e integrações entre sistemas, com foco em performance, confiabilidade e eficiência operacional.
          </p>
          <div className="banner-actions">
            <a className="primary-action" href="#contact">
              Vamos conversar
              <span aria-hidden="true">→</span>
            </a>
            <a className="secondary-action" href="#projects">
              Ver projetos
            </a>
          </div>
        </div>

        <div className="character-stage" aria-label="Personagem do portfólio">
          <span className="character-aura"></span>
          <span className="character-platform"></span>
          <img className="character-image" src={character} alt="Personagem do portfólio" />
        </div>
      </div>
    </section>
  );
};
