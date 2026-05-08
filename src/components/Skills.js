const stackGroups = [
  {
    title: "Front-end & UI",
    description: "Interfaces web responsivas, dashboards e fluxos internos com acabamento visual.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "React Router",
      "React Query",
      "Zustand",
      "Recharts",
      "Nivo Charts",
    ],
  },
  {
    title: "Back-end & APIs",
    description: "APIs e sistemas corporativos com autenticação, regras de negócio e integrações.",
    skills: [
      "C#",
      ".NET 8/9",
      "ASP.NET Core",
      "Entity Framework Core",
      "REST APIs",
      "JWT",
      "Swagger/OpenAPI",
      "SignalR",
      "Microsoft Graph",
      "QuestPDF",
      "Django REST",
      "Flask",
    ],
  },
  {
    title: "Dados & automação",
    description: "Rotinas para reduzir trabalho manual com arquivos, navegador, OCR e planilhas.",
    skills: [
      "Python",
      "Pandas",
      "OpenPyXL",
      "Playwright",
      "Selenium",
      "PyAutoGUI",
      "Tesseract OCR",
      "PDF/Excel",
      "Power BI",
      "CustomTkinter",
    ],
  },
  {
    title: "Power Platform & Microsoft 365",
    description: "Soluções low-code com regras de negócio, bases relacionais e automações de e-mail.",
    skills: [
      "Power Apps",
      "Power Automate",
      "SharePoint Lists",
      "Outlook/E-mail",
      "Microsoft 365",
      "Dashboards",
      "Regras de aprovação",
      "Notificações",
    ],
  },
  {
    title: "Mobile, mapas & tempo real",
    description: "Aplicações com localização, mapas, painel web e comunicação em tempo real.",
    skills: [
      "React Native",
      "Expo",
      "Firebase",
      "Leaflet",
      "React Leaflet",
      "Geolocation",
      "PWA",
      "Real-time UI",
    ],
  },
  {
    title: "Banco, DevOps & qualidade",
    description: "Base para entregar sistemas com estrutura, testes e ambiente mais previsível.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Prometheus",
      "Grafana",
      "Git",
      "GitHub",
      "xUnit",
      "FluentValidation",
      "MediatR",
      "Serilog",
      "Clean Architecture",
    ],
  },
];

export const Skills = () => (
  <section className="skill" id="skills">
    <div className="container">
      <div className="skill-bx">
        <span className="section-kicker">Stack atual</span>
        <h2>Stack construída em projetos reais.</h2>
        <p>
          Tecnologias que aparecem nos meus sistemas: front-end em React, APIs
          .NET, automações Python, soluções Power Platform, dados, deploy e
          integrações corporativas.
        </p>

        <div className="stack-grid" aria-label="Stacks por área">
          {stackGroups.map((group) => (
            <section className="stack-group" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  </section>
);
