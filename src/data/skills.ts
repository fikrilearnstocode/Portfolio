export interface SkillCategory {
  key: string;
  labelKey: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "ds_ml",
    labelKey: "ds_ml",
    skills: ["Python", "SQL", "Scikit-learn", "Pandas", "NumPy", "Linear Regression", "Logistic Regression", "Random Forest", "XGBoost"],
  },
  {
    key: "nlp_ai",
    labelKey: "nlp_ai",
    skills: ["NLP", "Text Preprocessing", "TF-IDF", "Sentiment Analysis", "Knowledge Graph", "BERT"],
  },
  {
    key: "bigdata",
    labelKey: "bigdata",
    skills: ["Big Data Architecture", "Hadoop", "Spark", "Data Pipeline"],
  },
  {
    key: "viz",
    labelKey: "viz",
    skills: ["Tableau", "Matplotlib", "Seaborn", "Dashboard Design"],
  },
  {
    key: "governance",
    labelKey: "governance",
    skills: ["IT Audit", "ISO 27001", "Management Audit", "IT Governance"],
  },
  {
    key: "tools",
    labelKey: "tools",
    skills: ["Git", "Jupyter", "VS Code", "Microsoft Office", "Graphic Editing"],
  },
];
