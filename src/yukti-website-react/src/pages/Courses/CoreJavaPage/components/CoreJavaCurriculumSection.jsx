import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const CoreJavaCurriculumSection = () => {
  return (
    <CurriculumSection
      title="Curriculum"
      subtitle="A step-by-step learning path designed to make you job-ready"
      curriculumList={curriculumData}
      theme={{
        gradient: "linear-gradient(135deg, #FDF8F6 0%, #E7F3FC 50%, #E5EAF0 100%)",
        titleColor: "#2A2D33",
        subtitleColor: "#5F6B78",
        curriculumTitleColor: "#2A2D33",
        curriculumSubtitleColor: "#5F6B78",
        curriculumDescColor: "#5F6B78",
      }}
    />
  );
};

export default CoreJavaCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Introduction to CoreJava",
    moduleDescription:
      "Fundamental concepts of CoreJava, its history, versions, and execution environments.",
    topics: ["What is CoreJava", "History of CoreJava", "CoreJava Versions", "How to run CoreJava"],
  },
  {
    moduleTitle: "Variables",
    moduleDescription:
      "Understanding variable declarations, scoping rules, and best practices for naming variables.",
    topics: ["Variable Declarations", "Hoisting", "Variable Naming Rules", "Variable Scopes"],
  },
  {
    moduleTitle: "Data Types & Operations",
    moduleDescription:
      "Comprehensive coverage of CoreJava data types, type conversion, and operational expressions.",
    topics: [
      "Data types (primitive vs objects – string, number, bigint, boolean, null, undefined, symbol)",
      "Type conversion & coercion",
      "Operators & expressions",
    ],
  },
  {
    moduleTitle: "Control Flow",
    moduleDescription:
      "Managing program execution flow through conditional statements and loop structures.",
    topics: ["Conditional statements (if, switch)", "Loops (for, while, do-while)"],
  },
  {
    moduleTitle: "Expressions & Operators",
    moduleDescription: "Advanced operator usage and expression evaluation in CoreJava.",
    topics: ["Conditional Operators", "Comma Operators", "Unary Operators"],
  },
  {
    moduleTitle: "Functions",
    moduleDescription:
      "Function declarations, parameters, and modern function syntax including arrow functions and IIFE.",
    topics: [
      "Function declarations",
      "Parameters",
      "Arrow functions",
      "IIFE",
      "Default & rest parameters",
    ],
  },
  {
    moduleTitle: "Built-in Utilities",
    moduleDescription:
      "Essential built-in objects, data structures, and utility methods for efficient CoreJava development.",
    topics: [
      "Built-in objects & methods (Array, Map, Set)",
      "JSON handling",
      "Equality & comparison (== vs ===, Object.is)",
    ],
  },
  {
    moduleTitle: "Modular Programming",
    moduleDescription:
      "Module systems and code organization techniques for maintainable CoreJava applications.",
    topics: ["ES Modules", "CommonJS", "Dynamic imports"],
  },
  {
    moduleTitle: "Error Handling",
    moduleDescription: "Robust error management using try-catch blocks and custom error throwing.",
    topics: ["try / catch / finally", "throw"],
  },
  {
    moduleTitle: "Asynchronous Programming",
    moduleDescription:
      "Managing asynchronous operations through callbacks, promises, and async/await patterns.",
    topics: ["Callbacks", "Promises", "async / await"],
  },
  {
    moduleTitle: "Iterators & Generators",
    moduleDescription: "Custom iteration logic and generator functions for advanced control flow.",
    topics: ["Custom iteration logic", "yield", "next()"],
  },
  {
    moduleTitle: "Advanced OOP & Patterns",
    moduleDescription:
      "Object-oriented programming concepts, prototype inheritance, and design patterns in CoreJava.",
    topics: ["Prototypes & inheritance", "Design patterns in CoreJava"],
  },
  {
    moduleTitle: "Performance & Debugging",
    moduleDescription:
      "Memory management, performance optimization techniques, and debugging tools for CoreJava applications.",
    topics: [
      "Memory management",
      "Garbage collection",
      "Debugging tools",
      "Performance optimization",
    ],
  },
  {
    moduleTitle: "Advanced Browser Concepts",
    moduleDescription: "Browser APIs, web workers, and advanced client-side CoreJava features.",
    topics: ["Web Workers", "Browser APIs (Storage, Fetch, Events, etc.)"],
  },
  {
    moduleTitle: "Full Stack Integration",
    moduleDescription:
      "Integrating CoreJava with popular frameworks and runtime environments for full-stack development.",
    topics: ["Working with frameworks & runtimes – React, Node.js, Express"],
  },
];
