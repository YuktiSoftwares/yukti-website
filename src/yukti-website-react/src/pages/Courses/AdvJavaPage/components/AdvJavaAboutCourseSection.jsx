import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const AdvJavaAboutCourseSection = () => {
  return (
    <AboutCourseSection
      title={aboutCourse.title}
      description={aboutCourse.desc}
      points={aboutCourse.points}
      theme={{
        bg: "linear-gradient(120deg, #001E3B 0%, #004B82 55%, #D55E33 100%)",
        titleColor: "#fff",
        descColor: "rgba(255,255,255,0.85)",
        pointTitleColor: "#fff",
        pointBg: "rgba(255,255,255,0.08)",
      }}
    />
  );
};

export default AdvJavaAboutCourseSection;

const aboutCourse = {
  title: "About Advanced Java Course",
  desc: "Advanced Java focuses on building enterprise-grade applications using powerful frameworks, server-side technologies, and database connectivity. It prepares learners to develop secure, scalable, and high-performance backend systems that power modern web applications and business solutions.",
  points: [
    {
      title: "Core to Advanced OOP & Design Patterns",
      subtitle:
        "Strengthen Java fundamentals with advanced OOP concepts, design patterns, and scalable application architecture.",
    },
    {
      title: "JDBC & Database Connectivity",
      subtitle:
        "Work with databases using JDBC to perform CRUD operations, connection pooling, and real-time data handling.",
    },
    {
      title: "Servlets & JSP",
      subtitle:
        "Learn how to build dynamic web applications using server-side technologies like Servlets and JSP.",
    },
    {
      title: "Spring Framework",
      subtitle:
        "Master Spring Core, Spring MVC, Dependency Injection, and build enterprise-level applications with modern architecture.",
    },
    {
      title: "Hibernate & ORM",
      subtitle:
        "Use Hibernate ORM for efficient database interaction, mapping, and data persistence.",
    },
    {
      title: "REST APIs & Web Services",
      subtitle:
        "Learn to build RESTful APIs, handle JSON/XML data, and integrate services for full-stack applications.",
    },
    {
      title: "Real-World Projects & Deployment",
      subtitle:
        "Apply concepts to build enterprise projects and learn deployment practices followed in the industry.",
    },
  ],
};
