import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const DsaCurriculumSection = () => {
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

export default DsaCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Algorithmic Foundations & Complexity Analysis",
    moduleDescription:
      "Fundamental concepts of algorithms, time and space complexity analysis, and asymptotic notation for evaluating algorithm efficiency.",
    topics: [
      "Introduction to DSA & Time-Space Complexity",
      "Big O, Omega, and Theta Notation",
      "Complexity Analysis Techniques",
      "Best, Average, and Worst Case Analysis",
    ],
  },
  {
    moduleTitle: "Linear Data Structures",
    moduleDescription:
      "Essential linear data structures including arrays, strings, linked lists, stacks, and queues with practical implementations.",
    topics: ["Arrays & Strings", "Linked Lists (Singly, Doubly, Circular)", "Stacks", "Queues"],
  },
  {
    moduleTitle: "Recursion & Fundamental Algorithms",
    moduleDescription:
      "Recursive problem-solving approaches and core algorithms for searching and sorting with implementation techniques.",
    topics: ["Recursion", "Sorting Algorithms", "Searching Algorithms", "Backtracking Algorithms"],
  },
  {
    moduleTitle: "Tree Data Structures",
    moduleDescription:
      "Hierarchical data structures including binary trees, BSTs, heaps, and advanced tree variants with traversal algorithms.",
    topics: ["Trees", "Binary Search Trees", "Heaps", "Tries"],
  },
  {
    moduleTitle: "Hash-Based Data Structures",
    moduleDescription:
      "Hash tables, collision resolution techniques, and applications of hashing for efficient data retrieval and storage.",
    topics: [
      "Hashing",
      "Hash Functions",
      "Collision Resolution Methods",
      "Hash Table Applications",
    ],
  },
  {
    moduleTitle: "Graph Algorithms & Applications",
    moduleDescription:
      "Graph representations, traversal algorithms, and advanced graph algorithms for solving complex problems.",
    topics: [
      "Graph Algorithms",
      "Graph Traversal (BFS, DFS)",
      "Shortest Path Algorithms",
      "Graph Algorithms - Advanced",
    ],
  },
  {
    moduleTitle: "Algorithm Design Paradigms",
    moduleDescription:
      "Major algorithmic strategies including greedy methods, divide and conquer, and dynamic programming approaches.",
    topics: ["Greedy Algorithms", "Divide and Conquer", "Dynamic Programming"],
  },
  {
    moduleTitle: "Advanced Data Structures",
    moduleDescription:
      "Specialized data structures for range queries, bit-level operations, and efficient string processing.",
    topics: ["Segment Trees & Fenwick Trees", "String Algorithms", "Bit Manipulation"],
  },
];
