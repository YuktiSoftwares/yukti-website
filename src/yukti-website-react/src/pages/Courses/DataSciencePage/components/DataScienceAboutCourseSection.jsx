import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const DataScienceAboutCourseSection = () => {
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

export default DataScienceAboutCourseSection;

const aboutCourse = {
  title: "About Data Science Course",
  desc: "Data Science is the advanced field of extracting knowledge and actionable insights from structured and unstructured data using statistics, programming, machine learning, and visualization techniques. A Data Scientist builds predictive models, uncovers patterns, and helps businesses make intelligent decisions using data-driven systems.",
  points: [
    {
      title: "Data Collection & Preparation",
      subtitle:
        "Gather data from multiple sources and clean, preprocess, and transform it for deeper analysis and modeling.",
    },
    {
      title: "Statistics & Mathematics",
      subtitle:
        "Apply statistical concepts, probability, and mathematical techniques to understand data behavior and patterns.",
    },
    {
      title: "Machine Learning",
      subtitle:
        "Build predictive and classification models using algorithms to forecast outcomes and learn from data trends.",
    },
    {
      title: "Python & Data Libraries",
      subtitle:
        "Use Python with libraries like Pandas, NumPy, Scikit-Learn, and TensorFlow for data manipulation and model building.",
    },
    {
      title: "Data Visualization",
      subtitle:
        "Communicate insights through powerful visualizations and dashboards using tools like Power BI, Tableau, and Matplotlib.",
    },
    {
      title: "Model Deployment & Evaluation",
      subtitle:
        "Evaluate model performance and deploy machine learning solutions to real-world applications for business impact.",
    },
    {
      title: "Business Intelligence & Insights",
      subtitle:
        "Convert complex analytical results into meaningful business strategies for decision-making and innovation.",
    },
  ],
};
