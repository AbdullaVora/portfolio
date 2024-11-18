import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  jobit,
  tripguide,
} from "../assets";

import nullclass from "../assets/nullclass.png"
import rw from "../assets/rw.png"
import bootstrap from "../assets/tech/bootstrap.png"
import firebase from "../assets/tech/firebase.png"
import github from "../assets/tech/github.png"
import jQuery from "../assets/tech/jquery.png"
import photoshop from "../assets/tech/photoshop.png"
import dijital from "../assets/projects/project_1.png"
import furniture from "../assets/projects/furniture.png"
import movie from "../assets/projects/movie.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Photo Editing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "JQuery",
    icon: jQuery,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "FireBase",
    icon: firebase,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  }
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Red & White Multimedia Education",
    icon: rw,
    iconBg: "#383E56",
    date: "September 2022 - November 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "NullClass E-Learning",
    icon: nullclass,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Nov 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dijital Marketing",
    description:
      "Designed a modern digital marketing website template focusing solely on the frontend. The project emphasizes responsive design and user-friendly layouts. This template is ideal for showcasing businesses and services effectively.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "Css3",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: dijital,
    source_code_link: "https://github.com/AbdullaVora/Dijital-Marketing.git",
    live_link: "https://abdullavora.github.io/Dijital-Marketing/",
  },
  {
    name: "Furniture Store",
    description:
      "Designed a visually appealing furniture website template showcasing modern UI/UX principles. The template features and high-quality visuals to enhance user experience. Developed using React and plain CSS for seamless integration and performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: furniture,
    live_link: "https://react-e-commerce-val4.onrender.com/",
    source_code_link: "https://github.com/AbdullaVora/React-E-Commerce.git",
  },
  {
    name: "Movie Admin Panel",
    description:
      "ADeveloped a movie-streaming website inspired by Netflix using EJS and Node.js. The platform includes dynamic rendering of content and server-side functionalities for seamless navigation. Designed for an engaging user experience with responsive features.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "Javscript",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    live_link: "",
    source_code_link: "https://github.com/AbdullaVora/Movie-Admin-Panel.git",
  },
];

export { services, technologies, experiences, testimonials, projects };