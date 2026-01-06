import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const AdvJavaCurriculumSection = () => {
  return (
    <CurriculumSection
      title="Curriculum"
      subtitle="A step-by-step learning path designed to make you job-ready"
      curriculumList={curriculumData}
      theme={{
        gradient: "linear-gradient(120deg, #001E3B 0%, #004B82 55%, #D55E33 100%)",
        titleColor: "#fff",
        subtitleColor: "#fff",
        curriculumTitleColor: "#fff",
        curriculumSubtitleColor: "#fff",
        curriculumDescColor: "#fff",
      }}
    />
  );
};

export default AdvJavaCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Java 8 Features & Functional Programming",
    moduleDescription:
      "Modern Java features including lambda expressions, streams, functional interfaces, and other Java 8 enhancements for efficient programming.",
    topics: [
      "Lambda Expressions",
      "Method References",
      "Functional Interfaces",
      "Stream API",
      "Default & Static Methods in Interfaces",
      "Optional Class",
      "Collectors Class",
      "ForEach() Method",
      "Parallel Array Sorting",
      "I/O Enhancements",
      "Concurrency Enhancements",
      "Interview Questions",
    ],
  },
  {
    moduleTitle: "Executor Frameworks & Concurrency",
    moduleDescription:
      "Advanced concurrency utilities and executor frameworks for efficient thread management and asynchronous task execution.",
    topics: [
      "Executor",
      "ExecutorService",
      "newFixedThreadPool",
      "newSingleThreadExecutor",
      "newCachedThreadPool",
      "ScheduledExecutorService",
      "Futures",
      "Interview Questions",
    ],
  },
  {
    moduleTitle: "Java Memory Management",
    moduleDescription:
      "Understanding Java memory model, garbage collection mechanisms, and memory analysis tools for performance optimization.",
    topics: [
      "Garbage Collection",
      "Garbage Collection Algorithms",
      "Memory Analyzer Tools (JConsole, JVisualVM)",
      "Interview Questions",
    ],
  },
  {
    moduleTitle: "Design Patterns",
    moduleDescription:
      "Implementation of common design patterns in Java for creating maintainable and scalable software architectures.",
    topics: [
      "Singleton Pattern",
      "Factory Pattern",
      "Adapter Pattern",
      "Template Pattern",
      "Interview Questions",
    ],
  },
  {
    moduleTitle: "Serialization & Cloning",
    moduleDescription:
      "Object serialization techniques and cloning mechanisms for data persistence and object duplication in Java applications.",
    topics: ["Serialization Concepts", "Object Cloning", "Interview Questions"],
  },
  {
    moduleTitle: "JDBC (Java Database Connectivity)",
    moduleDescription:
      "Database connectivity framework for Java applications, including transaction management and result set handling.",
    topics: [
      "Introduction",
      "JDBC Architecture",
      "Types of Drivers",
      "Statement",
      "ResultSet",
      "Read-Only, Updatable & Forward-Only ResultSet",
      "Transactions",
      "Interview Questions",
    ],
  },
  {
    moduleTitle: "JSP & Servlet",
    moduleDescription:
      "Java web technologies for building dynamic web applications, including session management and security considerations.",
    topics: [
      "Introduction to JSP/Servlet",
      "Session Tracking Mechanisms",
      "HTTP Session",
      "Cookies",
      "URL Rewriting",
      "Hidden Form Fields",
      "Filters & Wrappers",
      "Listeners",
      "Web Security",
      "Interview Questions",
    ],
  },
  {
    moduleTitle: "Spring Boot Framework",
    moduleDescription:
      "Rapid application development using Spring Boot for creating production-ready enterprise applications with minimal configuration.",
    topics: [
      "Introduction to Spring Boot",
      "Creating First Application",
      "Using CommandLineRunner",
      "Developing Production-Ready Applications",
    ],
  },
  {
    moduleTitle: "Live Project",
    moduleDescription:
      "End-to-end implementation of a real-time project integrating Spring Boot and advanced Java concepts in a practical scenario.",
    topics: ["Implementation of Real-Time Project using Spring Boot and Java Concepts"],
  },
];
