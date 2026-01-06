import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const DataAnalyticsCurriculumSection = () => {
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

export default DataAnalyticsCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Introduction to Data Analytics",
    moduleDescription:
      "Fundamental concepts of data analytics, data lifecycle, and essential tools for data professionals.",
    topics: [
      "What is Data Analytics?",
      "Data Analytics Lifecycle",
      "Types of Data Analytics (Descriptive, Diagnostic, Predictive, Prescriptive)",
      "Data Analyst Role and Responsibilities",
      "Data Ecosystem and Tools",
      "Data Privacy and Ethics",
      "Case Studies in Data Analytics",
      "Setting Up Analytics Environment",
    ],
  },
  {
    moduleTitle: "Data Collection and Preprocessing",
    moduleDescription:
      "Techniques for gathering, cleaning, and preparing data for analysis including handling missing values and outliers.",
    topics: [
      "Data Sources and Collection Methods",
      "Data Quality Assessment",
      "Handling Missing Data",
      "Data Cleaning Techniques",
      "Data Transformation and Normalization",
      "Outlier Detection and Treatment",
      "Data Integration and Consolidation",
      "Data Reduction Techniques",
    ],
  },
  {
    moduleTitle: "Exploratory Data Analysis (EDA)",
    moduleDescription:
      "Comprehensive data exploration using statistical methods and visualization techniques to uncover patterns and insights.",
    topics: [
      "Univariate Analysis",
      "Bivariate Analysis",
      "Multivariate Analysis",
      "Descriptive Statistics",
      "Data Distributions",
      "Correlation Analysis",
      "Hypothesis Testing",
      "Statistical Significance Testing",
    ],
  },
  {
    moduleTitle: "Data Visualization",
    moduleDescription:
      "Creating effective visual representations of data using industry-standard tools and best practices.",
    topics: [
      "Principles of Data Visualization",
      "Choosing the Right Chart Types",
      "Tableau Fundamentals",
      "Power BI Essentials",
      "Python Visualization (Matplotlib, Seaborn)",
      "Interactive Dashboards",
      "Storytelling with Data",
      "Visualization Best Practices",
    ],
  },
  {
    moduleTitle: "Statistical Analysis for Analytics",
    moduleDescription:
      "Advanced statistical methods and inferential techniques for data-driven decision making.",
    topics: [
      "Probability Theory",
      "Sampling Techniques",
      "Confidence Intervals",
      "Regression Analysis",
      "ANOVA Testing",
      "Time Series Analysis",
      "Bayesian Statistics",
      "Experimental Design",
    ],
  },
  {
    moduleTitle: "Database Management and SQL for Analytics",
    moduleDescription:
      "Database concepts and SQL skills specifically tailored for data analysis and reporting.",
    topics: [
      "Relational Database Concepts",
      "SQL Fundamentals",
      "Advanced SQL Queries",
      "Window Functions",
      "Common Table Expressions (CTEs)",
      "Query Optimization",
      "NoSQL Databases for Analytics",
      "Data Warehousing Concepts",
    ],
  },
  {
    moduleTitle: "Programming for Data Analytics",
    moduleDescription:
      "Python programming with focus on data analysis libraries and practical analytics applications.",
    topics: [
      "Python Basics for Analytics",
      "NumPy for Numerical Computing",
      "Pandas for Data Manipulation",
      "Data Wrangling with Python",
      "APIs and Web Scraping",
      "Working with Different Data Formats",
      "Automating Analytics Tasks",
      "Python for Statistical Analysis",
    ],
  },
  {
    moduleTitle: "Machine Learning for Analytics",
    moduleDescription:
      "Practical machine learning techniques for predictive analytics and pattern recognition.",
    topics: [
      "Introduction to Machine Learning",
      "Supervised Learning Algorithms",
      "Unsupervised Learning Techniques",
      "Model Evaluation Metrics",
      "Feature Engineering",
      "Clustering Algorithms",
      "Decision Trees and Random Forests",
      "Model Deployment Basics",
    ],
  },
  {
    moduleTitle: "Big Data Analytics",
    moduleDescription:
      "Introduction to big data technologies and distributed computing frameworks for large-scale analytics.",
    topics: [
      "Introduction to Big Data",
      "Hadoop Ecosystem",
      "Spark for Data Analytics",
      "Distributed Computing Concepts",
      "Cloud Analytics Platforms",
      "Streaming Data Analytics",
      "Big Data Storage Solutions",
      "Scalable Analytics Architecture",
    ],
  },
  {
    moduleTitle: "Business Intelligence and Reporting",
    moduleDescription:
      "Creating actionable business insights through effective reporting and dashboard development.",
    topics: [
      "BI Tools and Platforms",
      "KPI Development and Tracking",
      "Dashboard Design Principles",
      "Automated Reporting Systems",
      "Data-Driven Decision Making",
      "Stakeholder Communication",
      "Performance Metrics",
      "Executive Reporting",
    ],
  },
  {
    moduleTitle: "Advanced Analytics and Specializations",
    moduleDescription:
      "Specialized analytics techniques including text mining, social media analytics, and advanced modeling.",
    topics: [
      "Text Analytics and NLP",
      "Social Media Analytics",
      "Web Analytics",
      "Customer Analytics",
      "Financial Analytics",
      "Operations Analytics",
      "Risk Analytics",
      "Fraud Detection Techniques",
    ],
  },
  {
    moduleTitle: "Capstone Project and Real-world Applications",
    moduleDescription:
      "End-to-end data analytics project covering all stages from data collection to insights presentation.",
    topics: [
      "Project Scoping and Planning",
      "End-to-End Analytics Pipeline",
      "Data Storytelling and Presentation",
      "Stakeholder Management",
      "Project Documentation",
      "Results Interpretation",
      "Actionable Insights Generation",
      "Portfolio Development",
    ],
  },
];
