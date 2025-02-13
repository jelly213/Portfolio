export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm a Computer Science Student",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Passionate about software development & problem-solving",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Technical Skills",
    description: "Always learning new technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Enthusiastic about AI, Web & Mobile Development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently freelancing as a Full-Stack Developer",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Looking for internship opportunities in Software Engineering",
    description: "Ability to learn and adapt quickly",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Visualization of Algorithms",
    des: "An interactive visualization of sorting and pathfinding algorithms using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.algovis.com",
  },
  {
    id: 2,
    title: "Collaborative Coding Platform",
    des: "A real-time collaborative coding platform with video/audio support for students.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.codecollab.com",
  },
  {
    id: 3,
    title: "AI-Powered Note-Taking App",
    des: "An AI-assisted note-taking app that helps students organize and summarize their notes.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.ainotes.com",
  },
  {
    id: 4,
    title: "Interactive 3D Portfolio Website",
    des: "A personal portfolio with interactive 3D elements using Three.js and GSAP animations.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.myportfolio.com",
  },
];

export const testimonials = [
  {
    quote:
      "A highly motivated student with a strong grasp of software engineering concepts. His ability to learn and adapt quickly is impressive.",
    name: "Dr. Sophie Tremblay",
    title: "Professor at Cégep André-Laurendeau",
  },
  {
    quote:
      "An excellent team player who demonstrated strong problem-solving skills during our group projects.",
    name: "Jean Dupont",
    title: "Classmate & Project Collaborator",
  },
];

export const companies = [
  {
    id: 1,
    name: "Google",
    img: "/google.svg",
    nameImg: "/googleName.svg",
  },
  {
    id: 2,
    name: "Microsoft",
    img: "/microsoft.svg",
    nameImg: "/microsoftName.svg",
  },
  {
    id: 3,
    name: "GitHub",
    img: "/github.svg",
    nameImg: "/githubName.svg",
  },
  {
    id: 4,
    name: "OpenAI",
    img: "/openai.svg",
    nameImg: "/openaiName.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Intern",
    desc: "Developed a web-based dashboard for data visualization using React.js and D3.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Research Assistant - AI & Data Science",
    desc: "Worked on an AI model for natural language processing and sentiment analysis.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Open Source Contributor",
    desc: "Contributed to various open-source projects, including bug fixes and feature development.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Hackathon Participant & Winner",
    desc: "Developed an AI-powered chatbot for mental health support in a 48-hour hackathon.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
