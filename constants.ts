import { Github, Linkedin, Mail, Twitter, Instagram, Layout, Server, Wrench } from 'lucide-react';
import { NavItem, Project, SkillCategory, SocialLink, Testimonial, ExperienceItem, EducationItem, CertificationItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Resume', id: 'resume' },
  { label: 'Projects', id: 'projects' },
];

export const HERO_CONTENT = {
  greeting: "Hello, I'm",
  name: "Naflan Mohamed",
  title: "MERN Stack Developer",
  description: "I build accessible, pixel-perfect, secure, and performant web applications with a focus on exceptional user experiences using the MERN stack.",
};

export const ABOUT_CONTENT = {
  title: "About Me",
  text: `I am a passionate MERN Stack Developer with a strong foundation in modern web technologies. My journey involves translating complex problems into elegant, user-centric solutions. 

  I specialize in building scalable frontend architectures using React and robust backend services with Node.js, Express, and MongoDB. When I'm not coding, I'm exploring new design trends or contributing to open source.`,
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "6+" },
    // { label: "Happy Clients", value: "15+" },
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    role: "MERN Stack Developer Intern",
    company: "Fluxxion",
    period: "Jun 2025 — Aug 2025",
    description: "Built responsive React UIs improving page performance by 40% and reducing UI bugs by 30%, including high performance modules such as a scalable Daily Goals Tracker.",
    technologies: ["React", "Node.js", "Git/GitHub"]
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "CArtificial Intelligence Community of Pakistan (AICP)",
    period: "Mar 2024 — Jun 2024",
    description: "Delivered 5+ production ready web apps, increasing form submission accuracy by 60%. Refactored frontend codebases to ensure mobile responsiveness, significantly improving the user experience across varying device sizes.",
    technologies: ["HTML", "CSS", "JavaScript", "Git/GitHub"]
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "BS(Hons) in Computer Science",
    institution: "Government College University - Lahore.",
    year: "2022 - 2026"
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    name: "Meta Full Stack Developer: Front-End & Back-End from Scratch Specialization",
    issuer: "Meta",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/MQKDSLXN5C11"
  },
  {
    id: 2,
    name: "MERN Stack Front to Back: Full Stack React, Redux & Node.js",
    issuer: "Packt",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/KQ2UTL8PQ196"
  },
  {
    id: 3,
    name: "Advanced React Skills",
    issuer: "Scrimba",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/8GM7YTD786F6"
  },
  {
    id: 5,
    name: "MERN eCommerce from Scratch",
    issuer: "Packt",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/P8J2CNWSF76M"
  },
  {
    id: 6,
    name: "AWS - Solutions Architecture Job Simulation",
    issuer: "Forage",
    year: "2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_n7jdNaPtow7ms6SKf_1752095486618_completion_certificate.pdf"
  },
  {
    id: 7,
    name: "Legacy Responsive Web Design V8",
    issuer: "FreeCodeCamp",
    year: "2024",
    link: "https://freecodecamp.org/certification/naflanmohamed/responsive-web-design"
  },
  {
    id: 8,
    name: "Programming with JavaScript",
    issuer: "Meta",
    year: "2024",
    link: "https://coursera.org/share/b859c3d9dbdd89a4d094886e558d4503"
  },
  {
    id: 10,
    name: "Introduction to Generative AI",
    issuer: "Google",
    year: "2023",
    link: "https://www.coursera.org/account/accomplishments/records/UENMYBCJBD5J"
  }

];

export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Redux", "Sass", "HTML", "CSS", "JavaScript"]
  },
  {
    name: "Backend Architecture",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Firebase", "Rest API"]
  },
  {
    name: "Tools & Ecosystem",
    icon: Wrench,
    skills: ["Git/GitHub", "CI/CD", "Figma", "Postman"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Vehicle Rental Platform",
    description: "A vehicle rental platform that allows users to browse available vehicles, view detailed information, and book easily. and includes admin features to manage fleet inventory, and update vehicle data.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "GitHub", "Vercel"],
    link: "https://autofleetrentals.vercel.app/",
    github: "https://github.com/naflanmohamed/AutoFleet-Rentals",
    image: "/assets/images/autofleetrentals.webp",
    category: "Website",
    year: "2025"
  },
  {
    id: 2,
    title: "AI Study Hub",
    description: "AI Study Hub helps students save time by using AI tools for summarizing, note generation, and quick learning support all in one simple interface.",
    tech: ["React.js", "Tailwind", "Gemini API",],
    link: "https://aistudyhub-pi.vercel.app/",
    github: "https://github.com/naflanmohamed/ai-study-hub",
    image: "/assets/images/aistudyhub.webp",
    category: "AI / Website",
    year: "2025"
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "Expense Tracker is a web application that allows users to track their expenses and manage their budgets.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js"],
    link: "https://naflanmohamed.github.io/expense-tracker/",
    github: "https://github.com/naflanmohamed/expense-tracker",
    image: "/assets/images/ExpenseTracker.webp",
    category: "Website",
    year: "2025"
  },
  {
    id: 4,
    title: "Interstellar Link",
    description: "Interstellar Link is an single-page concept website for a futuristic space travel agency. It features a high-performance HTML5 Canvas starfield, interactive particle effects, and a CSS-only 3D planet simulation.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Canvas API 2D"],
    link: "https://naflanmohamed.github.io/Interstellar-Link/#",
    github: "https://github.com/naflanmohamed/Interstellar-Link",
    image: "/assets/images/interstellarlink.webp",
    category: "Website",
    year: "2025"
  },
  {
    id: 5,
    title: "SkyCast Weather App",
    description: "SkyCast is a responsive and user-friendly weather application. It fetches real-time weather data and displays it with a clean, modern interface.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    link: "https://naflanmohamed.github.io/SkyCast-Weather-App/",
    github: "https://github.com/naflanmohamed/SkyCast-Weather-App",
    image: "/assets/images/skycastweatherapp.webp",
    category: "Website",
    year: "2024"
  }
];

export const SOCIALS: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/naflanmohamed', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/naflan-mohamed', icon: Linkedin },
  { name: 'Email', href: 'mailto:mnnaflanmohamed@gmail.com', icon: Mail }
];