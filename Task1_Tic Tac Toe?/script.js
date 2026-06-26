// Audio Synthesis System
class AudioSynth {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    play(type) {
        if (!this.enabled) return;
        try {
            this.init();
            const now = this.ctx.currentTime;
            
            switch (type) {
                case 'click': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(400, now);
                    osc.frequency.exponentialRampToValueAtTime(100, now + 0.05);
                    gain.gain.setValueAtTime(0.05, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.05);
                    break;
                }
                case 'move-x': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(261.63, now); // C4
                    osc.frequency.exponentialRampToValueAtTime(523.25, now + 0.15); // C5
                    gain.gain.setValueAtTime(0.1, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.15);
                    break;
                }
                case 'move-o': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(523.25, now); // C5
                    osc.frequency.exponentialRampToValueAtTime(329.63, now + 0.15); // E4
                    gain.gain.setValueAtTime(0.1, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.15);
                    break;
                }
                case 'think': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(150, now);
                    gain.gain.setValueAtTime(0.03, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.08);
                    break;
                }
                case 'win': {
                    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
                    notes.forEach((freq, index) => {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        osc.type = 'triangle';
                        osc.frequency.setValueAtTime(freq, now + index * 0.1);
                        gain.gain.setValueAtTime(0.08, now + index * 0.1);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.1 + 0.25);
                        osc.connect(gain);
                        gain.connect(this.ctx.destination);
                        osc.start(now + index * 0.1);
                        osc.stop(now + index * 0.1 + 0.25);
                    });
                    break;
                }
                case 'lose': {
                    const notes = [392.00, 349.23, 311.13, 261.63]; // G4, F4, Eb4, C4
                    notes.forEach((freq, index) => {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        osc.type = 'sawtooth';
                        osc.frequency.setValueAtTime(freq, now + index * 0.12);
                        gain.gain.setValueAtTime(0.06, now + index * 0.12);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.12 + 0.3);
                        osc.connect(gain);
                        gain.connect(this.ctx.destination);
                        osc.start(now + index * 0.12);
                        osc.stop(now + index * 0.12 + 0.3);
                    });
                    break;
                }
                case 'draw': {
                    const notes = [330, 330];
                    notes.forEach((freq, index) => {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(freq, now + index * 0.15);
                        gain.gain.setValueAtTime(0.08, now + index * 0.15);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.15 + 0.12);
                        osc.connect(gain);
                        gain.connect(this.ctx.destination);
                        osc.start(now + index * 0.15);
                        osc.stop(now + index * 0.15 + 0.12);
                    });
                    break;
                }
            }
        } catch (e) {
            console.warn('Web Audio synthesis failed or blocked:', e);
        }
    }
}

// Game State Constants & Variables
const winLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

let board = Array(9).fill('');
let gameMode = 'ai-vs-human';
let difficulty = 'unbeatable';
let currentPlayer = 'X';
let scores = { X: 0, O: 0, Ties: 0 };
let isGameActive = true;
let aiIsThinking = false;
let nodeCount = 0;
let pruneCount = 0;

// DOM Elements
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status-text');
const restartBtn = document.getElementById('restart-btn');
const modeSelect = document.getElementById('game-mode');
const difficultySelect = document.getElementById('difficulty');
const difficultyGroup = document.getElementById('difficulty-group');
const aiDashboard = document.getElementById('ai-dashboard');
const toggleWeights = document.getElementById('toggle-weights');
const aiLog = document.getElementById('ai-log');
const appContainer = document.getElementById('app-container');
const themeToggle = document.getElementById('theme-toggle');
const soundToggle = document.getElementById('sound-toggle');

const valX = document.getElementById('val-x');
const valO = document.getElementById('val-o');
const valTies = document.getElementById('val-ties');

const scoreBoxX = document.getElementById('score-x');
const scoreBoxO = document.getElementById('score-o');

const themeIconLight = document.getElementById('theme-icon-light');
const themeIconDark = document.getElementById('theme-icon-dark');
const soundIconOn = document.getElementById('sound-icon-on');
const soundIconOff = document.getElementById('sound-icon-off');

// Synthesizer instance
const audio = new AudioSynth();

// Initialize Game Configurations from localStorage
function loadSettings() {
    // Scoreboard
    const savedScores = localStorage.getItem('ttt_scores');
    if (savedScores) {
        scores = JSON.parse(savedScores);
        updateScoreboardUI();
    }

    // Sound
    const savedSound = localStorage.getItem('ttt_sound_enabled');
    if (savedSound !== null) {
        audio.enabled = savedSound === 'true';
        updateSoundUI();
    }

    // Theme
    const savedTheme = localStorage.getItem('ttt_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIconLight.style.display = 'block';
        themeIconDark.style.display = 'none';
    }

    // Weights toggling
    const savedWeights = localStorage.getItem('ttt_show_weights');
    if (savedWeights !== null) {
        toggleWeights.checked = savedWeights === 'true';
        if (toggleWeights.checked) {
            document.getElementById('board').classList.add('show-ai-weights');
        } else {
            document.getElementById('board').classList.remove('show-ai-weights');
        }
    } else {
        document.getElementById('board').classList.add('show-ai-weights');
    }
}

// Log messages inside the dashboard log
function logMessage(text) {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    aiLog.innerHTML += `\n[${timestamp}] ${text}`;
    aiLog.scrollTop = aiLog.scrollHeight;
}

// Update Scoreboard Text
function updateScoreboardUI() {
    valX.textContent = scores.X;
    valO.textContent = scores.O;
    valTies.textContent = scores.Ties;
}

// Update Audio Controls UI
function updateSoundUI() {
    if (audio.enabled) {
        soundIconOn.style.display = 'block';
        soundIconOff.style.display = 'none';
    } else {
        soundIconOn.style.display = 'none';
        soundIconOff.style.display = 'block';
    }
}

// Particle effects
function triggerParticles(element, color) {
    const rect = element.getBoundingClientRect();
    const appRect = appContainer.getBoundingClientRect();
    
    // Coordinates relative to the app container
    const x = rect.left - appRect.left + rect.width / 2;
    const y = rect.top - appRect.top + rect.height / 2;
    
    const count = 20;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.background = color;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Random angle and distance
        const angle = Math.random() * Math.PI * 2;
        const speed = 30 + Math.random() * 60;
        const tx = Math.cos(angle) * speed;
        const ty = Math.sin(angle) * speed;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        appContainer.appendChild(particle);
        
        // Cleanup particle
        setTimeout(() => {
            particle.remove();
        }, 800);
    }
}

// SVG Builders
function getXSVG() {
    return `
        <svg class="mark-svg mark-x" viewBox="0 0 24 24">
            <line x1="4" y1="4" x2="20" y2="20"></line>
            <line x1="20" y1="4" x2="4" y2="20"></line>
        </svg>
    `;
}

function getOSVG() {
    return `
        <svg class="mark-svg mark-o" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8"></circle>
        </svg>
    `;
}

// Core evaluation function
function checkWinner(b) {
    for (let line of winLines) {
        const [a, c, d] = line;
        if (b[a] && b[a] === b[c] && b[a] === b[d]) {
            return { winner: b[a], line: line };
        }
    }
    if (!b.includes('')) {
        return { winner: 'Tie', line: null };
    }
    return null;
}

// Evaluates the board index strictly for Minimax
// Returns +10 if 'O' wins, -10 if 'X' wins, 0 otherwise
function evaluateBoard(b) {
    const check = checkWinner(b);
    if (check) {
        if (check.winner === 'O') return 10;
        if (check.winner === 'X') return -10;
    }
    return 0;
}

// Minimax algorithm with Alpha-Beta Pruning
function minimax(tempBoard, depth, isMaximizing, alpha, beta) {
    nodeCount++;
    const score = evaluateBoard(tempBoard);

    // Terminal states
    if (score === 10) return score - depth; // Prefer sooner wins
    if (score === -10) return score + depth; // Delay opponent wins
    if (!tempBoard.includes('')) return 0;

    if (isMaximizing) {
        let maxEval = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (tempBoard[i] === '') {
                tempBoard[i] = 'O';
                const evaluation = minimax(tempBoard, depth + 1, false, alpha, beta);
                tempBoard[i] = '';
                maxEval = Math.max(maxEval, evaluation);
                alpha = Math.max(alpha, evaluation);
                if (beta <= alpha) {
                    pruneCount++;
                    break;
                }
            }
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let i = 0; i < 9; i++) {
            if (tempBoard[i] === '') {
                tempBoard[i] = 'X';
                const evaluation = minimax(tempBoard, depth + 1, true, alpha, beta);
                tempBoard[i] = '';
                minEval = Math.min(minEval, evaluation);
                beta = Math.min(beta, evaluation);
                if (beta <= alpha) {
                    pruneCount++;
                    break;
                }
            }
        }
        return minEval;
    }
}

// Compute ratings/weights for all currently available moves
function getMoveWeights() {
    const weights = {};
    nodeCount = 0;
    pruneCount = 0;

    for (let i = 0; i < 9; i++) {
        if (board[i] === '') {
            // Predict weight from this point onwards. AI plays O, so we maximize O.
            board[i] = 'O';
            // Next turn is minimizing player (Human X)
            weights[i] = minimax(board, 0, false, -Infinity, Infinity);
            board[i] = '';
        }
    }
    return { weights, nodeCount, pruneCount };
}

// Update the overlay text and class tags based on computed weights
function updateWeightsUI(weights, bestIndex = null) {
    cells.forEach((cell, index) => {
        const weightOverlay = cell.querySelector('.ai-weight');
        if (board[index] !== '' || weights[index] === undefined) {
            weightOverlay.style.display = 'none';
            weightOverlay.classList.remove('best-move', 'weight-neutral', 'weight-good', 'weight-bad');
            return;
        }

        weightOverlay.style.display = 'block';
        const w = weights[index];
        weightOverlay.textContent = w > 0 ? `+${w}` : w;
        
        weightOverlay.classList.remove('best-move', 'weight-neutral', 'weight-good', 'weight-bad');
        
        if (bestIndex !== null && index === bestIndex) {
            weightOverlay.classList.add('best-move');
        } else if (w > 0) {
            weightOverlay.classList.add('weight-good');
        } else if (w < 0) {
            weightOverlay.classList.add('weight-bad');
        } else {
            weightOverlay.classList.add('weight-neutral');
        }
    });
}

// Clear all weights displays
function clearWeightsUI() {
    cells.forEach(cell => {
        const weightOverlay = cell.querySelector('.ai-weight');
        weightOverlay.textContent = '';
        weightOverlay.style.display = 'none';
        weightOverlay.classList.remove('best-move', 'weight-neutral', 'weight-good', 'weight-bad');
    });
}

// Selects the index for AI to play
function calculateAIMove() {
    const emptyCells = [];
    board.forEach((val, idx) => { if (val === '') emptyCells.push(idx); });

    if (emptyCells.length === 0) return null;

    logMessage("Analyzing board state tree...");

    // 1. Easy mode: pure random
    if (difficulty === 'novice') {
        const randomIdx = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        logMessage(`[Novice Mode] Playing random move at Cell ${randomIdx}.`);
        return randomIdx;
    }

    // Calculate minimax scores for display and logic
    const { weights, nodeCount, pruneCount } = getMoveWeights();
    
    // Find best moves (maximizing 'O')
    let maxVal = -Infinity;
    let bestMoves = [];
    
    for (let cell in weights) {
        if (weights[cell] > maxVal) {
            maxVal = weights[cell];
            bestMoves = [parseInt(cell)];
        } else if (weights[cell] === maxVal) {
            bestMoves.push(parseInt(cell));
        }
    }
    
    const absoluteBestMove = bestMoves[Math.floor(Math.random() * bestMoves.length)];
    
    // Render the scores onto grid so players can visualize them during the thinking delay
    updateWeightsUI(weights, absoluteBestMove);

    logMessage(`Minimax stats: ${nodeCount} nodes evaluated, ${pruneCount} branches pruned.`);
    
    // Write detailed calculations into the logs
    for (let cell in weights) {
        const sign = weights[cell] > 0 ? '+' : '';
        logMessage(`-> Cell ${cell} score: ${sign}${weights[cell]}`);
    }

    // 2. Challenging mode: 75% chance best move, 25% chance random move
    if (difficulty === 'challenging') {
        if (Math.random() > 0.75 && emptyCells.length > 1) {
            // Pick a non-best move if available, or just a random move
            const filteredMoves = emptyCells.filter(idx => idx !== absoluteBestMove);
            const fallbackMove = filteredMoves[Math.floor(Math.random() * filteredMoves.length)];
            logMessage(`[Challenging Mode] Mercy event! AI selected sub-optimal Cell ${fallbackMove} (Best was ${absoluteBestMove}).`);
            return fallbackMove;
        }
    }

    // 3. Unbeatable or fallback
    logMessage(`Optimal move chosen: Cell ${absoluteBestMove} (weight rating: ${maxVal > 0 ? '+' : ''}${maxVal})`);
    return absoluteBestMove;
}

// Executes the AI's step
function handleAIMove() {
    if (!isGameActive) return;
    
    aiIsThinking = true;
    statusText.innerHTML = `<span>AI Player thinking...</span>`;
    
    // Play subtle quick sound on tick start
    audio.play('think');

    // Add artificial planning delay to allow human to view logs and weights overlay
    setTimeout(() => {
        const moveIdx = calculateAIMove();
        
        if (moveIdx !== null) {
            makeMove(moveIdx, 'O');
            
            // Post-move state check
            const check = checkWinner(board);
            if (check) {
                endGame(check);
            } else {
                currentPlayer = 'X';
                statusText.innerHTML = `<span>Your turn (X)</span>`;
                toggleActiveScorecard('X');
                aiIsThinking = false;
            }
        } else {
            aiIsThinking = false;
        }
    }, 700);
}

// Places marker 'X' or 'O' in a board slot
function makeMove(index, player) {
    board[index] = player;
    const cell = cells[index];
    cell.classList.add('taken');
    
    // Insert SVG
    if (player === 'X') {
        cell.innerHTML += getXSVG();
        audio.play('move-x');
        triggerParticles(cell, getComputedStyle(document.documentElement).getPropertyValue('--accent-x').trim());
    } else {
        cell.innerHTML += getOSVG();
        audio.play('move-o');
        triggerParticles(cell, getComputedStyle(document.documentElement).getPropertyValue('--accent-o').trim());
    }
}

// Toggle scorebox highlights
function toggleActiveScorecard(player) {
    if (player === 'X') {
        scoreBoxX.classList.add('active-player-x');
        scoreBoxO.classList.remove('active-player-o');
    } else if (player === 'O') {
        scoreBoxO.classList.add('active-player-o');
        scoreBoxX.classList.remove('active-player-x');
    } else {
        scoreBoxX.classList.remove('active-player-x');
        scoreBoxO.classList.remove('active-player-o');
    }
}

// Handle Human clicking a cell
function handleCellClick(e) {
    const cell = e.currentTarget;
    const index = parseInt(cell.getAttribute('data-index'));

    if (board[index] !== '' || !isGameActive || aiIsThinking) return;

    // Place Human move
    makeMove(index, currentPlayer);
    
    // Check game condition
    const check = checkWinner(board);
    if (check) {
        endGame(check);
        return;
    }

    // Switch turns
    if (gameMode === 'ai-vs-human') {
        currentPlayer = 'O';
        toggleActiveScorecard('O');
        handleAIMove();
    } else {
        // Human vs Human local mode
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.innerHTML = `<span>Player ${currentPlayer}'s turn</span>`;
        toggleActiveScorecard(currentPlayer);
    }
}

// Standard completion sequence
function endGame(check) {
    isGameActive = false;
    toggleActiveScorecard(null);
    clearWeightsUI();

    if (check.winner === 'Tie') {
        statusText.innerHTML = `<span>It's a tie!</span>`;
        scores.Ties++;
        audio.play('draw');
        logMessage("Game ended in a tie.");
    } else {
        statusText.innerHTML = `<span>Player ${check.winner} wins!</span>`;
        scores[check.winner]++;
        
        // Play victory/defeat sounds
        if (gameMode === 'ai-vs-human') {
            if (check.winner === 'X') {
                audio.play('win');
                logMessage("Human player won! (Error in AI calculation matrix)");
            } else {
                audio.play('lose');
                logMessage("AI Agent won!");
            }
        } else {
            audio.play('win');
            logMessage(`Player ${check.winner} won!`);
        }

        // Highlight win line
        check.line.forEach(idx => {
            cells[idx].classList.add('winning-cell');
            const color = check.winner === 'X' ? 
                getComputedStyle(document.documentElement).getPropertyValue('--accent-x').trim() : 
                getComputedStyle(document.documentElement).getPropertyValue('--accent-o').trim();
            triggerParticles(cells[idx], color);
        });
    }

    localStorage.setItem('ttt_scores', JSON.stringify(scores));
    updateScoreboardUI();
}

// Resets board without clearing scores
function restartGame() {
    audio.play('click');
    board = Array(9).fill('');
    isGameActive = true;
    aiIsThinking = false;
    currentPlayer = 'X';
    
    cells.forEach(cell => {
        cell.classList.remove('taken', 'winning-cell');
        // Retain the weights overlay placeholder
        const index = cell.getAttribute('data-index');
        cell.innerHTML = `<div class="ai-weight" data-cell="${index}">0</div>`;
    });
    
    clearWeightsUI();
    toggleActiveScorecard('X');
    statusText.innerHTML = `<span>Your turn (X)</span>`;
    
    logMessage("Game board reset. Ready for moves.");
}

// Complete variables configuration reset
function resetAll() {
    scores = { X: 0, O: 0, Ties: 0 };
    localStorage.setItem('ttt_scores', JSON.stringify(scores));
    updateScoreboardUI();
    restartGame();
    logMessage("System memory reset. Scoreboard cleared.");
}

// Config page settings handlers
function handleModeChange() {
    gameMode = modeSelect.value;
    audio.play('click');

    if (gameMode === 'human-vs-human') {
        difficultyGroup.style.display = 'none';
        aiDashboard.style.display = 'none';
        logMessage("Switched to Local Human vs. Human mode.");
    } else {
        difficultyGroup.style.display = 'flex';
        aiDashboard.style.display = 'flex';
        logMessage(`Switched to AI Agent mode. Difficulty: ${difficulty}.`);
    }
    
    restartGame();
}

function handleDifficultyChange() {
    difficulty = difficultySelect.value;
    audio.play('click');
    logMessage(`AI Difficulty adjusted to: ${difficulty.toUpperCase()}`);
    restartGame();
}

// Settings toggles
function toggleSound() {
    audio.enabled = !audio.enabled;
    localStorage.setItem('ttt_sound_enabled', audio.enabled);
    updateSoundUI();
    audio.play('click');
    logMessage(`Sound output: ${audio.enabled ? 'ON' : 'OFF'}`);
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('ttt_theme', isLight ? 'light' : 'dark');
    audio.play('click');
    
    if (isLight) {
        themeIconLight.style.display = 'block';
        themeIconDark.style.display = 'none';
        logMessage("Theme preference: LIGHT MODE");
    } else {
        themeIconLight.style.display = 'none';
        themeIconDark.style.display = 'block';
        logMessage("Theme preference: DARK MODE");
    }
}

// Setup Event Listeners
function setupEventListeners() {
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    restartBtn.addEventListener('click', restartGame);
    modeSelect.addEventListener('change', handleModeChange);
    difficultySelect.addEventListener('change', handleDifficultyChange);
    soundToggle.addEventListener('click', toggleSound);
    themeToggle.addEventListener('click', toggleTheme);

    toggleWeights.addEventListener('change', (e) => {
        audio.play('click');
        const show = e.target.checked;
        localStorage.setItem('ttt_show_weights', show);
        if (show) {
            document.getElementById('board').classList.add('show-ai-weights');
            logMessage("AI weight rendering on grid: ENABLED");
        } else {
            document.getElementById('board').classList.remove('show-ai-weights');
            logMessage("AI weight rendering on grid: DISABLED");
        }
    });

    // Score boxes double-click to clear scores
    scoreBoxX.addEventListener('dblclick', resetAll);
    scoreBoxO.addEventListener('dblclick', resetAll);
    document.getElementById('score-ties').addEventListener('dblclick', resetAll);
}

// Entry Point
window.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    setupEventListeners();
    logMessage("System initialized. Alpha-Beta minimax engine active. Ready.");
});
