// Personal information
export const personalInfo = {
  name: 'Viveka Kannan',
  initials: 'VK',
  role: 'Full Stack Developer',
  tagline: 'Building scalable, enterprise-grade web applications',
  summary: `Full Stack Developer with 7+ years of experience designing and delivering enterprise-grade web applications. 
    Strong expertise in microservices architecture, REST/SOAP APIs, Kafka-based messaging, and containerized deployments.`,
  location: 'India | Open to US Remote & Relocation',
  email: 'vkvivekakannan@gmail.com',
  phone: {
    us: '+1 214-239-3327',
    in: '+91 93441 94223',
  },
  linkedin: 'https://linkedin.com/in/vivekakannan',
  github: 'https://github.com/vivekakannan',
  workAuthorization: 'H-1B Approved | Open to W2 contract roles',
};

// Skills organized by category
export const skills = {
  frontend: [
    { name: 'Angular', level: 95, versions: 'v2-v17' },
    { name: 'React', level: 90, versions: 'Hooks, Redux' },
    { name: 'TypeScript', level: 92, versions: '' },
    { name: 'JavaScript', level: 95, versions: 'ES6+' },
    { name: 'HTML5/CSS3', level: 95, versions: '' },
    { name: 'RxJS', level: 85, versions: '' },
    { name: 'NgRx', level: 85, versions: '' },
    { name: 'Tailwind CSS', level: 88, versions: '' },
  ],
  backend: [
    { name: 'Java', level: 92, versions: '11+' },
    { name: 'Spring Boot', level: 90, versions: '' },
    { name: 'Spring MVC', level: 88, versions: '' },
    { name: 'Spring Security', level: 85, versions: '' },
    { name: 'Node.js', level: 85, versions: '' },
    { name: 'JPA/Hibernate', level: 85, versions: '' },
    { name: 'Express.js', level: 82, versions: '' },
  ],
  cloud: [
    { name: 'Docker', level: 88, versions: '' },
    { name: 'Kubernetes', level: 80, versions: '' },
    { name: 'AWS', level: 82, versions: 'ECS, S3, CloudWatch' },
    { name: 'OpenShift', level: 75, versions: '' },
    { name: 'Apache Kafka', level: 85, versions: '' },
    { name: 'CI/CD (Jenkins)', level: 85, versions: '' },
  ],
  databases: [
    { name: 'SQL Server', level: 88, versions: '' },
    { name: 'MySQL', level: 85, versions: '' },
    { name: 'Oracle', level: 82, versions: '' },
    { name: 'MongoDB', level: 80, versions: '' },
  ],
  tools: [
    { name: 'Git', level: 92, versions: '' },
    { name: 'Maven/Gradle', level: 85, versions: '' },
    { name: 'JUnit/Mockito', level: 88, versions: '' },
    { name: 'Jasmine/Karma', level: 85, versions: '' },
    { name: 'Postman', level: 90, versions: '' },
    { name: 'IntelliJ/VS Code', level: 92, versions: '' },
  ],
};

// Work experience
export const experiences = [
  {
    id: 1,
    company: 'Netlink',
    role: 'Senior Software Engineer',
    client: 'SiriusXM (Enterprise Media Platform)',
    period: 'Mar 2021 – Nov 2025',
    duration: '4+ years',
    location: 'Remote',
    achievements: [
      'Led design and development of full-stack applications using Spring Boot microservices with Angular and React, supporting high-traffic enterprise platforms.',
      'Designed and implemented RESTful and SOAP APIs for account, subscription, and payment workflows, ensuring security, scalability, and performance.',
      'Built and deployed containerized microservices using Docker, collaborating with DevOps teams on Kubernetes/OpenShift deployments.',
      'Implemented event-driven components using Apache Kafka to decouple services and improve system reliability.',
      'Improved API performance by 50% through query optimization and efficient data modeling on Oracle and SQL Server.',
      'Created reusable Angular modules and shared components, cutting development time by 25% and code duplication by 40%.',
      'Wrote comprehensive unit tests for both backend and frontend, increasing code coverage and release stability.',
      'Acted as a technical mentor, conducting code reviews, guiding junior engineers, and influencing architectural decisions.',
    ],
    technologies: ['Java 11+', 'Spring Boot', 'Angular', 'React', 'TypeScript', 'Docker', 'Kubernetes', 'AWS', 'Kafka', 'Oracle', 'SQL Server'],
  },
  {
    id: 2,
    company: 'Cutech Solution',
    role: 'Software Engineer',
    period: 'Aug 2018 – Feb 2021',
    duration: '2.5 years',
    location: 'India',
    achievements: [
      'Delivered scalable, responsive web applications using Angular and Node.js, integrating SQL (MySQL) and NoSQL (MongoDB) databases.',
      'Developed RESTful APIs with Express.js, optimizing queries using Sequelize and Mongoose for 20% faster response times.',
      'Automated deployments using Docker and CI/CD pipelines, reducing manual errors and deployment time by 40%.',
      'Led end-to-end testing with Postman and automated QA flows, improving release stability and reducing production bugs.',
      'Participated in Agile ceremonies, improving sprint planning accuracy and meeting delivery timelines.',
    ],
    technologies: ['Angular', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Docker', 'CI/CD'],
  },
];

// Projects (derived from experience)
export const projects = [
  {
    id: 1,
    title: 'Enterprise Media Platform',
    client: 'SiriusXM',
    description: 'Built a comprehensive enterprise media platform handling millions of subscribers with real-time streaming capabilities and complex subscription management.',
    impact: [
      '50% improvement in API performance',
      'Supported high-traffic enterprise workflows',
      'Reduced code duplication by 40%',
    ],
    technologies: ['Spring Boot', 'Angular', 'React', 'Kafka', 'Docker', 'Kubernetes', 'AWS'],
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 2,
    title: 'Microservices Architecture',
    description: 'Designed and implemented a scalable microservices architecture using Spring Boot, enabling better service isolation and deployment flexibility.',
    impact: [
      'Improved system reliability through event-driven design',
      'Enabled independent service deployment',
      'Reduced coupling between services',
    ],
    technologies: ['Spring Boot', 'Apache Kafka', 'Docker', 'Kubernetes', 'OpenShift'],
    category: 'Backend',
    featured: true,
  },
  {
    id: 3,
    title: 'Reusable Angular Component Library',
    description: 'Created a comprehensive library of reusable Angular modules and shared components, establishing consistent UI patterns across the organization.',
    impact: [
      'Cut development time by 25%',
      'Reduced code duplication by 40%',
      'Improved team productivity',
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'SCSS'],
    category: 'Frontend',
    featured: true,
  },
  {
    id: 4,
    title: 'Payment & Subscription System',
    description: 'Developed secure RESTful and SOAP APIs for account management, subscription workflows, and payment processing with focus on security and compliance.',
    impact: [
      'Handled complex payment workflows',
      'Ensured PCI compliance',
      'Supported multiple payment methods',
    ],
    technologies: ['Java', 'Spring Security', 'REST/SOAP APIs', 'Oracle', 'SQL Server'],
    category: 'Backend',
    featured: false,
  },
  {
    id: 5,
    title: 'CI/CD Pipeline Automation',
    description: 'Automated the deployment pipeline using Docker and Jenkins, significantly reducing deployment time and manual intervention.',
    impact: [
      'Reduced deployment time by 40%',
      'Eliminated manual deployment errors',
      'Improved release stability',
    ],
    technologies: ['Docker', 'Jenkins', 'Git', 'Kubernetes', 'Shell Scripting'],
    category: 'DevOps',
    featured: false,
  },
];

// Education
export const education = {
  degree: "Bachelor's in Engineering",
  field: 'Computer Science',
  institution: 'Anna University',
  period: '2014 – 2018',
};

// Blog categories
export const blogCategories = [
  'Frontend Architecture',
  'React & Angular Patterns',
  'System Design',
  'Performance',
  'Engineering Practices',
  'Career Insights',
];

// Navigation items
export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

// Social links
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/vivekakannan',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/vivekakannan',
    icon: 'github',
  },
  {
    name: 'Email',
    href: 'mailto:vkvivekakannan@gmail.com',
    icon: 'email',
  },
];

// Site metadata
export const siteMetadata = {
  title: 'Viveka Kannan | Full Stack Developer',
  description: 'Full Stack Developer with 7+ years of experience building enterprise-grade web applications. Expertise in Java, Spring Boot, Angular, React, and cloud technologies.',
  siteUrl: 'https://vivekakannan.dev',
  author: 'Viveka Kannan',
  keywords: [
    'Full Stack Developer',
    'Java Developer',
    'Spring Boot',
    'Angular',
    'React',
    'TypeScript',
    'Microservices',
    'Cloud',
    'AWS',
    'DevOps',
  ],
};
