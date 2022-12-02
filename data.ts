import { FaServer, FaDatabase } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi, AiOutlineCloudServer } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: GoBrowser,
    title: "Frontend Development",
    about:
      "Building smart, responsive and scalable SPAs with <b>HTML</b>,<b>CSS</b>,<b>JavaScript</b> and <b>TypeScript</b> using <b>React.js</b> framework and <b>Redux</b> as state management tool",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Bulding the server side with <b>Node.js</b> using <b>Express</b> for RESTful APIs and writing request to database to retrieve and insert data",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Stunning user interface designer using Wireframes like <b>Figma</b> and <b>Framer</b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "Developing REST API using <b>Node API</b> and work with different third parties APIs ",
  },
  {
    Icon: FaDatabase,
    title: "Databases",
    about: "Using SQl and Non-sql databases as <b>PostgreSQL</b> and <b>MongoDb</b>",
  },
  {
    Icon: AiOutlineCloudServer,
    title: "Cloud and Serverless",
    about:
      "Using <b>MongoDb Realm</b> to build serverless web apps, as well as <b>AWS services</b> and <b>Azure cloud</b>",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "C#",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Material UI",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Node.js",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "PostgreSQL",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "50",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Azure",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "GitHub",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "PgAdmin4",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "PostMan",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "VsCode",
    level: "60",
  }, 
  {
    Icon: BsCircleFill,
    name: "VsStudio",
    level: "35",
  }, 
];

export const projects: IProject[] = [
  { 
    name: "PetLove App",
    description:
      "This app is for pets breeders to find a male pet",
    image_path: "/images/PetLove.png",
    deployed_url: "https://petlove-ion.herokuapp.com/",
    github_url: "https://github.com/IONnagurnea/PetLove",
    category: ["javaScript", "react", "node", "postgreSQL", "AWS", "javaScript"],
    key_techs: ["React", "Material UI", "Bootstrap", "jQuery", "Node.js", "Express", "Jsonwebtoken", "AWS-sdk", "PayPal", "Stripe", "PostgreSQL", "Heroku"],
  },
  {
    name: "Simple Cart",
    image_path: "/images/Cart.png",
    deployed_url: "https://cartadding-ion.netlify.app/",
    github_url: "https://github.com/IONnagurnea/codecademyStore",
    category: ["javaScript", "react"],
    description:
      "A cart where you can add items",
    key_techs: ["React", "Redux"],
  },
  {
    name: "Expense Tracker",
    image_path: "/images/Expense.png",
    deployed_url: "https://expensetracker-ion.netlify.app/",
    github_url: "https://github.com/IONnagurnea/ExpenseTrackerCodecademy",
    category: ["javaScript", "react"],
    description:
      "A basic expense tracket feature",
    key_techs: [
      "React",
      "Redux",
      "ReduxJs/Toolkit",
    ],
  },
  {
    name: "Recipe App",
    image_path: "/images/Recipe.png",
    deployed_url: "https://reciepe-ion.netlify.app/",
    github_url: "https://github.com/IONnagurnea/recipeAppReactRedux-Codecademy",
    category: ["javaScript", "react"],
    description:
      "Adding, searching and removing recipes feature",
    key_techs: ["React", "Redux", "React-Redux"],
  },
  {
    name: "Jammming Spotify",
    image_path: "/images/JammmingSpotify.png",
    deployed_url: "https://jammingspotify-ion.netlify.app/",
    github_url: "https://github.com/IONnagurnea/jammingSpotify",
    category: ["javaScript", "react"],
    description:
      "Serching songs from spotify and adding them to a customize playlist ",
    key_techs: ["React", "JavaScript", "CSS", "Spotify APIs" ],
  },

];
