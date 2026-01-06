import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const SpringSpringBootAboutCourseSection = () => {
  return (
    <AboutCourseSection
      title={aboutCourse.title}
      description={aboutCourse.desc}
      points={aboutCourse.points}
      theme={{
        bg: "linear-gradient(135deg, #f6fadc 0%, #dcf1c1 40%, #bfe7a9 100%)",
        titleColor: "#4E5D47",
        descColor: "6F7D66",
        pointTitleColor: "#4E5D47",
        pointBg: "rgba(255,255,255,0.08)",
        borderColor: "#fff",
        pointTextColor: "6F7D66",
      }}
    />
  );
};

export default SpringSpringBootAboutCourseSection;

const aboutCourse = {
  title: "About Spring & Spring Boot Course",
  desc: "This course focuses on building high-performance, scalable, and secure backend systems using Spring and Spring Boot. You will learn how to create REST APIs, manage databases, handle security, and deploy enterprise-grade applications — the exact skills used in real Java development roles.",
  points: [
    {
      title: "Spring Framework Basics",
      subtitle:
        "Understand core concepts like IoC, Dependency Injection, Beans, and Application Context.",
    },
    {
      title: "Spring Boot Fundamentals",
      subtitle:
        "Build production-ready applications quickly with auto-configuration, starter dependencies, and embedded servers.",
    },
    {
      title: "RESTful API Development",
      subtitle:
        "Create scalable REST APIs with controllers, request mapping, DTOs, and proper response handling.",
    },
    {
      title: "Database Integration (JPA & Hibernate)",
      subtitle:
        "Work with Spring Data JPA and Hibernate to connect, query, and manage relational databases.",
    },
    {
      title: "Spring Security",
      subtitle:
        "Implement authentication, authorization, JWT, and role-based access for secure applications.",
    },
    {
      title: "Exception Handling & Validation",
      subtitle:
        "Write clean, stable services using error handling, validations, and global exception strategies.",
    },
    {
      title: "Microservices & Deployment",
      subtitle:
        "Understand microservices basics, build modular services, and deploy Spring Boot apps to cloud platforms.",
    },
  ],
};
