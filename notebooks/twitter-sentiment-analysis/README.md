# Twitter Sentiment Analysis

NLP pipeline for classifying airline tweet sentiments.

## Overview

Sentiment classification (positive / neutral / negative) of US airline tweets using TF-IDF vectorization and Logistic Regression. Demonstrates end-to-end NLP: text cleaning, stopword removal, feature extraction, model training, and evaluation.

## Dataset

[Twitter US Airline Sentiment](https://www.kaggle.com/datasets/crowdflower/twitter-airline-sentiment) via Kaggle

## Tech Stack

- Python, Pandas, NLTK
- Scikit-learn (TF-IDF, Logistic Regression)
- Matplotlib, Seaborn
- kagglehub

## How to Run

```bash
pip install kagglehub scikit-learn pandas matplotlib seaborn nltk
jupyter notebook twitter-sentiment-analysis.ipynb
```

> Requires a Kaggle API key at `~/.kaggle/kaggle.json`

## Results

- ~80% accuracy on 3-class sentiment classification
- Bigrams improve performance over unigrams
- United & US Airways have the highest negative sentiment rate

## Author

**Fikri Firstly Arrasyid Hawe**
[GitHub](https://github.com/fikrilearnstocode) · [LinkedIn](https://www.linkedin.com/in/fikri-firstly-4b297a220/)
