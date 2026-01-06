import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const DsaAboutCourseSection = () => {
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

export default DsaAboutCourseSection;

const aboutCourse = {
  title: "About DSA Course",
  desc: "The Data Structures & Algorithms course focuses on building a powerful problem-solving foundation for coding, competitive programming, and technical interviews. This course helps you think logically, optimize code performance, and write efficient programs used in real-world applications.",
  points: [
    {
      title: "Programming Foundations",
      subtitle:
        "Strengthen basics like time complexity, recursion, loops, and logical thinking for coding excellence.",
    },
    {
      title: "Core Data Structures",
      subtitle:
        "Learn arrays, strings, linked lists, stacks, queues, hash maps, trees, and graphs in depth.",
    },
    {
      title: "Algorithm Techniques",
      subtitle:
        "Master sorting, searching, recursion, greedy algorithms, dynamic programming, and graph algorithms.",
    },
    {
      title: "Time & Space Complexity",
      subtitle:
        "Analyze and optimize program performance using Big-O notation for efficient coding.",
    },
    {
      title: "Problem-Solving Practice",
      subtitle:
        "Solve real interview coding questions with hands-on challenges and logic-building exercises.",
    },
    {
      title: "Coding Platforms",
      subtitle:
        "Practice on platforms like LeetCode, HackerRank, and CodeStudio to boost confidence and speed.",
    },
    {
      title: "Interview Preparation",
      subtitle:
        "Prepare for top tech interviews with mock tests, pattern-based problem solving, and revision sessions.",
    },
  ],
};
