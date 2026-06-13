// data/portfolio.ts

export const personalInfo = {
  name: "Om Choudhary",
  role: "Full Stack Developer & GEN AI Engineer",
  tagline: "Building intelligent web experiences — from real-time apps to LLM-powered tools.",
  email: "omchy34@gmail.com",
  phone: "6201374052",
  location: "West Bengal, India",
  linkedin: "https://linkedin.com/in/om-choudhary",
  github: "https://github.com/omchy34",
  photo: "/photo2.png",
  openToWork: true,
};

export const experience = [
  {
    id: 1,
    role: "Freelance Full Stack Developer",
    company: "Binary Grow",
    duration: "Dec 2025 – Present",
    type: "Freelance",
    points: [
      "Independently delivered 5+ end-to-end client projects across healthcare, education, and temple domains.",
      "Built a real-time token queue system using WebSockets — patients get tokens on check-in and see live queue status on a front-desk dashboard.",
      "Developed web apps for event scheduling, donation tracking, and visitor management for 2 temple clients.",
      "Built platforms for student enrollment, attendance, fee tracking, and study material management.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Byteminders",
    duration: "Jul 2024 – Dec 2025",
    type: "Full-time",
    points: [
      "Built and maintained responsive full-stack web applications for multiple clients using React and Node.js.",
      "Automated bulk certificate creation and delivery for events — reduced manual effort by generating personalized certificates at scale.",
    ],
  },
  {
    id: 3,
    role: "Assistant Developer",
    company: "Slytherin EduTech",
    duration: "Feb 2023 – Jun 2023",
    type: "Part-time",
    points: [
      "Enhanced the company website and assisted in building user-centric web applications using JavaScript frameworks.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Voice Chatbot",
    description:
      "AI-powered voice chatbot with real-time speech-to-text and text-to-speech. Integrated conversational memory and prompt engineering for context-aware, multi-turn dialogue.",
    tech: ["Python", "LangChain", "OpenAI API", "Speech Recognition", "TTS"],
    github: "https://github.com/om-choudhary",
    live: null,
    highlight: true,
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description:
      "Bidirectional real-time messaging using WebSockets with JWT authentication. Built with React frontend and Node.js backend with MongoDB persistence.",
    tech: ["Node.js", "Socket.io", "React", "MongoDB", "JWT"],
    github: "https://github.com/om-choudhary",
    live: null,
    highlight: false,
  },
  {
    id: 3,
    title: "Clinic Queue & Token System",
    description:
      "Real-time patient token queue system. Patients get tokens on check-in and see live queue status on a front-desk dashboard via WebSockets.",
    tech: ["React", "Node.js", "WebSockets", "MongoDB", "Express"],
    github: "https://github.com/om-choudhary",
    live: null,
    highlight: false,
  },
  {
    id: 4,
    title: "Automatic Certificate Generator",
    description:
      "Automated bulk certificate creation and delivery for events — reduced manual effort by generating personalized certificates at scale.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/om-choudhary",
    live: null,
    highlight: false,
  },
];

export const skills = [
  {
    category: "ML & AI",
    items: ["Python", "LangChain", "OpenAI API", "Prompt Engineering", "LLMs", "RAG"],
  },
  {
    category: "Web & Backend",
    items: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Maulana Abul Kalam Azad University of Technology",
    location: "West Bengal",
    duration: "2024 – 2028",
  },
];

export const certifications = [
  {
    title: "Python & Its Applications in Science and Technology",
    issuer: "National Institute of Technology (NIT) Durgapur",
    duration: "Jun – Jul 2025",
    topics: ["Neural Networks", "DSA in Python", "Supervised & Unsupervised Learning"],
  },
];

export const links = [
  { label: "GitHub", url: "https://github.com/om-choudhary", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/om-choudhary", icon: "linkedin" },
  { label: "Email", url: "mailto:omchy34@gmail.com", icon: "mail" },
  { label: "Download CV", url: "/resume.pdf", icon: "download" },
];

export const navItems = [
  { id: "home", label: "Home", icon: "house" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "projects", label: "Projects", icon: "code" },
  { id: "skills", label: "Skills", icon: "sparkles" },
  { id: "links", label: "Links", icon: "link" },
];