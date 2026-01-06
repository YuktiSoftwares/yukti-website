import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const AimlAboutCourseSection = () => {
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

export default AimlAboutCourseSection;

const aboutCourse = {
  title: "About AI & ML Course",
  desc: "The AI & Machine Learning course builds strong foundations in algorithms, data science, and intelligent system development. You will learn how machines learn from data, make predictions, and solve real-world problems using AI techniques and ML models.",
  points: [
    {
      title: "Python & Math Foundations",
      subtitle:
        "Gain essential knowledge in Python, statistics, probability, and linear algebra required for AI & ML.",
    },
    {
      title: "Machine Learning Concepts",
      subtitle:
        "Understand supervised, unsupervised, and reinforcement learning with hands-on model training.",
    },
    {
      title: "Data Preprocessing",
      subtitle:
        "Learn data cleaning, feature engineering, scaling, and preprocessing techniques for ML pipelines.",
    },
    {
      title: "Model Training & Evaluation",
      subtitle:
        "Build models using algorithms like regression, classification, clustering, and evaluate them using metrics.",
    },
    {
      title: "Deep Learning Basics",
      subtitle:
        "Introduction to neural networks, activation functions, and training models with TensorFlow/Keras.",
    },
    {
      title: "Natural Language Processing",
      subtitle:
        "Learn how machines understand text — tokenization, sentiment analysis, text classification, and NLP pipelines.",
    },
    {
      title: "Real-World Projects",
      subtitle:
        "Work on end-to-end AI & ML projects like prediction systems, recommendation models, and chatbots.",
    },
  ],
};
