import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const JFSDCurriculumSection = () => {
  return (
    <CurriculumSection
      title="Curriculum"
      subtitle="A step-by-step learning path designed to make you job-ready"
      curriculumList={curriculumData}
      theme={{
        gradient: "linear-gradient(135deg, #8945CB, #451E93, #270D6E)",
        titleColor: "#fff",
        subtitleColor: "#fff",
        curriculumTitleColor: "#fff",
        curriculumSubtitleColor: "#fff",
        curriculumDescColor: "#fff",
      }}
    />
  );
};

export default JFSDCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Core Java",
    moduleDescription:
      "Comprehensive Java programming fundamentals with hands-on OOP, multithreading, and JDBC integration.",
    topics: [
      "Introduction & Setup",
      "Fundamentals of Java",
      "Control Flow Statements",
      "Arrays",
      "Object-Oriented Programming (OOP) Basics",
      "Advanced OOP Concepts",
      "Abstraction and Code Organization",
      "Strings and Memory Management",
      "Exception Handling",
      "Collections Framework",
      "Multithreading",
      "Input/Output (I/O) and Serialization",
      "Database Connectivity (JDBC)",
    ],
  },
  {
    moduleTitle: "Advanced Java",
    moduleDescription:
      "In-depth exploration of modern Java features, enterprise frameworks, and real-world backend development.",
    topics: [
      "Java 8 Features & Functional Programming",
      "Executor Frameworks & Concurrency",
      "Java Memory Management",
      "Design Patterns",
      "Serialization & Cloning",
      "JDBC (Java Database Connectivity)",
      "JSP & Servlet",
      "Spring Boot Framework",
      "Live Project",
    ],
  },
  {
    moduleTitle: "Database Management System",
    moduleDescription:
      "Structured learning of relational databases, SQL operations, normalization, and data integrity principles.",
    topics: [
      "Introduction",
      "Basic Syntax",
      "DDL (Data Definition Language)",
      "DML (Data Manipulation Language)",
      "DCL (Data Control Language)",
      "TCL (Transaction Control Language)",
      "Aggregate Functions",
      "Data Constraints",
      "JOINS",
      "Sub Queries",
      "Advanced Functions",
      "Indexes",
      "Normalization",
      "Data Integrity & Security",
    ],
  },
  {
    moduleTitle: "Basic HTML",
    moduleDescription:
      "Foundational web development concepts using HTML to structure and present content effectively.",
    topics: [
      "Meet HTML – The Language of the Web",
      "Understanding HTML Tags – The Building Blocks of a Web Page",
      "Text Formatting in HTML – Styling Content the Right Way",
      "Attributes in HTML",
      "Types of Elements in HTML",
      "Hyperlinks in HTML",
      "Working with Images in HTML",
      "Image Mapping",
      "Lists & Accordion in HTML",
      "Anatomy of an HTML Document",
    ],
  },
  {
    moduleTitle: "Advanced HTML",
    moduleDescription:
      "Enhanced HTML techniques for embedding media, structuring data, and improving semantic clarity and accessibility.",
    topics: [
      "Embedding Content with <iframe>",
      "Working with the <video> Element",
      "Playing Sounds with the <audio> Element",
      "Creating Tables in HTML",
      "Forms in HTML",
      "Semantic Tags in HTML5",
      "Favicon: The Little Icon with a Big Impact",
      "HTML Symbols: Writing the Unwritable",
      "SVG in HTML – Scalable Vector Graphics",
    ],
  },
  {
    moduleTitle: "Basic CSS",
    moduleDescription:
      "Essential styling techniques for designing visually appealing and structured web pages using CSS.",
    topics: [
      "Introduction to CSS",
      "CSS Selectors",
      "Basic Styling Properties",
      "Typography with Font Properties",
      "Background Properties",
      "Text Properties",
      "Box Model",
      "Margin, Padding, Border",
      "Hands-on Coding Exercises",
    ],
  },
  {
    moduleTitle: "Advanced CSS",
    moduleDescription:
      "Mastering layout systems, animations, and modern styling techniques for responsive and scalable web design.",
    topics: [
      "Layout and Positioning",
      "CSS Floating and Clearing",
      "CSS Flexbox",
      "CSS Grid Layout",
      "CSS Multi-Column Layout",
      "CSS Gradients",
      "CSS Transform, Transition, and Animation",
      "Responsive Design",
      "Modern CSS Features",
      "CSS Counters",
      "CSS Preprocessors & Frameworks",
      "Debugging CSS",
    ],
  },
  {
    moduleTitle: "Basic JavaScript",
    moduleDescription:
      "Core programming concepts using JavaScript to build dynamic, interactive, and logic-driven web applications.",
    topics: [
      "Introduction to JavaScript",
      "Variables",
      "Data Types & Operations",
      "Control Flow",
      "Expressions & Operators",
      "Functions",
      "Built-in Utilities",
    ],
  },
  {
    moduleTitle: "Advanced JavaScript",
    moduleDescription:
      "Deep dive into modern JavaScript techniques, asynchronous workflows, and full stack integration strategies.",
    topics: [
      "Modular Programming",
      "Error Handling",
      "Asynchronous Programming",
      "Iterators & Generators",
      "Advanced OOP & Patterns",
      "Performance & Debugging",
      "Advanced Browser Concepts",
      "Full Stack Integration",
    ],
  },
];
