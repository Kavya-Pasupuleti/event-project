import { problems as initialProblems } from './src/problems.js';
import confetti from 'canvas-confetti';

const API_URL = "https://relay-race-backend-1.onrender.com";

// --- STATE MANAGEMENT ---
let currentUser = null;
let currentScore = 0;
let unlockedLevels = 1;
let currentLevel = 0;
let activeProblemSet = null;
let isAdmin = false;
let gameStartTime = null;
let gameEndTime = null;

// --- DOM ELEMENTS ---
// Screens
const landingScreen = document.getElementById('landing-screen');
const authScreen = document.getElementById('auth-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
const adminScreen = document.getElementById('admin-screen');
const gameArea = document.getElementById('game-area');
const adminShortcutBtn = document.getElementById('admin-shortcut-btn');

// Auth Form
const authTitle = document.getElementById('auth-title');
const authForm = document.getElementById('auth-form'); // Added form reference
const authActionBtn = document.getElementById('auth-action-btn');
const toggleAuthMode = document.getElementById('toggle-auth-mode');
const authToggleText = document.getElementById('auth-toggle-text');
const registerFields = document.getElementById('register-fields');
const confirmPassField = document.getElementById('confirm-pass-field');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const nameInput = document.getElementById('name');
const collegeInput = document.getElementById('college');
const phoneInput = document.getElementById('phone');

// Dashboard UI
const userInfo = document.getElementById('user-info');
const userEmailDisplay = document.getElementById('user-email-display');
const scoreDisplay = document.getElementById('current-score');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressPercent = document.getElementById('progress-percent');
const notificationContainer = document.getElementById('notification-container');

// Game UI
const checkBtn = document.getElementById('check-answer-btn');
const backToDashBtn = document.getElementById('back-to-dash-btn');
const htmlInput = document.getElementById('html-input');
const htmlPreview = document.getElementById('html-preview');

// --- INITIALIZATION ---
function init() {
    setupEventListeners();
    updateDashboardUI();

    const stored = localStorage.getItem('currentUser');
    if (!stored) {
        hideAllScreens();
        landingScreen.classList.remove('hidden');
        userInfo.classList.add('hidden');
        return;
    }

    currentUser = JSON.parse(stored);
    userEmailDisplay.textContent = currentUser.email;
    hideAllScreens();
    dashboardScreen.classList.remove('hidden');
    userInfo.classList.remove('hidden');
    updateDashboardUI();

    // Landing page confetti celebration
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });
}


// --- NOTIFICATIONS ---
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
    <span>${message}</span>
  `;
    notificationContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// --- UI UPDATES ---
function hideAllScreens() {
    [landingScreen, authScreen, dashboardScreen, adminScreen].forEach(s => s.classList.add('hidden'));
}

function updateDashboardUI() {
    scoreDisplay.textContent = currentScore;
    const progress = ((unlockedLevels - 1) / 4) * 100;
    progressBarFill.style.width = `${progress}%`;
    progressPercent.textContent = `${Math.floor(progress)}%`;

    document.querySelectorAll('.level-card').forEach((card, idx) => {
        const level = idx + 1;
        if (level <= unlockedLevels) {
            card.classList.remove('locked');
            card.querySelector('.level-status').textContent = 'Open!';
        } else {
            card.classList.add('locked');
            card.querySelector('.level-status').textContent = 'Locked';
        }
    });
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    // Landing Navigation
    document.getElementById('join-game-btn').addEventListener('click', () => {
        hideAllScreens();
        authScreen.classList.remove('hidden');
        setAuthMode(false); // Default to login
    });

    document.getElementById('admin-login-btn').addEventListener('click', () => {
        hideAllScreens();
        authScreen.classList.remove('hidden');
        setAuthMode(false, true); // Admin Login Mode
    });

    document.getElementById('logo').addEventListener('click', () => {
        hideAllScreens();
        landingScreen.classList.remove('hidden');
    });

    document.getElementById('admin-ptr-link').addEventListener('click', (e) => {
        e.preventDefault();
        setAuthMode(false, true);
    });

    // Auth Toggle
    let isRegistering = false;
    let isAdminTarget = false;

    function setAuthMode(reg, admin = false) {
        isRegistering = reg;
        isAdminTarget = admin;

        authTitle.textContent = admin ? 'Admin Portal' : (reg ? 'Join the Sprint' : 'Welcome Back Racer');
        authActionBtn.textContent = reg ? 'Create Account' : 'Login';
        authToggleText.textContent = reg ? 'Already have an account?' : 'No account?';
        toggleAuthMode.textContent = reg ? 'Login here' : 'Register here';

        if (reg) {
            registerFields.classList.remove('hidden');
            confirmPassField.classList.remove('hidden');
        } else {
            registerFields.classList.add('hidden');
            confirmPassField.classList.add('hidden');
        }

        if (admin) {
            registerFields.classList.add('hidden');
            confirmPassField.classList.add('hidden');
            toggleAuthMode.classList.add('hidden');
            authToggleText.classList.add('hidden');
        } else {
            toggleAuthMode.classList.remove('hidden');
            authToggleText.classList.remove('hidden');
        }
    }

    toggleAuthMode.addEventListener('click', (e) => {
        e.preventDefault();
        setAuthMode(!isRegistering);
    });

    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const pass = passwordInput.value.trim();
        const name = nameInput ? nameInput.value.trim() : "";
        const college = collegeInput ? collegeInput.value.trim() : "";
        const phone = phoneInput ? phoneInput.value.trim() : "";

        // 1. Mandatory Input Validation
        if (!email || !pass) {
            alert("Please enter email and password");
            return;
        }

        if (isRegistering) {
            if (!name || !college || !phone) {
                alert("Please fill all fields");
                return;
            }
            if (pass !== confirmPasswordInput.value) {
                alert("Passwords don't match");
                return;
            }

            try {
                const response = await fetch(`${API_URL}/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, phone, college, password: pass })
                });

                const data = await response.json();

                if (response.ok) {
                    showPopup("🎉 Registered Successfully! You can now login.", "success");
                    setAuthMode(false);
                } else {
                    alert(data.message || "Registration failed");
                }
            } catch (error) {
                console.error('Registration Error:', error);
                alert("Server connection failed");
            }
        } else {
            // Login flow
            if (isAdminTarget && email === 'admin@debug.com' && pass === 'admin123') {
                isAdmin = true;
                hideAllScreens();
                adminScreen.classList.remove('hidden');
                adminShortcutBtn.classList.remove('hidden');
                showPopup("Access Granted: Admin Control Center Active", "success");
                initAdminPanel();
            } else if (!isAdminTarget) {
                try {
                    const response = await fetch(`${API_URL}/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password: pass })
                    });

                    const data = await response.json();

                    if (response.ok) {
                        currentUser = data.user;
                        // Store Login State in localStorage
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        userEmailDisplay.textContent = currentUser.email;

                        // Redirect Logic: ONLY on success
                        hideAllScreens();
                        dashboardScreen.classList.remove('hidden');
                        userInfo.classList.remove('hidden');
                        showPopup(`Welcome ${currentUser.name}! Start the race.`, "success");
                        updateDashboardUI();
                    } else {
                        alert(data.message || "Login failed");
                    }
                } catch (error) {
                    console.error('Login Error:', error);
                    alert("Server connection failed");
                }
            } else {
                alert("Invalid Credentials provided");
            }
        }
    });

    // helper: ensure user is logged in before accessing protected functionality
    function requireLogin() {
        if (!currentUser) {
            alert('Please log in to continue');
            hideAllScreens();
            authScreen.classList.remove('hidden');
            return false;
        }
        return true;
    }

    // Level Selection
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            const level = parseInt(card.dataset.level);
            if (requireLogin() && level <= unlockedLevels) startLevel(level);
        });
    });

    // Back Button
    backToDashBtn.addEventListener('click', () => {
        gameArea.style.display = 'none';
        document.querySelector('.levels-grid').style.display = 'grid';
    });

    checkBtn.addEventListener('click', checkAnswer);

    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => logout());
    document.getElementById('admin-logout').addEventListener('click', () => logout());

    // Admin Shortcut
    adminShortcutBtn.addEventListener('click', () => {
        hideAllScreens();
        adminScreen.classList.remove('hidden');
        initAdminPanel();
    });

    // HTML Realtime Preview
    htmlInput.addEventListener('input', () => {
        const doc = htmlPreview.contentDocument || htmlPreview.contentWindow.document;
        doc.open();
        doc.write(`
      <style>body { font-family: sans-serif; }</style>
      ${htmlInput.value}
    `);
        doc.close();
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    isAdmin = false;
    activeProblemSet = null; // Reset for next contestant
    unlockedLevels = 1;
    currentScore = 0;
    gameStartTime = null;
    gameEndTime = null;
    userInfo.classList.add('hidden');
    adminShortcutBtn.classList.add('hidden');
    hideAllScreens();
    landingScreen.classList.remove('hidden');
    alert("Logged out successfully");
}

// --- GAME CORE ---
function startLevel(level) {
    // Guard: ensure level is within supported range (1-4)
    if (level < 1 || level > 4) {
        showPopup(`Invalid level ${level}.`, 'error');
        return;
    }
    try {
        currentLevel = level;

        // Start timer automatically when Stage 1 begins
        if (level === 1 && !gameStartTime) {
            gameStartTime = Date.now();
            console.log("⏱️ Timer started at:", new Date(gameStartTime).toLocaleTimeString());
        }

        // Ensure same problem is used across all stages of the relay
        if (!activeProblemSet) {
            activeProblemSet = initialProblems[Math.floor(Math.random() * initialProblems.length)];
        }
        document.querySelector('.levels-grid').style.display = 'none';
        gameArea.style.display = 'block';
        const title = document.getElementById('problem-title');
        const badge = document.getElementById('level-badge');
        const htmlInt = document.getElementById('html-interface');
        const stdInt = document.getElementById('standard-interface');
        const htmlProbBox = document.getElementById('html-problem-content');
        const stdProbBox = document.getElementById('standard-problem-content');
        const ansInp = document.getElementById('answer-input');
        title.textContent = activeProblemSet.title;
        badge.textContent = `LEVEL ${level} - ${getLevelType(level)}`;
        ansInp.value = '';
        if (level === 1) {
            htmlInt.classList.remove('hidden');
            stdInt.classList.add('hidden');
            htmlProbBox.textContent = activeProblemSet.html_question;
            // Reset HTML editor and preview
            htmlInput.value = "";
            htmlInput.dispatchEvent(new Event('input'));
        } else {
            htmlInt.classList.add('hidden');
            stdInt.classList.remove('hidden');
            let q = "";
            if (level === 2) q = activeProblemSet.python_question;
            if (level === 3) q = activeProblemSet.sql_question;
            if (level === 4) q = activeProblemSet.logic_question;
            stdProbBox.textContent = q;
        }
    } catch (e) {
        console.error('Error in startLevel:', e);
        showPopup('An unexpected error occurred while starting the level.', 'error');
    }
}

function getLevelType(l) { return ["HTML", "Python", "SQL", "Logic"][l - 1]; }

function isAnswerCorrect(userInput, correctSolution) {
    const normalize = str =>
        str
            .replace(/<!--.*?-->/gs, '')   // remove HTML comments
            .toLowerCase()
            .replace(/\s/g, '');          // remove all whitespace

    // Handle Array solutions (like Level 4 logic_solution: ["A", "B"])
    if (Array.isArray(correctSolution)) {
        // Assume user input is comma separated if it's multiple answers
        const formattedCorrect = correctSolution.join(',');
        return normalize(userInput) === normalize(formattedCorrect);
    }

    return normalize(userInput) === normalize(correctSolution);
}

function showPopup(message, type = 'success') {
    // Ensure popup container exists
    let popup = document.getElementById('custom-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'custom-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <i class="popup-icon fas"></i>
                <p class="popup-message"></p>
                <button class="popup-close">Continue</button>
            </div>`;
        document.body.appendChild(popup);
        // Close handler
        popup.querySelector('.popup-close').addEventListener('click', () => {
            popup.classList.remove('visible');
        });
    }

    const content = popup.querySelector('.popup-content');
    const icon = popup.querySelector('.popup-icon');
    const msg = popup.querySelector('.popup-message');

    // Set type-specific styling
    content.className = `popup-content ${type}`;
    icon.className = `popup-icon fas ${type === 'success' ? 'fa-check-circle' : 'fa-times-circle'}`;
    msg.textContent = message;

    popup.classList.add('visible');
}

function unlockNextLevel() {
    if (currentLevel === unlockedLevels) {
        unlockedLevels = Math.min(unlockedLevels + 1, 5);
        currentScore++;
        updateDashboardUI();
    }
}

function checkAnswer() {
    let userAns = "";
    let correctAns = "";

    if (currentLevel === 1) {
        userAns = htmlInput.value;
        correctAns = activeProblemSet.html_solution;
    } else {
        userAns = document.getElementById('answer-input').value;
        if (currentLevel === 2) correctAns = activeProblemSet.python_solution;
        if (currentLevel === 3) correctAns = activeProblemSet.sql_solution;
        if (currentLevel === 4) correctAns = activeProblemSet.logic_solution;
    }

    if (isAnswerCorrect(userAns, correctAns)) {
        if (currentLevel < 4) {
            showPopup("Congratulations! You have qualified to the next level.", "success");
        } else {
            showPopup("🎉 Congratulations on becoming a Relay Racer!", "success");
        }
        unlockNextLevel();

        // Level 4 Special Logic: Timer Stop & Backend Save
        if (currentLevel === 4 && currentUser) {
            gameEndTime = Date.now();
            const totalTimeInSeconds = (gameEndTime - gameStartTime) / 1000;
            console.log(`⏱️ Race Finished! Total Time: ${totalTimeInSeconds.toFixed(2)}s`);

            // Save to Backend
            fetch(`${API_URL}/complete/${currentUser.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ totalTime: totalTimeInSeconds })
            })
                .then(res => res.json())
                .then(data => {
                    showToast("🎉 Your total time has been recorded!", "success");
                })
                .catch(err => {
                    console.error("Failed to save race time:", err);
                    showToast("⚠️ Time was not saved. Please check server.", "error");
                });
        }

        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#6366f1', '#10b981', '#fbbf24']
        });

        // Return to dashboard after success
        setTimeout(() => {
            document.getElementById('custom-popup').classList.remove('visible');
            gameArea.style.display = 'none';
            document.querySelector('.levels-grid').style.display = 'grid';
            updateDashboardUI();
        }, 2500);
    } else {
        showPopup("Better luck next time. Check your code for bugs!", "error");
    }
}

// --- ADMIN PANEL ---
function initAdminPanel() {
    const problemsList = document.getElementById('problems-list');
    const usersList = document.getElementById('users-list');
    const registeredUsersList = document.getElementById('registered-users-list');

    // Fetch All Registered Users
    const fetchRegisteredUsers = async () => {
        try {
            const response = await fetch(`${API_URL}/admin/users`, {
                headers: { 'x-admin-token': 'admin123' }
            });
            if (!response.ok) throw new Error('Failed to list users');
            const users = await response.json();

            registeredUsersList.innerHTML = users.length > 0 ? users.map(u => `
                <tr>
                  <td>${u.name}</td>
                  <td>${u.email}</td>
                  <td>${new Date(u.registeredAt).toLocaleString()}</td>
                  <td>
                    <button class="delete-registered-user-btn" data-id="${u._id}" style="width: auto; padding: 5px 10px; font-size: 0.8rem; background: #ef4444; color: white; border-radius: 5px; border: none; cursor: pointer;">Delete</button>
                  </td>
                </tr>
            `).join('') : '<tr><td colspan="4" style="text-align: center; opacity: 0.5; padding: 2rem;">No registered users yet.</td></tr>';

            // Add delete listeners
            document.querySelectorAll('.delete-registered-user-btn').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const id = btn.dataset.id;
                    if (confirm('Are you sure you want to delete this user?')) {
                        try {
                            const res = await fetch(`${API_URL}/admin/users/${id}`, {
                                method: 'DELETE',
                                headers: { 'x-admin-token': 'admin123' }
                            });
                            if (res.ok) {
                                showToast("User deleted successfully!", "success");
                                fetchRegisteredUsers();
                                // Optional: fetchLeaderboard() if needed
                                const leaderboardBtn = document.getElementById('refresh-leaderboard-btn');
                                if (leaderboardBtn) fetchLeaderboard();
                            } else {
                                showToast("Failed to delete user.", "error");
                            }
                        } catch (err) {
                            console.error("Delete user error:", err);
                            showToast("Failed to delete user.", "error");
                        }
                    }
                });
            });

        } catch (error) {
            console.error('Error fetching registered users:', error);
            registeredUsersList.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #ef4444;">Failed to load registered users.</td></tr>';
        }
    };

    fetchRegisteredUsers();

    const refreshRegUsersBtn = document.getElementById('refresh-registered-btn');
    if (refreshRegUsersBtn) {
        refreshRegUsersBtn.addEventListener('click', () => {
            showToast("Refreshing registered users...", "success");
            fetchRegisteredUsers();
        });
    }

    // Fetch Live Leaderboard
    const fetchLeaderboard = async () => {
        try {
            const response = await fetch(`${API_URL}/admin/participants`, {
                headers: { 'x-admin-token': 'admin123' }
            });
            const participants = await response.json();

            usersList.innerHTML = participants.length > 0 ? participants.map(u => `
                                < tr class= "${u.winner ? 'winner-row' : ''}" >
                  <td>${u.name}</td>
                  <td>${u.college}</td>
                  <td>${u.email}</td>
                  <td style="font-weight: 800; color: #fbbf24;">${u.totalTime > 0 ? u.totalTime.toFixed(2) + 's' : 'In Progress'}</td>
                  <td>${u.winner ? '<span style="font-size: 1.5rem;">👑</span>' : '-'}</td>
                  <td>
                    ${!u.winner ? `<button class="win-btn" data-id="${u._id}" style="width: auto; padding: 5px 10px; font-size: 0.7rem; background: #10b981;">🏆 Winner</button>` : '<span style="color: #10b981; font-weight: bold;">Confirmed</span>'}
                  </td>
                </tr >
        `).join('') : '<tr><td colspan="6" style="text-align: center; opacity: 0.5; padding: 2rem;">No participants have joined the race yet.</td></tr>';

            // Add Winner Event Listeners
            document.querySelectorAll('.win-btn').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const id = btn.dataset.id;
                    try {
                        const res = await fetch(`${API_URL}/admin/mark-winner/${id}`, {
                            method: 'PUT',
                            headers: { 'x-admin-token': 'admin123' }
                        });
                        if (res.ok) {
                            showToast("🏆 Participant marked as winner successfully!", "success");
                            fetchLeaderboard(); // Refresh
                        }
                    } catch (err) {
                        console.error("Mark winner error:", err);
                        showToast("Failed to mark winner.", "error");
                    }
                });
            });

        } catch (error) {
            console.error('Error fetching participants:', error);
            usersList.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #ef4444;">Failed to load leaderboard.</td></tr>';
        }
    };

    fetchLeaderboard();

    // Manual Refresh Button
    const refreshBtn = document.getElementById('refresh-leaderboard-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            showToast("Refreshing leaderboard...", "success");
            fetchLeaderboard();
        });
    }

    problemsList.innerHTML = initialProblems.map(p => `
    <tr id="prob-row-${p.id}">
      <td>#${p.id}</td>
      <td>${p.title}</td>
      <td>Multi-Stage</td>
      <td>
        <button style="width: auto; padding: 5px 10px; font-size: 0.8rem; background: var(--primary); color: white; border-radius: 5px;">Edit</button>
        <button class="delete-prob-btn" data-id="${p.id}" style="width: auto; padding: 10px 10px; font-size: 1rem; background: var(--admin); color: white; border-radius: 5px;">🗑️</button>
      </td>
    </tr>
  `).join('');

    document.querySelectorAll('.delete-prob-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const row = document.getElementById(`prob-row-${id}`);
            if (row) {
                row.remove();
                showPopup(`Problem #${id} removed from the relay race!`, "success");
            }
        });
    });

    // Add Problem Button
    const addProbBtn = document.getElementById('add-problem-btn');
    if (addProbBtn) {
        addProbBtn.addEventListener('click', () => {
            showPopup("The Problem Editor is a pro feature. For the IT Fest, please edit src/problems.js directly to add new challenges!", "error");
        });
    }

    // The leaderboard is handled by fetchLeaderboard() above.

    // Tab Switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.remove('hidden');
        });
    });

    // Theme Save
    document.getElementById('save-theme-btn').addEventListener('click', () => {
        const primary = document.getElementById('theme-primary').value;
        const bg = document.getElementById('theme-bg').value;
        const font = document.getElementById('theme-font').value;

        document.documentElement.style.setProperty('--primary', primary);
        document.documentElement.style.setProperty('--bg', bg);
        document.body.style.fontFamily = font;

        showPopup("Theme settings applied successfully!", "success");
        localStorage.setItem('relay_theme', JSON.stringify({ primary, bg, font }));
    });
}

init();
