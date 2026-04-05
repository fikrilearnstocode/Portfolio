export type ProjectTag =
  | "Machine Learning"
  | "NLP"
  | "EDA"
  | "Computer Vision"
  | "Classification"
  | "Regression"
  | "Visualization"
  | "Time Series"
  | "Knowledge Graph"
  | "Image Processing"
  | "Sentiment Analysis"
  | "Text Mining"
  | "SQL"
  | "Python"
  | "Tableau"
  | "Scikit-learn"
  | "XGBoost"
  | "Data Visualization"
  | "Clustering";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  badge: "academic" | "revou" | "dummy";
  period: string;
  github?: string;
  notebook?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "krs-recommendation",
    title: "KRS Recommendation System",
    description:
      "A course enrollment recommendation system for Master's-level Computer Science students, built using Knowledge Graph modeling to match student interests with the most relevant subjects.",
    tags: ["Knowledge Graph", "NLP", "Python"],
    badge: "academic",
    period: "2024",
    github: "https://github.com/fikrilearnstocode/Kecerdasan-Komputasional-dan-Pembelajaran-Mesin",
  },
  {
    id: "tb-detection",
    title: "TB Detection System",
    description:
      "Automated tuberculosis detection from chest X-ray images using digital image processing and classification techniques. Built during the Digital Image Processing course.",
    tags: ["Computer Vision", "Image Processing", "Python"],
    badge: "academic",
    period: "2024",
    github: "https://github.com/fikrilearnstocode/PCD-Assignment",
  },
  {
    id: "spotify-insights",
    title: "Spotify Music Insights",
    description:
      "Analyzed Spotify track data to uncover insights on audio features, genre trends, and popularity patterns. Results were used to guide strategy for new artists and music labels.",
    tags: ["EDA", "Python", "Data Visualization", "Tableau"],
    badge: "revou",
    period: "March 2023",
    github: "https://github.com/fikrilearnstocode/Data-Analyst",
  },
  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    description:
      "End-to-end ML pipeline predicting telecom customer churn using logistic regression and random forest. Includes feature engineering, SHAP-based feature importance analysis, and actionable business recommendations.",
    tags: ["Machine Learning", "Classification", "Python", "Scikit-learn"],
    badge: "dummy",
    period: "2024",
    github: "https://github.com/fikrilearnstocode/customer-churn-prediction",
    notebook: "notebooks/customer-churn-prediction/customer-churn-prediction.ipynb",
  },
  {
    id: "ecommerce-analytics",
    title: "E-Commerce Sales Analytics",
    description:
      "Exploratory analysis of 100K+ orders from Brazilian e-commerce (Olist dataset). Identified top revenue categories, regional sales patterns, and delivery performance bottlenecks using Python and SQL.",
    tags: ["EDA", "SQL", "Python", "Data Visualization"],
    badge: "dummy",
    period: "2024",
    github: "https://github.com/fikrilearnstocode/ecommerce-sales-analytics",
    notebook: "notebooks/ecommerce-sales-analytics/ecommerce-sales-analytics.ipynb",
  },
  {
    id: "twitter-sentiment",
    title: "Twitter Sentiment Analysis",
    description:
      "NLP pipeline classifying airline tweet sentiments (positive/neutral/negative) using TF-IDF with Logistic Regression. Demonstrates text preprocessing, vectorization, and model evaluation.",
    tags: ["NLP", "Sentiment Analysis", "Text Mining", "Python"],
    badge: "dummy",
    period: "2024",
    github: "https://github.com/fikrilearnstocode/twitter-sentiment-analysis",
    notebook: "notebooks/twitter-sentiment-analysis/twitter-sentiment-analysis.ipynb",
  },
  {
    id: "house-price",
    title: "New York Housing Market Analysis",
    description:
      "Regression analysis and EDA on New York housing market data. Covers data cleaning, feature engineering, and predictive modeling to uncover pricing patterns across neighborhoods.",
    tags: ["Machine Learning", "Regression", "Python", "XGBoost"],
    badge: "dummy",
    period: "2024",
    github: "https://github.com/fikrilearnstocode/new-york-housing-market",
    notebook: "notebooks/new-york-housing-market/New-York-Housing-Market.ipynb",
  },
  {
    id: "covid19-indonesia",
    title: "COVID-19 Indonesia Analysis",
    description:
      "Time-series visualization and provincial analysis of COVID-19 spread across Indonesia. Interactive charts reveal case trends, mortality rates, and recovery patterns across regions.",
    tags: ["EDA", "Time Series", "Visualization", "Python"],
    badge: "dummy",
    period: "2024",
    github: "https://github.com/fikrilearnstocode/covid19-indonesia-analysis",
    notebook: "notebooks/covid19-indonesia-analysis/covid19-indonesia-analysis.ipynb",
  },
  {
    id: "employee-attrition",
    title: "Employee Attrition Analysis",
    description:
      "HR analytics project predicting employee attrition using classification models. Covers EDA of workforce demographics, statistical hypothesis testing (t-test, chi-square), feature engineering, and model comparison (Logistic Regression, Random Forest, XGBoost) with SHAP-based feature importance.",
    tags: ["Machine Learning", "Classification", "EDA", "Python", "Scikit-learn", "XGBoost"],
    badge: "dummy",
    period: "2023",
    github: "https://github.com/fikrilearnstocode/employee-attrition-analysis",
    notebook: "notebooks/employee-attrition-analysis/employee-attrition-analysis.ipynb",
  },
  {
    id: "pakistan-ecommerce",
    title: "Pakistan E-Commerce Customer Segmentation",
    description:
      "Customer segmentation and sales analysis of Pakistan's largest e-commerce platform. Uses RFM analysis and K-Means clustering to identify customer segments, with time-series revenue trends, regional breakdowns, product category performance, and ANOVA validation.",
    tags: ["EDA", "Clustering", "Python", "Data Visualization", "Time Series"],
    badge: "dummy",
    period: "2023",
    github: "https://github.com/fikrilearnstocode/pakistan-ecommerce-analysis",
    notebook: "notebooks/pakistan-ecommerce-analysis/pakistan-ecommerce-analysis.ipynb",
  },
];
