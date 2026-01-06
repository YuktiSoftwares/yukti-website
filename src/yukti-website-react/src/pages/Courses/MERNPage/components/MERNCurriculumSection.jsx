import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const MERNCurriculumSection = () => {
  return (
    <CurriculumSection
      title="Curriculum"
      subtitle="A step-by-step learning path designed to make you job-ready"
      curriculumList={curriculumData}
      theme={{
        gradient: "linear-gradient(135deg, #001A19 0%, #024A46 40%, #001A19 100%)",
        titleColor: "#fff",
        subtitleColor: "#fff",
        curriculumTitleColor: "#fff",
        curriculumSubtitleColor: "#fff",
        curriculumDescColor: "#fff",
      }}
    />
  );
};

export default MERNCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Basic MongoDB",
    moduleDescription:
      "Introduction to NoSQL concepts and MongoDB fundamentals including CRUD operations and document modeling.",
    topics: [
      "Understanding NoSQL & MongoDB",
      "CRUD Operations",
      "Querying Documents",
      "Document Structure",
      "Array Operations",
      "Advanced Operators",
    ],
  },

  {
    moduleTitle: "Advanced MongoDB",
    moduleDescription:
      "Mastering MongoDB performance, aggregation, indexing, and production-grade deployment strategies.",
    topics: [
      "Introduction to Aggregation",
      "Advanced Aggregation",
      "Indexing Fundamentals",
      "Query Optimization",
      "Relationships & Patterns",
      "Data Consistency",
      "Database Security",
      "Cloud Database",
      "MongoDB Native Driver",
      "Production Ready MongoDB",
    ],
  },
  {
    moduleTitle: "Basic Node.js",
    moduleDescription:
      "Introduction to Node.js runtime, core modules, and package management for backend development.",
    topics: [
      "Understanding Node.js & Setup",
      "Modules System",
      "NPM & Package Management",
      "File System Module",
      "Path Module",
      "HTTP Module",
    ],
  },
  {
    moduleTitle: "Advanced Node.js",
    moduleDescription:
      "Mastering asynchronous programming, event-driven architecture, and production-ready backend integration with MongoDB.",
    topics: [
      "Callbacks",
      "Promises",
      "Async/Await",
      "Events Module",
      "Streams",
      "Buffers",
      "Debugging & Development",
      "Error Handling",
      "Environment Configuration",
      "MongoDB Native Driver",
      "Basic Security Practices",
      "Capstone Project",
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
    moduleTitle: "Basic Express.js",
    moduleDescription:
      "Fundamentals of Express.js for building structured, modular, and scalable server-side applications.",
    topics: [
      "Why Express.js? & Setup",
      "Routing",
      "Middleware",
      "Working with Requests",
      "Crafting Responses",
      "Router Object",
      "MVC Pattern",
    ],
  },
  {
    moduleTitle: "Advanced Express.js",
    moduleDescription:
      "Advanced techniques for building secure, performant RESTful APIs with real-world integrations and deployment.",
    topics: [
      "Server-Side Rendering",
      "RESTful API Design",
      "Input Validation",
      "File Uploads",
      "Advanced Error Handling",
      "Debugging & Logging",
      "API Security",
      "Session Management",
      "JWT Authentication",
      "Connecting to MongoDB",
      "Testing Strategies",
      "Performance & Deployment",
      "Complete REST API",
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
