const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
const particles = [];
const PARTICLE_COUNT = 85;
const languageSelect = document.getElementById("language-select");

const skillIconMap = {
  "java": "openjdk",
  "python": "python",
  "javascript": "javascript",
  "typescript": "typescript",
  "angular": "angular",
  "react": "react",
  "spring boot": "springboot",
  "spring batch": "spring",
  "jee": "jakartaee",
  "node.js": "nodedotjs",
  "nodejs": "nodedotjs",
  "angular material": "angular",
  "material ui": "mui",
  "nx dev": "nx",
  "microservicios con java": "openjdk",
  "microservices with java": "openjdk",
  "microfrontends (module federation) con angular y react": "webpack",
  "microfrontends (module federation) with angular and react": "webpack",
  "web services (rest api)": "postman",
  "azure devops": "azuredevops",
  "docker": "docker",
  "aws": "amazonaws",
  "ec2": "amazonaws",
  "rds": "amazonaws",
  "s3": "amazonaws",
  "iam": "amazonaws",
  "parameter store": "amazonaws",
  "cloudwatch": "amazonaws",
  "aws ec2": "amazonec2",
  "aws rds": "amazonrds",
  "aws s3": "amazons3",
  "aws iam": "amazoniam",
  "aws parameter store": "awssystemsmanager",
  "aws cloudwatch": "amazoncloudwatch",
  "kubernetes": "kubernetes",
  "oracle database": "oracle",
  "postgresql": "postgresql",
  "mongodb": "mongodb",
  "mysql": "mysql",
  "redis cache": "redis",
  "redis caché": "redis",
  "git": "git",
  "gitlab": "gitlab",
  "kafka": "apachekafka",
  "keycloak": "keycloak",
  "junit": "junit5",
  "mockito": "openjdk",
  "jasmine": "jasmine",
  "karma": "karma",
  "jest": "jest"
};

const skillIconFallbackMap = {
  "azure devops": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
  "aws": "./assets/icons/aws.svg",
  "ec2": "./assets/icons/aws.svg",
  "rds": "./assets/icons/aws.svg",
  "s3": "./assets/icons/aws.svg",
  "iam": "./assets/icons/aws.svg",
  "parameter store": "./assets/icons/aws.svg",
  "cloudwatch": "./assets/icons/aws.svg",
  "aws ec2": "./assets/icons/aws.svg",
  "aws rds": "./assets/icons/aws.svg",
  "aws s3": "./assets/icons/aws.svg",
  "aws iam": "./assets/icons/aws.svg",
  "aws parameter store": "./assets/icons/aws.svg",
  "aws cloudwatch": "./assets/icons/aws.svg"
};

const skillIconPrimaryUrlMap = {
  "azure devops": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
  "aws": "./assets/icons/aws.svg",
  "ec2": "./assets/icons/aws.svg",
  "rds": "./assets/icons/aws.svg",
  "s3": "./assets/icons/aws.svg",
  "iam": "./assets/icons/aws.svg",
  "parameter store": "./assets/icons/aws.svg",
  "cloudwatch": "./assets/icons/aws.svg",
  "aws ec2": "./assets/icons/aws.svg",
  "aws rds": "./assets/icons/aws.svg",
  "aws s3": "./assets/icons/aws.svg",
  "aws iam": "./assets/icons/aws.svg",
  "aws parameter store": "./assets/icons/aws.svg",
  "aws cloudwatch": "./assets/icons/aws.svg"
};

const translations = {
  es: {
    pageTitle: "Kevin Berrio | Software Engineer",
    metaDescription: "Portafolio de Jhon Kevin Berrio Lopez, Software Engineer Full Stack",
    languageLabel: "Idioma",
    languageSelectAria: "Selector de idioma",
    navExperience: "Experiencia",
    navEducation: "Formación",
    navCertifications: "Cursos",
    navSkills: "Habilidades",
    navAbout: "Perfil",
    heroEyebrow: "Software Engineer Full Stack",
    heroTitle: 'Hola, soy <span>Jhon Kevin Berrio Lopez</span>',
    heroDescription:
      "Especializado en arquitectura moderna, microservicios y microfrontends para construir productos robustos, escalables y listos para producción.",
    heroQuote: '"Transformo necesidades complejas en soluciones escalables y mantenibles."',
    heroBtnExperience: "Ver experiencia",
    heroBtnAbout: "Conóceme",
    heroStackTitle: "Stack principal",
    heroStack: [
      "Java + Spring Boot",
      "Angular + React + NX",
      "Docker + Kubernetes + Jenkins",
      "AWS + CI/CD + Arquitectura limpia"
    ],
    heroLocation: "📍 Colombia",
    experienceTitle: "Experiencia",
    expIntempoRole: "Desarrollador Full Stack - Intempo S.A.S.",
    expIntempoPeriod: "Septiembre 2023 - Diciembre 2025",
    expIntempoList: [
      "Implementación de microservicios con Java 11, Java 17, Spring Boot y Spring Batch, siguiendo lineamientos de Arquitectura Hexagonal y Clean Architecture definidos por el equipo de arquitectura.",
      "Desarrollo de APIs REST seguras integradas con Keycloak para autenticación y control de acceso.",
      "Integración de mensajería asíncrona mediante Apache Kafka, participando en la implementación de flujos desacoplados para procesamiento de eventos.",
      "Construcción de microfrontends con Angular y Module Federation (NX), asegurando cumplimiento de estándares técnicos y coherencia entre módulos.",
      "Optimización de consultas en Oracle y PostgreSQL en procesos de alta concurrencia.",
      "Contenerización con Docker y despliegue en AWS (EC2, RDS, S3, IAM, Store Parameter, Cloud Watch) bajo pipelines de CI/CD con Jenkins y Azure DevOps, gestionando infraestructura basada en Kubernetes para orquestación de contenedores.",
      "Desarrollo de pruebas unitarias y de integración con JUnit y Mockito, garantizando estabilidad antes de producción.",
      "Participación en análisis de requerimientos funcionales y no funcionales, asegurando cumplimiento de estándares de rendimiento y disponibilidad.",
      "Ejecución de pruebas de estrés y rendimiento con Apache JMeter, evaluando el comportamiento del sistema bajo alta carga.",
      "Desarrollo de librerías reutilizables en Angular y Spring Boot, gestionadas y publicadas mediante Verdaccio como npm private registry/package distribution, facilitando distribución y versionamiento entre equipos."
    ],
    expHeinsohnRole: "Desarrollador Full Stack - Heinsohn Business Technology",
    expHeinsohnPeriod: "Octubre 2021 - Septiembre 2023",
    expHeinsohnList: [
      "Desarrollo y mantenimiento de aplicaciones empresariales utilizando Java 11, Spring Boot, JavaScript/TypeScript, Node.js, Angular, React y Oracle JET, participando en soluciones orientadas a arquitectura modular.",
      "Implementación de microfrontends, facilitando la integración de múltiples tecnologías frontend y la independencia entre módulos de desarrollo.",
      "Gestión de entornos de desarrollo mediante contenedores Docker, levantando servicios como Oracle Database y otros componentes necesarios para pruebas e integración.",
      "Administración y conexión a servidores Linux utilizando MobaXterm, apoyando tareas de despliegue, monitoreo y diagnóstico en ambientes remotos.",
      "Integración y manejo de bases de datos relacionales y NoSQL, incluyendo PostgreSQL y MongoDB, así como implementación de Redis Cache para optimización de rendimiento.",
      "Identificación y corrección de errores en aplicaciones existentes, mejorando estabilidad, mantenibilidad y tiempos de respuesta.",
      "Ejecución de pruebas funcionales y validación de aplicaciones antes de su despliegue a entornos productivos.",
      "Colaboración activa con el equipo de desarrollo para resolver problemas técnicos y mejorar prácticas de desarrollo."
    ],
    academicTitle: "Formación Académica",
    academicList: [
      "Ingeniería de Software | Institución Universitaria EAM",
      "Análisis y Desarrollo de Sistemas de Información (2022) - SENA",
      "Bachiller y Técnico en Programación (2020) | Institución Educativa Laura Vicuña"
    ],
    certificationsTitle: "Cursos y Certificaciones",
    certificationsList: [
      "Scrum Fundamentals Certified - scrumstudy.com",
      "Tecnólogo en Análisis y Desarrollo de Sistemas de Información - SENA",
      "Bases de Datos con MySQL - SENA",
      "Diseño de Páginas Web usando PHP y MySQL - SENA"
    ],
    skillsTitle: "Habilidades Técnicas",
    skillsCat1: '<span class="emoji-icon" aria-hidden="true">💻</span> Lenguajes de Programación',
    skillsCat1Items: ["Java", "Python", "JavaScript", "TypeScript"],
    skillsCat2: '<span class="emoji-icon" aria-hidden="true">🧩</span> Frameworks y Librerías',
    skillsCat2Items: ["Angular", "React", "Spring Boot", "Spring Batch", "JEE", "Node.js", "Angular Material", "Material UI", "NX Dev"],
    skillsCat3: '<span class="emoji-icon" aria-hidden="true">🏗️</span> Arquitectura y Desarrollo',
    skillsCat3Items: [
      "Microservicios con Java",
      "Microfrontends (Module Federation) con Angular y React",
      "Web Services (REST API)"
    ],
    skillsCat4: '<span class="emoji-icon" aria-hidden="true">☁️</span> Cloud & DevOps',
    skillsCat4Items: [
      "Azure DevOps",
      "Docker",
      "AWS",
      "EC2",
      "RDS",
      "S3",
      "IAM",
      "Parameter Store",
      "CloudWatch",
      "Kubernetes"
    ],
    skillsCat5: '<span class="emoji-icon" aria-hidden="true">🗄️</span> Bases de Datos',
    skillsCat5Items: ["Oracle Database", "PostgreSQL", "MongoDB", "MySQL", "Redis Caché"],
    skillsCat6: '<span class="emoji-icon" aria-hidden="true">🔧</span> Herramientas y Control de Versiones',
    skillsCat6Items: ["Git", "GitLab", "Kafka", "Keycloak"],
    skillsCat7: '<span class="emoji-icon" aria-hidden="true">🧪</span> Pruebas Unitarias',
    skillsCat7Items: ["JUnit", "Mockito", "Jasmine", "Karma", "Jest"],
    aboutTitle: "Perfil Profesional",
    aboutP1:
      "Desarrollador de Software Full Stack con experiencia en el diseño, desarrollo e implementación de soluciones tecnológicas escalables para aplicaciones web y sistemas empresariales. He participado en todo el ciclo de desarrollo de software, desde el análisis de requerimientos hasta la puesta en producción, aplicando buenas prácticas de calidad, arquitectura y mantenibilidad.",
    aboutP2:
      "Cuento con experiencia en arquitecturas modernas como Microservicios y Microfrontends, integración de APIs y gestión de bases de datos relacionales y no relacionales. Me caracterizo por transformar necesidades complejas en soluciones eficientes, con enfoque en la optimización de procesos, la estabilidad de los sistemas y la experiencia del usuario. Destaco por mi pensamiento analítico, proactividad y trabajo colaborativo, aportando valor constante a los equipos y a los proyectos en los que participo."
  },
  en: {
    pageTitle: "Kevin Berrio | Software Engineer",
    metaDescription: "Portfolio of Jhon Kevin Berrio Lopez, Full Stack Software Engineer",
    languageLabel: "Language",
    languageSelectAria: "Language selector",
    navExperience: "Experience",
    navEducation: "Academic",
    navCertifications: "Courses",
    navSkills: "Skills",
    navAbout: "Profile",
    heroEyebrow: "Full Stack Software Engineer",
    heroTitle: 'Hi, I am <span>Jhon Kevin Berrio Lopez</span>',
    heroDescription:
      "Specialized in modern architecture, microservices and microfrontends to build robust, scalable and production-ready products.",
    heroQuote: '"I transform complex needs into scalable and maintainable solutions."',
    heroBtnExperience: "View experience",
    heroBtnAbout: "About me",
    heroStackTitle: "Core stack",
    heroStack: [
      "Java + Spring Boot",
      "Angular + React + NX",
      "Docker + Kubernetes + Jenkins",
      "AWS + CI/CD + Clean Architecture"
    ],
    heroLocation: "📍 Colombia",
    experienceTitle: "Experience",
    expIntempoRole: "Full Stack Developer - Intempo S.A.S.",
    expIntempoPeriod: "September 2023 - December 2025",
    expIntempoList: [
      "Implemented microservices with Java 11, Java 17, Spring Boot and Spring Batch, following Hexagonal Architecture and Clean Architecture guidelines defined by the architecture team.",
      "Developed secure REST APIs integrated with Keycloak for authentication and access control.",
      "Integrated asynchronous messaging with Apache Kafka, contributing to decoupled event-processing flows.",
      "Built microfrontends with Angular and Module Federation (NX), ensuring technical standards compliance and module consistency.",
      "Optimized Oracle and PostgreSQL queries in high-concurrency processes.",
      "Containerized services with Docker and deployed on AWS (EC2, RDS, S3, IAM, Parameter Store, CloudWatch) under CI/CD pipelines with Jenkins and Azure DevOps, managing Kubernetes-based container orchestration.",
      "Developed unit and integration tests with JUnit and Mockito, ensuring stability before production releases.",
      "Participated in functional and non-functional requirements analysis, ensuring performance and availability standards.",
      "Executed stress and performance testing with Apache JMeter, evaluating system behavior under heavy load.",
      "Developed reusable libraries in Angular and Spring Boot, managed and published through Verdaccio as an npm private registry/package distribution, enabling distribution and versioning across teams."
    ],
    expHeinsohnRole: "Full Stack Developer - Heinsohn Business Technology",
    expHeinsohnPeriod: "October 2021 - September 2023",
    expHeinsohnList: [
      "Developed and maintained enterprise applications using Java 11, Spring Boot, JavaScript/TypeScript, Node.js, Angular, React and Oracle JET, contributing to modular-architecture solutions.",
      "Implemented microfrontends, enabling integration of multiple frontend technologies and independent development modules.",
      "Managed development environments with Docker containers, bringing up Oracle Database services and other required components for testing and integration.",
      "Administered and connected to Linux servers using MobaXterm, supporting deployment, monitoring and diagnostics in remote environments.",
      "Integrated and managed relational and NoSQL databases, including PostgreSQL and MongoDB, and implemented Redis Cache for performance optimization.",
      "Identified and fixed issues in existing applications, improving stability, maintainability and response times.",
      "Executed functional tests and validated applications before deployment to production environments.",
      "Actively collaborated with the development team to solve technical issues and improve development practices."
    ],
    academicTitle: "Academic Background",
    academicList: [
      "Software Engineering | EAM University Institution",
      "Systems Information Analysis and Development (2022) - SENA",
      "High School Diploma and Programming Technician (2020) | Laura Vicuna Educational Institution"
    ],
    certificationsTitle: "Courses and Certifications",
    certificationsList: [
      "Scrum Fundamentals Certified - scrumstudy.com",
      "Systems Information Analysis and Development Technologist - SENA",
      "Databases with MySQL - SENA",
      "Web Page Design using PHP and MySQL - SENA"
    ],
    skillsTitle: "Technical Skills",
    skillsCat1: '<span class="emoji-icon" aria-hidden="true">💻</span> Programming Languages',
    skillsCat1Items: ["Java", "Python", "JavaScript", "TypeScript"],
    skillsCat2: '<span class="emoji-icon" aria-hidden="true">🧩</span> Frameworks and Libraries',
    skillsCat2Items: ["Angular", "React", "Spring Boot", "Spring Batch", "JEE", "Node.js", "Angular Material", "Material UI", "NX Dev"],
    skillsCat3: '<span class="emoji-icon" aria-hidden="true">🏗️</span> Architecture and Development',
    skillsCat3Items: [
      "Microservices with Java",
      "Microfrontends (Module Federation) with Angular and React",
      "Web Services (REST API)"
    ],
    skillsCat4: '<span class="emoji-icon" aria-hidden="true">☁️</span> Cloud & DevOps',
    skillsCat4Items: [
      "Azure DevOps",
      "Docker",
      "AWS",
      "EC2",
      "RDS",
      "S3",
      "IAM",
      "Parameter Store",
      "CloudWatch",
      "Kubernetes"
    ],
    skillsCat5: '<span class="emoji-icon" aria-hidden="true">🗄️</span> Databases',
    skillsCat5Items: ["Oracle Database", "PostgreSQL", "MongoDB", "MySQL", "Redis Cache"],
    skillsCat6: '<span class="emoji-icon" aria-hidden="true">🔧</span> Tools and Version Control',
    skillsCat6Items: ["Git", "GitLab", "Kafka", "Keycloak"],
    skillsCat7: '<span class="emoji-icon" aria-hidden="true">🧪</span> Unit Testing',
    skillsCat7Items: ["JUnit", "Mockito", "Jasmine", "Karma", "Jest"],
    aboutTitle: "Professional Profile",
    aboutP1:
      "Full Stack Software Developer with experience in the design, development and implementation of scalable technology solutions for web applications and enterprise systems. I have participated in the full software development lifecycle, from requirements analysis to production deployment, applying best practices in quality, architecture and maintainability.",
    aboutP2:
      "I have experience with modern architectures such as Microservices and Microfrontends, API integration, and management of relational and non-relational databases. I stand out for transforming complex needs into efficient solutions, with a focus on process optimization, system stability and user experience. My strengths include analytical thinking, proactivity and collaborative work, consistently adding value to teams and projects."
  }
};

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticle() {
  const speed = 0.15 + Math.random() * 0.45;
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 0.8 + Math.random() * 2.2,
    vx: (Math.random() - 0.5) * speed,
    vy: (Math.random() - 0.5) * speed,
    alpha: 0.18 + Math.random() * 0.42
  };
}

function initializeParticles() {
  particles.length = 0;
  for (let i = 0; i < PARTICLE_COUNT; i += 1) {
    particles.push(createParticle());
  }
}

function drawParticle(particle) {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(128, 190, 255, ${particle.alpha})`;
  ctx.fill();
}

function updateParticle(particle) {
  particle.x += particle.vx;
  particle.y += particle.vy;

  if (particle.x < 0 || particle.x > canvas.width) {
    particle.vx *= -1;
  }
  if (particle.y < 0 || particle.y > canvas.height) {
    particle.vy *= -1;
  }
}

function connectParticles() {
  const maxDistance = 110;
  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < maxDistance) {
        const opacity = 1 - distance / maxDistance;
        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.14})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const particle of particles) {
    updateParticle(particle);
    drawParticle(particle);
  }
  connectParticles();
  requestAnimationFrame(animate);
}

function setActiveNav() {
  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.remove("active"));
          const current = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (current) current.classList.add("active");
        }
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setHTML(id, value) {
  const element = document.getElementById(id);
  if (element) element.innerHTML = value;
}

function setList(id, items) {
  const element = document.getElementById(id);
  if (!element) return;
  element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderSkillChips(id, items) {
  const container = document.getElementById(id);
  if (!container) return;

  container.innerHTML = items
    .map((item) => {
      const key = item.toLowerCase();
      const icon = skillIconMap[key] || "codeberg";
      const primaryIcon = skillIconPrimaryUrlMap[key] || `https://cdn.simpleicons.org/${icon}`;
      const fallbackIcon = skillIconFallbackMap[key] || "https://cdn.simpleicons.org/codeberg";
      return `
        <span class="skill-tech-chip">
          <img
            src="${primaryIcon}"
            alt="${item} icon"
            loading="lazy"
            onerror="this.onerror=null;this.src='${fallbackIcon}'"
          />
          <span>${item}</span>
        </span>
      `;
    })
    .join("");
}

function applyLanguage(language) {
  const lang = translations[language] ? language : "es";
  const t = translations[lang];

  document.documentElement.lang = lang;
  document.title = t.pageTitle;

  const metaDescription = document.getElementById("meta-description");
  if (metaDescription) metaDescription.setAttribute("content", t.metaDescription);

  setText("language-label", t.languageLabel);
  if (languageSelect) {
    languageSelect.value = lang;
    languageSelect.setAttribute("aria-label", t.languageSelectAria);
  }

  setText("nav-experience", t.navExperience);
  setText("nav-education", t.navEducation);
  setText("nav-certifications", t.navCertifications);
  setText("nav-skills", t.navSkills);
  setText("nav-about", t.navAbout);
  setText("hero-eyebrow", t.heroEyebrow);
  setHTML("hero-title", t.heroTitle);
  setText("hero-description", t.heroDescription);
  setText("hero-quote", t.heroQuote);
  setText("hero-btn-experience", t.heroBtnExperience);
  setText("hero-btn-about", t.heroBtnAbout);
  setText("hero-stack-title", t.heroStackTitle);
  setList("hero-stack-list", t.heroStack);
  setText("hero-location", t.heroLocation);
  setText("experience-title", t.experienceTitle);
  setText("exp-intempo-role", t.expIntempoRole);
  setText("exp-intempo-period", t.expIntempoPeriod);
  setList("exp-intempo-list", t.expIntempoList);
  setText("exp-heinsohn-role", t.expHeinsohnRole);
  setText("exp-heinsohn-period", t.expHeinsohnPeriod);
  setList("exp-heinsohn-list", t.expHeinsohnList);
  setText("academic-title", t.academicTitle);
  setList("academic-list", t.academicList);
  setText("certifications-title", t.certificationsTitle);
  setList("certifications-list", t.certificationsList);
  setText("skills-title", t.skillsTitle);
  setHTML("skills-cat-1", t.skillsCat1);
  renderSkillChips("skills-cat-1-items", t.skillsCat1Items);
  setHTML("skills-cat-2", t.skillsCat2);
  renderSkillChips("skills-cat-2-items", t.skillsCat2Items);
  setHTML("skills-cat-3", t.skillsCat3);
  renderSkillChips("skills-cat-3-items", t.skillsCat3Items);
  setHTML("skills-cat-4", t.skillsCat4);
  renderSkillChips("skills-cat-4-items", t.skillsCat4Items);
  setHTML("skills-cat-5", t.skillsCat5);
  renderSkillChips("skills-cat-5-items", t.skillsCat5Items);
  setHTML("skills-cat-6", t.skillsCat6);
  renderSkillChips("skills-cat-6-items", t.skillsCat6Items);
  setHTML("skills-cat-7", t.skillsCat7);
  renderSkillChips("skills-cat-7-items", t.skillsCat7Items);
  setText("about-title", t.aboutTitle);
  setText("about-p1", t.aboutP1);
  setText("about-p2", t.aboutP2);
}

function getDefaultLanguage() {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage === "es" || savedLanguage === "en") return savedLanguage;

  const browserLanguage = (navigator.language || "es").toLowerCase();
  return browserLanguage.startsWith("es") ? "es" : "en";
}

resizeCanvas();
initializeParticles();
animate();
setActiveNav();
applyLanguage(getDefaultLanguage());

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value === "es" ? "es" : "en";
    localStorage.setItem("portfolio-language", selectedLanguage);
    applyLanguage(selectedLanguage);
  });
}

window.addEventListener("resize", () => {
  resizeCanvas();
  initializeParticles();
});
