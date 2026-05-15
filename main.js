// 0. Mobile Navbar Auto-Collapse
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Trigger Bootstrap's collapse function if menu is currently shown
            if (menuToggle.classList.contains('show')) {
                bootstrap.Collapse.getInstance(menuToggle).toggle();
            }
        });
    });
});

// carousel logic
// 🕹️ Controller Center (Main JS)
// Purpose: Captures user interactions, fetches data from data.js, and renders UI.
// =====================================================================

// ---------------------------------------------------------
// 1. Hero Carousel Logic
// ---------------------------------------------------------
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const slideCount = dots.length;

function goToSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    currentIndex = index;
    
    if(track) track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    if(dots[currentIndex]) dots[currentIndex].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

let autoPlayInterval;
function startAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), 4000);
}
startAutoPlay();

const wrapper = document.querySelector('.carousel-wrapper');
if (wrapper) {
    wrapper.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    wrapper.addEventListener('mouseleave', startAutoPlay);
}

// 2. Feedback Form Validation
const feedbackForm = document.getElementById('courseFeedbackForm');
if(feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isFormValid = true;
        
        const nameInput = document.getElementById('fb-name');
        const emailInput = document.getElementById('fb-email');
        const expInput = document.getElementById('fb-experience');
        const rating = document.querySelector('input[name="stars"]:checked');
        
        const nameErr = document.getElementById('nameError');
        const emailErr = document.getElementById('emailError');
        const expErr = document.getElementById('expError');
        const starErr = document.getElementById('starError');

        if (!nameInput.value.trim()) { 
            nameErr.innerText = "🚨 Name is required!"; 
            isFormValid = false; 
        } else { nameErr.innerText = ""; }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) { 
            emailErr.innerText = "🚨 Email is required!"; 
            isFormValid = false; 
        } else if (!emailRegex.test(emailInput.value.trim())) { 
            emailErr.innerText = "🚨 Invalid email format!"; 
            isFormValid = false; 
        } else { emailErr.innerText = ""; }

        if (!expInput.value.trim()) { 
            expErr.innerText = "🚨 Feedback cannot be empty!"; 
            isFormValid = false; 
        } else { expErr.innerText = ""; }
        
        if (!rating) { 
            starErr.innerText = "🚨 Please leave a rating!"; 
            isFormValid = false; 
        } else { starErr.innerText = ""; }

        if (isFormValid) {
            alert(`Submission successful!\nThank you for your feedback, ${nameInput.value}!\nA confirmation will be sent to ${emailInput.value}.`);
            this.reset();
        }
    });

    // Clear errors on input
    document.querySelectorAll('#courseFeedbackForm input, #courseFeedbackForm textarea').forEach(input => {
        input.addEventListener('input', function() {
            const errSpan = this.parentElement.querySelector('.error-msg');
            if (errSpan) errSpan.innerText = "";
        });
    });
    document.querySelectorAll('input[name="stars"]').forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('starError').innerText = "";
        });
    });
}

// 3. SPA Router (Study System)
function openStudyPage(moduleId) {
    const data = courseData[moduleId];
    if (!data) return;

    document.getElementById('studyBreadcrumb').innerHTML = data.breadcrumb;
    document.getElementById('studyContentArea').innerHTML = data.content;
    
    const displayStyle = data.hideSidebar ? 'none' : 'block';
    document.getElementById('studyTitle').style.display = displayStyle;
    document.getElementById('studySubtitle').style.display = displayStyle;
    document.getElementById('studyGoal').style.display = displayStyle;
    document.getElementById('studyDivider').style.display = displayStyle;
    document.getElementById('studySidebarWrapper').style.display = data.hideSidebar ? 'none' : 'block';

    if (!data.hideSidebar) {
        document.getElementById('studyTitle').innerHTML = data.title;
        document.getElementById('studySubtitle').innerHTML = data.subtitle;
        document.getElementById('studyGoal').innerHTML = data.goal;
        document.getElementById('studySidebarLinks').innerHTML = data.sidebarLinks;
        document.querySelector('.study-container').style.backgroundColor = '#f4f1ea';
        document.querySelector('.study-container').style.padding = '40px';
    } else {
        document.querySelector('.study-container').style.backgroundColor = 'transparent';
        document.querySelector('.study-container').style.padding = '0';
        document.querySelector('.study-container').style.boxShadow = 'none';
    }

    const overlay = document.getElementById('studyOverlay');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

function closeStudyPage() {
    document.getElementById('studyOverlay').classList.add('hidden');
    document.body.style.overflow = 'auto'; 
}


// 4. Multimedia & Documents API
function playTutorial(videoName, videoUrl) {
    document.getElementById('videoModalTitle').innerText = videoName;
    const videoPlayer = document.getElementById('survivalVideo');
    if (videoUrl) {
        videoPlayer.src = videoUrl;
    }
    const videoModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('videoModal'));
    videoModal.show();
    videoPlayer.play();
}

function stopVideo() {
    const videoPlayer = document.getElementById('survivalVideo');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

document.getElementById('videoModal')?.addEventListener('hidden.bs.modal', function () {
    stopVideo();
});

function openDocument(docId) {
    const docData = documentDatabase[docId];
    if (!docData) {
        alert("Document not found!");
        return;
    }
    document.getElementById('documentModalTitle').innerText = docData.title;
    document.getElementById('documentModalBody').innerHTML = docData.content;
    
    const docModal = new bootstrap.Modal(document.getElementById('documentModal'));
    docModal.show();
}

// 5. Module 2: Tag Filtering Function
function filterCards(category, btnElement) {
    const buttons = document.querySelectorAll('#envFilterGroup .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const items = document.querySelectorAll('.filter-item');
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = '';
        } else {
            const envs = item.getAttribute('data-env');
            if (envs && envs.includes(category)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// 6. Module 3: Clinical Diagnosis System
function evalScenario(type, btnElement, targetAccordionId) {
    const btns = document.querySelectorAll('.scenario-btn');
    btns.forEach(btn => {
        btn.classList.remove('bg-white', 'border-dark');
        btn.style.opacity = '0.5';
    });
    
    btnElement.classList.add('bg-white', 'border', 'border-2', 'border-dark');
    btnElement.style.opacity = '1';

    const resultBox = document.getElementById('scenarioResult');
    resultBox.classList.remove('d-none');
    
    if (type === 'A') {
        resultBox.className = 'alert alert-warning border-0 shadow-sm mt-3';
        resultBox.innerHTML = `
            <span class="badge bg-danger mb-2">Risk Level: Medium-High</span>
            <h5 class="fw-bold">Diagnosis: Heat Exhaustion / Early Heat Stroke</h5>
            <ol class="small mb-2">
                <li>Immediate stop of forward movement, seek shade.</li>
                <li>Small amounts of fluid, preferably salt water.</li>
                <li>Physical cooling (loosen clothing).</li>
            </ol>
            <button class="btn btn-sm btn-dark" onclick="document.getElementById('${targetAccordionId}').parentElement.querySelector('.accordion-button').click(); document.getElementById('bodySignalsAccordion').scrollIntoView({behavior: 'smooth', block: 'start'});">📚 View Detailed Principles</button>
        `;
    } else if (type === 'B') {
        resultBox.className = 'alert alert-info border-0 shadow-sm mt-3';
        resultBox.innerHTML = `
            <span class="badge bg-danger mb-2">Risk Level: Very-High</span>
            <h5 class="fw-bold">Diagnosis: Mild to Moderate Hypothermia</h5>
            <ol class="small mb-2">
                <li>Water removes heat rapidly, immediately undress wet clothes!</li>
                <li>Build a fire, put on backup clothes or get into a sleeping bag.</li>
                <li>Drink warm, high-sugar fluid.</li>
            </ol>
            <button class="btn btn-sm btn-dark" onclick="document.getElementById('${targetAccordionId}').parentElement.querySelector('.accordion-button').click(); document.getElementById('bodySignalsAccordion').scrollIntoView({behavior: 'smooth', block: 'start'});">📚 View Detailed Principles</button>
        `;
    } else if (type === 'C') {
        resultBox.className = 'alert alert-danger border-0 shadow-sm mt-3';
        resultBox.innerHTML = `
            <span class="badge bg-danger mb-2">Risk Level: High-Medium</span>
            <h5 class="fw-bold">Diagnosis: Local Infection Spread (with fever)</h5>
            <ol class="small mb-2">
                <li>Fever indicates systemic infection.</li>
                <li>Check for red lines extending along the veins.</li>
                <li>Consider broad-spectrum antibiotics and plan evacuation.</li>
            </ol>
            <button class="btn btn-sm btn-dark" onclick="document.getElementById('${targetAccordionId}').parentElement.querySelector('.accordion-button').click(); document.getElementById('bodySignalsAccordion').scrollIntoView({behavior: 'smooth', block: 'start'});">📚 View Detailed Principles</button>
        `;
    }
}

function updateVitalUI(type, val) {
    if (type === 'temp') {
        document.getElementById('ui-temp-val').innerText = parseFloat(val).toFixed(1) + "℃";
        let msg = "Normal temperature range"; let color = "text-success";
        if (val < 35) { msg = "🚨 Severe Hypothermia!"; color = "text-danger"; }
        else if (val < 36) { msg = "⚠️ Mild Hypothermia"; color = "text-info"; }
        else if (val > 39.5) { msg = "🚨 Heatstroke Alert!"; color = "text-danger"; }
        else if (val > 38) { msg = "⚠️ Fever"; color = "text-warning"; }
        
        const msgEl = document.getElementById('ui-temp-msg');
        msgEl.className = "mt-2 small fw-bold " + color;
        msgEl.innerText = msg;
    } else if (type === 'hr') {
        document.getElementById('ui-hr-val').innerText = val + " bpm";
        let msg = "Normal heart rate range"; let color = "text-info";
        if (val > 120) { msg = "⚠️ Elevated HR (Fatigue/Dehydration)"; color = "text-warning"; }
        else if (val > 150) { msg = "🚨 Dangerous Tachycardia"; color = "text-danger"; }
        else if (val < 50) { msg = "🚨 Bradycardia (Hypothermia)"; color = "text-secondary"; }
        
        const msgEl = document.getElementById('ui-hr-msg');
        msgEl.className = "mt-2 small fw-bold " + color;
        msgEl.innerText = msg;
    }
}

function checkUrineUI(level) {
    const msgs = [
        "",
        "[1] Perfect hydration. Clear like lemonade, keep it up!",
        "[2] Mild dehydration. Drink 250ml of water immediately.",
        "[3] Moderate dehydration! Resembles apple juice. Rest and drink electrolytes.",
        "[4] Severe dehydration! High risk of kidney damage or rhabdomyolysis. Danger!"
    ];
    const colors = ["", "text-success", "text-warning", "text-danger", "text-danger"];
    
    const el = document.getElementById('ui-urine-msg');
    el.innerText = msgs[level];
    el.className = "mt-3 small fw-bold " + colors[level];
}

document.addEventListener("DOMContentLoaded", function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// 7. Module 4: Protocol Notes
const userProtocolNotes = { 1: "", 2: "", 3: "", 4: "", 5: "" };
let activeProtocolId = null;

function handleAdvCardClick(id) {
    const clickedCard = document.getElementById('acc-card-' + id);
    
    if (clickedCard.classList.contains('active')) {
        activeProtocolId = id;
        const data = protocolData[id];
        
        document.getElementById('p-modalTitleText').innerText = data.title;
        const iconEl = document.getElementById('p-modalIcon');
        iconEl.className = "fas " + data.icon;
        iconEl.style.color = data.color;
        
        document.getElementById('p-modalKnowledge').innerHTML = data.knowledge;
        document.getElementById('p-modalTextarea').value = userProtocolNotes[id];
        
        const modalEl = document.getElementById('protocolModal');
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    } else {
        document.querySelectorAll('.adv-acc-item').forEach(card => card.classList.remove('active'));
        clickedCard.classList.add('active');
    }
}

function saveProtocolNotes() {
    if (activeProtocolId) {
        userProtocolNotes[activeProtocolId] = document.getElementById('p-modalTextarea').value;
        const modalEl = document.getElementById('protocolModal');
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
    }
}

function exportProtocolNotes() {
    let text = "========================================\n";
    text += "         EXPEDITION PROTOCOL           \n";
    text += "========================================\n\n";

    for (let id = 1; id <= 5; id++) {
        text += `[ ${protocolData[id].title.toUpperCase()} ]\n`;
        const note = userProtocolNotes[id].trim();
        text += note ? note : "No content";
        text += "\n\n----------------------------------------\n\n";
    }

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Outdoor-Protocol.txt";
    link.click();
}

// 8. Pure Document Print Engine
function printDocument() {
    const title = document.getElementById('documentModalTitle').innerText;
    const content = document.getElementById('documentModalBody').innerHTML;
    
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);
    
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>${title} - Print</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                body { padding: 40px; background: white; color: black; font-family: sans-serif; }
                .alert { border: 1px solid #ddd !important; }
                img { max-width: 100%; height: auto; }
                @media print { @page { margin: 20mm; } }
            </style>
        </head>
        <body>
            <h2 class="mb-4 pb-2 border-bottom fw-bold text-dark">${title}</h2>
            <div style="font-size: 15px; line-height: 1.8; color: #333;">
                ${content}
            </div>
            <script>
                window.onload = function() {
                    setTimeout(function() { window.print(); }, 300);
                };
            </script>
        </body>
        </html>
    `);
    doc.close();
    
    setTimeout(() => { document.body.removeChild(iframe); }, 5000);
}

// 9. Universal Quiz Engine
let currentQuizType = ''; 
let currentQuizIndex = 0; 

function startMultiSim() {
    currentQuizType = 'sim';
    currentQuizIndex = 0;
    
    document.getElementById('simulatorHeader').className = "modal-header text-white bg-dark";
    document.getElementById('simulatorTitle').innerHTML = '<i class="fas fa-gamepad"></i> Animal Survival Challenge';
    
    renderQuiz();
    new bootstrap.Modal(document.getElementById('simulatorModal')).show();
}

function openSimulator(type) {
    if (type === 'MedQuiz') {
        currentQuizType = 'med';
        currentQuizIndex = 0;
        
        document.getElementById('simulatorHeader').className = "modal-header text-white bg-success";
        document.getElementById('simulatorTitle').innerHTML = '<i class="fas fa-user-md"></i> Medical Emergency Test';
        
        renderQuiz();
        const modalEl = document.getElementById('simulatorModal');
        bootstrap.Modal.getOrCreateInstance(modalEl).show();
    } else {
        alert("The module simulator is currently loading...");
    }
}

function renderQuiz() {
    const isMed = currentQuizType === 'med';
    const questions = isMed ? medQuizQuestions : simQuestions;
    const q = questions[currentQuizIndex];
    const bodyEl = document.getElementById('simulatorBody');
    
    let html = '';
    
    if (isMed) {
        html += `
            <div class="progress mb-3" style="height: 5px;">
                <div class="progress-bar bg-success" style="width: ${(currentQuizIndex / questions.length) * 100}%"></div>
            </div>
            <p class="fw-bold" style="font-size: 16px; line-height: 1.6;">${q.desc}</p>
        `;
    } else {
        html += `
            <span class="badge bg-secondary mb-2">Level ${currentQuizIndex + 1} / ${questions.length}</span>
            <h5 class="fw-bold text-success">${q.env}</h5>
            <p class="small fw-bold">${q.desc}</p>
        `;
    }

    html += `<div class="d-grid gap-2 mt-4">`;
    
    q.options.forEach((opt) => {
        let safeFailMsg = (opt.failMsg || '').replace(/'/g, "\\'");
        html += `<button class="btn btn-outline-dark text-start btn-sim-opt" onclick="handleQuizAnswer(${opt.correct}, '${safeFailMsg}')">${opt.text}</button>`;
    });
    
    html += `</div><div id="simFeedbackBox" class="mt-4"></div>`;
    bodyEl.innerHTML = html;
}

function handleQuizAnswer(isCorrect, failMsg) {
    const btns = document.querySelectorAll('.btn-sim-opt');
    btns.forEach(btn => btn.disabled = true);
    
    const feedbackBox = document.getElementById('simFeedbackBox');
    const isMed = currentQuizType === 'med';
    const questions = isMed ? medQuizQuestions : simQuestions;
    
    if (isCorrect) {
        currentQuizIndex++;
        if (currentQuizIndex < questions.length) {
            feedbackBox.innerHTML = `
                <div class="alert alert-success py-2 mb-3 border-0 shadow-sm">✅ Correct!</div>
                <button class="btn btn-success w-100 fw-bold" onclick="renderQuiz()">Next &rarr;</button>
            `;
        } else {
            feedbackBox.innerHTML = `
                <div class="alert alert-${isMed ? 'success' : 'warning'} py-4 text-center mb-0 border-0 shadow-sm">
                    <i class="fas ${isMed ? 'fa-award' : 'fa-trophy'} fa-3x ${isMed ? 'text-warning' : 'text-dark'} mb-3"></i>
                    <h4 class="fw-bold mb-2">${isMed ? 'Pass!' : 'Survival Master!'}</h4>
                    <p class="small mb-0">${isMed ? 'You conquered the quiz!' : 'You survived all challenges!'}</p>
                </div>
            `;
        }
    } else {
        feedbackBox.innerHTML = `
            <div class="alert alert-danger py-3 mb-3 border-0 shadow-sm">
                ${isMed ? '<i class="fas fa-skull-crossbones text-danger"></i> <strong>Failed: </strong><br>' : ''}
                <span class="small">${failMsg}</span>
            </div>
            <button class="btn btn-warning w-100 fw-bold" onclick="renderQuiz()">🔄 Try Again</button>
        `;
    }
}

// Managing Wishlist and Backpack Calculator
const { createApp } = Vue;

createApp({
    data() {
        return {
            searchQuery: '',
            allLocations: campingLocations,
            favorites: JSON.parse(localStorage.getItem('campingFavs')) || [],

            gearStore: [
                { id: 1, name: 'Storm Tent', weight: 2.8, type: 'shelter' },
                { id: 2, name: 'MRE Rations x10', weight: 1.5, type: 'food' },
                { id: 3, name: 'Water Filter Tube', weight: 0.3, type: 'water' },
                { id: 4, name: 'Survival Knife', weight: 0.4, type: 'tool' },
                { id: 5, name: 'Purified Water 2L', weight: 2.0, type: 'water' },
                { id: 6, name: 'Tactical IFAK', weight: 0.9, type: 'medical' },
                { id: 7, name: 'Sub-Zero Sleeping Bag', weight: 1.8, type: 'shelter' },
                { id: 8, name: 'Power Bank', weight: 1.2, type: 'tool' },
                { id: 9, name: 'Bushcraft Axe', weight: 1.4, type: 'tool' },
                { id: 10, name: 'Climbing Rope', weight: 3.5, type: 'tool' },
                { id: 11, name: 'Canned Meats', weight: 3.2, type: 'food' },
                { id: 12, name: 'Cast Iron Pot', weight: 2.5, type: 'tool' },
                { id: 13, name: 'Jerry Can 5L', weight: 5.0, type: 'water' },
                { id: 14, name: 'Waterproof Matches & Paracord', weight: 0.2, type: 'tool' }
            ],
            myBag: [] 
        }
    },
    computed: {
        filteredLocations() {
            return this.allLocations.filter(p => 
                p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                p.desc.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        visitedCount() { 
            return this.favorites.filter(f => f.visited === true).length; 
        },
         progressPct() { 
  
            if (this.favorites.length === 0) return 0;
                return (this.visitedCount / this.favorites.length) * 100; 
        },
        
        hasWater() { return this.myBag.some(i => i.type === 'water'); },
        hasFood() { return this.myBag.some(i => i.type === 'food'); },
        hasShelter() { return this.myBag.some(i => i.type === 'shelter'); },
        hasMedical() { return this.myBag.some(i => i.type === 'medical'); },
        
        totalWeight() { return this.myBag.reduce((sum, item) => sum + item.weight, 0); },
        weightPercentage() { return Math.min((this.totalWeight / 20) * 100, 100); },
        weightStatusClass() {
            if (this.totalWeight === 0) return 'bg-secondary';
            if (this.totalWeight <= 10) return 'bg-success';
            if (this.totalWeight <= 15) return 'bg-warning';
            return 'bg-danger';
        },
        
        survivalDays() {
            const foodWeight = this.myBag.filter(i => i.type === 'food').reduce((sum, i) => sum + i.weight, 0);
            const waterWeight = this.myBag.filter(i => i.type === 'water').reduce((sum, i) => sum + i.weight, 0);
            
            if (waterWeight === 0 && foodWeight > 0) return 3; 
            if (waterWeight === 0 && foodWeight === 0) return 0;
            return Math.floor((waterWeight * 1.5) + (foodWeight * 3));
        }
    },
    methods: {
        toggleFavorite(place) {
            const idx = this.favorites.findIndex(f => f.id === place.id);
            if (idx >= 0) this.favorites.splice(idx, 1); 
            else this.favorites.push({ ...place, visited: false });
            this.saveToStorage();
        },
        toggleVisited(id) {
                    const idx = this.favorites.findIndex(f => f.id === id);
                    if (idx >= 0) {
                        if (this.favorites[idx].visited === undefined) {
                            this.favorites[idx].visited = true;
                        } else {
                            this.favorites[idx].visited = !this.favorites[idx].visited;
                        }
                        this.saveToStorage();
                    }
                },
        removeFav(id) {
            this.favorites = this.favorites.filter(f => f.id !== id);
            this.saveToStorage();
        },
        clearAllFav() {
            if (confirm("Are you sure you want to clear your wishlist?")) {
                this.favorites = [];
                this.saveToStorage();
            }
        },
        isFavorite(id) { return this.favorites.some(f => f.id === id); },
        saveToStorage() { localStorage.setItem('campingFavs', JSON.stringify(this.favorites)); },
        
        playVideo(p) { 
            if (typeof playTutorial === 'function') {
                playTutorial(`${p.name} Footage`, p.video || 'assets/disr hut.mp4');
            }
        },
        
        exportJourneyPlan() {
            let text = "=== MY EXPEDITION PLAN ===\n\n";
            this.favorites.forEach((f, i) => {
                text += `[${i+1}] ${f.name} ${f.visited ? '(Conquered)' : '(Planned)'}\n`;
            });
            const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "Survival-Plan.txt";
            link.click();
        },

        toggleGear(item) {
            const idx = this.myBag.findIndex(i => i.id === item.id);
            if (idx >= 0) this.myBag.splice(idx, 1); 
            else this.myBag.push(item);
        },
        isInBag(id) { return this.myBag.some(i => i.id === id); }
    }
}).mount('#campingApp');