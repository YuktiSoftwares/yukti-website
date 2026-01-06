import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const AdvPythonAboutCourseSection = () => {
  return (
    <AboutCourseSection
      title={aboutCourse.title}
      description={aboutCourse.desc}
      points={aboutCourse.points}
      theme={{
        bg: "linear-gradient(135deg, #306998 0%, #3B82C4 35%, #FFD43B 100%)",
        titleColor: "#fff",
        descColor: "rgba(255,255,255,0.85)",
        pointTitleColor: "#fff",
        pointBg: "rgba(255,255,255,0.08)",
      }}
    />
  );
};

export default AdvPythonAboutCourseSection;

const aboutCourse = {
  title: "About Advanced Python Course",
  desc: "The Advanced Python course is designed for learners who already know Python basics and want to master high-level programming concepts. This course focuses on writing optimized, scalable, and production-grade Python code used in real-world applications.",
  points: [
    {
      title: "Advanced OOP Concepts",
      subtitle:
        "Master inheritance, polymorphism, abstraction, encapsulation, and design patterns for scalable application development.",
    },
    {
      title: "Decorators & Generators",
      subtitle:
        "Write efficient and elegant Python code using decorators for reusable functionality and generators for memory-optimized iteration.",
    },
    {
      title: "Exception Handling & Logging",
      subtitle:
        "Build robust applications with advanced exception handling, logging, and debugging techniques.",
    },
    {
      title: "Modules, Packages & Virtual Environments",
      subtitle:
        "Organize large projects, manage environments, and work with custom and standard Python modules.",
    },
    {
      title: "File & OS Management",
      subtitle:
        "Handle files, directories, and automation tasks using built-in libraries like os, shutil, and pathlib.",
    },
    {
      title: "API Integration & Automation",
      subtitle:
        "Work with APIs, fetch data, automate workflows, and integrate with external services using Python.",
    },
    {
      title: "Multithreading & Multiprocessing",
      subtitle:
        "Build high-performance applications using parallel programming and asynchronous execution.",
    },
    {
      title: "Real-World Projects",
      subtitle:
        "Develop automation tools, API-based applications, and performance-optimized Python programs.",
    },
  ],
};
