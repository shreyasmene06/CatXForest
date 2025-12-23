# 🎓 CatXForest - Student Career Recommendation System

<div align="center">

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.0.0-green.svg)](https://flask.palletsprojects.com/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-1.5.2-orange.svg)](https://scikit-learn.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/shreyasmene06/CatXForest/graphs/commit-activity)

**An AI-powered career recommendation system designed to help students understand which career paths align best with their academic performance and personal attributes.**

[Features](#-features) • [Quick Start](#-quick-start) • [Architecture](#-model-architecture) • [Contributors](#-contributors-&-credits)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Project Goal](#-project-goal)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Model Architecture](#-model-architecture)
- [Installation](#-installation)
- [Usage](#-usage)
- [Contributors & Credits](#-contributors-&-credits)
- [License](#-license)

---

## 🌟 Overview

Live at: [catxforest-by-frosfres.onrender.com](https://catxforest-by-frosfres.onrender.com/)

**CatXForest** is a machine learning-powered web application that provides personalized career recommendations for students. By analyzing subject-wise scores, study habits, and extracurricular activities, the system generates clear, ranked career recommendations with confidence scores.

The application runs fully in real-time without storing user data, ensuring privacy while delivering instant insights.

### 🎯 Problem Statement
Students often struggle to identify career paths that align with their strengths and interests. This system uses advanced machine learning to analyze student data and provide data-driven career recommendations.

---

## 🚀 Project Goal

The primary goal of this project is not only to predict careers using machine learning but to present those predictions in a way that is **understandable, trustworthy, and useful for students**.

The focus is on the **clarity, usability, and interpretability** of AI-driven decisions, turning raw predictions into actionable understanding.

---

## ✨ Features

- 🤖 **AI-Powered Predictions**: Hybrid ensemble model (Stacking Classifier) with **84.97% accuracy**.
- 📊 **Top 5 Recommendations**: Displays ranked career suggestions with specific confidence percentages.
- 🎨 **Redesigned UI/UX**: A completely redesigned frontend with improved user flow and form structure for clarity.
- 📈 **Interactive Visualizations**: Integrated **Chart.js** to visualize career probabilities via dynamic pie charts.
- ⚡ **Real-Time Processing**: Runs fully in real-time; no personal user data is stored persistently.
- 📱 **Responsive Design**: Stabilized application for both local and production environments.

### Career Categories Supported
The system recommends from 17 diverse career paths including *Lawyer, Doctor, Software Engineer, Business Owner, Scientist, Artist, and more.*

---

## 🛠 Tech Stack

### Backend & Logic
- **Framework**: Flask 3.0.0
- **Language**: Python 3.9+
- **ML Libraries**: scikit-learn, XGBoost, CatBoost, NumPy
- **Model Type**: Stacking Classifier (Random Forest + XGBoost + CatBoost)

### Frontend & Interface
- **Core**: HTML5, CSS3, JavaScript
- **Visualization**: Chart.js (Probability Visualization)
- **Templating**: Jinja2

### Deployment & DevOps
- **Platform**: Render
- **Server**: Gunicorn 21.2.0
- **Containerization**: Docker support (optional)

---

## 🏗 Model Architecture

### Hybrid Ensemble Model
The system uses a **Stacking Classifier** that combines:
1. **Base Models**: Random Forest, XGBoost, and CatBoost Classifiers.
2. **Meta-Model**: Logistic Regression (final estimator).
3. **Validation**: 5-fold Cross-Validation for robust performance.

### Feature Engineering
The model inputs 14 features including:
* **Academic:** Scores in Math, History, Physics, Chemistry, Biology, English, Geography.
* **Behavioral:** Weekly self-study hours, Absence days.
* **Extracurricular:** Activities, Part-time job status.
* **Derived:** Total Score, Average Score.

---

## ⚡ Quick Start

### Prerequisites
- Python 3.9 or higher
- pip package manager
- Git

### Installation

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/shreyasmene06/CatXForest.git](https://github.com/shreyasmene06/CatXForest.git)
   cd CatXForest

2. **Create Virtual Environment**
   ```bash
   python -m venv venv
   # Windows
    venv\Scripts\activate
    # macOS/Linux
    source venv/bin/activate

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt

4. **Run the Application**
   ```bash
   python app.py
  Visit http://localhost:5000 in your browser.

  ---

## 👥 Contributors & Credits

This project is a collaborative effort focusing on both high-accuracy Machine Learning and robust System Integration.
### Anurag Yadav
Role: Frontend Architect, System Integrator, Debugging & UX Lead

Frontend Redesign: Redesigned the complete frontend UI from scratch for better usability.

System Integration: Ensured reliable data flow between the frontend and ML backend.

Visualization: Integrated Chart.js for interactive career probability charts.

Debugging: Resolved critical Flask routing, Jinja template issues, and form submission bugs.

Deployment: Stabilized the application for production deployment on Render.

### Shreyas Mene
Role: Original Machine Learning Architecture & Training

Model Development: Designed the Hybrid Stacking Ensemble (Random Forest, XGBoost, CatBoost).

Training: Handled data preprocessing, SMOTE balancing, and model evaluation.

Dataset
Source: [Kaggle - Student Studies Recommendation](https://www.kaggle.com/datasets/noorsaeed/student-studeis-recommendation)

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
```bash
MIT License

Copyright (c) 2025 CatXForest Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
