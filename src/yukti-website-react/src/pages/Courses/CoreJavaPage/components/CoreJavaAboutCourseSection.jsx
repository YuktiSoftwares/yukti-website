import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const CoreJavaAboutCourseSection = () => {
  return (
    <AboutCourseSection
      title={aboutCourse.title}
      description={aboutCourse.desc}
      points={aboutCourse.points}
      theme={{
        bg: "linear-gradient(135deg, #FDF8F6 0%, #E7F3FC 50%, #E5EAF0 100%)",
        titleColor: "#2A2D33",
        descColor: "#5F6B78",
        pointTitleColor: "#2A2D33",
        pointBg: "rgba(255,255,255,0.9)",
        pointTextColor: "#5F6B78",
      }}
    />
  );
};

export default CoreJavaAboutCourseSection;

const aboutCourse = {
  title: "About CoreJava Course",
  desc: "CoreJava is the core language of the web used to build dynamic, interactive, and responsive websites and applications. It powers everything from simple UI interactions to complex front-end applications, backend services, and modern full-stack systems.",
  points: [
    {
      title: "CoreJava Fundamentals",
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
        "Master modern CoreJava features like arrow functions, promises, async/await, modules, and destructuring.",
    },
    {
      title: "API & Async Programming",
      subtitle:
        "Work with APIs, fetch data from servers, handle JSON, and manage asynchronous code efficiently.",
    },
    {
      title: "CoreJava in the Browser",
      subtitle:
        "Understand browser internals, events, localStorage, and how CoreJava powers modern web apps.",
    },
    {
      title: "Project-Based Learning",
      subtitle:
        "Build real-world mini-projects and applications to strengthen concepts and problem-solving skills.",
    },
  ],
};
