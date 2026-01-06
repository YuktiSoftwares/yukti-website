import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const ReactJsCurriculumSection = () => {
  return (
    <CurriculumSection
      title="Curriculum"
      subtitle="A step-by-step learning path designed to make you job-ready"
      curriculumList={curriculumData}
      theme={{
        gradient: "linear-gradient(135deg, #001428 0%, #002A3E 50%, #007C99 90%)",
        titleColor: "#fff",
        subtitleColor: "#fff",
        curriculumTitleColor: "#fff",
        curriculumSubtitleColor: "#fff",
        curriculumDescColor: "#fff",
      }}
    />
  );
};

export default ReactJsCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "ReactJS Fundamentals",
    moduleDescription:
      "Introduction to React ecosystem, core concepts, JSX syntax, and setting up development environment for modern web applications.",
    topics: [
      "What is ReactJS?",
      "Features and benefits of React",
      "Virtual DOM vs Real DOM",
      "JSX (JavaScript XML) and its syntax",
      "How to create and run react application",
    ],
  },
  {
    moduleTitle: "Components & Architecture",
    moduleDescription:
      "Building reusable UI components, understanding component hierarchy, and React's component-based architecture patterns.",
    topics: [
      "Functional Components",
      "Class Components",
      "Component Composition",
      "Props and Data Flow",
      "Component Lifecycle Methods",
    ],
  },
  {
    moduleTitle: "Advanced Rendering & Patterns",
    moduleDescription:
      "Advanced rendering techniques, performance optimization, and React patterns for efficient UI development.",
    topics: [
      "Lists and Keys",
      "Render Props",
      "Refs and DOM Manipulation",
      "Events Handling",
      "Higher-Order Components (HOC)",
      "Conditional Rendering",
    ],
  },
  {
    moduleTitle: "React Hooks & State Management",
    moduleDescription:
      "Modern React with Hooks for state and side effects, custom hooks, and component lifecycle management.",
    topics: [
      "Basic Hooks (useState, useEffect, useContext)",
      "Additional Hooks (useReducer, useMemo, useCallback)",
      "Creating custom hooks",
      "Hook Rules and Best Practices",
    ],
  },
  {
    moduleTitle: "Routing & Navigation",
    moduleDescription:
      "Client-side routing implementation, navigation patterns, and route management in single-page applications.",
    topics: [
      "React Router",
      "Types of Routing",
      "React router installation",
      "Route Parameters",
      "Programmatic Navigation",
      "Nested Routes",
    ],
  },
  {
    moduleTitle: "State Management Solutions",
    moduleDescription:
      "Advanced state management patterns using Context API and Redux for complex application state.",
    topics: [
      "Context API",
      "Redux Fundamentals",
      "Actions and Reducers",
      "Store Management",
      "State Normalization",
    ],
  },
  {
    moduleTitle: "Styling & UI Frameworks",
    moduleDescription:
      "Modern CSS approaches and UI frameworks for building responsive and attractive React applications.",
    topics: [
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
      "CSS Modules",
      "Responsive Design in React",
    ],
  },
  {
    moduleTitle: "API Integration & Data Fetching",
    moduleDescription:
      "HTTP client configuration, API communication, and data fetching patterns in React applications.",
    topics: [
      "Axios installation and setup",
      "Interceptors",
      "REST API Integration",
      "Data Fetching Patterns",
      "Error Handling for APIs",
    ],
  },
  {
    moduleTitle: "Forms & Validation",
    moduleDescription:
      "Form handling, user input validation, and form state management using popular React form libraries.",
    topics: [
      "React Hook Form",
      "Formik installation and setup",
      "Yup validation",
      "Controlled vs Uncontrolled Components",
      "Form Submission Handling",
    ],
  },
  {
    moduleTitle: "Type Safety & Advanced Topics",
    moduleDescription:
      "Adding type safety with TypeScript and advanced React patterns for scalable application development.",
    topics: [
      "Introduction to TypeScript",
      "TypeScript with React",
      "Prop Types and Default Props",
      "Error Boundaries",
      "Code Splitting and Lazy Loading",
    ],
  },
];
