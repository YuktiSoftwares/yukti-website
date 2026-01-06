import ToolsTechnologiesSection from "pages/Courses/sectionComponents/ToolsTechnologiesSection";
import React from "react";
import reactLogo from "assets/images/logos/tools&Tech/react.png";
import gitLogo from "assets/images/logos/tools&Tech/git.svg";
import javalogo from "assets/images/logos/tools&Tech/java.svg";
import springlogo from "assets/images/logos/tools&Tech/spring&springboot.png";
import postgresqllogo from "assets/images/logos/tools&Tech/postgreSQL.svg";
import postmanlogo from "assets/images/logos/tools&Tech/postman.png";
import githublogo from "assets/images/logos/tools&Tech/github.svg";
import htmllogo from "assets/images/logos/tools&Tech/html.png";
import csslogo from "assets/images/logos/tools&Tech/css.png";
import javascriptlogo from "assets/images/logos/tools&Tech/javaScript.svg";
import muilogo from "assets/images/logos/tools&Tech/mui.png";
import tailwindLogo from "assets/images/logos/tools&Tech/tailwindCSS.svg";
import bootstrapLogo from "assets/images/logos/tools&Tech/bootstrap.png";
import mysqllogo from "assets/images/logos/tools&Tech/mysql.png";
import awslogo from "assets/images/logos/tools&Tech/aws.png";
import dockerlogo from "assets/images/logos/tools&Tech/docker.png";
import clogo from "assets/images/logos/tools&Tech/c.png";
import cpluslogo from "assets/images/logos/tools&Tech/c++.png";
import djangologo from "assets/images/logos/tools&Tech/django2.png";
import mongodblogo from "assets/images/logos/tools&Tech/mongodb.png";
import nextjslogo from "assets/images/logos/tools&Tech/nextjs.png";
import typescriptlogo from "assets/images/logos/tools&Tech/typescript.png";
import ailogo from "assets/images/logos/tools&Tech/ai.png";
import angularjslogo from "assets/images/logos/tools&Tech/angularjs.png";
import nodelogo from "assets/images/logos/tools&Tech/node.png";
import antDLogo from "assets/images/logos/tools&Tech/ant-design.svg";
import expressLogo from "assets/images/logos/tools&Tech/express.svg";
import axiosLogo from "assets/images/logos/tools&Tech/axios.svg";
import androidstudioLogo from "assets/images/logos/tools&Tech/android-studio.svg";
import babelLogo from "assets/images/logos/tools&Tech/babel.svg";
import djangoRestlogo from "assets/images/logos/tools&Tech/django-rest.svg";
import eclipselogo from "assets/images/logos/tools&Tech/eclipse.svg";
import powerbilogo from "assets/images/logos/tools&Tech/powerbi.png";
import pytorchlogo from "assets/images/logos/tools&Tech/pytorch.svg";
import reactrouterlogo from "assets/images/logos/tools&Tech/react-router.svg";
import hibernatelogo from "assets/images/logos/tools&Tech/hibernate.svg";

const AdvPythonToolsTechSection = () => {
  return (
    <ToolsTechnologiesSection
      title={toolsTech.title}
      subtitle={toolsTech.subtitle}
      techList={toolsTech.techList}
      theme={{
        gradient: "linear-gradient(135deg, #306998 0%, #3B82C4 35%, #FFD43B 100%)",
        textColor: "#fff",
        titleColor: "#fff",
        subTitleColor: "#fff",
      }}
    />
  );
};

export default AdvPythonToolsTechSection;
const toolsTech = {
  title: "Tools & Technologies",
  subtitle: "Powerful stack used across real-world projects and industry environments",
  techList: [
    {
      logo: javalogo,
      name: "Java",
      description:
        "Object-oriented programming language used for building cross-platform applications",
    },
    {
      logo: springlogo,
      name: "Spring & SpringBoot",
      description:
        "Java-based framework for building scalable backend applications and microservices",
    },
    {
      logo: postgresqllogo,
      name: "PostgreSQL",
      description:
        "Advanced open-source relational database system known for reliability and performance",
    },
    {
      logo: mysqllogo,
      name: "My SQL",
      description: "Popular open-source relational database for web and enterprise applications",
    },
    {
      logo: postmanlogo,
      name: "Postman",
      description: "API development and testing tool for building, debugging, and documenting APIs",
    },
    {
      logo: githublogo,
      name: "GitHub",
      description:
        "Cloud-based Git repository hosting service for version control and collaboration",
    },
    {
      logo: htmllogo,
      name: "HTML",
      description: "Markup language for structuring and presenting content on the web",
    },
    {
      logo: csslogo,
      name: "CSS",
      description: "Style sheet language used to design and layout web pages",
    },
    {
      logo: muilogo,
      name: "Material UI",
      description: "React component library implementing Google's Material Design",
    },
    {
      logo: tailwindLogo,
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapidly building custom designs",
    },
    {
      logo: antDLogo,
      name: "Ant Design",
      description: "Enterprise-level UI design language and React component library",
    },
    {
      logo: bootstrapLogo,
      name: "BootStrap",
      description: "Popular CSS framework for responsive and mobile-first web development",
    },
    {
      logo: javascriptlogo,
      name: "JavaScript",
      description: "High-level scripting language for dynamic and interactive web development",
    },
    {
      logo: reactLogo,
      name: "React",
      description: "JavaScript library for building fast and reusable user interfaces",
    },
    {
      logo: nextjslogo,
      name: "NextJS",
      description: "React framework for server-side rendering and static site generation",
    },
    {
      logo: typescriptlogo,
      name: "TypeScript",
      description: "Typed superset of JavaScript that compiles to plain JavaScript",
    },
    {
      logo: angularjslogo,
      name: "Angular JS",
      description: "JavaScript framework for building dynamic single-page applications",
    },
    {
      logo: nodelogo,
      name: "Node JS",
      description: "JavaScript runtime for building scalable server-side applications",
    },
    {
      logo: expressLogo,
      name: "Express JS",
      description: "Minimal and flexible Node.js web application framework",
    },
    {
      logo: gitLogo,
      name: "Git",
      description: "Distributed version control system for tracking changes in source code",
    },
    {
      logo: awslogo,
      name: "Amazon Web Services",
      description: "Cloud computing platform offering scalable infrastructure and services",
    },
    {
      logo: dockerlogo,
      name: "Docker",
      description: "Platform for developing, shipping, and running applications in containers",
    },
    {
      logo: clogo,
      name: "C Programming",
      description: "Procedural programming language for system-level and embedded development",
    },
    {
      logo: cpluslogo,
      name: "C++ Programming",
      description: "Object-oriented extension of C used for high-performance applications",
    },
    {
      logo: djangologo,
      name: "Django",
      description: "High-level Python web framework for rapid development and clean design",
    },
    {
      logo: djangoRestlogo,
      name: "Django Rest API",
      description: "Toolkit for building Web APIs using Django",
    },
    {
      logo: mongodblogo,
      name: "MongoDB",
      description: "NoSQL document database for scalable and flexible data storage",
    },
    {
      logo: ailogo,
      name: "Artificial Intelligence",
      description:
        "Field of computer science focused on building intelligent systems and algorithms",
    },
    {
      logo: axiosLogo,
      name: "AXIOS",
      description: "Promise-based HTTP client for making API requests in JavaScript",
    },
    {
      logo: androidstudioLogo,
      name: "Android Studio",
      description: "Official IDE for Android app development",
    },
    {
      logo: babelLogo,
      name: "Babel",
      description:
        "JavaScript compiler that enables writing modern JS compatible with older browsers",
    },
    {
      logo: eclipselogo,
      name: "Eclipse",
      description: "IDE primarily used for Java development and other programming languages",
    },
    {
      logo: powerbilogo,
      name: "Power Bi",
      description: "Business analytics tool for visualizing and sharing insights from data",
    },
    {
      logo: pytorchlogo,
      name: "Pytorch",
      description: "Open-source deep learning framework for building neural networks",
    },
    {
      logo: reactrouterlogo,
      name: "React Router",
      description: "Routing library for React applications to manage navigation",
    },
    {
      logo: hibernatelogo,
      name: "Hibernate",
      description: "Java framework for mapping object-oriented models to relational databases",
    },
  ],
};
