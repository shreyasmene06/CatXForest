<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CatXForest | Career Recommendation System</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

  <style>
    * {
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    body {
      margin: 0;
      padding: 0;
      background: radial-gradient(circle at top, #111827, #020617);
      color: #e5e7eb;
      line-height: 1.7;
    }

    .container {
      max-width: 1000px;
      margin: auto;
      padding: 60px 20px;
    }

    h1, h2, h3 {
      color: #f9fafb;
      margin-top: 40px;
    }

    h1 {
      font-size: 2.8rem;
      text-align: center;
    }

    h1 span {
      color: #3b82f6;
    }

    h2 {
      font-size: 1.9rem;
      border-left: 4px solid #3b82f6;
      padding-left: 12px;
    }

    p {
      color: #cbd5f5;
      margin-top: 15px;
    }

    ul {
      margin-top: 15px;
      padding-left: 22px;
    }

    li {
      margin-bottom: 10px;
      color: #cbd5f5;
    }

    .badge-row {
      text-align: center;
      margin: 25px 0 40px;
    }

    .badge {
      display: inline-block;
      margin: 6px;
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 600;
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
    }

    .highlight {
      background: linear-gradient(180deg, #0b1220, #020617);
      border-radius: 16px;
      padding: 30px;
      margin-top: 30px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.6);
    }

    .code {
      background: #020617;
      border-radius: 10px;
      padding: 16px;
      margin-top: 15px;
      font-family: monospace;
      color: #a5b4fc;
      overflow-x: auto;
    }

    .footer {
      text-align: center;
      margin-top: 80px;
      color: #9ca3af;
      font-size: 0.9rem;
    }

    a {
      color: #60a5fa;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

<div class="container">

  <h1>Cat<span>X</span>Forest</h1>
  <p style="text-align:center; max-width:700px; margin:auto;">
    An AI-powered career recommendation system with a redesigned frontend,
    focused on clarity, usability, and intuitive data visualization.
  </p>

  <div class="badge-row">
    <span class="badge">Python</span>
    <span class="badge">Flask</span>
    <span class="badge">Machine Learning</span>
    <span class="badge">Dark UI</span>
    <span class="badge">Chart.js</span>
  </div>

  <h2>📌 About This Repository</h2>
  <p>
    This repository is a <b>frontend-focused fork</b> of the original CatXForest group project.
    The machine learning models and core backend logic were developed collaboratively as part
    of a team project, while this fork represents my <b>independent work on frontend design,
    user experience, and visualization</b>.
  </p>

  <div class="highlight">
    <ul>
      <li>Modern dark-themed user interface</li>
      <li>Clear, step-by-step input flow</li>
      <li>Career cards with confidence percentages</li>
      <li>Interactive charts for result interpretation</li>
      <li>Improved layout consistency and readability</li>
    </ul>
  </div>

  <h2>🖥️ Tech Stack</h2>
  <ul>
    <li><b>Frontend:</b> HTML5, CSS3, JavaScript, Chart.js</li>
    <li><b>Backend:</b> Flask (Python)</li>
    <li><b>Machine Learning:</b> Ensemble models (Random Forest, XGBoost, CatBoost)</li>
  </ul>

  <h2>🚀 Application Flow</h2>
  <ul>
    <li>Landing page introducing the AI career advisor</li>
    <li>Structured form for academic and personal details</li>
    <li>Results page with ranked career recommendations and probability charts</li>
  </ul>

  <h2>⚙️ Run Locally</h2>
  <div class="code">
    git clone https://github.com/anuragyadav0311/CatXForest.git<br>
    cd CatXForest<br>
    python -m venv venv<br>
    venv\Scripts\activate<br>
    pip install -r requirements.txt<br>
    python app.py
  </div>

  <h2>🧑‍💻 My Contribution</h2>
  <p>
    <b>Anurag Yadav</b><br>
    Frontend Design & UX · UI Architecture · Chart Integration · Full-Stack Debugging
  </p>

  <h2>🤝 Credits</h2>
  <ul>
    <li>Original ML Architecture & Training: Shreyas Mene</li>
    <li>Dataset: Kaggle — Student Studies Recommendation</li>
    <li>Libraries: Flask, scikit-learn, Chart.js</li>
  </ul>

  <h2>📜 License</h2>
  <p>
    MIT License<br>
    Original project © 2025 Shreyas Mene<br>
    Frontend modifications © 2025 Anurag Yadav
  </p>

  <div class="footer">
    Built with purpose · Designed for clarity<br>
    ⭐ CatXForest — Turning predictions into understanding
  </div>

</div>

</body>
</html>
