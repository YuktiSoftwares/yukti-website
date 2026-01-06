import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const BasicPythonCurriculumSection = () => {
  return (
    <CurriculumSection
      title="Curriculum"
      subtitle="A step-by-step learning path designed to make you job-ready"
      curriculumList={curriculumData}
      theme={{
        gradient: "linear-gradient(135deg, #306998 0%, #3B82C4 35%, #FFD43B 100%)",
        titleColor: "#fff",
        subtitleColor: "#fff",
        curriculumTitleColor: "#fff",
        curriculumSubtitleColor: "#fff",
        curriculumDescColor: "#fff",
      }}
    />
  );
};

export default BasicPythonCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Introduction to Python",
    moduleDescription:
      "Overview of Python programming language, its features, applications, and environment setup for beginners.",
    topics: ["Overview of Python", "Features", "Applications", "Setting up Python Environment"],
  },
  {
    moduleTitle: "Python Basics",
    moduleDescription:
      "Fundamental programming concepts including variables, data types, operators, and basic input/output operations.",
    topics: ["Variables", "Data Types", "Operators", "Input and Output", "Comments"],
  },
  {
    moduleTitle: "Conditional Statements",
    moduleDescription:
      "Decision-making in Python using conditional statements for controlling program flow based on conditions.",
    topics: ["if", "if-else", "elif", "Nested if-else Statements"],
  },
  {
    moduleTitle: "Looping Constructs",
    moduleDescription:
      "Iteration and repetition in programs using various loop structures for efficient code execution.",
    topics: ["for Loop", "while Loop", "Nested Loops"],
  },
  {
    moduleTitle: "Control Statements",
    moduleDescription:
      "Flow control within loops using break, continue, and pass statements for precise program behavior.",
    topics: ["break, continue, pass Statements"],
  },
  {
    moduleTitle: "Lists and Nested Lists",
    moduleDescription:
      "Working with lists - Python's versatile sequence data type for storing and manipulating collections of items.",
    topics: [
      "Introduction to Lists",
      "Accessing List Elements",
      "List Operations",
      "Working with Lists",
      "Common Library Functions and Methods",
    ],
  },
  {
    moduleTitle: "Strings in Python",
    moduleDescription:
      "String manipulation and operations including accessing elements, methods, and built-in functions for text processing.",
    topics: [
      "Introduction to Strings",
      "Accessing String Elements",
      "String Operations",
      "String Methods and Library Functions",
    ],
  },
  {
    moduleTitle: "Tuples",
    moduleDescription:
      "Immutable sequence data type for storing collections of items that cannot be modified after creation.",
    topics: [
      "Introduction to Tuples",
      "Accessing Tuple Elements",
      "Tuple Operations",
      "Working with Tuples",
      "Common Methods and Functions",
    ],
  },
  {
    moduleTitle: "Sets",
    moduleDescription:
      "Unordered collections of unique elements with mathematical set operations and built-in functions.",
    topics: [
      "Introduction to Sets",
      "Set Operations",
      "Working with Sets",
      "Built-in Functions",
      "Difference between Sets and Lists",
    ],
  },
  {
    moduleTitle: "Dictionaries",
    moduleDescription:
      "Key-value pair data structure for storing and accessing data through unique keys with efficient lookup.",
    topics: [
      "Introduction to Dictionaries",
      "Accessing Keys and Values",
      "Working with Dictionaries",
      "Common Functions and Methods",
    ],
  },
  {
    moduleTitle: "Functions in Python",
    moduleDescription:
      "Creating reusable code blocks with functions, parameters, and understanding variable scope.",
    topics: [
      "Defining and Calling Functions",
      "Types of Functions",
      "Function Arguments (Positional, Keyword, Default, Variable-Length)",
      "Anonymous (Lambda) Functions",
      "Global and Local Variables",
    ],
  },
  {
    moduleTitle: "Exception Handling",
    moduleDescription:
      "Error management and graceful handling of runtime exceptions using try-except blocks.",
    topics: [
      "Introduction to Exceptions",
      "try-except-finally Clauses",
      "Multiple Except Blocks",
      "Raising Exceptions",
      "User-Defined Exceptions",
    ],
  },
  {
    moduleTitle: "Object-Oriented Programming (OOP) Concepts",
    moduleDescription:
      "Fundamental principles of object-oriented programming including classes, objects, and OOP pillars.",
    topics: [
      "Classes and Objects",
      "Attributes and Methods",
      "Abstraction",
      "Encapsulation",
      "Polymorphism",
      "Inheritance",
    ],
  },
  {
    moduleTitle: "Advanced OOP Features",
    moduleDescription:
      "Advanced object-oriented programming concepts including access modifiers and class scope.",
    topics: ["Static and Final Keywords", "Access Modifiers and Specifiers", "Scope of a Class"],
  },
  {
    moduleTitle: "File Handling in Python",
    moduleDescription:
      "Reading from and writing to files with proper file operations and exception handling.",
    topics: [
      "Introduction to Files",
      "Opening and Closing Files",
      "Reading and Writing Files",
      "File Modes",
      "File Operations (Text and Binary Files)",
      "Exception Handling with Files",
    ],
  },
];
