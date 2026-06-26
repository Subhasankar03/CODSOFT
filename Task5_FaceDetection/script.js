// Movie Dataset
const movies = [
    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        genres: ["Sci-Fi", "Drama", "Adventure"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rating: 4.6,
        backdrop: "linear-gradient(135deg, #0f172a, #1e3a8a, #3b82f6)"
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Drama", "Thriller"],
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
        rating: 4.9,
        backdrop: "linear-gradient(135deg, #1e293b, #0f172a, #475569)"
    },
    {
        id: 3,
        title: "Inception",
        year: 2010,
        genres: ["Action", "Sci-Fi", "Thriller"],
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: 4.8,
        backdrop: "linear-gradient(135deg, #0f172a, #312e81, #4f46e5)"
    },
    {
        id: 4,
        title: "The Matrix",
        year: 1999,
        genres: ["Action", "Sci-Fi"],
        description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        rating: 4.7,
        backdrop: "linear-gradient(135deg, #022c22, #064e3b, #10b981)"
    },
    {
        id: 5,
        title: "Pulp Fiction",
        year: 1994,
        genres: ["Drama", "Thriller"],
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        rating: 4.5,
        backdrop: "linear-gradient(135deg, #1c1917, #44403c, #78716c)"
    },
    {
        id: 6,
        title: "The Shawshank Redemption",
        year: 1994,
        genres: ["Drama"],
        description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        rating: 4.9,
        backdrop: "linear-gradient(135deg, #172554, #1e3a8a, #2563eb)"
    },
    {
        id: 7,
        title: "La La Land",
        year: 2016,
        genres: ["Romance", "Drama", "Comedy"],
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        rating: 4.3,
        backdrop: "linear-gradient(135deg, #581c87, #701a75, #ec4899)"
    },
    {
        id: 8,
        title: "Pride & Prejudice",
        year: 2005,
        genres: ["Romance", "Drama"],
        description: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class.",
        rating: 4.4,
        backdrop: "linear-gradient(135deg, #4c0519, #881337, #db2777)"
    },
    {
        id: 9,
        title: "The Grand Budapest Hotel",
        year: 2014,
        genres: ["Comedy", "Drama", "Adventure"],
        description: "A writer relates his adventures at a renowned European resort hotel between the first and second World Wars with a concierge who is wrongly framed for murder.",
        rating: 4.2,
        backdrop: "linear-gradient(135deg, #451a03, #78350f, #d97706)"
    },
    {
        id: 10,
        title: "Superbad",
        year: 2007,
        genres: ["Comedy"],
        description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        rating: 4.1,
        backdrop: "linear-gradient(135deg, #3f2f0f, #713f12, #ca8a04)"
    },
    {
        id: 11,
        title: "Spirited Away",
        year: 2001,
        genres: ["Fantasy", "Adventure", "Drama"],
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        rating: 4.6,
        backdrop: "linear-gradient(135deg, #1e1b4b, #312e81, #6366f1)"
    },
    {
        id: 12,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        genres: ["Fantasy", "Adventure", "Action"],
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        rating: 4.9,
        backdrop: "linear-gradient(135deg, #14532d, #166534, #22c55e)"
    },
    {
        id: 13,
        title: "Se7en",
        year: 1995,
        genres: ["Mystery", "Thriller", "Drama"],
        description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        rating: 4.7,
        backdrop: "linear-gradient(135deg, #0f172a, #1e293b, #334155)"
    },
    {
        id: 14,
        title: "Knives Out",
        year: 2019,
        genres: ["Mystery", "Comedy", "Thriller"],
        description: "A detective investigates the death of the patriarch of an eccentric, combative family.",
        rating: 4.3,
        backdrop: "linear-gradient(135deg, #311042, #581c87, #a855f7)"
    },
    {
        id: 15,
        title: "Eternal Sunshine of the Spotless Mind",
        year: 2004,
        genres: ["Romance", "Sci-Fi", "Drama"],
        description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        rating: 4.4,
        backdrop: "linear-gradient(135deg, #0369a1, #0284c7, #06b6d4)"
    }
];

// All Genres represented in dataset
const genresList = ["Action", "Sci-Fi", "Adventure", "Drama", "Romance", "Comedy", "Thriller", "Fantasy", "Mystery"];

// Mock Users Ratings Database
const mockUsers = {
    alex: {
        name: "Alex (Sci-Fi Fanatic)",
        ratings: { 1: 5, 2: 3, 3: 5, 4: 4, 15: 4, 10: 1, 8: 1, 7: 2 }
    },
    chloe: {
        name: "Chloe (Romance Lover)",
        ratings: { 7: 5, 8: 5, 15: 4, 6: 4, 4: 1, 2: 2, 13: 1 }
    },
    marcus: {
        name: "Marcus (Action & Thriller Buff)",
        ratings: { 2: 5, 3: 5, 4: 4, 13: 5, 5: 4, 8: 1, 10: 2 }
    },
    sophia: {
        name: "Sophia (Drama Devotee)",
        ratings: { 6: 5, 1: 4, 2: 4, 8: 4, 5: 3, 10: 1 }
    },
    ethan: {
        name: "Ethan (Indie & Classics)",
        ratings: { 5: 5, 6: 5, 9: 5, 11: 4, 4: 2, 10: 2 }
    }
};

// Application State
const state = {
    activeProfile: "custom", // 'custom' or one of the mock keys
    activeAlgorithm: "content", // 'content' or 'collaborative'
    customRatings: {}, // Movie ID -> Rating (1-5) for current user sessions
    customGenreWeights: {}, // Genre name -> weight (1.5 if toggled active, 0 otherwise)
    genreFilters: "all",
    searchQuery: ""
};

// Initialize App
window.addEventListener("DOMContentLoaded", () => {
    // Set initial genre weights
    genresList.forEach(genre => {
        state.customGenreWeights[genre] = 0;
    });

    // Populate UI elements
    populateGenres();
    populateCatalogFilters();
    renderAll();
});

// Switch Dashboard / Catalog / Sandbox tabs
function switchTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));

    document.getElementById(`tab-${tabId}`).classList.add("active");
    document.getElementById(`tab-${tabId}-btn`).classList.add("active");
    
    // Rerender when shifting to Sandbox to show correct formulas
    if (tabId === "sandbox") {
        renderSandboxCalculations();
    }
}

// Populate Genre Pills in Dashboard Sidebar
function populateGenres() {
    const container = document.getElementById("dashboard-genre-pills");
    container.innerHTML = "";
    genresList.forEach(genre => {
        const pill = document.createElement("button");
        pill.className = `genre-pill ${state.customGenreWeights[genre] > 0 ? 'active' : ''}`;
        pill.innerHTML = `
            <span class="plus-icon">${state.customGenreWeights[genre] > 0 ? '✓' : '+'}</span>
            ${genre}
        `;
        pill.onclick = () => toggleGenreWeight(genre);
        container.appendChild(pill);
    });
}

// Toggle sidebar genre pill weight
function toggleGenreWeight(genre) {
    if (state.activeProfile !== "custom") {
        // Switch back to custom profile when they interact with preferences
        document.getElementById("profileSelect").value = "custom";
        loadProfile("custom");
    }

    state.customGenreWeights[genre] = state.customGenreWeights[genre] === 0 ? 1.5 : 0;
    populateGenres();
    renderAll();
}

// Populate Catalog filter select
function populateCatalogFilters() {
    const filterSelect = document.getElementById("catalog-genre-filter");
    genresList.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        filterSelect.appendChild(option);
    });
}

// Load a specific profile ratings into memory
function loadProfile(profileKey) {
    state.activeProfile = profileKey;
    
    // Update UI badge
    const badge = document.getElementById("profile-badge");
    badge.textContent = profileKey === "custom" ? "Custom" : "Pre-built";

    if (profileKey === "custom") {
        // Reset custom weights but keep custom ratings
        genresList.forEach(g => state.customGenreWeights[g] = 0);
    } else {
        // Import mock user ratings
        state.customRatings = { ...mockUsers[profileKey].ratings };
        // Reset active genre weights (mock profiles drive recommendations purely on rated items)
        genresList.forEach(g => state.customGenreWeights[g] = 0);
    }

    populateGenres();
    renderAll();
}

// Change algorithm type (Content vs Collaborative)
function setAlgorithm(algo) {
    state.activeAlgorithm = algo;
    
    const contentBtn = document.getElementById("algo-content-btn");
    const collabBtn = document.getElementById("algo-collab-btn");
    const statusText = document.getElementById("engine-status-text");

    if (algo === "content") {
        contentBtn.classList.add("active");
        collabBtn.classList.remove("active");
        statusText.textContent = "Engine Online (Content-Based)";
    } else {
        contentBtn.classList.remove("active");
        collabBtn.classList.add("active");
        statusText.textContent = "Engine Online (Collaborative)";
    }

    renderAll();
}

// Get active ratings for calculations
function getActiveRatings() {
    if (state.activeProfile === "custom") {
        return state.customRatings;
    } else {
        return mockUsers[state.activeProfile].ratings;
    }
}

// --- RECOMMENDATION ENGINES ---

// 1. Content-Based Recommendation Algorithm
function calculateContentRecommendations() {
    const activeRatings = getActiveRatings();
    
    // Construct User Profile Vector
    const profileVector = {};
    genresList.forEach(genre => {
        profileVector[genre] = state.customGenreWeights[genre]; // start with genre pill boosts
    });

    // Add weights from rated movies: positive rating = positive boost, negative rating = penalty
    let hasRatings = false;
    Object.entries(activeRatings).forEach(([movieId, rating]) => {
        const movie = movies.find(m => m.id == movieId);
        if (!movie) return;
        hasRatings = true;

        // Center ratings around 3 (neutral)
        // 5 stars = +2, 4 stars = +1, 3 stars = 0, 2 stars = -1, 1 star = -2
        const ratingWeight = rating - 3;
        movie.genres.forEach(genre => {
            profileVector[genre] += ratingWeight;
        });
    });

    // Calculate length (magnitude) of User Vector
    let userMagSq = 0;
    genresList.forEach(genre => {
        userMagSq += profileVector[genre] * profileVector[genre];
    });
    const userMag = Math.sqrt(userMagSq);

    // If active profile has no preferences or ratings, similarity is not computable
    const hasPills = Object.values(state.customGenreWeights).some(w => w > 0);
    if (!hasRatings && !hasPills) {
        return [];
    }

    const recommendations = [];

    movies.forEach(movie => {
        // If movie is already rated, skip recommending it
        if (activeRatings[movie.id] !== undefined) return;

        // Build movie binary genre vector and calculate magnitude
        let movieDot = 0;
        let movieMagSq = 0;

        genresList.forEach(genre => {
            const hasGenre = movie.genres.includes(genre) ? 1 : 0;
            movieDot += profileVector[genre] * hasGenre;
            movieMagSq += hasGenre * hasGenre;
        });

        const movieMag = Math.sqrt(movieMagSq);

        // Cosine Similarity
        let score = 0;
        if (userMag > 0 && movieMag > 0) {
            score = movieDot / (userMag * movieMag);
        }

        // Clip negative similarities to 0 for presentation
        score = Math.max(0, score);

        recommendations.push({
            movie,
            score: Math.round(score * 100) // Percentage similarity
        });
    });

    // Sort by recommendation score descending
    recommendations.sort((a, b) => b.score - a.score);
    return recommendations;
}

// 2. Collaborative Filtering Recommendation Algorithm
function calculateCollaborativeRecommendations() {
    const activeRatings = getActiveRatings();
    
    // Check if the user has rated anything
    const activeMovieIds = Object.keys(activeRatings);
    if (activeMovieIds.length === 0) {
        return [];
    }

    // Build User Rating Vector
    // Treat unrated movies as 0 in simple raw cosine similarity
    const activeVector = movies.map(m => activeRatings[m.id] || 0);

    // Calculate Magnitude of Active User Ratings Vector
    let activeMagSq = 0;
    activeVector.forEach(val => activeMagSq += val * val);
    const activeMag = Math.sqrt(activeMagSq);

    if (activeMag === 0) return [];

    // Compute User-User Cosine Similarity with all mock users
    const similarities = {};
    Object.entries(mockUsers).forEach(([key, user]) => {
        // Skip comparing user with themselves
        if (key === state.activeProfile) return;

        const otherVector = movies.map(m => user.ratings[m.id] || 0);
        
        let dotProduct = 0;
        let otherMagSq = 0;

        for (let i = 0; i < movies.length; i++) {
            dotProduct += activeVector[i] * otherVector[i];
            otherMagSq += otherVector[i] * otherVector[i];
        }

        const otherMag = Math.sqrt(otherMagSq);
        const similarity = otherMag > 0 ? dotProduct / (activeMag * otherMag) : 0;
        similarities[key] = similarity;
    });

    const recommendations = [];

    movies.forEach(movie => {
        // Skip already rated movies
        if (activeRatings[movie.id] !== undefined) return;

        let weightedRatingSum = 0;
        let similaritySum = 0;

        // Predict active user rating using weighted sum of mock user scores
        Object.entries(mockUsers).forEach(([key, user]) => {
            if (key === state.activeProfile) return;

            const otherRating = user.ratings[movie.id];
            const sim = similarities[key];

            // Only count users who rated this movie and have positive similarity
            if (otherRating !== undefined && sim > 0) {
                weightedRatingSum += sim * otherRating;
                similaritySum += sim;
            }
        });

        let predictedRating = 0;
        if (similaritySum > 0) {
            predictedRating = weightedRatingSum / similaritySum;
        }

        if (predictedRating > 0) {
            recommendations.push({
                movie,
                score: Math.round(predictedRating * 10) / 10 // Rounded to 1 decimal place (1.0 to 5.0)
            });
        }
    });

    // Sort by predicted rating descending
    recommendations.sort((a, b) => b.score - a.score);
    return recommendations;
}

// --- DOM RENDERING LOGIC ---

// Render recommendations in Dashboard tab
function renderDashboardRecommendations() {
    const grid = document.getElementById("recommended-movies-grid");
    grid.innerHTML = "";

    let recommendations = [];
    if (state.activeAlgorithm === "content") {
        recommendations = calculateContentRecommendations();
    } else {
        recommendations = calculateCollaborativeRecommendations();
    }

    if (recommendations.length === 0) {
        // Empty State card
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🎬</div>
                <h3>Feed is Empty</h3>
                <p>To view recommendations, go to the <strong>Movie Catalog</strong> tab and rate a few movies or check some genre checkboxes in the user profile panel.</p>
            </div>
        `;
        return;
    }

    recommendations.forEach(rec => {
        const card = createMovieCard(rec.movie, rec.score, state.activeAlgorithm);
        grid.appendChild(card);
    });
}

// Create movie card DOM component
function createMovieCard(movie, score, algoMode, showRatingControl = true) {
    const activeRatings = getActiveRatings();
    const userRating = activeRatings[movie.id] || 0;

    const card = document.createElement("div");
    card.className = "movie-card";

    // Setup genre HTML
    const genresHTML = movie.genres.map(g => `<span class="card-genre-tag">${g}</span>`).join("");

    // Setup score display based on recommendation mode
    let scoreDisplay = "";
    if (score !== undefined) {
        if (algoMode === "content") {
            scoreDisplay = `<div class="score-badge">🎯 ${score}% Match</div>`;
        } else {
            scoreDisplay = `<div class="score-badge">⭐ ${score} Pred</div>`;
        }
    }

    card.innerHTML = `
        <div class="card-backdrop" style="background: ${movie.backdrop}">
            ${scoreDisplay}
            <div class="card-genres">${genresHTML}</div>
        </div>
        <div class="card-body">
            <div class="movie-title-row">
                <h4 class="card-title">${movie.title}</h4>
                <span class="card-year">${movie.year}</span>
            </div>
            <p class="card-description">${movie.description}</p>
            <div class="card-footer">
                <div class="avg-rating">
                    <span class="star-icon">★</span>
                    <span>${movie.rating} Avg</span>
                </div>
                
                ${showRatingControl ? `
                    <div class="user-rating-wrapper">
                        <span class="user-rating-label">${userRating > 0 ? `Your Rating: ${userRating}` : 'Rate Movie'}</span>
                        <div class="star-rating">
                            <input type="radio" id="star5-${movie.id}-${algoMode}" name="rating-${movie.id}-${algoMode}" value="5" ${userRating === 5 ? 'checked' : ''} onclick="rateMovie(${movie.id}, 5)">
                            <label for="star5-${movie.id}-${algoMode}">★</label>
                            
                            <input type="radio" id="star4-${movie.id}-${algoMode}" name="rating-${movie.id}-${algoMode}" value="4" ${userRating === 4 ? 'checked' : ''} onclick="rateMovie(${movie.id}, 4)">
                            <label for="star4-${movie.id}-${algoMode}">★</label>
                            
                            <input type="radio" id="star3-${movie.id}-${algoMode}" name="rating-${movie.id}-${algoMode}" value="3" ${userRating === 3 ? 'checked' : ''} onclick="rateMovie(${movie.id}, 3)">
                            <label for="star3-${movie.id}-${algoMode}">★</label>
                            
                            <input type="radio" id="star2-${movie.id}-${algoMode}" name="rating-${movie.id}-${algoMode}" value="2" ${userRating === 2 ? 'checked' : ''} onclick="rateMovie(${movie.id}, 2)">
                            <label for="star2-${movie.id}-${algoMode}">★</label>
                            
                            <input type="radio" id="star1-${movie.id}-${algoMode}" name="rating-${movie.id}-${algoMode}" value="1" ${userRating === 1 ? 'checked' : ''} onclick="rateMovie(${movie.id}, 1)">
                            <label for="star1-${movie.id}-${algoMode}">★</label>
                        </div>
                        <button class="reset-rating-btn ${userRating > 0 ? 'visible' : ''}" onclick="resetRating(${movie.id})">Clear Rating</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    return card;
}

// User rates a movie
function rateMovie(movieId, rating) {
    if (state.activeProfile !== "custom") {
        // Copy state to custom profile when user interacts
        state.customRatings = { ...mockUsers[state.activeProfile].ratings };
        state.activeProfile = "custom";
        document.getElementById("profileSelect").value = "custom";
        document.getElementById("profile-badge").textContent = "Custom";
        populateGenres();
    }

    state.customRatings[movieId] = rating;
    renderAll();
}

// Reset rating
function resetRating(movieId) {
    if (state.activeProfile !== "custom") {
        state.customRatings = { ...mockUsers[state.activeProfile].ratings };
        state.activeProfile = "custom";
        document.getElementById("profileSelect").value = "custom";
        document.getElementById("profile-badge").textContent = "Custom";
        populateGenres();
    }

    delete state.customRatings[movieId];
    renderAll();
}

// Render active ratings list in dashboard sidebar
function renderDashboardRatingsList() {
    const list = document.getElementById("user-rated-list");
    const countSpan = document.getElementById("user-ratings-count");
    list.innerHTML = "";

    const activeRatings = getActiveRatings();
    const entries = Object.entries(activeRatings);
    countSpan.textContent = entries.length;

    if (entries.length === 0) {
        list.innerHTML = `<div style="text-align: center; color: var(--text-dim); font-size: 0.8rem; padding: 1rem;">No rated movies yet</div>`;
        return;
    }

    // Sort rated list by rating descending
    entries.sort((a, b) => b[1] - a[1]);

    entries.forEach(([id, stars]) => {
        const movie = movies.find(m => m.id == id);
        if (!movie) return;

        const item = document.createElement("div");
        item.className = "rated-movie-item";

        let starsHTML = "";
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<span style="color: ${i <= stars ? 'var(--star-color)' : 'var(--text-dim)'}">★</span>`;
        }

        item.innerHTML = `
            <div>
                <div class="rated-movie-title" title="${movie.title}">${movie.title}</div>
                <div class="rated-movie-genre">${movie.genres[0]}</div>
            </div>
            <div class="rating-stars-small">
                ${starsHTML}
            </div>
        `;
        list.appendChild(item);
    });
}

// Render Movie Catalog tab
function renderMovieCatalog() {
    const grid = document.getElementById("catalog-movies-grid");
    grid.innerHTML = "";

    const filtered = movies.filter(movie => {
        // Genre match
        const matchesGenre = state.genreFilters === "all" || movie.genres.includes(state.genreFilters);
        // Search term match
        const term = state.searchQuery.toLowerCase();
        const matchesSearch = movie.title.toLowerCase().includes(term) || 
                              movie.description.toLowerCase().includes(term) ||
                              movie.genres.some(g => g.toLowerCase().includes(term));
        return matchesGenre && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-state-icon">🔍</div>
                <h3>No Movies Found</h3>
                <p>Try refining your search terms or genre filter.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(movie => {
        // Render without scores on catalog
        const card = createMovieCard(movie, undefined, "catalog", true);
        grid.appendChild(card);
    });
}

// Filter triggers on input/select in Catalog
function filterCatalog() {
    state.genreFilters = document.getElementById("catalog-genre-filter").value;
    state.searchQuery = document.getElementById("catalog-search").value;
    renderMovieCatalog();
}

// Render Sandbox calculations layout
function renderSandboxCalculations() {
    const container = document.getElementById("sandbox-calculations-panel");
    // Clear dynamic portion (keep header title)
    container.innerHTML = `<h3 class="panel-title">Live Calculations</h3>`;

    const activeRatings = getActiveRatings();

    if (state.activeAlgorithm === "content") {
        // Vector aggregation details
        const profileVector = {};
        genresList.forEach(genre => {
            profileVector[genre] = state.customGenreWeights[genre];
        });

        Object.entries(activeRatings).forEach(([movieId, rating]) => {
            const movie = movies.find(m => m.id == movieId);
            if (!movie) return;
            const ratingWeight = rating - 3;
            movie.genres.forEach(genre => {
                profileVector[genre] += ratingWeight;
            });
        });

        // Compute magnitude
        let userMagSq = 0;
        genresList.forEach(genre => userMagSq += profileVector[genre] * profileVector[genre]);
        const userMag = Math.sqrt(userMagSq).toFixed(2);

        // Vector blocks HTML
        let blocksHTML = "";
        genresList.forEach(genre => {
            const val = profileVector[genre];
            let levelClass = val > 0 ? "high" : (val === 0 ? "zero" : "negative");
            blocksHTML += `
                <div class="vector-block">
                    <div class="vector-label">${genre.substring(0, 5)}</div>
                    <div class="vector-val ${levelClass}">${val > 0 ? '+' : ''}${val.toFixed(1)}</div>
                </div>
            `;
        });

        const vectorSection = document.createElement("div");
        vectorSection.innerHTML = `
            <h4 style="margin-bottom: 0.5rem; font-family:'Outfit';">1. Active Profile Vector (U)</h4>
            <p class="math-explanation">Sum of weights centered around 3 (neutral) + active genre pill weights (+1.5):</p>
            <div class="vector-container">${blocksHTML}</div>
            <p class="math-explanation" style="margin-top:0.75rem;">Vector magnitude: <strong>||U|| = ${userMag}</strong></p>
        `;
        container.appendChild(vectorSection);

        // Similarity breakdown table
        const recommendations = calculateContentRecommendations();
        if (recommendations.length > 0) {
            const tableSection = document.createElement("div");
            tableSection.style.marginTop = "1.5rem";
            tableSection.innerHTML = `
                <h4 style="margin-bottom: 0.5rem; font-family:'Outfit';">2. Cosine Similarity Table</h4>
                <table class="similarity-table">
                    <thead>
                        <tr>
                            <th>Movie</th>
                            <th>Genres</th>
                            <th>Cosine Similarity</th>
                        </tr>
                    </thead>
                    <tbody id="sandbox-similarity-rows"></tbody>
                </table>
            `;
            container.appendChild(tableSection);

            const tbody = document.getElementById("sandbox-similarity-rows");
            // Show top 6 matches
            recommendations.slice(0, 6).forEach(rec => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td style="font-weight:600;">${rec.movie.title}</td>
                    <td style="font-size:0.75rem; color:var(--text-muted);">${rec.movie.genres.join(", ")}</td>
                    <td>
                        <div class="similarity-bar-container">
                            <div class="similarity-bar-fill" style="width: ${rec.score}%"></div>
                        </div>
                        <span class="sim-val">${rec.score}%</span>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        } else {
            const warning = document.createElement("div");
            warning.className = "math-explanation";
            warning.style.marginTop = "1rem";
            warning.textContent = "Rate a movie or enable a genre filter in the profile panel to calculate similarity vectors.";
            container.appendChild(warning);
        }

    } else {
        // Collaborative calculations
        const activeMovieIds = Object.keys(activeRatings);
        if (activeMovieIds.length === 0) {
            const warning = document.createElement("div");
            warning.className = "math-explanation";
            warning.style.marginTop = "1rem";
            warning.textContent = "Rate at least one movie to discover profile correlations with other users.";
            container.appendChild(warning);
            return;
        }

        // Active rating magnitudes
        const activeVector = movies.map(m => activeRatings[m.id] || 0);
        let activeMagSq = 0;
        activeVector.forEach(val => activeMagSq += val * val);
        const activeMag = Math.sqrt(activeMagSq);

        const similarities = [];
        Object.entries(mockUsers).forEach(([key, user]) => {
            if (key === state.activeProfile) return;

            const otherVector = movies.map(m => user.ratings[m.id] || 0);
            let dotProduct = 0;
            let otherMagSq = 0;

            for (let i = 0; i < movies.length; i++) {
                dotProduct += activeVector[i] * otherVector[i];
                otherMagSq += otherVector[i] * otherVector[i];
            }

            const otherMag = Math.sqrt(otherMagSq);
            const sim = otherMag > 0 ? dotProduct / (activeMag * otherMag) : 0;
            similarities.push({ name: user.name, sim });
        });

        // Similarity matrix section
        const simSection = document.createElement("div");
        simSection.innerHTML = `
            <h4 style="margin-bottom: 0.5rem; font-family:'Outfit';">1. User Cosine Similarity Metrics</h4>
            <table class="similarity-table">
                <thead>
                    <tr>
                        <th>Mock User Profile</th>
                        <th>Cosine Similarity (Sim)</th>
                    </tr>
                </thead>
                <tbody id="sandbox-user-sim-rows"></tbody>
            </table>
        `;
        container.appendChild(simSection);

        const simTbody = document.getElementById("sandbox-user-sim-rows");
        similarities.sort((a,b) => b.sim - a.sim).forEach(other => {
            const tr = document.createElement("tr");
            const scorePct = Math.round(other.sim * 100);
            tr.innerHTML = `
                <td style="font-weight:600;">${other.name}</td>
                <td>
                    <div class="similarity-bar-container">
                        <div class="similarity-bar-fill" style="width: ${scorePct}%"></div>
                    </div>
                    <span class="sim-val">${other.sim.toFixed(3)}</span>
                </td>
            `;
            simTbody.appendChild(tr);
        });

        // Dynamic Rating Predictions details
        const recs = calculateCollaborativeRecommendations();
        if (recs.length > 0) {
            const predSection = document.createElement("div");
            predSection.style.marginTop = "1.5rem";
            predSection.innerHTML = `
                <h4 style="margin-bottom: 0.5rem; font-family:'Outfit';">2. Predicted Ratings Matrix</h4>
                <table class="similarity-table">
                    <thead>
                        <tr>
                            <th>Movie</th>
                            <th>Weighted Average Math (Σ Sim*Rating / Σ Sim)</th>
                            <th>Predicted Rating</th>
                        </tr>
                    </thead>
                    <tbody id="sandbox-predicted-rows"></tbody>
                </table>
            `;
            container.appendChild(predSection);

            const predTbody = document.getElementById("sandbox-predicted-rows");
            recs.slice(0, 5).forEach(rec => {
                let terms = [];
                let weightSum = 0;
                let simSum = 0;

                Object.entries(mockUsers).forEach(([key, user]) => {
                    if (key === state.activeProfile) return;

                    const r = user.ratings[rec.movie.id];
                    const sim = similarities.find(s => s.name === user.name).sim;

                    if (r !== undefined && sim > 0) {
                        terms.push(`(${sim.toFixed(2)} * ${r})`);
                        weightSum += sim * r;
                        simSum += sim;
                    }
                });

                const formulaText = terms.length > 0 ? 
                    `${terms.join(" + ")} / ${simSum.toFixed(2)}` : "No ratings overlay";

                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td style="font-weight:600;">${rec.movie.title}</td>
                    <td style="font-family:monospace; font-size:0.75rem; max-width:200px; overflow-x:auto;">${formulaText}</td>
                    <td class="sim-val">★ ${rec.score.toFixed(1)}</td>
                `;
                predTbody.appendChild(tr);
            });
        }
    }
}

// Master refresh method for rendering layout
function renderAll() {
    renderDashboardRecommendations();
    renderDashboardRatingsList();
    renderMovieCatalog();
    
    // Check if sandbox is currently visible and update
    const isSandboxVisible = document.getElementById("tab-sandbox").classList.contains("active");
    if (isSandboxVisible) {
        renderSandboxCalculations();
    }
}
