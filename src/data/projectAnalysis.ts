export interface OverviewMetric {
  label: string;
  value: string;
  icon: string;
}

export interface ChartConfig {
  title: string;
  type: "bar" | "line" | "pie" | "horizontal-bar";
  data: Record<string, string | number>[];
  dataKeys: { key: string; color: string; name?: string }[];
  xKey?: string;
}

export interface ProjectAnalysis {
  projectId: string;
  overview: OverviewMetric[];
  insights: string[];
  charts: ChartConfig[];
  methodology: string[];
}

export const projectAnalyses: ProjectAnalysis[] = [
  {
    projectId: "customer-churn",
    overview: [
      { label: "Best Accuracy", value: "82%", icon: "🎯" },
      { label: "Best AUC-ROC", value: "0.87", icon: "📈" },
      { label: "Churn Rate", value: "26.5%", icon: "⚠️" },
      { label: "Dataset Size", value: "7,043 rows", icon: "🗃️" },
    ],
    insights: [
      "Tenure and contract type are the strongest predictors of churn — customers with month-to-month contracts churn at 42% vs 3% for 2-year contracts.",
      "Fiber optic internet service users have a 41% churn rate, likely due to high pricing expectations not being met.",
      "Customers in their first 12 months are highest risk: 50%+ churn probability in early tenure months.",
      "XGBoost outperforms Logistic Regression and Random Forest across all metrics, especially recall (catching actual churners).",
      "Adding tech support and online security services correlates with 25% reduction in churn probability.",
    ],
    charts: [
      {
        title: "Model Performance Comparison",
        type: "bar",
        xKey: "model",
        data: [
          { model: "Logistic Reg", Accuracy: 80, Precision: 66, Recall: 57, F1: 61 },
          { model: "Random Forest", Accuracy: 79, Precision: 64, Recall: 50, F1: 56 },
          { model: "XGBoost", Accuracy: 82, Precision: 69, Recall: 63, F1: 66 },
        ],
        dataKeys: [
          { key: "Accuracy", color: "#b08f5a" },
          { key: "Precision", color: "#c8a87a" },
          { key: "Recall", color: "#d9bc90" },
          { key: "F1", color: "#e8d5b7" },
        ],
      },
      {
        title: "Top Feature Importance (XGBoost)",
        type: "horizontal-bar",
        xKey: "feature",
        data: [
          { feature: "tenure", importance: 0.24 },
          { feature: "Contract_two_year", importance: 0.18 },
          { feature: "TotalCharges", importance: 0.14 },
          { feature: "MonthlyCharges", importance: 0.12 },
          { feature: "InternetService_Fiber", importance: 0.09 },
          { feature: "OnlineSecurity_No", importance: 0.07 },
          { feature: "TechSupport_No", importance: 0.06 },
          { feature: "PaymentMethod_echeck", importance: 0.05 },
        ],
        dataKeys: [{ key: "importance", color: "#b08f5a", name: "Importance Score" }],
      },
    ],
    methodology: [
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Class Imbalance Handling",
      "Logistic Regression",
      "Random Forest",
      "XGBoost",
      "5-Fold Cross Validation",
      "SHAP Feature Importance",
      "ROC-AUC Analysis",
    ],
  },
  {
    projectId: "ecommerce-analytics",
    overview: [
      { label: "Total Orders", value: "112,650", icon: "📦" },
      { label: "Product Categories", value: "74", icon: "🏷️" },
      { label: "States Covered", value: "27", icon: "🗺️" },
      { label: "Avg Delivery Time", value: "12 days", icon: "🚚" },
    ],
    insights: [
      "bed_bath_table is the top revenue category, followed by health_beauty and sports_leisure — together accounting for 28% of total revenue.",
      "São Paulo (SP) state dominates with 42% of all orders, followed by Rio de Janeiro (RJ) at 13%.",
      "Q4 (Oct–Dec) shows a 35% revenue spike driven by Black Friday and holiday shopping seasons.",
      "Late deliveries (>estimated date) correlate strongly with 1-star reviews — on-time delivery is the #1 driver of customer satisfaction.",
      "Average order value increased by 18% in the second half of the year, suggesting seasonal premium purchases.",
    ],
    charts: [
      {
        title: "Monthly Revenue Trend (R$)",
        type: "line",
        xKey: "month",
        data: [
          { month: "Jan", revenue: 950000 },
          { month: "Feb", revenue: 1050000 },
          { month: "Mar", revenue: 1150000 },
          { month: "Apr", revenue: 1080000 },
          { month: "May", revenue: 1200000 },
          { month: "Jun", revenue: 1090000 },
          { month: "Jul", revenue: 1180000 },
          { month: "Aug", revenue: 1350000 },
          { month: "Sep", revenue: 1250000 },
          { month: "Oct", revenue: 1420000 },
          { month: "Nov", revenue: 1850000 },
          { month: "Dec", revenue: 1620000 },
        ],
        dataKeys: [{ key: "revenue", color: "#b08f5a", name: "Revenue (R$)" }],
      },
      {
        title: "Top 8 Categories by Revenue",
        type: "bar",
        xKey: "category",
        data: [
          { category: "bed_bath_table", revenue: 1720000 },
          { category: "health_beauty", revenue: 1560000 },
          { category: "sports_leisure", revenue: 1430000 },
          { category: "computers_accessories", revenue: 1290000 },
          { category: "furniture_decor", revenue: 1180000 },
          { category: "housewares", revenue: 980000 },
          { category: "watches_gifts", revenue: 870000 },
          { category: "telephony", revenue: 760000 },
        ],
        dataKeys: [{ key: "revenue", color: "#b08f5a", name: "Revenue (R$)" }],
      },
    ],
    methodology: [
      "Exploratory Data Analysis",
      "Time Series Analysis",
      "SQL Aggregations",
      "Geographic Analysis",
      "Cohort Analysis",
      "Revenue Attribution",
      "Delivery Performance Analysis",
    ],
  },
  {
    projectId: "twitter-sentiment",
    overview: [
      { label: "Total Tweets", value: "14,640", icon: "🐦" },
      { label: "Negative Rate", value: "63%", icon: "😠" },
      { label: "Best Accuracy", value: "79%", icon: "🎯" },
      { label: "Airlines Analyzed", value: "6", icon: "✈️" },
    ],
    insights: [
      "United Airlines and American Airlines have the highest negative sentiment ratio (>70%), driven by flight delays and cancellations.",
      'The most common negative reason is "Customer Service Issue" (31.7%), followed by "Late Flight" (18.1%) and "Can\'t Tell" (13.8%).',
      "Negative tweets are 3x more frequent than positive tweets across all airlines — suggesting sentiment is asymmetric.",
      "TF-IDF with Logistic Regression achieves the best balance of accuracy and interpretability at 79%, outperforming naive Bayes.",
      "Virgin America shows the highest positive sentiment ratio (35%), significantly above industry average (20%).",
    ],
    charts: [
      {
        title: "Sentiment Distribution by Airline",
        type: "bar",
        xKey: "airline",
        data: [
          { airline: "United", positive: 12, neutral: 18, negative: 70 },
          { airline: "American", positive: 14, neutral: 17, negative: 69 },
          { airline: "Southwest", positive: 22, neutral: 20, negative: 58 },
          { airline: "Delta", positive: 20, neutral: 21, negative: 59 },
          { airline: "US Airways", positive: 11, neutral: 15, negative: 74 },
          { airline: "Virgin America", positive: 35, neutral: 22, negative: 43 },
        ],
        dataKeys: [
          { key: "positive", color: "#4ade80", name: "Positive %" },
          { key: "neutral", color: "#d9bc90", name: "Neutral %" },
          { key: "negative", color: "#f87171", name: "Negative %" },
        ],
      },
      {
        title: "Model Accuracy Comparison",
        type: "bar",
        xKey: "model",
        data: [
          { model: "TF-IDF + LR", Accuracy: 79, F1: 75 },
          { model: "TF-IDF + RF", Accuracy: 74, F1: 70 },
          { model: "TF-IDF + XGBoost", Accuracy: 76, F1: 72 },
          { model: "Naive Bayes", Accuracy: 70, F1: 67 },
        ],
        dataKeys: [
          { key: "Accuracy", color: "#b08f5a" },
          { key: "F1", color: "#e8d5b7" },
        ],
      },
    ],
    methodology: [
      "Text Preprocessing",
      "TF-IDF Vectorization",
      "Logistic Regression",
      "Random Forest",
      "Naive Bayes",
      "VADER Sentiment",
      "Confusion Matrix",
      "Cross Validation",
    ],
  },
  {
    projectId: "house-price",
    overview: [
      { label: "Total Listings", value: "4,801", icon: "🏠" },
      { label: "Median Price", value: "$650K", icon: "💰" },
      { label: "Best RMSE", value: "$145K", icon: "📉" },
      { label: "R² Score", value: "0.84", icon: "📊" },
    ],
    insights: [
      "Square footage (sqft) is the single strongest predictor of price, contributing 31% of XGBoost feature importance.",
      "Manhattan median price ($1.2M) is 2x higher than the overall NYC median, while the Bronx ($385K) is 40% below median.",
      "Bedrooms show a nonlinear relationship: price increases up to 4 bedrooms, then plateaus or drops — large homes with many bedrooms command less per-room.",
      "XGBoost reduces RMSE by 23% vs Linear Regression ($145K vs $188K), demonstrating the value of nonlinear modeling.",
      "Properties with parking (garage/lot) command a $45K–80K premium over similar units without parking.",
    ],
    charts: [
      {
        title: "Median Price by Borough",
        type: "bar",
        xKey: "borough",
        data: [
          { borough: "Manhattan", price: 1200000 },
          { borough: "Brooklyn", price: 750000 },
          { borough: "Queens", price: 580000 },
          { borough: "Staten Island", price: 490000 },
          { borough: "Bronx", price: 385000 },
        ],
        dataKeys: [{ key: "price", color: "#b08f5a", name: "Median Price ($)" }],
      },
      {
        title: "Feature Importance (XGBoost)",
        type: "horizontal-bar",
        xKey: "feature",
        data: [
          { feature: "sqft", importance: 0.31 },
          { feature: "borough_Manhattan", importance: 0.22 },
          { feature: "bathrooms", importance: 0.13 },
          { feature: "bedrooms", importance: 0.10 },
          { feature: "borough_Brooklyn", importance: 0.08 },
          { feature: "parking", importance: 0.07 },
          { feature: "year_built", importance: 0.05 },
          { feature: "floors", importance: 0.04 },
        ],
        dataKeys: [{ key: "importance", color: "#b08f5a", name: "Importance Score" }],
      },
    ],
    methodology: [
      "Exploratory Data Analysis",
      "Missing Value Imputation",
      "Feature Engineering",
      "Label Encoding",
      "Linear Regression",
      "Random Forest",
      "XGBoost",
      "Hyperparameter Tuning",
      "RMSE / R² Evaluation",
    ],
  },
  {
    projectId: "covid19-indonesia",
    overview: [
      { label: "Total Cases", value: "6.7M", icon: "🦠" },
      { label: "Total Deaths", value: "160K", icon: "💔" },
      { label: "Case Fatality Rate", value: "2.4%", icon: "📉" },
      { label: "Provinces Analyzed", value: "34", icon: "🗺️" },
    ],
    insights: [
      "Indonesia experienced 3 major waves: Wave 1 (mid-2020), Wave 2 (mid-2021, Delta variant — largest peak), and Wave 3 (early-2022, Omicron).",
      "DKI Jakarta accounts for ~15% of all national cases despite being <1% of Indonesia's land area — reflecting population density impact.",
      "Java island (6 provinces) contributed ~60% of total cases, correlating with its 57% share of national population.",
      "Case Fatality Rate (CFR) dropped from 3.2% in 2020 to 1.8% in 2022, coinciding with mass vaccination rollout.",
      "Recovery rate improved steadily from 76% in 2020 to 96% in 2022, suggesting better treatment protocols over time.",
    ],
    charts: [
      {
        title: "Monthly New Cases (2020–2022)",
        type: "line",
        xKey: "month",
        data: [
          { month: "Mar'20", cases: 1500 },
          { month: "Jun'20", cases: 22000 },
          { month: "Sep'20", cases: 45000 },
          { month: "Dec'20", cases: 80000 },
          { month: "Mar'21", cases: 120000 },
          { month: "Jun'21", cases: 380000 },
          { month: "Sep'21", cases: 85000 },
          { month: "Dec'21", cases: 42000 },
          { month: "Feb'22", cases: 620000 },
          { month: "Apr'22", cases: 95000 },
          { month: "Jun'22", cases: 18000 },
        ],
        dataKeys: [{ key: "cases", color: "#f87171", name: "New Cases" }],
      },
      {
        title: "Top 10 Provinces by Total Cases",
        type: "bar",
        xKey: "province",
        data: [
          { province: "DKI Jakarta", cases: 1050000 },
          { province: "Jawa Barat", cases: 980000 },
          { province: "Jawa Tengah", cases: 680000 },
          { province: "Jawa Timur", cases: 610000 },
          { province: "Banten", cases: 320000 },
          { province: "Bali", cases: 290000 },
          { province: "Kalimantan Timur", cases: 185000 },
          { province: "Sulawesi Selatan", cases: 170000 },
          { province: "Riau", cases: 145000 },
          { province: "Sumatera Utara", cases: 130000 },
        ],
        dataKeys: [{ key: "cases", color: "#b08f5a", name: "Total Cases" }],
      },
    ],
    methodology: [
      "Time Series Analysis",
      "Exploratory Data Analysis",
      "Provincial Comparison",
      "CFR Calculation",
      "Rolling Average Smoothing",
      "Wave Detection",
      "Trend Visualization",
    ],
  },
  {
    projectId: "employee-attrition",
    overview: [
      { label: "Employees", value: "1,470", icon: "👥" },
      { label: "Attrition Rate", value: "16.1%", icon: "📤" },
      { label: "Best F1 Score", value: "0.79", icon: "🎯" },
      { label: "Best AUC-ROC", value: "0.88", icon: "📈" },
    ],
    insights: [
      "Sales department has the highest attrition rate (21%), nearly double the R&D department (14%) — likely due to high-pressure targets.",
      "Employees working overtime are 2x more likely to leave — the strongest single binary predictor in the dataset.",
      "Early-career employees (0–2 years at company) show 32% attrition, dropping to 8% after 5+ years, highlighting the importance of early retention programs.",
      "Monthly income and job level are inversely correlated with attrition: each $1,000 increase in monthly income reduces attrition probability by ~4%.",
      "XGBoost achieves the highest AUC (0.88) and best F1 (0.79), while SHAP reveals that job satisfaction and work-life balance scores have strong non-linear effects.",
    ],
    charts: [
      {
        title: "Attrition Rate by Department (%)",
        type: "bar",
        xKey: "department",
        data: [
          { department: "Sales", attrition: 21 },
          { department: "HR", attrition: 19 },
          { department: "R&D", attrition: 14 },
        ],
        dataKeys: [{ key: "attrition", color: "#f87171", name: "Attrition Rate %" }],
      },
      {
        title: "Model Performance Comparison",
        type: "bar",
        xKey: "model",
        data: [
          { model: "Logistic Reg", Accuracy: 85, F1: 68, AUC: 79 },
          { model: "Random Forest", Accuracy: 86, F1: 72, AUC: 84 },
          { model: "XGBoost", Accuracy: 87, F1: 79, AUC: 88 },
        ],
        dataKeys: [
          { key: "Accuracy", color: "#b08f5a" },
          { key: "F1", color: "#c8a87a" },
          { key: "AUC", color: "#e8d5b7" },
        ],
      },
      {
        title: "Top SHAP Features (XGBoost)",
        type: "horizontal-bar",
        xKey: "feature",
        data: [
          { feature: "OverTime", importance: 0.28 },
          { feature: "MonthlyIncome", importance: 0.19 },
          { feature: "YearsAtCompany", importance: 0.14 },
          { feature: "JobSatisfaction", importance: 0.11 },
          { feature: "Age", importance: 0.09 },
          { feature: "WorkLifeBalance", importance: 0.08 },
          { feature: "JobLevel", importance: 0.06 },
          { feature: "DistanceFromHome", importance: 0.05 },
        ],
        dataKeys: [{ key: "importance", color: "#b08f5a", name: "SHAP Importance" }],
      },
    ],
    methodology: [
      "Exploratory Data Analysis",
      "Chi-Square Test",
      "T-Test",
      "Feature Engineering",
      "Class Imbalance Handling",
      "Logistic Regression",
      "Random Forest",
      "XGBoost",
      "5-Fold Cross Validation",
      "SHAP Analysis",
    ],
  },
  {
    projectId: "pakistan-ecommerce",
    overview: [
      { label: "Total Orders", value: "1.08M", icon: "📦" },
      { label: "Customer Segments", value: "4", icon: "👥" },
      { label: "Top City", value: "Karachi 35%", icon: "🏙️" },
      { label: "Silhouette Score", value: "0.61", icon: "✅" },
    ],
    insights: [
      "Champions (top segment) represent only 15% of customers but generate 45% of total revenue — prioritizing retention of this group is highest ROI.",
      "Revenue spikes sharply in Aug–Sep, likely driven by Eid al-Adha shopping season and back-to-school purchases.",
      "Karachi and Lahore together account for 60% of all orders, signaling concentration risk and growth opportunities in Tier-2 cities.",
      "Mobile accessories is the #1 revenue category, followed by women's fashion and electronics — reflecting mobile-first consumer behavior.",
      "'At Risk' customers (high past spend, low recent activity) represent 22% of users — targeted re-engagement campaigns could recover significant revenue.",
    ],
    charts: [
      {
        title: "Monthly Revenue Trend",
        type: "line",
        xKey: "month",
        data: [
          { month: "Jan", revenue: 45000000 },
          { month: "Feb", revenue: 48000000 },
          { month: "Mar", revenue: 52000000 },
          { month: "Apr", revenue: 49000000 },
          { month: "May", revenue: 55000000 },
          { month: "Jun", revenue: 51000000 },
          { month: "Jul", revenue: 58000000 },
          { month: "Aug", revenue: 78000000 },
          { month: "Sep", revenue: 82000000 },
          { month: "Oct", revenue: 63000000 },
          { month: "Nov", revenue: 71000000 },
          { month: "Dec", revenue: 68000000 },
        ],
        dataKeys: [{ key: "revenue", color: "#b08f5a", name: "Revenue (PKR)" }],
      },
      {
        title: "Customer Segments (RFM K-Means)",
        type: "pie",
        xKey: "segment",
        data: [
          { segment: "Champions", value: 15 },
          { segment: "At Risk", value: 22 },
          { segment: "New Customers", value: 38 },
          { segment: "Lost", value: 25 },
        ],
        dataKeys: [
          { key: "value", color: "#b08f5a" },
        ],
      },
      {
        title: "Top 8 Categories by Revenue",
        type: "bar",
        xKey: "category",
        data: [
          { category: "Mobile Accessories", revenue: 185000000 },
          { category: "Women's Fashion", revenue: 162000000 },
          { category: "Electronics", revenue: 145000000 },
          { category: "Men's Fashion", revenue: 128000000 },
          { category: "Beauty & Grooming", revenue: 98000000 },
          { category: "Home Appliances", revenue: 87000000 },
          { category: "Sports & Outdoors", revenue: 72000000 },
          { category: "Kids & Toys", revenue: 61000000 },
        ],
        dataKeys: [{ key: "revenue", color: "#b08f5a", name: "Revenue (PKR)" }],
      },
    ],
    methodology: [
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Time Series Analysis",
      "RFM Analysis",
      "K-Means Clustering",
      "Elbow Method",
      "Silhouette Score",
      "PCA Visualization",
      "ANOVA Testing",
    ],
  },
];
