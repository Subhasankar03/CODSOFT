# CineMatch AI: Movie Recommendation Engine

CineMatch AI is an interactive, dark-themed Single Page Application (SPA) that demonstrates two primary recommendation system algorithms (Content-Based Filtering and User-Based Collaborative Filtering) directly in the browser.

## Features
- **Dual Algorithmic Engine**:
  - **Content-Based Filtering**: Suggests movies similar to those rated highly by the user (ratings centered around neutral and aggregated by genres, boosted by manual interest pills) using **Cosine Similarity**.
  - **Collaborative Filtering**: Identifies similarity correlations between the user and 5 mock profiles, using their rating overrides to predict and rank scores for unrated catalog items.
- **Dynamic Math Sandbox**: Visualizes vectors, cosine similarities, user similarity rankings, and predictive matrices in real-time.
- **Curated Dataset**: Includes 15 diverse films, genre categorizations, responsive grid covers, and metadata details.
- **Custom Profile Editor**: Lets users rate films using standard star ratings, reset entries, or choose any pre-built profile to watch recommendation listings update dynamically.
- **SEO Optimized Layout**: Utilizes HTML5 semantic layout markers, customized responsive designs, meta description tags, and local SVGs.

## Project Structure
```
Internship 2/
├── index.html     # Semantic structure and profile bindings
├── styles.css     # Obsidian glassmorphic design system and keyframes
├── script.js     # Datasets, cosine calculations, DOM render pipelines
└── README.md      # Project overview and instruction details
```

## Running the Application
Since this project is built entirely on vanilla web technologies, there are no compilers or complex dependencies required:
1. Open the [index.html](file:///c:/Users/hp/Documents/Internship%202/index.html) file directly in any modern web browser.
2. Alternatively, serve the folder using standard HTTP server utilities:
   ```bash
   npx serve .
   ```
3. Open `http://localhost:3000` (or the address printed by your local server) to test the recommendation dynamics.
