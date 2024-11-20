import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
} from "../assets";

import nullclass from "../assets/nullclass.png"
import rw from "../assets/rw.png"
import bootstrap from "../assets/tech/bootstrap.png"
import firebase from "../assets/tech/firebase.png"
import github from "../assets/tech/github.png"
import jQuery from "../assets/tech/jQuery.png"
import photoshop from "../assets/tech/photoshop.png"
import dijital from "../assets/projects/project_1.png"
import furniture from "../assets/projects/furniture.png"
import movie from "../assets/projects/movie.png"
import interior from "../assets/projects/interior.png"
import dashtreme from "../assets/projects/dashtreme.png"
import bookStore from "../assets/projects/bookStore.png"
import instagram from "../assets/projects/instagram.png"
import weather from "../assets/projects/weather.png"

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
    live_link: "https://movie-admin-panel.onrender.com",
    source_code_link: "https://github.com/AbdullaVora/Movie-Admin-Panel.git",
  },
  {
    name: "Interior Showroom",
    description:
      "This project is a responsive Interior Showr,oom Website designed to showcase elegant and modern interior designs. It features an intuitive layout optimized for all devices, ensuring seamless user experience on desktops, tablets, and smartphones.",
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
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },

    ],
    image: interior,
    live_link: "https://abdullavora.github.io/Interior/",
    source_code_link: "https://github.com/AbdullaVora/Interior.git"
  },
  {
    name: "Dashtreme Admin",
    description:
      "This project is an Admin Panel designed to manage and control various aspects of a web application or website. It is built using HTML5, CSS3, Bootstrap, and JavaScript, offering a clean, and user-friendly interface.",
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
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },

    ],
    image: dashtreme,
    live_link: "https://abdullavora.github.io/Dashtreme-admin/",
    source_code_link: "https://github.com/AbdullaVora/Dashtreme-admin.git"
  },
  {
    name: "Book Store",
    description:
      "This Bookstore Management System is a full-stack web application designed to efficiently manage book inventory and user interactions. Built using Node.js and MongoDB, the project enables users to perform CRUD (Create, Read, Update, Delete) operations on books.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "EJS",
        color: "blue-text-gradient",
      },

    ],
    image: bookStore,
    live_link: "https://book-store-fupf.onrender.com",
    source_code_link: "https://github.com/AbdullaVora/Book-Store.git"
  },
  {
    name: "Instagram Home Page",
    description:
      "This project is a replica of the Instagram Home Page with core functionalities implemented using Node.js, MongoDB, and JavaScript. Users can create, read, update, and delete (CRUD) posts, as well as like posts. The backend, powered by Node.js and MongoDB, ensures efficient data handling and storage, while EJS enhances interactivity on the frontend.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "EJS",
        color: "blue-text-gradient",
      },

    ],
    image: instagram,
    live_link: "https://instagram-crud.onrender.com",
    source_code_link: "https://github.com/AbdullaVora/Instagram-CRUD.git"
  },
  {
    name: "Live Weather & Location",
    description:
      "This Weather Application is a dynamic and interactive web app built using React, Redux, and JavaScript. It provides users with real-time weather updates and integrates a live map to display the user's current location.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },

    ],
    image: weather,
    live_link: "https://auto-map-weather.onrender.com",
    source_code_link: "https://github.com/AbdullaVora/Auto-Map-Weather.git"
  },
  
];

export { services, technologies, experiences, testimonials, projects };