// lib/data.ts - Copy langsung ke project Anda

export const personalInfo = {
  name: "Fadli Nofrizal",
  title: "Junior Programmer",
  subtitle: "Passionate Web & Mobile Developer",
  email: "fadlioppo460@gmail.com",
  phone: "+628 583 012 5460", // isi nomor HP Anda
  location: "Cilincing, Jakarta Utara",
  profileImage: "/foto.jpg",
  profileImageFallback: "/images/profile/profile-photo-fallback.jpg",
  resumeUrl: "/resume/fadli-nofrizal-resume.pdf",
  
  bio: [
    "Saya Fadli Nofrizal, mahasiswa D3 Manajemen Informatika semester 5 di Politeknik LP3I Jakarta dengan minat besar pada pengembangan web dan mobile. Berpengalaman membangun aplikasi berbasis web dan mobile menggunakan teknologi modern seperti CodeIgniter, React Native, dan integrasi API. Dengan kemampuan teknis yang solid dan semangat belajar tinggi, saya siap berkontribusi sebagai Junior Programmer untuk menciptakan solusi digital yang fungsional dan user-friendly." ],
  
  stats: [
    { number: "3.4", label: "Current GPA" },
    { number: "4+", label: "Projects Completed" },
    { number: "3", label: "BNSP Certifications" }
  ]
};

export const skills = [
  // Frontend Web
  { name: "HTML5", level: 3, category: "Frontend" },
  { name: "CSS3", level: 3, category: "Frontend" },
  { name: "TypeScript", level: 3, category: "Frontend" },
  { name: "Next.js", level: 2, category: "Frontend" },
  { name: "React", level: 3, category: "Frontend" },
  
  // Mobile Development
  { name: "React Native", level: 3, category: "Mobile" },
  { name: "Expo", level: 3, category: "Mobile" },
  
  // Backend
  { name: "PHP", level: 3, category: "Backend" },
  { name: "Java", level: 2, category: "Backend" },
  { name: "CodeIgniter 3", level: 3, category: "Backend" },
  { name: "Node.js", level: 2, category: "Backend" },
  
  // Database
  { name: "MySQL", level: 3, category: "Database" },
  { name: "MongoDB", level: 2, category: "Database" },
  
  // State Management & APIs
  { name: "Redux", level: 3, category: "State Management" },
  { name: "Axios", level: 3, category: "API Integration" },
  { name: "REST APIs", level: 3, category: "API Integration" },
  
  // Tools & Others
  { name: "Git", level: 2, category: "Tools" },
  { name: "Figma", level: 2, category: "Design" },
];

export const education = {
  degree: "D3 Manajemen Informatika",
  school: "Politeknik LP3I jakarta", // ganti dengan nama universitas
  period: "2023 - 2026", // sesuaikan tahun masuk dan lulus
  gpa: "3.4",
  status: "Semester 5 (Active)",
  relevantCourses: [
    "Web Development & Programming",
    "Database Management Systems", 
    "Software Engineering",
    "Systems Analysis and Design"
  ]
};

export const certifications = [
  {
    name: "BNSP - Computer Operator",
    issuer: "Badan Nasional Sertifikasi Profesi",
    year: "2024", // sesuaikan tahun
    type: "Professional Certification"
  },
  {
    name: "BNSP - Database Administrator", 
    issuer: "Badan Nasional Sertifikasi Profesi",
    year: "2025", // sesuaikan tahun
    type: "Professional Certification"
  },
  {
    name: "BNSP - Junior Web Programming",
    issuer: "Badan Nasional Sertifikasi Profesi", 
    year: "2025", // sesuaikan tahun
    type: "Professional Certification"
  }
];

export const projects = [
  {
    id: 1,
    title: "Academic Management System",
    description: "Role-based school management system with comprehensive CRUD operations",
    fullDescription: [
      "Developed a comprehensive academic management system for schools using CodeIgniter 3 with role-based authentication and access control. The system handles three distinct user roles: Academic Admin, Teachers, and Students, each with specific permissions and functionalities.",
      "Implemented secure login system with different access levels, complete CRUD operations for managing academic data, and intuitive user interfaces tailored for each role's responsibilities."
    ],
    image: "/images/projects/academic-system/screenshot.webp",
    technologies: ["CodeIgniter 3", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "#", // ganti jika ada demo online
    githubUrl: "https://github.com/fadlinofrizal/academic-system", // ganti dengan repo Anda
    featured: true,
    completedAt: "2024-05", // sesuaikan kapan selesai
    keyFeatures: [
      "Role-based authentication (Admin, Teacher, Student)",
      "Complete CRUD operations for academic data management",
      "Different accessibility levels based on user roles",
      "Secure session management and data validation"
    ]
  },
  {
    id: 2,
    title: "Online Course Mobile App",
    description: "E-learning mobile application with progress tracking and API integration",
    fullDescription: [
      "Built a comprehensive online course mobile application using React Native (Expo) with Redux for state management. The app features seamless integration with external APIs and local data storage for course materials and user progress.",
      "Implemented advanced user experience features including progress tracking, resume functionality, and personalized learning paths. Users can pick up exactly where they left off in courses and monitor their learning journey through detailed progress analytics."
    ],
    image: "/images/projects/course-app/screenshot.webp",
    technologies: ["React Native", "Expo", "Redux", "Axios", "TypeScript"],
    liveUrl: "#", // tidak ada untuk mobile app
    githubUrl: "https://github.com/fadlinofrizal/course-app", // ganti dengan repo Anda
    featured: true,
    completedAt: "2024-06", // sesuaikan kapan selesai
    keyFeatures: [
      "API integration with local data caching",
      "Progress tracking and resume functionality",
      "Redux state management for complex data flow",
      "Intuitive course navigation and user dashboard"
    ]
  },
  {
    id: 3,
    title: "Movie Database App (IMDB Clone)",
    description: "Movie information and review platform using OMDB API",
    fullDescription: [
      "Created a movie database application similar to IMDB using React Native with TypeScript and Expo. The app integrates with the OMDB API to provide comprehensive movie information, ratings, and reviews.",
      "Focused on creating an intuitive user interface for browsing movies, viewing detailed information, and reading reviews. Implemented efficient API calls and data presentation for optimal user experience."
    ],
    image: "/images/projects/movie-app/screenshot.webp",
    technologies: ["React Native", "Expo", "TypeScript", "OMDB API", "Axios"],
    liveUrl: "#", // tidak ada untuk mobile app
    githubUrl: "https://github.com/fadlinofrizal/movie-app", // ganti dengan repo Anda
    featured: false,
    completedAt: "2024-04", // sesuaikan kapan selesai
    keyFeatures: [
      "Integration with OMDB API for movie data",
      "Detailed movie information and reviews display",
      "Search functionality for finding specific movies",
      "Clean, responsive mobile interface design"
    ]
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio built with Next.js 15 and TypeScript",
    fullDescription: [
      "Developed a comprehensive portfolio website using Next.js 15, TypeScript, and Tailwind CSS to showcase my skills and projects to potential recruiters.",
      "Implemented modern features including dark/light theme switching, smooth animations with Framer Motion, and responsive design that works across all devices."
    ],
    image: "/images/projects/portfolio/screenshot.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://fadli-portfolio.vercel.app", // ganti dengan URL Anda
    githubUrl: "https://github.com/fadlinofrizal/portfolio", // ganti dengan repo Anda
    featured: true,
    completedAt: "2024-08",
    keyFeatures: [
      "Responsive design with mobile-first approach",
      "Dark/light theme toggle with smooth transitions", 
      "Interactive animations and micro-interactions"
    ]
  }
];

export const socialLinks = {
  github: "https://github.com/FadliN0", // ganti dengan username GitHub Anda
  linkedin: "https://linkedin.com/in/fadlinofrizal", // ganti dengan profile LinkedIn Anda
  email: "mailto:fadlioppo460@gmail.com"
};

export const siteMetadata = {
  title: "Fadli Nofrizal - Junior Programmer",
  description: "D3 Management Information Systems student passionate about web development. Skilled in TypeScript, Next.js, PHP, and database management. BNSP certified programmer seeking opportunities in Jakarta.",
  url: "", // ganti dengan domain Anda
  ogImage: "/og-image.jpg",
  keywords: [
    "Fadli Nofrizal",
    "Junior Programmer", 
    "Web Developer",
    "Next.js Developer",
    "TypeScript",
    "Fresh Graduate",
    "Jakarta",
    "Portfolio"
  ]
};