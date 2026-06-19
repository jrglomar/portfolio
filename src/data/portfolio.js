/* =========================================================================
   portfolio.js — SINGLE SOURCE OF TRUTH
   -------------------------------------------------------------------------
   Every piece of copy on the site is read from this object. To update the
   portfolio, edit values here only — no component changes required.

   NOTE ON LINKS: The CV's link section contained placeholder URLs
   (https://your-portfolio.com/, https://github.com/, etc.), so the real
   destinations are filled with `#` placeholders below and flagged with
   `isPlaceholder: true`. Replace them with your real URLs when ready.
   ========================================================================= */

export const portfolio = {
  /* ----- Identity ------------------------------------------------------ */
  person: {
    name: 'John Raven Glomar',
    firstName: 'John Raven',
    monogram: 'JRG',
    title: 'Full Stack Developer · Gen AI Enthusiast',
    location: 'Quezon City, Philippines',
    email: 'se.johnraven.glomar@gmail.com',
    phone: '+63 976 300 6419',
    // Used by the contact mailto link.
    phoneHref: '+639763006419',
  },

  /* ----- Links / socials ----------------------------------------------
     Set isPlaceholder:false and a real `href` once you have the URLs. */
  links: {
    github: { label: 'GitHub', href: '#', isPlaceholder: true },
    portfolio: { label: 'Portfolio', href: '#', isPlaceholder: true },
    udemy: { label: 'Udemy & Cognizant Learn', href: '#', isPlaceholder: true },
    awsCert: {
      label: 'AWS Developer Associate',
      href: 'https://aws.amazon.com/certification/certified-developer-associate/',
      isPlaceholder: false,
    },
  },

  /* ----- Header navigation (numbers are decorative) -------------------- */
  nav: [
    { id: 'about', label: 'About', no: '01' },
    { id: 'experience', label: 'Experience', no: '02' },
    { id: 'skills', label: 'Skills', no: '03' },
    { id: 'credentials', label: 'Credentials', no: '04' },
    { id: 'contact', label: 'Contact', no: '05' },
  ],

  /* ----- Hero ---------------------------------------------------------- */
  hero: {
    eyebrow: 'Full Stack Developer · Gen AI Enthusiast',
    // Rendered as: "Hi, I'm {name}." with the name emphasized.
    headlineLead: "Hi, I'm",
    headlineName: 'John Raven Glomar',
    subheadline:
      'I build scalable web applications across the full stack — and I’m deep-diving into Generative AI: building AI agents, engineering prompts, and setting up MCP servers to extend developer workflows.',
    primaryCta: { label: 'View my work', href: '#experience' },
    secondaryCta: { label: 'Get in touch', href: '#contact' },
    stats: [
      { value: '4+', label: 'Years experience' },
      { value: '4', label: 'Companies' },
      { value: '6', label: 'Certifications' },
      { value: 'AWS', label: 'Certified Dev' },
    ],
  },

  /* ----- About --------------------------------------------------------- */
  about: {
    heading: 'About',
    paragraphs: [
      'Full-stack developer with 4+ years of experience building scalable web applications across frontend and backend. Skilled in serverless AWS, microservices, API development, and containerization.',
      'I’m currently deep-diving into Generative AI — building and configuring AI agents, engineering prompts, creating reusable skills, and setting up MCP servers to extend development workflows. Comfortable in Agile environments and passionate about continuous learning.',
    ],
    // Compact "what I'm focused on now" card.
    focusTitle: 'Currently focused on',
    focus: [
      'Building & configuring AI agents',
      'Prompt engineering',
      'Reusable skills & tools',
      'MCP servers for dev workflows',
    ],
  },

  /* ----- Experience (most recent first) -------------------------------- */
  experience: {
    heading: 'Experience',
    roles: [
      {
        company: 'Royal Caribbean Group',
        role: 'Associate Software Engineer',
        period: 'Jul 2025 — Present',
        current: true,
        stack: ['React.js', 'Spring Boot', 'GenAI Tools', 'PHP', 'MySQL'],
        bullets: [
          'Modernizing legacy applications into scalable, maintainable solutions while leveraging GenAI tools.',
          'Deep-diving into Generative AI as a full-stack developer — building and configuring AI agents, engineering prompts, creating reusable skills, and setting up MCP servers to extend development workflows.',
          'Integrating GenAI capabilities to accelerate feature development and improve overall code quality.',
        ],
      },
      {
        company: 'Mighty Labs',
        role: 'Full Stack Developer',
        period: 'Jan — Jul 2025',
        current: false,
        stack: [
          'React.js',
          'Next.js',
          'TypeScript',
          'TailwindCSS',
          'Express.js',
          'Firebase',
          'HeadlessCMS',
        ],
        bullets: [
          'Managed both frontend and backend independently across multiple client projects.',
          'Built and maintained an application integrated with blockchain technology.',
          'Transformed Figma designs into pixel-perfect, fully functional web pages.',
        ],
      },
      {
        company: 'Cognizant',
        role: 'Jr. Software Engineer',
        period: 'Oct 2022 — Dec 2024',
        current: false,
        stack: [
          'React.js',
          'TypeScript',
          'Spring Boot',
          'RabbitMQ',
          'PostgreSQL',
          'MariaDB',
          'Node.js',
          'AWS',
          'Docker',
          'Redux',
          'Jest',
        ],
        bullets: [
          'Built and maintained full-stack applications using React.js and Spring Boot, covering frontend, backend, and API integrations.',
          'Developed and deployed serverless solutions on AWS using Lambda, DynamoDB, S3, and CloudWatch.',
          'Collaborated within Agile Scrum teams with product owners, tech leads, and developers to deliver production releases.',
          'Recognized for outstanding performance in Java/Spring Boot bootcamp simulations.',
        ],
      },
      {
        company: 'PUPQC',
        role: 'Web Developer Intern',
        period: 'Mar — Aug 2022',
        current: false,
        stack: ['Laravel', 'jQuery', 'MySQL', 'Git'],
        bullets: [
          'Built a faculty management web app for document submission, class scheduling, attendance tracking, and campus activities.',
        ],
      },
    ],
  },

  /* ----- Skills (grouped exactly as in the CV) ------------------------- */
  skills: {
    heading: 'Skills',
    intro: 'A snapshot of the tools and technologies I work with.',
    groups: [
      {
        category: 'Frontend',
        items: ['React.js', 'TypeScript', 'Next.js', 'jQuery'],
      },
      {
        category: 'Generative AI',
        items: [
          'AI Agents',
          'Prompt Engineering',
          'MCP Servers',
          'Skills / Tools',
          'Claude & OpenAI APIs',
        ],
      },
      {
        category: 'Backend',
        items: ['Spring Boot', 'Node.js', 'Express.js', 'Prisma', 'GraphQL'],
      },
      {
        category: 'Databases',
        items: ['MySQL', 'PostgreSQL', 'MSSQL', 'MongoDB', 'Firestore', 'Prisma', 'Hibernate'],
      },
      {
        category: 'Cloud & DevOps',
        items: [
          'AWS Lambda',
          'DynamoDB',
          'CloudWatch',
          'S3',
          'EC2',
          'Docker',
          'Git',
          'Jenkins',
          'Azure Pipelines',
        ],
      },
      {
        category: 'Testing & Methodology',
        items: ['Jest', 'JUnit', 'Mockito', 'Scrum', 'Kanban'],
      },
      {
        category: 'Web UI',
        items: ['HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap'],
      },
    ],
  },

  /* ----- Credentials: certifications + education ----------------------- */
  credentials: {
    heading: 'Credentials',
    certifications: [
      { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services' },
      { name: 'Fundamentals of Generative AI [101-Basics]', issuer: 'Cognizant Learn' },
      { name: 'GitHub Copilot: Use AI to Write Code', issuer: 'Udemy' },
      {
        name: 'Advanced React: Design System, Design Patterns, Performance',
        issuer: 'Udemy',
      },
      { name: 'React & TypeScript – The Practical Guide', issuer: 'Udemy' },
      { name: 'Outstanding Performance', issuer: 'CSV Academy Java Development Program' },
    ],
    education: {
      degree: 'Bachelor of Science in Information Technology',
      school: 'Polytechnic University of the Philippines',
      period: '2018 — 2022',
    },
  },

  /* ----- Contact ------------------------------------------------------- */
  contact: {
    heading: 'Get in touch',
    lead: 'Let’s build something.',
    text: 'I’m open to opportunities and collaborations. The fastest way to reach me is by email — I’ll get back to you soon.',
  },

  /* ----- Footer -------------------------------------------------------- */
  footer: {
    builtWith: 'Built with React & Tailwind CSS',
  },
}

export default portfolio
