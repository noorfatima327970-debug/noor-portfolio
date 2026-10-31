// src/data/projects.js

const PROJECTS_DATA = [
  {
    slug: "luxetime",
    number: "01",
    title: "LuxeTime",
    type: "MERN E‑Commerce Website",
    category: "Full‑Stack",
    liveUrl: "https://luxetime-5oyy.vercel.app/",
    cover: "/projects/luxetime.png",

    summary:
      "A full‑stack MERN e‑commerce website built as a portfolio/demo project. Includes product browsing, product details, cart flow, and authentication (no payment integration).",

    tags: ["MongoDB", "Express.js", "React", "Node.js", "Auth", "E‑Commerce"],

    highlights: [
      "Product listing + product details flow",
      "Add to cart + cart management",
      "Authentication (demo)",
      "Portfolio/demo project (no real payments)",
    ],
  },

  {
    slug: "aurelia-estates",
    number: "02",
    title: "AURELIA ESTATES",
    type: "Frontend Luxury Real Estate Website",
    category: "Frontend",
    liveUrl: "https://aurelia-states.netlify.app",
    cover: "/projects/aurelia-estates.jpeg",

    summary:
      "A premium luxury real estate website with property listings, advanced search & filters, favorites (localStorage), and property comparison—enhanced with smooth scrolling and cinematic animations.",

    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "ScrollTrigger",
      "Framer Motion",
      "Lenis",
      "React Router DOM",
      "LocalStorage",
      "Vite",
      "Netlify",
    ],

    highlights: [
      "Luxury property listings with premium UI",
      "Advanced search + filtering",
      "Dynamic property detail pages",
      "Interactive image gallery",
      "Favorites system with localStorage persistence",
      "Compare up to 3 properties side‑by‑side",
      "Smooth scrolling (Lenis) + advanced animations (GSAP/ScrollTrigger/Framer Motion)",
      "Fully responsive layout + performance optimization",
    ],
  },

  {
    slug: "voyage",
    number: "03",
    title: "VOYAGE",
    type: "Frontend Luxury Travel Website",
    category: "Frontend",
    liveUrl: "https://voyage-trav.netlify.app",
    cover: "/projects/voyage.jpeg",

    summary:
      "A cinematic travel discovery and trip planning website featuring destination videos, dynamic destination pages, interactive search & filtering, and a LocalStorage-powered trip planner.",

    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "ScrollTrigger",
      "Framer Motion",
      "Lenis",
      "React Router DOM",
      "LocalStorage",
      "Vite",
      "Netlify",
    ],

    highlights: [
      "Cinematic homepage with multi-destination videos + smooth transitions",
      "Interactive destination explorer (6 destinations)",
      "Search + category-based filtering",
      "Dynamic destination detail pages (routing)",
      "Trip planner with validation (dates + travelers)",
      "My Trips dashboard (create/remove trips)",
      "LocalStorage persistence (no backend)",
      "Fully responsive UI + smooth animations + smooth scroll",
    ],
  },

  {
    slug: "tic-tac-toe",
    number: "04",
    title: "Tic Tac Toe",
    type: "Frontend React Game Website",
    category: "Frontend",
    liveUrl: "https://tic-tac-toesr.netlify.app",
    cover: "/projects/tic-tac-toe.jpeg",

    summary:
      "A classic Tic Tac Toe game built with React and JavaScript, featuring interactive gameplay, turn-based logic, winner/draw detection, and restart flow.",

    tags: ["React", "JavaScript", "Game Logic", "Netlify"],

    highlights: [
      "Interactive 3×3 game board",
      "Turn management (X / O)",
      "Winner detection (rows/columns/diagonals)",
      "Draw detection + restart/new game",
    ],
  },

  {
    slug: "rock-paper-scissors",
    number: "05",
    title: "Rock Paper Scissors",
    type: "Frontend Interactive React Game Website",
    category: "Frontend",
    liveUrl: "https://rock-paper-scissogame.netlify.app",
    cover: "/projects/rock-paper-scissors.jpeg",

    summary:
      "A fun player-vs-computer Rock Paper Scissors game with random computer moves, instant results, and real-time score tracking—built with React and JavaScript.",

    tags: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "State Management", "Netlify"],

    highlights: [
      "Player vs computer gameplay",
      "Random computer choice generation",
      "Automatic winner detection + draw handling",
      "Real-time score updates",
      "Reset/restart game flow",
      "Responsive UI with interactive animations (and sound effects if enabled)",
    ],
  },
];

export const PROJECTS = PROJECTS_DATA;
export const projects = PROJECTS_DATA;

export function getProjectBySlug(slug) {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}