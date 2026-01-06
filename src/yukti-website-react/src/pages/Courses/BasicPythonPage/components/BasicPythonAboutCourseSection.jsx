import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const BasicPythonAboutCourseSection = () => {
  return (
    <AboutCourseSection
      title={aboutCourse.title}
      description={aboutCourse.desc}
      points={aboutCourse.points}
      theme={{
        bg: "linear-gradient(135deg, #306998 0%, #3B82C4 35%, #FFD43B 100%)",
        titleColor: "#fff",
        descColor: "rgba(255,255,255,0.85)",
        pointTitleColor: "#fff",
        pointBg: "rgba(255,255,255,0.08)",
      }}
    />
  );
};

export default BasicPythonAboutCourseSection;

const aboutCourse = {
  title: "About Python Course",
  desc: "Python is one of the most beginner-friendly and powerful programming languages, used for software development, automation, data handling, and more. This course builds strong programming fundamentals and real-world problem-solving skills using Python.",
  points: [
    {
      title: "Programming Fundamentals",
      subtitle:
        "Learn syntax, variables, data types, operators, and core logic building concepts with Python.",
    },
    {
      title: "Control Flow",
      subtitle:
        "Understand conditional statements and loops to build logical and interactive programs.",
    },
    {
      title: "Functions & Modules",
      subtitle:
        "Write reusable, clean, and modular code using functions, user-defined modules, and built-in modules.",
    },
    {
      title: "Data Structures",
      subtitle:
        "Work with lists, tuples, dictionaries, and sets to store, access, and process data efficiently.",
    },
    {
      title: "File Handling",
      subtitle: "Learn how to read from and write to files to manage data in real applications.",
    },
    {
      title: "Error Handling",
      subtitle:
        "Use exception handling to write stable programs and manage runtime errors efficiently.",
    },
    {
      title: "Hands-On Projects",
      subtitle:
        "Build real-world mini projects like calculators, automation scripts, and data-processing programs.",
    },
  ],
};
