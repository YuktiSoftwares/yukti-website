import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const DbmsCurriculumSection = () => {
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

export default DbmsCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Database Fundamentals & SQL Basics",
    moduleDescription:
      "Introduction to database concepts, SQL syntax fundamentals, and basic database operations for beginners.",
    topics: [
      "Introduction",
      "Basic Syntax",
      "Database Architecture",
      "SQL Standards and Variations",
    ],
  },
  {
    moduleTitle: "Database Structure & Definition",
    moduleDescription:
      "Data Definition Language commands for creating, altering, and managing database structures and schemas.",
    topics: [
      "DDL (Data Definition Language)",
      "CREATE, ALTER, DROP Statements",
      "Database Objects Management",
      "Schema Design Principles",
    ],
  },
  {
    moduleTitle: "Data Manipulation & Operations",
    moduleDescription:
      "Data Manipulation Language commands for inserting, updating, deleting, and querying database records.",
    topics: [
      "DML (Data Manipulation Language)",
      "INSERT, UPDATE, DELETE Operations",
      "SELECT Queries",
      "Data Filtering and Sorting",
    ],
  },
  {
    moduleTitle: "Database Security & Control",
    moduleDescription:
      "Access control, permissions, and transaction management for secure and reliable database operations.",
    topics: [
      "DCL (Data Control Language)",
      "TCL (Transaction Control Language)",
      "User Privileges and Roles",
      "Transaction Management (COMMIT, ROLLBACK, SAVEPOINT)",
    ],
  },
  {
    moduleTitle: "Advanced Data Analysis",
    moduleDescription:
      "Aggregate functions, data constraints, and advanced SQL functions for comprehensive data analysis.",
    topics: [
      "Aggregate Functions",
      "Data Constraints",
      "Advanced Functions",
      "GROUP BY and HAVING Clauses",
    ],
  },
  {
    moduleTitle: "Complex Querying & Relationships",
    moduleDescription:
      "Advanced query techniques including JOIN operations and subqueries for working with related data across multiple tables.",
    topics: ["JOINS", "Sub Queries", "Multiple Table Operations", "Correlated Subqueries"],
  },
  {
    moduleTitle: "Database Performance & Optimization",
    moduleDescription:
      "Indexing strategies and performance optimization techniques for efficient database operations.",
    topics: ["Indexes", "Query Optimization", "Execution Plans", "Performance Tuning"],
  },
  {
    moduleTitle: "Database Design & Normalization",
    moduleDescription:
      "Database design principles, normalization techniques, and data integrity for creating efficient database structures.",
    topics: [
      "Normalization",
      "Database Design Principles",
      "Normal Forms (1NF, 2NF, 3NF, BCNF)",
      "Denormalization Concepts",
    ],
  },
  {
    moduleTitle: "Data Integrity & Security Management",
    moduleDescription:
      "Ensuring data accuracy, consistency, and security through constraints, validation, and access controls.",
    topics: [
      "Data Integrity & Security",
      "Constraint Enforcement",
      "Backup and Recovery",
      "Security Best Practices",
    ],
  },
];
