# Customer Churn Prediction

Predicting telecom customer churn using Machine Learning.

## Overview

End-to-end ML pipeline to identify which telecom customers are likely to churn, using the IBM Telco Customer Churn dataset. Includes exploratory data analysis, feature engineering, model training (Logistic Regression & Random Forest), and SHAP-based feature importance analysis.

## Dataset

[IBM Telco Customer Churn](https://www.kaggle.com/datasets/blastchar/telco-customer-churn) via Kaggle

## Tech Stack

- Python, Pandas, NumPy
- Scikit-learn (Logistic Regression, Random Forest)
- Matplotlib, Seaborn
- kagglehub

## How to Run

```bash
pip install kagglehub scikit-learn pandas matplotlib seaborn
jupyter notebook customer-churn-prediction.ipynb
```

> Requires a Kaggle API key at `~/.kaggle/kaggle.json`

## Results

- Random Forest: ~82% accuracy
- Key churn predictors: tenure, monthly charges, contract type

## Author

**Fikri Firstly Arrasyid Hawe**
[GitHub](https://github.com/fikrilearnstocode) · [LinkedIn](https://www.linkedin.com/in/fikri-firstly-4b297a220/)
