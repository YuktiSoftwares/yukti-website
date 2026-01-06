import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const DataScienceCurriculumSection = () => {
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

export default DataScienceCurriculumSection;
const curriculumData = [
  {
    moduleTitle: "Introduction to Data Science",
    moduleDescription:
      "Fundamental concepts of data science, the data science lifecycle, and the role of data scientists in various industries.",
    topics: [
      "What is Data Science?",
      "Data Science Lifecycle (CRISP-DM)",
      "Data Scientist Role and Responsibilities",
      "Data Science vs Data Analytics vs Business Intelligence",
      "Data Science Tools and Ecosystem",
      "Ethics in Data Science",
      "Real-world Data Science Applications",
      "Setting Up Data Science Environment",
    ],
  },
  {
    moduleTitle: "Mathematics for Data Science",
    moduleDescription:
      "Essential mathematical foundations including linear algebra, calculus, and statistics crucial for understanding machine learning algorithms.",
    topics: [
      "Linear Algebra (Vectors, Matrices, Operations)",
      "Calculus (Differentiation, Integration, Gradients)",
      "Probability Theory and Distributions",
      "Descriptive Statistics",
      "Inferential Statistics",
      "Hypothesis Testing",
      "Bayesian Statistics",
      "Optimization Techniques",
    ],
  },
  {
    moduleTitle: "Programming for Data Science",
    moduleDescription:
      "Python programming with focus on data science libraries, data manipulation, and scientific computing.",
    topics: [
      "Python Fundamentals for Data Science",
      "NumPy for Numerical Computing",
      "Pandas for Data Manipulation",
      "Data Structures for Data Science",
      "Object-Oriented Programming in Python",
      "Working with APIs and Web Scraping",
      "Python Debugging and Profiling",
      "Code Organization and Best Practices",
    ],
  },
  {
    moduleTitle: "Data Wrangling and Preprocessing",
    moduleDescription:
      "Advanced techniques for cleaning, transforming, and preparing raw data for analysis and modeling.",
    topics: [
      "Data Cleaning and Imputation",
      "Feature Engineering",
      "Handling Missing Data",
      "Outlier Detection and Treatment",
      "Data Transformation and Scaling",
      "Encoding Categorical Variables",
      "Time Series Data Processing",
      "Text Data Preprocessing",
    ],
  },
  {
    moduleTitle: "Exploratory Data Analysis and Visualization",
    moduleDescription:
      "Comprehensive data exploration using statistical methods and advanced visualization techniques.",
    topics: [
      "Univariate and Multivariate Analysis",
      "Statistical Summary and Insights",
      "Data Distributions and Relationships",
      "Correlation Analysis",
      "Matplotlib and Seaborn for Visualization",
      "Interactive Visualization with Plotly",
      "Geospatial Data Visualization",
      "Storytelling with Data",
    ],
  },
  {
    moduleTitle: "Database Systems and Big Data",
    moduleDescription:
      "Database management, SQL for data science, and introduction to big data technologies.",
    topics: [
      "Relational Databases and SQL",
      "Advanced SQL for Data Science",
      "NoSQL Databases (MongoDB, Cassandra)",
      "Data Warehousing Concepts",
      "Introduction to Big Data",
      "Hadoop Ecosystem",
      "Spark for Distributed Computing",
      "Cloud Data Platforms (AWS, GCP, Azure)",
    ],
  },
  {
    moduleTitle: "Machine Learning Fundamentals",
    moduleDescription:
      "Comprehensive coverage of machine learning algorithms, model evaluation, and practical implementation.",
    topics: [
      "Introduction to Machine Learning",
      "Supervised vs Unsupervised Learning",
      "Linear Regression and Logistic Regression",
      "Regularization Techniques (Ridge, Lasso)",
      "Model Evaluation Metrics",
      "Cross-Validation Techniques",
      "Bias-Variance Tradeoff",
      "Hyperparameter Tuning",
    ],
  },
  {
    moduleTitle: "Advanced Machine Learning",
    moduleDescription:
      "Advanced algorithms and techniques including ensemble methods, SVM, and clustering algorithms.",
    topics: [
      "Decision Trees and Random Forests",
      "Gradient Boosting Machines (XGBoost, LightGBM)",
      "Support Vector Machines (SVM)",
      "Clustering Algorithms (K-Means, DBSCAN, Hierarchical)",
      "Dimensionality Reduction (PCA, t-SNE)",
      "Association Rule Learning",
      "Anomaly Detection",
      "Recommendation Systems",
    ],
  },
  {
    moduleTitle: "Deep Learning and Neural Networks",
    moduleDescription:
      "Introduction to deep learning, neural networks, and their applications in computer vision and NLP.",
    topics: [
      "Introduction to Neural Networks",
      "TensorFlow and Keras Fundamentals",
      "Convolutional Neural Networks (CNN)",
      "Recurrent Neural Networks (RNN, LSTM, GRU)",
      "Transfer Learning",
      "Computer Vision Applications",
      "Natural Language Processing Basics",
      "Neural Network Optimization",
    ],
  },
  {
    moduleTitle: "Natural Language Processing",
    moduleDescription:
      "Processing and analyzing text data using modern NLP techniques and transformer models.",
    topics: [
      "Text Preprocessing and Tokenization",
      "Text Representation (TF-IDF, Word2Vec, GloVe)",
      "Sentiment Analysis",
      "Text Classification",
      "Topic Modeling (LDA)",
      "Transformer Architecture",
      "BERT and Modern Language Models",
      "Building NLP Pipelines",
    ],
  },
  {
    moduleTitle: "Advanced Topics in Data Science",
    moduleDescription:
      "Specialized areas including time series analysis, reinforcement learning, and graph analytics.",
    topics: [
      "Time Series Analysis and Forecasting",
      "Reinforcement Learning Fundamentals",
      "Graph Analytics and Network Analysis",
      "Survival Analysis",
      "Causal Inference",
      "MLOps Fundamentals",
      "Explainable AI (XAI)",
      "Ethical AI and Fairness",
    ],
  },
  {
    moduleTitle: "Model Deployment and Production",
    moduleDescription:
      "Techniques for deploying machine learning models into production environments and building scalable systems.",
    topics: [
      "Model Serialization and Packaging",
      "REST API Development with Flask/FastAPI",
      "Containerization with Docker",
      "Cloud Deployment (AWS SageMaker, Azure ML)",
      "Model Monitoring and Maintenance",
      "A/B Testing for Models",
      "CI/CD for Machine Learning",
      "Building Scalable Data Systems",
    ],
  },
  {
    moduleTitle: "Data Science Capstone Project",
    moduleDescription:
      "End-to-end data science project covering problem formulation, data collection, modeling, and deployment.",
    topics: [
      "Problem Definition and Business Understanding",
      "Data Collection and Pipeline Development",
      "Exploratory Data Analysis",
      "Feature Engineering and Model Selection",
      "Model Training and Evaluation",
      "Model Interpretation and Insights",
      "Deployment and Presentation",
      "Project Documentation and Portfolio Development",
    ],
  },
  {
    moduleTitle: "Soft Skills and Business Acumen",
    moduleDescription:
      "Developing communication skills, business understanding, and project management capabilities for data scientists.",
    topics: [
      "Communicating Data Insights to Stakeholders",
      "Data Science Project Management",
      "Business Metrics and KPIs",
      "Creating Data-Driven Business Value",
      "Team Collaboration in Data Science",
      "Presentation Skills for Technical Audiences",
      "Agile Methodology in Data Projects",
      "Career Development in Data Science",
    ],
  },
];
