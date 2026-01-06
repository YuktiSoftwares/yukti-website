import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const SpringSpringBootCurriculumSection = () => {
  return (
    <CurriculumSection
      title="Curriculum"
      subtitle="A step-by-step learning path designed to make you job-ready"
      curriculumList={curriculumData}
      theme={{
        gradient: "linear-gradient(135deg, #f6fadc 0%, #dcf1c1 40%, #bfe7a9 100%)",
        titleColor: "#4E5D47",
        subtitleColor: "#6F7D66",
        curriculumTitleColor: "#4E5D47",
        curriculumSubtitleColor: "#6F7D66",
        curriculumDescColor: "#6F7D66",
      }}
    />
  );
};

export default SpringSpringBootCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Spring Framework Fundamentals",
    moduleDescription:
      "Introduction to Spring ecosystem, core principles of Dependency Injection and Inversion of Control for enterprise application development.",
    topics: [
      "Introduction to Spring Framework",
      "Spring Architecture and Modules",
      "Spring Container Overview",
      "Configuration Methods (XML vs Annotations)",
    ],
  },
  {
    moduleTitle: "Core Spring Concepts",
    moduleDescription:
      "Deep dive into Dependency Injection, Inversion of Control, and Aspect-Oriented Programming for building modular applications.",
    topics: [
      "Dependency Injection (DI) & Inversion of Control (IoC)",
      "Bean Configuration and Lifecycle",
      "Aspect-Oriented Programming (AOP)",
      "Spring Bean Scopes and Autowiring",
    ],
  },
  {
    moduleTitle: "Data Access with Spring",
    moduleDescription:
      "Database integration using Spring JDBC, JPA, Hibernate, and transaction management for robust data persistence.",
    topics: [
      "Spring with Data Access (Spring JDBC & JPA)",
      "Transaction Management",
      "Spring Data JPA",
      "Repository Pattern Implementation",
    ],
  },
  {
    moduleTitle: "Web Development with Spring MVC",
    moduleDescription:
      "Building web applications using Spring MVC pattern, REST APIs, and handling web requests and responses.",
    topics: [
      "Spring MVC (Model-View-Controller)",
      "Controller Annotations",
      "Request Mapping and Handling",
      "View Resolution and RESTful Web Services",
    ],
  },
  {
    moduleTitle: "Spring Boot Essentials",
    moduleDescription:
      "Rapid application development with Spring Boot, auto-configuration, and production-ready features.",
    topics: [
      "Spring Boot Fundamentals",
      "Auto-configuration and Starters",
      "Spring Boot Application Configuration",
      "Embedded Servers and Deployment",
    ],
  },
  {
    moduleTitle: "Advanced Spring Boot Features",
    moduleDescription:
      "Advanced Spring Boot capabilities including Actuator, testing, profiling, and externalized configuration.",
    topics: [
      "Spring Boot Advanced Features",
      "Spring Boot Actuator",
      "Testing Spring Applications",
      "Profiles and External Configuration",
    ],
  },
  {
    moduleTitle: "Application Security with Spring Security",
    moduleDescription:
      "Comprehensive security implementation including authentication, authorization, and security best practices.",
    topics: [
      "Spring Security",
      "Authentication and Authorization",
      "JWT Token Implementation",
      "Method Level Security",
    ],
  },
  {
    moduleTitle: "Production Ready Applications",
    moduleDescription:
      "Real-world project implementation, interview preparation, and best practices for enterprise Spring development.",
    topics: [
      "Interview Preparation & Practical Implementation",
      "Project Structure and Best Practices",
      "Performance Optimization",
      "Common Spring Patterns and Anti-patterns",
    ],
  },
];
