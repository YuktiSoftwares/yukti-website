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
  {
    moduleTitle: "React JS Fundamentals",
    moduleDescription:
      "Introduction to React ecosystem, core concepts, JSX syntax, and component-based architecture for modern web development.",
    topics: [
      "Introduction to ReactJS",
      "Virtual DOM vs Real DOM",
      "JSX Syntax and Expressions",
      "React Components Overview",
      "Setting Up React Development Environment",
    ],
  },
  {
    moduleTitle: "Components & Rendering",
    moduleDescription:
      "Building reusable components, understanding rendering mechanisms, and managing component lifecycle in React applications.",
    topics: [
      "Components",
      "Functional vs Class Components",
      "Component Lifecycle Methods",
      "Conditional Rendering",
      "Lists and Keys",
      "Render Props Pattern",
    ],
  },
  {
    moduleTitle: "Modern React with Hooks",
    moduleDescription:
      "Mastering React Hooks for state management, side effects, and building custom hooks for reusable logic.",
    topics: [
      "Hooks",
      "useState and useEffect Hooks",
      "Custom Hooks Creation",
      "useContext and useReducer",
      "Hook Rules and Best Practices",
      "Performance Optimization with Hooks",
    ],
  },
  {
    moduleTitle: "Routing & Navigation",
    moduleDescription:
      "Implementing client-side routing, navigation patterns, and route management in single-page applications.",
    topics: [
      "Routers",
      "React Router Setup",
      "Route Configuration",
      "Programmatic Navigation",
      "Route Parameters and Query Strings",
      "Protected Routes and Authentication",
    ],
  },
  {
    moduleTitle: "State Management Solutions",
    moduleDescription:
      "Advanced state management patterns using Context API and external libraries for complex application state.",
    topics: [
      "State Management",
      "Context API Implementation",
      "useReducer for Complex State",
      "State Management Libraries Overview",
      "Global State Patterns",
      "State Persistence Techniques",
    ],
  },
  {
    moduleTitle: "Styling & UI Frameworks",
    moduleDescription:
      "Modern CSS approaches, UI frameworks, and styling methodologies for building attractive React applications.",
    topics: [
      "CSS & Frameworks",
      "Tailwind CSS Integration",
      "Material UI Components",
      "Styled Components",
      "CSS Modules",
      "Responsive Design in React",
    ],
  },
  {
    moduleTitle: "API Integration & Data Fetching",
    moduleDescription:
      "HTTP client configuration, API communication patterns, and data fetching strategies in React applications.",
    topics: [
      "API Calls",
      "Axios Configuration",
      "REST API Integration",
      "Data Fetching Patterns",
      "Error Handling for APIs",
      "Loading States Management",
    ],
  },
  {
    moduleTitle: "Forms & User Input Handling",
    moduleDescription:
      "Form management, user input validation, and form state handling using popular React form libraries.",
    topics: [
      "Forms",
      "React Hook Form Implementation",
      "Formik Setup and Usage",
      "Yup Validation Schema",
      "Form Submission Handling",
      "Dynamic Form Fields",
    ],
  },
  {
    moduleTitle: "Type Safety & Production Readiness",
    moduleDescription:
      "Adding type safety with TypeScript, performance optimization, and preparing React applications for production.",
    topics: [
      "Types & Validation",
      "TypeScript with React",
      "Prop Types and Default Props",
      "Error Boundaries",
      "Code Splitting and Lazy Loading",
      "Performance Optimization Techniques",
    ],
  },
  {
    moduleTitle: "ReactJS",
    moduleDescription:
      "Modern frontend development using ReactJS, focusing on components, state, routing, and API integration.",
    topics: [
      "Introduction to ReactJS",
      "Components",
      "Rendering",
      "Hooks",
      "Routers",
      "State Management",
      "CSS & Frameworks",
      "API Calls",
      "Forms",
      "Types & Validation",
    ],
  },
];
