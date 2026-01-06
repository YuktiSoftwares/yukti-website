import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const ReactJsAboutCourseSection = () => {
  return (
    <AboutCourseSection
      title={aboutCourse.title}
      description={aboutCourse.desc}
      points={aboutCourse.points}
      theme={{
        bg: "linear-gradient(135deg, #001428 0%, #002A3E 50%, #007C99 90%)",
        titleColor: "#fff",
        descColor: "rgba(255,255,255,0.85)",
        pointTitleColor: "#fff",
        pointBg: "rgba(255,255,255,0.08)",
      }}
    />
  );
};

export default ReactJsAboutCourseSection;

const aboutCourse = {
  title: "About ReactJS Course",
  desc: "ReactJS is a powerful JavaScript library used to build fast, scalable, and interactive web applications. This course helps you master modern frontend development with hands-on projects, reusable components, and real-world application architecture.",
  points: [
    {
      title: "React Fundamentals",
      subtitle:
        "Learn JSX, components, props, states, and the core building blocks of modern UI development.",
    },
    {
      title: "Hooks & State Management",
      subtitle:
        "Use hooks like useState, useEffect, and custom hooks to manage application logic efficiently.",
    },
    {
      title: "Routing & Navigation",
      subtitle:
        "Implement seamless page-to-page navigation using React Router for real web app flow.",
    },
    {
      title: "APIs & Data Handling",
      subtitle:
        "Fetch and manage data from APIs using Axios / Fetch with proper error handling & loaders.",
    },
    {
      title: "Advanced Concepts",
      subtitle:
        "Dive into Context API, performance optimization, lazy loading, code splitting, and reusable patterns.",
    },
    {
      title: "UI Frameworks & Styling",
      subtitle:
        "Work with Material UI, Tailwind CSS, Styled Components, and responsive design best practices.",
    },
    {
      title: "Real-World Projects",
      subtitle:
        "Build production-style apps like e-commerce, dashboards, authentication systems, and more.",
    },
  ],
};
