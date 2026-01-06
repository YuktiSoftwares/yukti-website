import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const DataAnalyticsAboutCourseSection = () => {
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

export default DataAnalyticsAboutCourseSection;

const aboutCourse = {
  title: "About Data Analytics Course",
  desc: "Data Analytics is the process of collecting, cleaning, transforming, and interpreting data to uncover meaningful insights and support business decision-making. A Data Analyst works with tools, statistics, and visualizations to solve problems, identify patterns, and help organizations make data-driven decisions.",
  points: [
    {
      title: "Data Collection & Cleaning",
      subtitle:
        "Gather raw data from various sources and clean it by removing errors, duplicates, and inconsistencies to prepare it for analysis.",
    },
    {
      title: "Exploratory Data Analysis (EDA)",
      subtitle:
        "Analyze datasets to understand trends, patterns, and relationships using statistical methods and analytical techniques.",
    },
    {
      title: "Data Visualization & Dashboards",
      subtitle:
        "Present insights using charts, graphs, and interactive dashboards using tools like Power BI, Tableau, and Excel.",
    },
    {
      title: "Databases & SQL",
      subtitle:
        "Work with databases to extract, filter, and manipulate data using SQL — the most essential language for data professionals.",
    },
    {
      title: "Python for Analytics",
      subtitle:
        "Use Python libraries like Pandas, NumPy, and Matplotlib to automate analysis, handle big datasets, and build visual insights.",
    },
    {
      title: "Business Insights & Reporting",
      subtitle:
        "Transform analytical findings into actionable business recommendations and reports used by decision-makers.",
    },
  ],
};
