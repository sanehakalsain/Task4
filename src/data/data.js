import articleReact from "../assets/images/react.png";
import articleNodejs from "../assets/images/node.png";
import articleHooks from "../assets/images/reacthook.png";
import reactRouterImage from "../assets/images/Reactrouter.png";
import js6Image from "../assets/images/JS6.png";
import expressImage from "../assets/images/Express.png";
export const articles = [
  {
    id: 1,
    title: "React",
    description:
      "A beginner-friendly overview of how React components, props, and state work together.",
    rating: 4.5,
    author: "Saneha",
    image: articleReact,
  },

  {
    id: 2,
    title: "NodeJS",
    description:
      "Getting started with Node.js for building simple backend servers and APIs.",
    rating: 4.2,
    author: "Saneha",
    image: articleNodejs,
  },

  {
    id: 3,
    title: "React Hooks",
    description:
      "An introduction to useState and useEffect and why hooks changed how React apps are built.",
    rating: 4.8,
    author: "Saneha",
    image: articleHooks,
  },
];

export const tutorials = [
  {
    id: 1,
    title: "React Router",
    description:
      "A beginner-friendly introduction to React Router and how it is used to create navigation between pages in a React application.",
    rating: 4.6,
    author: "Saneha",
    image: reactRouterImage,
  },
  {
    id: 2,
    title: "JavaScript ES6",
    description:
      "An introduction to modern JavaScript ES6 features such as let, const, arrow functions and template literals.",
    rating: 4.3,
    author: "Saneha",
    image: js6Image,
  },
  {
    id: 3,
    title: "Express.js",
    description:
      "A beginner-friendly introduction to Express.js for creating backend servers and APIs using Node.js.",
    rating: 4.7,
    author: "Saneha",
    image: expressImage,
  },
];