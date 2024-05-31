import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineDatabase } from "react-icons/hi";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // Centium Consulting
  {
    title: "Software Engineer, Centium Consulting",
    location: "Pune, India",
    description:
      "At Centium Consulting, I leverage automation tools (Selenium, ChromeDriver, Postman) to streamline Xcelero and build responsive web applications with robust functionalities using JavaScript and crafting dynamic user interfaces with ReactJS! ",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  // CDAC
  {
    title: "Advance Computing Student, C-DAC ACTS",
    location: "Pune, India",
    description:
      "I honed my skills in advanced computing at C-DAC's PGD program in Computer Science. This program equipped me with the knowledge and tools to be at the forefront of technological innovation",
    icon: React.createElement(HiOutlinePencil),
    date: "2022 - 2023",
  },
  // CloudTiffins
  {
    title: "Front-End Developer, Cloud-Tiffins",
    location: "Gwalior, India",
    description:
      "I put my Frontend development skills to work for CloudTiffins (Cousin's business)! I used React, Redux, Tailwind, and Appwrite to create a secure and responsive web app for managing clients, payments, and data analysis.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  // Capgemini
  {
    title: "Data Analyst Intern, Capgemini",
    location: "Remote",
    description:
      "Sharpened my data analysis skills during my Data Analyst Internship at Capgemini. I gained valuable experience in SQL, Python, Tableau, Informatica etc.",
    icon: React.createElement(HiOutlineDatabase),
    date: "2021",
  },
  // CGC
  {
    title: "Computer Science Student, COE CGC Landran",
    location: "Mohali, India",
    description:
      "I was a B.Tech Computer Science student at Chandigarh Group of Colleges. This program provided me with the skills and knowledge to become a well-rounded professional, with a passion for innovation and problem-solving.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "DaisyUI",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "SuiteScript",
  "Firebase",
  "Appwrite",
  "Recharts",
  "Strapi",
] as const;
