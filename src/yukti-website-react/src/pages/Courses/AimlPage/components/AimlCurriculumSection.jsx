import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const AimlCurriculumSection = () => {
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

export default AimlCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Foundations & Python Ecosystem",
    moduleDescription:
      "Introduction to AI and ML concepts, Python programming for data science, and essential libraries for machine learning projects.",
    topics: [
      "Introduction to AI & ML",
      "Python for Data Science",
      "NumPy and Pandas Fundamentals",
      "Data Visualization with Matplotlib/Seaborn",
      "Jupyter Notebooks Environment",
      "Machine Learning Workflow",
    ],
  },
  {
    moduleTitle: "Data Preprocessing & Engineering",
    moduleDescription:
      "Comprehensive data cleaning, transformation, and feature engineering techniques to prepare data for machine learning models.",
    topics: [
      "Data Wrangling and Visualization",
      "Handling Missing Data",
      "Feature Scaling and Normalization",
      "Encoding Categorical Variables",
      "Feature Selection Techniques",
      "Exploratory Data Analysis (EDA)",
    ],
  },
  {
    moduleTitle: "Core Machine Learning I - Supervised Learning",
    moduleDescription:
      "Fundamental supervised learning algorithms including regression and classification techniques for predictive modeling.",
    topics: [
      "Supervised Learning: Regression",
      "Linear Regression",
      "Logistic Regression",
      "Supervised Learning: Classification",
      "K-Nearest Neighbors (KNN)",
      "Support Vector Machines (SVM)",
      "Model Evaluation Metrics",
    ],
  },
  {
    moduleTitle: "Core Machine Learning II - Advanced Techniques",
    moduleDescription:
      "Advanced machine learning methods including ensemble learning and unsupervised learning algorithms.",
    topics: [
      "Ensemble Methods",
      "Random Forests",
      "Gradient Boosting (XGBoost, LightGBM)",
      "Unsupervised Learning",
      "Clustering Algorithms (K-Means, Hierarchical)",
      "Dimensionality Reduction (PCA, t-SNE)",
      "Model Selection and Hyperparameter Tuning",
    ],
  },
  {
    moduleTitle: "Introduction to Deep Learning",
    moduleDescription:
      "Neural networks fundamentals, architecture design, and implementation using modern deep learning frameworks.",
    topics: [
      "Neural Networks Fundamentals",
      "Activation Functions",
      "Backpropagation",
      "Optimization Algorithms",
      "TensorFlow/Keras Introduction",
      "Building Your First Neural Network",
    ],
  },
  {
    moduleTitle: "Deep Learning Architectures",
    moduleDescription:
      "Advanced neural network architectures for computer vision, sequence modeling, and time series analysis.",
    topics: [
      "Convolutional Neural Networks (CNNs)",
      "Image Classification and Object Detection",
      "Recurrent Neural Networks (RNNs)",
      "Long Short-Term Memory (LSTM) Networks",
      "Transfer Learning",
      "Computer Vision Applications",
    ],
  },
  {
    moduleTitle: "Natural Language Processing",
    moduleDescription:
      "Text processing, language modeling, and transformer architectures for modern NLP applications.",
    topics: [
      "NLP Fundamentals & Transformers",
      "Text Preprocessing and Tokenization",
      "Word Embeddings (Word2Vec, GloVe)",
      "Transformer Architecture",
      "BERT and Modern Language Models",
      "Sentiment Analysis and Text Classification",
    ],
  },
  {
    moduleTitle: "Advanced & Specialized Topics",
    moduleDescription:
      "Cutting-edge AI topics including generative AI, reinforcement learning, model deployment, and ethical considerations.",
    topics: [
      "Reinforcement Learning (RL)",
      "Generative AI",
      "GANs and Variational Autoencoders",
      "Model Deployment & MLOps",
      "Cloud Deployment (AWS, GCP, Azure)",
      "AI Ethics and Responsible AI",
      "Bias and Fairness in AI",
      "Model Monitoring and Maintenance",
    ],
  },
];
