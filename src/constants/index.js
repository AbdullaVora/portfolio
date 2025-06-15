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
import furstore from "../assets/projects/furstore.png"
import ecommerceAdmin from "../assets/projects/ecommerce-admin.png"
import catalogue from "../assets/projects/catalogue.png"
import stack from "../assets/projects/stack_overflow.png"
import sridix from '../assets/company/sridix-logo.jpg'
import MSWolrd from "../assets/tech/msWord.png"
import MSExcel from "../assets/tech/msExcel.png"
import MSPower from "../assets/tech/msPowerpoint.png"
import adminPanel from "../assets/projects/adminPanel.png"
import webScan from "../assets/projects/WebScan.png"

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
  // {
  //   name: "MS World",
  //   icon: MSWolrd,
  // },
  // {
  //   name: "MS Excel",
  //   icon: MSExcel,
  // },
  // {
  //   name: "MS Power Point",
  //   icon: MSPower,
  // }
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "NullClass E-Learning",
    icon: nullclass,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Nov 2024",
    points: [
      "Built a Stack Overflow–like Q&A web application using MERN stack (MongoDB, Express.js, React.js, Node.js) during internship.",
      "Implemented features such as user authentication, question posting, answer submissions,",
      "Managed API development and backend logic with Express.js and Node.js, along with data modeling using MongoDB.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Sridix Technologies",
    icon: sridix,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - June 2024",
    points: [
      "Worked extensively with React.js, Node.js, Express.js, and MongoDB in various full-stack projects.",
      "Gained hands-on experience with Next.js for server-side rendering and optimized web performance.",
      "Developed and maintained accounting-related web applications, focusing on performance, scalability, and accuracy and Contributed to AI-based projects.",
      "Built and deployed eCommerce platforms, including features like product manage, user authentication, and admin dashboards.",
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
    name: "Web Scanner",
    description:
      "Developed a Website Vernebilities finder Admin Panel website using React and Python. The site features when use many types of tools for scan websites, user authentication, and real-time database integration for seamless inventory management",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
        
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: webScan,
    live_link: "https://web-defender-admin.vercel.app",
    source_code_link: "https://github.com/AbdullaVora/WebDefender_Admin.git",
  },
  {
    name: "E-Commerce Admin Panel (FurStore)",
    description:
      "Developed a E-Commerce Admin Panel website using React and MongoDB. The site features dynamic manage website contents and product, user authentication, and real-time database integration for seamless inventory management",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
        
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: adminPanel,
    live_link: "https://super-admin-xi.vercel.app",
    source_code_link: "https://github.com/AbdullaVora/SuperAdmin.git",
  },
  {
    name: "Furniture ShowRoom (FurStore)",
    description:
      "Developed a sleek and modern furniture store website using React and Firebase. The site features dynamic product displays, user authentication, and real-time database integration for seamless inventory management",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
        
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: furstore,
    live_link: "https://fur-stpre-next-js.vercel.app",
    source_code_link: "https://github.com/AbdullaVora/FurnStore.git",
  },
  {
    name: "Furniture Store",
    description:
      "Designed a visually appealing furniture website template showcasing modern UI/UX principles. The template features and high-quality visuals to enhance user experience. Developed using React and plain CSS for seamless integration and performance.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
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
    name: "Stack Overflow",
    description:
      "This project is a MERN stack-based clone of Stack Overflow, providing users with a platform to seamlessly log in, ask questions, and share answers. It features user authentication, real-time interaction, and an intuitive interface for efficient knowledge sharing. Users can upvote, downvote, and comment on questions and answers, fostering collaborative problem-solving.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: stack,
    source_code_link: "https://github.com/AbdullaVora/Stack-Overflow.git",
    live_link: "https://stack-overflow-i6c6.onrender.com",
  },
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
    name: "Ecommerce Admin Panel",
    description:
      "This project involves creating an eCommerce platform with an integrated admin panel for managing the website effectively. The admin panel provides features to handle product listings, inventory, orders, and user management. Developed using ReactJS, Redux ensures seamless state management, while TailwindCSS enhances the design and layout.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceAdmin,
    live_link: "https://e-commerce-admin-beta-ten.vercel.app",
    source_code_link: "https://github.com/AbdullaVora/eCommerce-Admin.git",
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
  {
    name: "Catelogue Handler",
    description:
      "This project is an E-commerce Product Catalogue Handler that allows the owner to perform CRUD (Create, Read, Update, Delete) operations on product details. It includes a feature to generate a PDF file of the product catalog for easy sharing. The project is built using HTML, CSS, and JavaScript, ensuring a user-friendly interface and seamless functionality for managing product information.",
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
    image: catalogue,
    live_link: "https://catalogue-handle.vercel.app",
    source_code_link: "https://github.com/AbdullaVora/Catalogue-Handle.git"
  },

];

export { services, technologies, experiences, testimonials, projects };