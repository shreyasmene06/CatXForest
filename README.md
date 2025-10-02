# 🎓 CatXForest - Student Career Recommendation System

<div align="center">

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.0.0-green.svg)](https://flask.palletsprojects.com/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-1.5.2-orange.svg)](https://scikit-learn.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**An AI-powered career recommendation system that helps students discover their ideal career paths based on academic performance and personal attributes.**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [API](#-api-reference) • [Deployment](#-deployment)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Model Architecture](#-model-architecture)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Model Training](#-model-training)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

Live at: [catxforest.onrender.com](https://catxforest.onrender.com/)

**CatXForest** is a machine learning-powered web application that provides personalized career recommendations for students. By analyzing academic scores across multiple subjects, extracurricular activities, and other key attributes, the system predicts the top 5 most suitable career paths with confidence probabilities.

### 🎯 Problem Statement

Students often struggle to identify career paths that align with their strengths and interests. This system uses advanced machine learning to analyze student data and provide data-driven career recommendations.

### 💡 Solution

A hybrid ensemble model (Stacking Classifier) combining Random Forest, XGBoost, and CatBoost algorithms achieves **84.97% accuracy** in predicting suitable careers from 17 different career categories.

---

## ✨ Features

- 🤖 **AI-Powered Predictions**: Hybrid ensemble model with 84.97% accuracy
- 📊 **Top 5 Recommendations**: Get ranked career suggestions with probability scores
- 🎨 **Interactive Web Interface**: User-friendly Flask web application
- 📈 **Visual Analytics**: Pie chart visualization of career probabilities
- 🚀 **Production Ready**: Deployed and scalable on Render
- 🔒 **Data Privacy**: No data storage, predictions happen in real-time
- 📱 **Responsive Design**: Works seamlessly across devices

### Career Categories Supported

The system can recommend from 17 diverse career paths:

- Lawyer
- Doctor
- Government Officer
- Artist
- Software Engineer
- Teacher
- Business Owner
- Scientist
- Banker
- Writer
- Accountant
- Designer
- Construction Engineer
- Game Developer
- Stock Investor
- Real Estate Developer

---

## 🎬 Demo

### Input Form
Students enter:
- Personal details (gender)
- Academic scores (7 subjects: Math, History, Physics, Chemistry, Biology, English, Geography)
- Study habits (weekly self-study hours)
- Activities (part-time job, extracurricular activities, absence days)

### Output
- Top 5 career recommendations with confidence percentages
- Visual pie chart representation
- Detailed probability breakdown

---

## 🛠 Tech Stack

### Backend
- **Framework**: Flask 3.0.0
- **ML Libraries**: 
  - scikit-learn 1.5.2
  - XGBoost
  - CatBoost
  - NumPy 2.0.0+
- **Model Type**: Stacking Classifier (Hybrid Ensemble)

### Frontend
- HTML5
- CSS3
- JavaScript (Chart.js for visualizations)

### Deployment
- **Platform**: Render
- **Server**: Gunicorn 21.2.0
- **CI/CD**: Automated via Render YAML configuration

---

## 🏗 Model Architecture

### Training Pipeline

```
Data Collection → Preprocessing → Feature Engineering → SMOTE Balancing → 
Model Training → Ensemble Creation → Evaluation → Deployment
```

### Hybrid Ensemble Model

The system uses a **Stacking Classifier** that combines:

1. **Base Models**:
   - Random Forest Classifier
   - XGBoost Classifier
   - CatBoost Classifier

2. **Meta-Model**:
   - Logistic Regression (final estimator)

3. **Cross-Validation**: 5-fold CV for robust performance

### Feature Engineering

- **Input Features** (14 total):
  - Gender (encoded)
  - Part-time job status (binary)
  - Absence days (numeric)
  - Extracurricular activities (binary)
  - Weekly self-study hours (numeric)
  - Subject scores (7 subjects)
  - Total score (engineered)
  - Average score (engineered)

- **Preprocessing**:
  - Label encoding for categorical variables
  - Standard scaling for numerical features
  - SMOTE for class imbalance handling

---

## ⚡ Quick Start

### Prerequisites

- Python 3.9 or higher
- pip package manager
- Git

### One-Command Setup

```bash
git clone https://github.com/shreyasmene06/CatXForest.git
cd CatXForest
pip install -r requirements.txt
python app.py
```

Visit `http://localhost:5000` in your browser.

---

## 📥 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/shreyasmene06/CatXForest.git
cd CatXForest
```

### Step 2: Create Virtual Environment (Recommended)

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### Step 4: Verify Installation

```bash
python -c "import flask, sklearn, numpy; print('All dependencies installed successfully!')"
```

---

## 🧠 Model Training

The pre-trained models are included in the `Models/` directory. To retrain the model from scratch:

### Step 1: Download Dataset

Download the student dataset from [Kaggle](https://www.kaggle.com/datasets/noorsaeed/student-studeis-recommendation) and place `student-scores.csv` in the project root.

### Step 2: Run Training Notebook

Open and run `Studies Recommendations.ipynb` in Jupyter Notebook:

```bash
jupyter notebook "Studies Recommendations.ipynb"
```

Or use JupyterLab:

```bash
jupyter lab "Studies Recommendations.ipynb"
```

### Step 3: Training Process

The notebook will:
1. Load and preprocess the dataset
2. Create engineered features (total_score, average_score)
3. Encode categorical variables
4. Balance the dataset using SMOTE
5. Train multiple models and compare performance
6. Create a hybrid ensemble (Stacking Classifier)
7. Save the best model to `Models/` directory

### Generated Files

After training, the following files are created:

- `Models/model.pkl` - Random Forest model (83% accuracy)
- `Models/hybrid_model.pkl` - Stacking ensemble (84.97% accuracy)
- `Models/scaler.pkl` - StandardScaler for feature normalization
- `Models/model_info.pkl` - Model metadata and performance metrics

> ⚠️ **Note**: The application uses `model.pkl` by default. To use the hybrid model, update line 14 in `app.py` to load `hybrid_model.pkl`.

---

## 🚀 Usage

### Running Locally

1. **Start the application:**
   ```bash
   python app.py
   ```

2. **Access the web interface:**
   - Open browser and navigate to `http://localhost:5000`
   - Or `http://0.0.0.0:5000` for network access

3. **Make predictions:**
   - Fill in the student information form
   - Click "Get Recommendations"
   - View top 5 career suggestions with probabilities

### Using in Production

For production deployment:

```bash
gunicorn app:app --bind 0.0.0.0:5000 --workers 4
```

---

## 📡 API Reference

### Endpoints

#### `GET /`
**Home Page**
- Returns: HTML landing page

#### `GET /recommend`
**Recommendation Form**
- Returns: HTML form for student data input

#### `POST /pred`
**Get Career Predictions**

**Request Body (Form Data):**
```json
{
  "gender": "female",
  "part_time_job": "true",
  "absence_days": "2",
  "extracurricular_activities": "true",
  "weekly_self_study_hours": "7",
  "math_score": "85",
  "history_score": "72",
  "physics_score": "88",
  "chemistry_score": "90",
  "biology_score": "76",
  "english_score": "80",
  "geography_score": "75",
  "total_score": "566",
  "average_score": "80.857"
}
```

**Response:**
- HTML page with:
  - Top 5 career recommendations
  - Probability percentages
  - Interactive pie chart visualization

### Input Validation

| Parameter | Type | Range | Required |
|-----------|------|-------|----------|
| gender | string | "male" or "female" | ✅ |
| part_time_job | string | "true" or "false" | ✅ |
| absence_days | integer | 0-365 | ✅ |
| extracurricular_activities | string | "true" or "false" | ✅ |
| weekly_self_study_hours | integer | 0-168 | ✅ |
| math_score | integer | 0-100 | ✅ |
| history_score | integer | 0-100 | ✅ |
| physics_score | integer | 0-100 | ✅ |
| chemistry_score | integer | 0-100 | ✅ |
| biology_score | integer | 0-100 | ✅ |
| english_score | integer | 0-100 | ✅ |
| geography_score | integer | 0-100 | ✅ |
| total_score | float | Sum of all scores | ✅ |
| average_score | float | Average of all scores | ✅ |

---

## 🌐 Deployment

### Deploy to Render

The project includes a `render.yaml` configuration for one-click deployment.

#### Option 1: Automatic Deployment

1. Fork this repository
2. Sign up/login to [Render](https://render.com)
3. Click "New" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect `render.yaml` and deploy

#### Option 2: Manual Deployment

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - **Name**: `catxforest` (or your choice)
   - **Runtime**: Python 3
   - **Build Command**: 
     ```bash
     pip install --upgrade pip && pip install -r requirements.txt
     ```
   - **Start Command**: 
     ```bash
     gunicorn app:app --bind 0.0.0.0:$PORT
     ```
4. Click "Create Web Service"

### Deploy to Other Platforms

<details>
<summary><b>Heroku</b></summary>

```bash
# Login to Heroku
heroku login

# Create new app
heroku create your-app-name

# Deploy
git push heroku main

# Open app
heroku open
```

The `Procfile` is already configured.
</details>

<details>
<summary><b>Railway</b></summary>

1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Deploy: `railway up`
</details>

<details>
<summary><b>Google Cloud Run</b></summary>

```bash
# Build container
gcloud builds submit --tag gcr.io/PROJECT_ID/catxforest

# Deploy
gcloud run deploy --image gcr.io/PROJECT_ID/catxforest --platform managed
```
</details>

### Environment Variables

No environment variables are required for basic deployment. For advanced configuration:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `FLASK_ENV` | Environment | production |
| `DEBUG` | Debug mode | False |

---

## 📁 Project Structure

```
CatXForest/
│
├── app.py                          # Main Flask application
├── requirements.txt                # Python dependencies
├── runtime.txt                     # Python version specification
├── Procfile                        # Heroku deployment config
├── render.yaml                     # Render deployment config
├── LICENSE                         # MIT License
├── README.md                       # This file
│
├── Models/                         # Trained ML models
│   ├── model.pkl                   # Random Forest model
│   ├── hybrid_model.pkl            # Stacking ensemble model
│   ├── scaler.pkl                  # Feature scaler
│   ├── label_encoder.pkl           # Label encoder (if used)
│   └── model_info.pkl              # Model metadata
│
├── templates/                      # HTML templates
│   ├── home.html                   # Landing page
│   ├── recommend.html              # Input form page
│   └── results.html                # Results/predictions page
│
├── static/                         # Static assets
│   ├── img.png                     # Images
│   ├── img_1.png
│   ├── img_2.png
│   └── img_3.png
│
├── catboost_info/                  # CatBoost training logs
│   └── ...
│
├── Studies Recommendations.ipynb   # Model training notebook
└── student-scores.csv              # Dataset (download separately)
```

---

## 📊 Performance

### Model Metrics

| Model | Accuracy | Precision | Recall | F1-Score |
|-------|----------|-----------|--------|----------|
| Random Forest | 83.00% | 0.82 | 0.83 | 0.82 |
| XGBoost | 82.73% | 0.82 | 0.83 | 0.82 |
| CatBoost | 83.38% | 0.83 | 0.83 | 0.83 |
| **Stacking Ensemble** | **84.97%** | **0.85** | **0.85** | **0.85** |

### Key Strengths

- ✅ High accuracy across all 17 career categories
- ✅ Balanced precision and recall
- ✅ Robust performance on imbalanced data (SMOTE applied)
- ✅ Fast inference time (~50ms per prediction)

### Confusion Matrix Insights

The model performs exceptionally well on:
- Teacher (97% recall)
- Writer (98% recall)
- Business Owner (93% recall)
- Designer (94% recall)
- Game Developer (98% recall)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Bugs

1. Check existing [Issues](https://github.com/shreyasmene06/CatXForest/issues)
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)

### Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the feature and its benefits
3. Provide examples or mockups if possible

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/shreyasmene06/CatXForest.git

# Create virtual environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dev dependencies
pip install -r requirements.txt

# Run tests (if available)
pytest tests/

# Run locally
python app.py
```

---

## 📝 Dataset Information

### Source
[Student Studies Recommendation Dataset](https://www.kaggle.com/datasets/noorsaeed/student-studeis-recommendation) - Kaggle

### Description
The dataset contains information about students including:
- **Personal Details**: Name, email, gender
- **Academic Scores**: 7 subjects (Math, History, Physics, Chemistry, Biology, English, Geography)
- **Activities**: Part-time job status, extracurricular activities
- **Study Habits**: Weekly self-study hours, absence days
- **Career Aspiration**: Target variable (17 categories)

### Preprocessing Applied
1. Dropped irrelevant columns (ID, name, email)
2. Created engineered features (total_score, average_score)
3. Encoded categorical variables (gender, boolean fields)
4. Balanced dataset using SMOTE oversampling
5. Applied Standard Scaling to features

### Ethics & Privacy
- No personal identifiable information (PII) is stored
- Email addresses and names are discarded during preprocessing
- Model predictions are for educational guidance only
- Should be used in conjunction with professional career counseling

---

## 🔒 Security

- **Input Validation**: All user inputs are validated before processing
- **No Data Storage**: Predictions are made in real-time without storing user data
- **HTTPS Ready**: Configure SSL/TLS in production environments
- **Dependency Updates**: Regular security updates via Dependabot

### Reporting Security Issues

Please email security concerns to: [your-email@example.com]

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Shreyas Mene

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

## 🙏 Acknowledgments

- **Dataset**: [Noor Saeed](https://www.kaggle.com/noorsaeed) for the Student Studies Recommendation dataset
- **Libraries**: scikit-learn, XGBoost, CatBoost, Flask teams
- **Inspiration**: Helping students make informed career decisions
- **Contributors**: All contributors who help improve this project

---

## 📞 Support

### Documentation
- 📖 [Full Documentation](https://github.com/shreyasmene06/CatXForest/wiki)
- 💬 [Discussions](https://github.com/shreyasmene06/CatXForest/discussions)
- 🐛 [Issue Tracker](https://github.com/shreyasmene06/CatXForest/issues)

### Contact
- **Author**: Shreyas Mene
- **Email**: shreyasmene6@gmail.com
- **GitHub**: [@shreyasmene06](https://github.com/shreyasmene06)

### Community
- ⭐ Star this repo if you find it helpful!
- 🍴 Fork it to create your own version
- 📢 Share with others who might benefit

---

## 🗺 Roadmap

### Version 2.0 (Planned)
- [ ] REST API with JSON responses
- [ ] User authentication and history tracking
- [ ] More career categories (30+)
- [ ] Multi-language support
- [ ] Mobile application (React Native)
- [ ] Advanced analytics dashboard
- [ ] Integration with educational platforms

### Future Enhancements
- [ ] Real-time model retraining
- [ ] Explainable AI (SHAP values)
- [ ] Career path progression recommendations
- [ ] Skill gap analysis
- [ ] Personalized study recommendations

---

<div align="center">

### ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=shreyasmene06/CatXForest&type=Date)](https://star-history.com/#shreyasmene06/CatXForest&Date)

---

**Made with ❤️ for Students by Students**

[Report Bug](https://github.com/shreyasmene06/CatXForest/issues) • [Request Feature](https://github.com/shreyasmene06/CatXForest/issues) • [Documentation](https://github.com/shreyasmene06/CatXForest/wiki)

</div>

