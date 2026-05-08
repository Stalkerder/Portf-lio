import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import personHead from "../assets/img/PersonHead.png";

const createProjectImageMap = () => {
  try {
    const projectImageContext = require.context("../assets/projects", false, /\.(png|jpe?g|webp)$/);

    return projectImageContext.keys().reduce((images, key) => {
      const fileName = key.replace("./", "");
      const slug = fileName
        .replace(/\.(png|jpe?g|webp)$/i, "")
        .replace(/-\d+$/, "");

      return {
        ...images,
        [slug]: [...(images[slug] || []), projectImageContext(key)],
      };
    }, {});
  } catch {
    return {};
  }
};

const projectImageMap = createProjectImageMap();

const projects = [
  {
    slug: "nexoops",
    title: "NexoOps",
    type: "Gestão operacional completa",
    badge: "OPS",
    visual: "ops",
    metric: "Aprovações",
    preview: ["Ordens", "Estoque", "Custos"],
    description:
      "Sistema para ordens de compra e serviço, almoxarifado, estoque, manutenção, orçamentos, aprovações, centros de custo, alertas, dashboards e auditoria.",
    highlights: ["React + TypeScript", ".NET 9", "EF Core/MySQL", "Microsoft Graph", "Docker"],
  },
  {
    slug: "truckwash",
    title: "TruckWash",
    type: "Agendamento de lavagens",
    badge: "WASH",
    visual: "wash",
    metric: "Tempo real",
    preview: ["Agenda", "Lavadores", "Chat"],
    description:
      "Controle de lavagens de caminhões, carretas e cavalos com agenda, horários disponíveis, status, follow-up, chat, e-mail e perfis por função.",
    highlights: ["React Query", "SignalR", "Zustand", ".NET 8", "Docker Compose"],
  },
  {
    slug: "routecost",
    title: "RouteCost",
    type: "Fechamento de viagens",
    badge: "COST",
    visual: "cost",
    metric: "Fechamento",
    preview: ["Viagens", "Diesel", "ARLA"],
    description:
      "Gestão de viagens de gado desde a programação até o fechamento, com despesas, diesel, ARLA, alertas, auditoria e dashboard operacional.",
    highlights: ["Material UI", "Nivo Charts", "XLSX", ".NET 9", "JWT"],
  },
  {
    slug: "exportacao",
    title: "Exportação",
    type: "Operação de carga viva",
    badge: "EXP",
    visual: "export",
    metric: "Docs + IA",
    preview: ["Porto", "CTe", "Equipe"],
    description:
      "Gestão de exportação com equipes internas, externas e porto, análise documental com IA, conformidades, CTe, motoristas, veículos, horários e permissões.",
    highlights: [".NET 9", "MediatR", "FluentValidation", "Serilog", "xUnit"],
  },
  {
    slug: "rastrecamargo",
    title: "RastreCamargo",
    type: "Rastreamento consentido",
    badge: "MAP",
    visual: "track",
    metric: "Live map",
    preview: ["GPS", "Rotas", "Painel"],
    description:
      "Aplicação mobile para rastreamento em tempo real com consentimento do usuário, permissões de localização e painel web com visualização em mapa.",
    highlights: ["React Native", "Expo", "Firebase", "Leaflet", "Geolocation"],
  },
  {
    slug: "staffflow",
    title: "StaffFlow",
    type: "Sistema de RH",
    badge: "RH",
    visual: "staff",
    metric: "RH 360",
    preview: ["Ponto", "Férias", "SST"],
    description:
      "Gestão de colaboradores com contratação, onboarding, documentos, férias, ponto, banco de horas, pagamentos, SST, vencimentos, workflow e auditoria.",
    highlights: ["React 19", "Material UI", ".NET 9", "EF Core", "MySQL"],
  },
  {
    slug: "inspecaoapp",
    title: "InspeçãoApp",
    type: "Inspeções e planos de ação",
    badge: "INSP",
    visual: "inspect",
    metric: "Planos",
    preview: ["Setores", "Causas", "CIPA"],
    description:
      "Fluxo para inspeções por setor, itens analisados, inconformidades, causas, responsáveis, CIPA, etapas de correção e acompanhamento de planos de ação.",
    highlights: ["Tailwind CSS", "MSAL", "SignalR", ".NET 8", "MySQL"],
  },
  {
    slug: "checklistapp",
    title: "ChecklistApp",
    type: "Checklist veicular",
    badge: "CHK",
    visual: "checklist",
    metric: "Fotos",
    preview: ["Itens", "Veículos", "Alertas"],
    description:
      "Checklist em Power Apps para caminhões e carretas com fotos, responsáveis, conformidades, alertas por e-mail e base relacional em SharePoint Lists.",
    highlights: ["Power Apps", "SharePoint Lists", "Power Automate", "E-mail", "Dashboard"],
  },
  {
    slug: "leilaoapp",
    title: "LeilãoApp",
    type: "Leilão corporativo",
    badge: "BID",
    visual: "auction",
    metric: "Lances",
    preview: ["Lotes", "Regras", "E-mails"],
    description:
      "Leilão em Power Apps com criação de lotes, imagens, lance inicial, abertura, fechamento, histórico, nomes mascarados e notificações para ganhadores e participantes.",
    highlights: ["Power Apps", "SharePoint Lists", "Power Automate", "Regras de lance", "E-mail"],
  },
  {
    slug: "mutiroes-comunitarios",
    title: "Mutirões Comunitários",
    type: "Projeto full-stack público",
    badge: "COM",
    visual: "community",
    metric: "Eventos",
    preview: ["Check-in", "Fotos", "Grafana"],
    description:
      "Plataforma de eventos comunitários com login JWT, eventos, geolocalização, check-in por posição, fotos, recompensas, Prometheus e Grafana.",
    highlights: ["React/Vite", "Django REST", "Flask", "PostgreSQL", "Grafana"],
  },
  {
    slug: "automacoes-operacionais",
    title: "Automações operacionais",
    type: "Python, dados e RPA",
    badge: "PY",
    visual: "automation",
    metric: "RPA",
    preview: ["Excel", "OCR", "Power BI"],
    description:
      "Automações para Excel, OCR em PDF, Power BI, mensagens, navegação assistida e rotinas operacionais repetitivas.",
    highlights: ["Python", "Pandas", "OpenPyXL", "Playwright", "Selenium"],
  },
];

const ProjectPreview = ({ project }) => (
  <div className="preview-shell">
    <div className="preview-topbar">
      <span className="preview-brand">{project.badge}</span>
      <span className="preview-dot"></span>
      <span className="preview-dot"></span>
      <span className="preview-dot"></span>
    </div>
    <div className="preview-body">
      <div className="preview-sidebar">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="preview-main">
        <div className="preview-heading">
          <span>{project.type}</span>
          <strong>{project.metric}</strong>
        </div>
        <div className="preview-kpis">
          {project.preview.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="preview-chart">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="preview-table">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
);

const ProjectGallery = ({ project, slideIndex, onPrevious, onNext, onSelect }) => {
  const images = projectImageMap[project.slug] || [];

  if (!images.length) {
    return <ProjectPreview project={project} />;
  }

  const currentIndex = slideIndex % images.length;

  return (
    <div className="project-gallery">
      <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1} do projeto ${project.title}`} />
      {images.length > 1 && (
        <div className="gallery-controls" aria-label="Paginação de imagens do projeto">
          <button type="button" onClick={onPrevious} aria-label="Imagem anterior">
            ←
          </button>
          <div className="gallery-dots">
            {images.map((image, index) => (
              <button
                type="button"
                className={index === currentIndex ? "active" : ""}
                aria-label={`Ir para imagem ${index + 1}`}
                onClick={() => onSelect(index)}
                key={image}
              />
            ))}
          </div>
          <button type="button" onClick={onNext} aria-label="Próxima imagem">
            →
          </button>
        </div>
      )}
    </div>
  );
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [transition, setTransition] = useState(null);
  const timersRef = useRef([]);

  useEffect(() => {
    document.body.style.overflow = activeProject || transition ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject, transition]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const openProject = (event, project) => {
    if (transition) {
      return;
    }

    const cardRect = event.currentTarget.getBoundingClientRect();
    const targetWidth = Math.min(1040, window.innerWidth - 56);
    const targetHeight = Math.min(620, window.innerHeight - 72);
    const targetX = (window.innerWidth - targetWidth) / 2;
    const targetY = (window.innerHeight - targetHeight) / 2;

    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    setActiveProject(null);
    setActiveSlide(0);
    setTransition({
      project,
      startX: cardRect.left,
      startY: cardRect.top,
      startWidth: cardRect.width,
      startHeight: cardRect.height,
      targetX,
      targetY,
      targetWidth,
      targetHeight,
    });

    timersRef.current = [
      window.setTimeout(() => setActiveProject(project), 360),
      window.setTimeout(() => setTransition(null), 620),
    ];
  };

  const handleProjectKeyDown = (event, project) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(event, project);
    }
  };

  const overlay = (
    <>
      {transition && (
        <div
          className="project-transition"
          aria-hidden="true"
          style={{
            "--start-x": `${transition.startX}px`,
            "--start-y": `${transition.startY}px`,
            "--start-width": `${transition.startWidth}px`,
            "--start-height": `${transition.startHeight}px`,
            "--target-x": `${transition.targetX}px`,
            "--target-y": `${transition.targetY}px`,
            "--target-width": `${transition.targetWidth}px`,
            "--target-height": `${transition.targetHeight}px`,
          }}
        >
          <div className={`transition-card project-visual-${transition.project.visual}`}>
            <div className="transition-card-gloss"></div>
            <span className="transition-card-badge">{transition.project.badge}</span>
            <div>
              <span>{transition.project.type}</span>
              <strong>{transition.project.title}</strong>
            </div>
            <img src={personHead} alt="" />
          </div>
        </div>
      )}

      {activeProject && (
        <section
          className="project-detail"
          aria-modal="true"
          role="dialog"
          aria-labelledby="project-detail-title"
          onClick={() => setActiveProject(null)}
        >
          <button
            className="project-detail-close"
            type="button"
            aria-label="Fechar detalhes do projeto"
            onClick={() => setActiveProject(null)}
          ></button>
          <div className="project-detail-card" onClick={(event) => event.stopPropagation()}>
            <div className={`project-detail-visual project-visual-${activeProject.visual}`}>
              <ProjectGallery
                project={activeProject}
                slideIndex={activeSlide}
                onPrevious={() => {
                  const total = projectImageMap[activeProject.slug]?.length || 1;
                  setActiveSlide((current) => (current - 1 + total) % total);
                }}
                onNext={() => {
                  const total = projectImageMap[activeProject.slug]?.length || 1;
                  setActiveSlide((current) => (current + 1) % total);
                }}
                onSelect={setActiveSlide}
              />
              <img className="project-detail-head" src={personHead} alt="" />
            </div>
            <div className="project-detail-copy">
              <span>{activeProject.type}</span>
              <h3 id="project-detail-title">{activeProject.title}</h3>
              <p>{activeProject.description}</p>
              <div className="project-detail-columns">
                <div>
                  <strong>Fluxos principais</strong>
                  <ul>
                    {activeProject.preview.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Stack aplicada</strong>
                  <ul>
                    {activeProject.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );

  return (
    <>
      <section className="project" id="projects">
        <div className="container">
          <span className="section-kicker">Projetos</span>
          <h2>Sistemas completos, com regra de negócio de verdade.</h2>
          <p>
            Produtos internos, automações e aplicações full-stack com aprovações,
            auditoria, dashboards, integrações, permissões e operação ponta a ponta.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="proj-imgbx"
                key={project.title}
                role="button"
                tabIndex="0"
                aria-label={`Abrir detalhes do projeto ${project.title}`}
                onClick={(event) => openProject(event, project)}
                onKeyDown={(event) => handleProjectKeyDown(event, project)}
              >
                <div className={`project-visual project-visual-${project.visual}`} aria-hidden="true">
                  <ProjectPreview project={project} />
                  <span className="project-stamp">
                    <img src={personHead} alt="" />
                  </span>
                </div>
                <div className="proj-txtx">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {typeof document !== "undefined" ? createPortal(overlay, document.body) : null}
    </>
  );
};
