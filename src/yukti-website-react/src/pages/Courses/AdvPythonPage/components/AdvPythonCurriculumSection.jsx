import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const AdvPythonCurriculumSection = () => {
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

export default AdvPythonCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Advanced Modules and Packages",
    moduleDescription:
      "Advanced module system concepts including custom module creation, package management, and leveraging powerful built-in modules for system operations.",
    topics: [
      "Understanding Modules",
      "Importing Modules",
      "Creating Custom Modules",
      "Math Module",
      "Random Module",
      "OS Module",
      "Working with Packages",
    ],
  },
  {
    moduleTitle: "NumPy (Numerical Python)",
    moduleDescription:
      "High-performance numerical computing with NumPy arrays, advanced array operations, and mathematical functions for scientific computing.",
    topics: [
      "Introduction to NumPy",
      "Creating and Manipulating Arrays",
      "Array Indexing and Slicing",
      "Array Operations and Functions",
    ],
  },
  {
    moduleTitle: "Pandas (Data Handling Library)",
    moduleDescription:
      "Advanced data manipulation and analysis using Pandas DataFrames, data cleaning techniques, and efficient data import/export operations.",
    topics: [
      "Introduction to Pandas",
      "Series and DataFrame Objects",
      "Data Import and Export (CSV, Excel)",
      "Data Cleaning and Manipulation",
    ],
  },
  {
    moduleTitle: "Matplotlib (Data Visualization)",
    moduleDescription:
      "Comprehensive data visualization techniques using Matplotlib for creating professional charts, customizing visuals, and integrating with Pandas.",
    topics: [
      "Introduction to Matplotlib",
      "Plotting Data (Line, Bar, Pie, Scatter)",
      "Customizing Charts",
      "Visualizing Data using Pandas",
    ],
  },
  {
    moduleTitle: "Algorithm Implementation",
    moduleDescription:
      "Practical implementation of fundamental searching and sorting algorithms with performance analysis and optimization techniques.",
    topics: [
      "Implementing Searching Algorithms (Linear Search, Binary Search)",
      "Implementing Sorting Algorithms (Bubble Sort, Selection Sort, Insertion Sort)",
    ],
  },
  {
    moduleTitle: "Advanced Python Project",
    moduleDescription:
      "End-to-end project development integrating NumPy, Pandas, and Matplotlib for real-world data analysis, visualization, or automation applications.",
    topics: [
      "Building a Small Python Project using Concepts from NumPy, Pandas, and Matplotlib (e.g., Data Analysis, Visualization, or Automation Task)",
    ],
  },
];
