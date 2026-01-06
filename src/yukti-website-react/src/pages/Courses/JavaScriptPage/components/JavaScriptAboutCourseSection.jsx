import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const JavaScriptAboutCourseSection = () => {
  return (
    <AboutCourseSection
      title={aboutCourse.title}
      description={aboutCourse.desc}
      points={aboutCourse.points}
      theme={{
        bg: "linear-gradient(90deg, #FFFEF6 0%, #FCF7EC 50%, #F5F2E7 100%)",
        titleColor: "#2B2B2B",
        descColor: "#7B7B6D",
        pointTitleColor: "#5A5A5A",
        pointBg: "rgba(255,255,255,0.9)",
        pointTextColor: "#7B7B6D",
      }}
    />
  );
};

export default JavaScriptAboutCourseSection;

const aboutCourse = {
  title: "About JavaScript Course",
  desc: "JavaScript is the core language of the web used to build dynamic, interactive, and responsive websites and applications. It powers everything from simple UI interactions to complex front-end applications, backend services, and modern full-stack systems.",
  points: [
    {
      title: "JavaScript Fundamentals",
      subtitle:
        "Understand variables, data types, operators, loops, functions, and core programming concepts.",
    },
    {
      title: "DOM Manipulation",
      subtitle:
        "Learn how to interact with web pages, modify UI, handle events, and create dynamic experiences.",
    },
    {
      title: "ES6+ Modern Features",
      subtitle:
        "Master modern JavaScript features like arrow functions, promises, async/await, modules, and destructuring.",
    },
    {
      title: "API & Async Programming",
      subtitle:
        "Work with APIs, fetch data from servers, handle JSON, and manage asynchronous code efficiently.",
    },
    {
      title: "JavaScript in the Browser",
      subtitle:
        "Understand browser internals, events, localStorage, and how JavaScript powers modern web apps.",
    },
    {
      title: "Project-Based Learning",
      subtitle:
        "Build real-world mini-projects and applications to strengthen concepts and problem-solving skills.",
    },
  ],
};
