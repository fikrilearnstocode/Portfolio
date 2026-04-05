# Employee Attrition Analysis

HR analytics project predicting employee attrition using classification models.

## Overview

End-to-end machine learning pipeline to identify which employees are at risk of leaving, using a human resources dataset. Includes comprehensive EDA of workforce demographics, statistical hypothesis testing, feature engineering, and comparison of three classification models with SHAP-based explainability.

## Dataset

[IBM HR Analytics Employee Attrition & Performance](https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset) via Kaggle

## Tech Stack

- Python, Pandas, NumPy
- Scikit-learn (Logistic Regression, Random Forest)
- XGBoost
- SHAP
- SciPy (chi-square, t-test)
- Matplotlib, Seaborn
- kagglehub

## How to Run

```bash
pip install kagglehub scikit-learn xgboost shap pandas numpy matplotlib seaborn scipy
jupyter notebook employee-attrition-analysis.ipynb
```

> Requires a Kaggle API key at `~/.kaggle/kaggle.json`

## Analysis Steps

1. EDA — distributions, missing values, class imbalance check
2. Univariate & bivariate analysis (attrition by each feature)
3. Correlation heatmap
4. Statistical tests (t-test for numeric, chi-square for categorical)
5. Feature engineering (age groups, tenure bands) + label encoding
6. Train 3 models: Logistic Regression, Random Forest, XGBoost
7. Evaluation: accuracy, precision, recall, F1, ROC-AUC, confusion matrix
8. 5-fold cross-validation
9. Feature importance (RF) + SHAP beeswarm (XGBoost)
10. Business recommendations

## Key Findings

- XGBoost achieves the highest ROC-AUC among the three models
- Tenure and satisfaction metrics are the strongest attrition predictors
- Class imbalance handled via `class_weight='balanced'` and XGBoost `scale_pos_weight`
- SHAP reveals which features push individual predictions toward attrition risk

## Author

**Fikri Firstly Arrasyid Hawe**
[GitHub](https://github.com/fikrilearnstocode) · [LinkedIn](https://www.linkedin.com/in/fikri-firstly-4b297a220/)
