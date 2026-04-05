# Pakistan E-Commerce Customer Segmentation

Customer segmentation and sales analysis of Pakistan's largest e-commerce platform.

## Overview

Comprehensive analysis of e-commerce transaction data from Pakistan. Covers time-series revenue trends, product category performance, geographic sales breakdown, and RFM-based customer segmentation using K-Means clustering to identify actionable customer groups.

## Dataset

[Pakistan's Largest E-Commerce Dataset](https://www.kaggle.com/datasets/zusmani/pakistans-largest-ecommerce-dataset) via Kaggle

## Tech Stack

- Python, Pandas, NumPy
- Scikit-learn (KMeans, PCA, StandardScaler, silhouette_score)
- SciPy (ANOVA / f_oneway)
- Matplotlib, Seaborn
- kagglehub

## How to Run

```bash
pip install kagglehub scikit-learn pandas numpy matplotlib seaborn scipy
jupyter notebook pakistan-ecommerce-analysis.ipynb
```

> Requires a Kaggle API key at `~/.kaggle/kaggle.json`

## Analysis Steps

1. Data loading, cleaning, and column standardization
2. Missing value analysis + date/price parsing
3. Monthly & quarterly revenue time-series
4. Product category revenue analysis (bar + pie)
5. Geographic analysis (top cities by revenue)
6. Payment method & order status distribution
7. RFM Analysis (Recency, Frequency, Monetary) per customer
8. K-Means clustering with elbow method + silhouette score
9. PCA-based 2D cluster visualization
10. ANOVA to validate cluster separability
11. Marketing recommendations per segment

## Key Findings

- Revenue is concentrated in a few top product categories (Pareto rule applies)
- Clear seasonal peaks visible in monthly time-series
- K-Means identifies distinct customer segments: Champions, At Risk, Hibernating, Promising
- Geographic concentration in major cities — secondary city expansion is a growth opportunity

## Author

**Fikri Firstly Arrasyid Hawe**
[GitHub](https://github.com/fikrilearnstocode) · [LinkedIn](https://www.linkedin.com/in/fikri-firstly-4b297a220/)
