import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const DbmsAboutCourseSection = () => {
  return (
    <AboutCourseSection
      title={aboutCourse.title}
      description={aboutCourse.desc}
      points={aboutCourse.points}
      theme={{
        bg: "linear-gradient(135deg, #001428 0%, #002A3E 50%, #007C99 90%)",
        titleColor: "#fff",
        descColor: "rgba(255,255,255,0.85)",
        pointTitleColor: "#fff",
        pointBg: "rgba(255,255,255,0.08)",
      }}
    />
  );
};

export default DbmsAboutCourseSection;

const aboutCourse = {
  title: "About DBMS Course",
  desc: "The Database Management Systems (DBMS) course teaches you how to store, organize, manage, and retrieve data efficiently. You will learn SQL, relational database concepts, and industry-level database design techniques used in modern applications.",
  points: [
    {
      title: "DBMS Fundamentals",
      subtitle:
        "Understand databases, data models, schemas, DBMS architecture, and storage mechanisms.",
    },
    {
      title: "Relational Database Concepts",
      subtitle:
        "Learn tables, relationships, keys, constraints, and relational integrity principles.",
    },
    {
      title: "SQL Programming",
      subtitle:
        "Write SQL queries for data retrieval, insertion, updating, deletion, filtering, sorting, and aggregation.",
    },
    {
      title: "Database Design & Normalization",
      subtitle:
        "Design efficient database structures and apply normalization to avoid redundancy and maintain consistency.",
    },
    {
      title: "Joins & Subqueries",
      subtitle: "Master inner/outer joins, nested queries, and complex data fetching methods.",
    },
    {
      title: "Transactions & Concurrency",
      subtitle: "Learn ACID properties, transaction control, locks, and concurrency management.",
    },
    {
      title: "Hands-On Practice",
      subtitle:
        "Work with MySQL / PostgreSQL to design and query real-world databases with CRUD projects.",
    },
  ],
};
