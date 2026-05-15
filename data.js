// 1. Learning System Data Center (Course Data)
// Stores titles, goals, and specific HTML layout contents for the 4 main modules
const courseData = {
    // [Module 1: Environment & Shelter]
    module1: {
        breadcrumb: "Home > Living Environment and Shelter", 
        title: "Living Environment and Shelter",
        subtitle: "Planning, materials, and construction steps",
        goal: `
            <strong>🏆 Learning Goals:</strong><br>
            <ul class="mb-1 mt-2 pl-3">
                <li>Learn 3 extreme outdoor environments.</li>
                <li>Understand the construction logic of core shelters.</li>
                <li>Remember the 4 planning factors to avoid fatal "Widowmakers".</li>
            </ul>
        `,
        hideSidebar: false, 
        content: `
            <h3 class="mt-4 mb-3 border-bottom border-secondary pb-2">1. Outdoor Environment Overview</h3>
            <p class="text-muted mb-4">Outdoor environments vary greatly in difficulty and require different construction methods.</p>
            
            <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div class="col">
                    <div class="card env-card shadow-sm h-100">
                        <img src="assets/forest.webP" class="env-card-bg-img" alt="Forest">
                        <div class="card-body d-flex flex-column justify-content-end">
                            <h5 class="fw-bold"><i class="fas fa-tree"></i> Forest Environment</h5>
                            <p class="small mb-2">Core threats: Wet, Mosquitoes, Widowmakers.</p>
                            <button class="btn btn-sm btn-light w-100" data-bs-toggle="collapse" data-bs-target="#forestDetail">View Strategies <i class="fas fa-chevron-down"></i></button>
                            <div class="collapse mt-2 text-white-50 small" id="forestDetail">
                                <strong>Planning:</strong> Avoid wind, near water, but not close to the riverbed.<br>
                                Must build a bed on the ground to prevent moisture.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card env-card shadow-sm h-100">
                        <img src="assets/snowland.webp" class="env-card-bg-img" alt="Snow">
                        <div class="card-body d-flex flex-column justify-content-end">
                            <h5 class="fw-bold"><i class="fas fa-snowflake"></i> Snow Environment</h5>
                            <p class="small mb-2">Core threats: Heat loss, Snow blindness, Avalanches.</p>
                            <button class="btn btn-sm btn-light w-100" data-bs-toggle="collapse" data-bs-target="#snowDetail">View Strategies <i class="fas fa-chevron-down"></i></button>
                            <div class="collapse mt-2 text-white-50 small" id="snowDetail">
                                <strong>Core:</strong> Extreme insulation.<br>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card env-card shadow-sm h-100">
                        <img src="assets/desert.jpg" class="env-card-bg-img" alt="Desert">
                        <div class="card-body d-flex flex-column justify-content-end">
                            <h5 class="fw-bold"><i class="fas fa-sun"></i> Desert Environment</h5>
                            <p class="small mb-2">Core threats: Fatal temperature difference, Extreme lack of water.</p>
                            <button class="btn btn-sm btn-light w-100" data-bs-toggle="collapse" data-bs-target="#desertDetail">View Strategies <i class="fas fa-chevron-down"></i></button>
                            <div class="collapse mt-2 text-white-50 small" id="desertDetail">
                                <strong>Core:</strong> Shadow and underground shelter.<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="mt-5 mb-3 border-bottom border-secondary pb-2">2. Environment-Shelter Matching Guide</h3>
            <p class="fw-bold text-success mb-4">Selecting the right shelter type can increase survival rate by up to 80%</p>
            
            <div class="table-responsive mb-4">
                <table class="table table-bordered table-hover bg-white text-center align-middle">
                    <thead class="table-dark">
                        <tr>
                            <th>Living Environment</th>
                            <th>Recommended Shelter Type</th>
                            <th>Core Advantages</th>
                            <th>Difficulty Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Forest Environment</strong></td>
                            <td>Stilt Hut</td>
                            <td>Elevates living surface above the ground. Effective against moisture and mosquitoes.</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>Forest Empty Land</strong></td>
                            <td>A-Frame</td>
                            <td>Utilizes two inclined roofs. Structure is extremely stable, and drainage is optimal.</td>    
                            <td>⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>Snow Environment</strong></td>
                            <td>Quinzee / Igloo</td>
                            <td>Utilizes the low thermal conductivity of snow to maintain internal temperature at 0°C.</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>Desert Environment</strong></td>
                            <td>Trench Shelter</td>
                            <td>Digging deep underground to avoid fatal heat and maintain body temperature.</td>
                            <td>⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>River Environment</strong></td>
                            <td>Rocky Overhang</td>
                            <td>Utilizes natural rocks. Must be located at least 50 meters above the flood line.</td>
                            <td>⭐</td>
                        </tr>
                        <tr>
                            <td><strong>Forest Environment</strong></td>
                            <td>Debris Hut</td>
                            <td>Utilizes thick leaf pile as insulation. The most common and warmest choice.</td>
                            <td>⭐⭐</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <ul class="nav nav-tabs mb-3" id="shelterTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active text-dark fw-bold" data-bs-toggle="tab" data-bs-target="#tab-temp">Temporary Shelter (1-3 days)</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link text-dark fw-bold" data-bs-toggle="tab" data-bs-target="#tab-long">Long-term Shelter (1 week+)</button>
                </li>
            </ul>
            <div class="tab-content bg-light p-4 border border-top-0 rounded-bottom mb-5 shadow-sm" id="shelterTabsContent">
                <div class="tab-pane fade show active" id="tab-temp">
                    <h5 class="text-success"><i class="fas fa-leaf"></i> Debris Hut</h5>
                    <p class="small"><strong>Principle:</strong> Utilizes thick leaf pile as insulation. The most common and warmest choice.</p>
                    <p class="small text-danger"><strong>⚠️ Warning:</strong> The insulation must be at least 1 meter thick.</p>
                    <div class="d-flex gap-2 mt-3">
                        <button class="btn btn-dark btn-sm" onclick="playTutorial('Debris Hut Building Video', 'assets/disr hut.mp4')"><i class="fas fa-play-circle"></i> Watch Video</button>
                        <button class="btn btn-outline-dark btn-sm" onclick="openDocument('Debris_Hut')"><i class="fas fa-file-alt"></i> View Materials</button>
                    </div>
                </div>
                <div class="tab-pane fade" id="tab-long">
                    <h5 class="text-success"><i class="fas fa-campground"></i> Wigwam</h5>
                    <p class="small"><strong>Principle:</strong> Utilizes young trees as a roof. Covers with tree bark or animal skin.</p>
                    <p class="small"><strong>Advantage:</strong> Space is large, and it is safe to burn a fire inside (requires a smoke hole).</p>
                    <button class="btn btn-dark btn-sm mt-2" onclick="openDocument('Wigwam_Guide')"><i class="fas fa-book-open"></i> Wigwam Guide</button>
                </div>
            </div>

            <h3 class="mt-5 mb-3 border-bottom border-secondary pb-2">3. Location Considerations (The 4 W's)</h3>
            <div class="row mb-5">
                <div class="col-md-6 mb-3">
                    <div class="card border-success h-100 shadow-sm">
                        <div class="card-header bg-success text-white fw-bold">✅ Perfect Location Standard</div>
                        <ul class="list-group list-group-flush small">
                            <li class="list-group-item"><strong>Wind:</strong> Backwind, avoid the main wind direction.</li>
                            <li class="list-group-item"><strong>Water:</strong> Near to water source, but must be above the flood level.</li>
                            <li class="list-group-item"><strong>Wood:</strong> Surrounding wood is available for fire and construction.</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card border-danger h-100 shadow-sm">
                        <div class="card-header bg-danger text-white fw-bold">❌ Fatal Location Mistakes</div>
                        <div class="card-body bg-light">
                            <h6 class="text-danger fw-bold">1. Widowmaker</h6>
                            <p class="small mb-2">Avoid setting up camp under trees with hanging dead branches.</p>
                            <h6 class="text-danger fw-bold">2. Animal Path</h6>
                            <p class="small mb-0">Avoid smooth paths, usually taken by animals to reach water.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="mt-5 mb-4 border-bottom border-secondary pb-2">4. Wild Construction Reference</h3>
            <div class="row g-3 mb-4">
                <div class="col-md-4">
                    <div class="gallery-item">
                        <img src="assets/A-frame.webp" class="img-fluid rounded-3 shadow-sm" alt="A-Frame">
                        <p class="small text-muted mt-2 text-center">FIGURE 1: A-Frame Construction Angle</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="gallery-item">
                        <img src="assets/songzhen.jpg" class="img-fluid rounded-3 shadow-sm" alt="Materials">
                        <p class="small text-muted mt-2 text-center">FIGURE 2: Materials</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="gallery-item">
                        <img src="assets/stone.webp" class="img-fluid rounded-3 shadow-sm" alt="Final">
                        <p class="small text-muted mt-2 text-center">FIGURE 3: Final Form</p>
                    </div>
                </div>
            </div>
        `,
        sidebarLinks: `
            <button class="list-group-item list-group-item-action text-start text-danger" onclick="openDocument('Env_Checklist')">
                <i class="fas fa-file-pdf"></i> Environment Checklist
            </button>
        `
    },
    
    // [Module 2: Flora & Fauna]
    module2: {
        breadcrumb: "Home > Food and Natural Resources",
        title: "Safe Foraging and Risk Identification",
        subtitle: "Recognize edible and toxic species, observe animal traces, and establish a safe foraging ethics.",
        goal: `
            <strong>🏆 Learning Goals:</strong><br>
            <ul class="mb-1 mt-2 pl-3">
                <li>Identify edible and toxic species based on different landscapes.</li>
                <li>Learn to observe animal traces.</li>
                <li>Complete the animal risk simulation.</li>
            </ul>
        `,
        hideSidebar: false,
        content: `
            <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <h3 class="mb-0">1. Wild Plant Database</h3>
                <div class="btn-group mt-2 shadow-sm" role="group" id="envFilterGroup">
                    <button type="button" class="btn btn-outline-success btn-sm active" onclick="filterCards('all', this)">All Environments</button>
                    <button type="button" class="btn btn-outline-success btn-sm" onclick="filterCards('forest', this)">🌲 Forest</button>
                    <button type="button" class="btn btn-outline-success btn-sm" onclick="filterCards('river', this)">🌊 River</button>
                    <button type="button" class="btn btn-outline-success btn-sm" onclick="filterCards('snow', this)">❄️ Snow</button>
                    <button type="button" class="btn btn-outline-success btn-sm" onclick="filterCards('desert', this)">🏜️ Desert</button>
                </div>
            </div>

            <p class="text-muted small mb-3">Expand the accordion to learn about animals in different environments:</p>
            <div class="accordion mb-5 shadow-sm" id="animalAccordion">
                
                <div class="accordion-item filter-item" data-env="forest">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold text-success" type="button" data-bs-toggle="collapse" data-bs-target="#anim-bear">
                            🌲 Large Predators (Bears) &nbsp;<span class="badge bg-danger">Dangerous!</span>
                        </button>
                    </h2>
                    <div id="anim-bear" class="accordion-collapse collapse" data-bs-parent="#animalAccordion">
                        <div class="accordion-body">
                            <div class="row align-items-center">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="assets/bear.jpg" class="img-fluid rounded border" alt="Bear">
                                </div>
                                <div class="col-md-8">
                                    <h6 class="fw-bold text-danger"><i class="fas fa-shield-alt"></i> Safety Tips</h6>
                                    <p class="small text-muted mb-2">When encountering a bear, never run away with your back to it. Slowly retreat facing it.</p>
                                    <h6 class="fw-bold text-success"><i class="fas fa-tools"></i> Resource Processing</h6>
                                    <p class="small text-muted mb-0">Bear skin is excellent for insulation; Bear meat must be fully cooked (100°C).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item filter-item" data-env="river">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold text-info" type="button" data-bs-toggle="collapse" data-bs-target="#anim-snake">
                            🌊 Wetland Lurkers (Venomous Snakes) &nbsp;<span class="badge bg-warning text-dark">Dangerous!</span>
                        </button>
                    </h2>
                    <div id="anim-snake" class="accordion-collapse collapse" data-bs-parent="#animalAccordion">
                        <div class="accordion-body">
                            <div class="row align-items-center">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="assets/watersnake.jpg" class="img-fluid rounded border" alt="Water Snake">
                                </div>
                                <div class="col-md-8">
                                    <h6 class="fw-bold text-danger"><i class="fas fa-shield-alt"></i> Safety Tips</h6>
                                    <p class="small text-muted mb-2">Tap the ground and grass before crossing rivers. Avoid putting hands in holes.</p>
                                    <p class="small text-muted mb-0">Snake meat is edible. Remove head and skin; bury the head deeply to prevent accidental envenomation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item filter-item" data-env="snow">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#anim-wolf">
                            ❄️ Arctic Trackers (Wolves) &nbsp;<span class="badge bg-danger">Dangerous!</span>
                        </button>
                    </h2>
                    <div id="anim-wolf" class="accordion-collapse collapse" data-bs-parent="#animalAccordion">
                        <div class="accordion-body">
                            <div class="row align-items-center">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="assets/wolf.jpg" class="img-fluid rounded border" alt="Wolf">
                                </div>
                                <div class="col-md-8">
                                    <h6 class="fw-bold text-danger"><i class="fas fa-shield-alt"></i> Safety Tips</h6>
                                    <p class="small text-muted mb-2">Never run away with your back turned. Face them and slowly retreat.</p>
                                    <h6 class="fw-bold text-success"><i class="fas fa-tools"></i> Resource Processing</h6>
                                    <p class="small text-muted mb-0">Animal fat can be used to protect skin from severe frostbite.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item filter-item" data-env="desert">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#anim-scorpion">
                            🏜️ Desert Travelers (Scorpions) &nbsp;<span class="badge bg-warning text-dark">Dangerous!</span>
                        </button>
                    </h2>
                    <div id="anim-scorpion" class="accordion-collapse collapse" data-bs-parent="#animalAccordion">
                        <div class="accordion-body">
                            <div class="row align-items-center">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="assets/scorpion.jpg" class="img-fluid rounded border" alt="Scorpion">
                                </div>
                                <div class="col-md-8">
                                    <h6 class="fw-bold text-danger"><i class="fas fa-shield-alt"></i> Safety Tips</h6>
                                    <p class="small text-muted mb-2">Always tap and check inside your shoes before wearing them in the desert.</p>
                                    <h6 class="fw-bold text-success"><i class="fas fa-tools"></i> Resource Processing</h6>
                                    <p class="small text-muted mb-0">Rich in protein, safe to cook after removing the venomous stinger.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card bg-info text-white border-0 shadow-sm filter-item mb-5" data-env="river">
                <div class="card-body">
                    <h5 class="fw-bold"><i class="fas fa-fish"></i> River Fishers</h5>
                    <p class="small mb-2"><strong>Absolute Rule:</strong> All freshwater fish, shrimps, and crabs must be fully cooked before consumption to avoid parasites!</p>
                </div>
            </div>

            <h3 class="mt-5 mb-4 border-bottom border-secondary pb-2">3. Scene-specific Plants</h3>
            <div class="row g-4 mb-5">
                
                <div class="col-md-6 filter-item" data-env="forest">
                    <div class="card border-success h-100 shadow-sm">
                        <img src="assets/dandelion.jpg" class="card-img-top" style="height:150px; object-fit:cover;">
                        <div class="card-body">
                            <h6 class="text-success fw-bold">✅ Forest Edible: Dandelion</h6>
                            <p class="small text-muted">Entire plant is edible, rich in vitamin C. Exudes white sap when broken (which is safe in this specific case).</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item" data-env="forest">
                    <div class="card border-danger h-100 shadow-sm bg-light">
                        <img src="assets/lily.jpg" class="card-img-top" style="height:150px; object-fit:cover;">
                        <div class="card-body">
                            <h6 class="text-danger fw-bold">❌ Forest Poisonous: Lily of the Valley</h6>
                            <p class="small text-muted">Easily misidentified as wild garlic; consumption can cause severe heart failure.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 filter-item" data-env="river">
                    <div class="card border-success h-100 shadow-sm">
                        <img src="assets/cattail.jpg" class="card-img-top" style="height:150px; object-fit:cover;">
                        <div class="card-body">
                            <h6 class="text-success fw-bold">✅ River Edible: Cattail</h6>
                            <p class="small text-muted">Wild supermarket! Roots contain starch, tender stems can be eaten raw.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item" data-env="river">
                    <div class="card border-danger h-100 shadow-sm bg-light">
                        <img src="assets/water-hemlock.webp" class="card-img-top" style="height:150px; object-fit:cover;">
                        <div class="card-body">
                            <h6 class="text-danger fw-bold">❌ River Poisonous: Water Hemlock</h6>
                            <p class="small text-muted">Highly toxic. Stem contains horizontal partitions and releases toxic yellow liquid when cut.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 filter-item" data-env="snow">
                    <div class="card border-success h-100 shadow-sm">
                        <img src="assets/songzhentea.jpg" class="card-img-top" style="height:150px; object-fit:cover;">
                        <div class="card-body">
                            <h6 class="text-success fw-bold">✅ Snow Resource: Pine Needles</h6>
                            <p class="small text-muted">Great Vitamin C source in cold weather. Brew as tea.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item" data-env="snow">
                    <div class="card border-danger h-100 shadow-sm bg-light">
                        <img src="assets/Yew_Berries.jpg" class="card-img-top" style="height:150px; object-fit:cover;">
                        <div class="card-body">
                            <h6 class="text-danger fw-bold">❌ Snow Poisonous: Yew</h6>
                            <p class="small text-muted">Except for the red fleshy seed covering, the entire plant is highly toxic!</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 filter-item" data-env="desert">
                    <div class="card border-success h-100 shadow-sm">
                        <img src="assets/cactus.jpg" class="card-img-top" style="height:150px; object-fit:cover;" alt="Cactus">
                        <div class="card-body">
                            <h6 class="text-success fw-bold">✅ Desert Edible: Prickly Pear</h6>
                            <p class="small text-muted">Desert water reservoir. Fruits and tender pads can be eaten after removing the spines.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 filter-item" data-env="desert">
                    <div class="card border-danger h-100 shadow-sm bg-light">
                        <img src="assets/datura.jpg" class="card-img-top" style="height:150px; object-fit:cover;" alt="Datura">
                        <div class="card-body">
                            <h6 class="text-danger fw-bold">❌ Desert Poisonous: Datura</h6>
                            <p class="small text-muted">Contains dangerous hallucinogens and toxins; consumption can be fatal.</p>
                        </div>
                    </div>
                </div>    
            </div>
            
            <div class="bg-dark text-white p-4 rounded-4 mb-5 filter-item" data-env="forest">
                <h5 class="text-warning mb-3 fw-bold"><i class="fas fa-exclamation-circle"></i> Forest Mushroom Comparison</h5>
                <div class="row row-cols-1 row-cols-md-3 g-3">
                    <div class="col text-center">
                        <div class="p-3 border border-secondary rounded h-100">
                            <img src="assets/morel.webp" class="img-fluid rounded mb-2" style="height:100px; width:100%; object-fit:cover;">
                            <p class="small mb-0 fw-bold">✅ Edible: Morel</p>
                            <span class="text-muted x-small">Recognition: Cap is honeycomb-shaped.</span>
                        </div>
                    </div>
                    <div class="col text-center">
                        <i class="fas fa-exchange-alt fa-2x mt-4 text-secondary mb-2"></i><br>
                        <button class="btn btn-warning btn-sm" onclick="openDocument('Mushroom_Guide')">Learn Identification</button>
                    </div>
                    <div class="col text-center">
                        <div class="p-3 border border-danger rounded h-100">
                            <img src="assets/gyrom.jpg" class="img-fluid rounded mb-2" style="height:100px; width:100%; object-fit:cover;">    
                            <p class="small mb-0 fw-bold text-danger">❌ Poisonous: False Morel</p>
                            <span class="text-muted x-small">Recognition: Cap is brain-shaped.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card h-100 shadow-sm border-success bg-success text-white filter-item" data-env="forest river snow desert">
                <div class="card-body d-flex align-items-center justify-content-between p-4">
                    <div>
                        <h4 class="fw-bold mb-1"><i class="fas fa-gamepad"></i> Animal Avoidance Challenge</h4>
                        <p class="small mb-0 text-white-50">Test your survival instinct to live to the next level!</p>
                    </div>
                    <button class="btn btn-light btn-lg fw-bold" onclick="startMultiSim()">Start Challenge</button>
                </div>
            </div>
        `,
        sidebarLinks: `
            <div class="list-group mt-3 shadow-sm">
                <button class="list-group-item list-group-item-action" onclick="openDocument('Toxic_Checklist')">
                    <i class="fas fa-file-pdf text-danger"></i> Toxic Plant Checklist (PDF)
                </button>
                <button class="list-group-item list-group-item-action" onclick="openDocument('Food_Ethics')">
                    <i class="fas fa-book-open text-success"></i> LNT Foraging Ethics
                </button>
            </div>
        `
    },

    // [Module 3: Body Self-Check and First Aid]
    module3: {
        breadcrumb: "Home > Body Self-Check and First Aid",
        title: "Body Self-Check and First Aid",
        subtitle: "In extreme conditions, your body is the only instrument. Master the decision-making path for immediate intervention.",
        goal: `
            <strong>🏆 Learning Goals:</strong><br>
            <ul class="mb-1 mt-2 pl-3">
                <li>Learn to make quick decisions in scenarios of sudden symptoms.</li>
                <li>Evaluate risk levels and prioritize the 6 major crises.</li>
                <li>Remember DRSABCD and RICE principles.</li>
            </ul>
        `,
        hideSidebar: false,
        content: `
            <div class="card shadow-sm border-0 mb-5" style="background-color: #fff9f0;">
                <div class="card-header bg-warning text-dark fw-bold border-0 py-3">
                    <i class="fas fa-satellite-dish fa-beat"></i> Medical Scenario Assessment
                </div>
                <div class="card-body p-4">
                    <p class="small text-muted mb-3">Choose the scenario that best describes your current situation:</p>
                    <div class="row g-3 mb-4" id="scenarioButtons">
                        <div class="col-md-4">
                            <button class="btn btn-outline-warning text-dark w-100 h-100 text-start p-3 fw-bold shadow-sm scenario-btn" onclick="evalScenario('A', this, 'acc-heat')">
                                <i class="fas fa-sun text-danger mb-2 fa-2x"></i><br>
                                Scene A<br><span class="small fw-normal">4-hour hike under scorching sun, dizzy and nauseous.</span>
                            </button>
                        </div>
                        <div class="col-md-4">
                            <button class="btn btn-outline-info text-dark w-100 h-100 text-start p-3 fw-bold shadow-sm scenario-btn" onclick="evalScenario('B', this, 'acc-cold')">
                                <i class="fas fa-snowflake text-primary mb-2 fa-2x"></i><br>
                                Scene B<br><span class="small fw-normal">2-hour hike in a cold valley, shivering.</span>
                            </button>
                        </div>
                        <div class="col-md-4">
                            <button class="btn btn-outline-secondary text-dark w-100 h-100 text-start p-3 fw-bold shadow-sm scenario-btn" onclick="evalScenario('C', this, 'acc-wound')">
                                <i class="fas fa-band-aid text-danger mb-2 fa-2x"></i><br>
                                Scene C<br><span class="small fw-normal">Injured foot, high risk of infection.</span>
                            </button>
                        </div>
                    </div>
                    <div id="scenarioResult" class="alert alert-secondary border-0 shadow-sm d-none"></div>
                </div>
            </div>

            <h3 class="mb-4 border-bottom border-secondary pb-2">Body Signals Dictionary</h3>
            <div class="accordion mb-5 shadow-sm" id="bodySignalsAccordion">
                
                <div class="accordion-item border-danger">
                    <h2 class="accordion-header">
                        <button class="accordion-button fw-bold text-danger bg-danger bg-opacity-10" type="button" data-bs-toggle="collapse" data-bs-target="#acc-cold">
                            🚨 1. Hypothermia - Most Urgent
                        </button>
                    </h2>
                    <div id="acc-cold" class="accordion-collapse collapse show" data-bs-parent="#bodySignalsAccordion">
                        <div class="accordion-body">
                            <table class="table table-sm small">
                                <thead><tr class="table-danger"><th>Stage</th><th>Manifestation</th><th>Action</th></tr></thead>
                                <tbody>
                                    <tr><td>Light</td><td>Shivering, speech difficulty</td><td>Change into dry clothes, drink hot sugary water</td></tr>
                                    <tr><td class="text-danger fw-bold">Medium</td><td>Violent shivering, abnormal peeling of clothes</td><td class="text-danger">Do not rub the body! Insulate gradually.</td></tr>
                                </tbody>
                            </table>
                            <div class="d-flex gap-2 mt-3">
                                <button class="btn btn-dark btn-sm" onclick="playTutorial('Emergency Blanket Guide', 'assets/emergencyblanket.mp4')"><i class="fas fa-play"></i> Watch Emergency Blanket Guide</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item border-warning">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold text-warning" style="color: #d35400 !important;" type="button" data-bs-toggle="collapse" data-bs-target="#acc-heat">
                            ⚠️ 2. Heat Exhaustion and Heatstroke (Hyperthermia)
                        </button>
                    </h2>
                    <div id="acc-heat" class="accordion-collapse collapse" data-bs-parent="#bodySignalsAccordion">
                        <div class="accordion-body">
                            <p class="small"><strong>Heat Exhaustion:</strong> Excessive sweating, pale face. Need to hydrate and rest.<br>
                            <strong class="text-danger">Heatstroke:</strong> Dry skin, red face. Need to cool down immediately with cold water.</p>
                            <button class="btn btn-outline-info text-dark btn-sm mt-2" onclick="openDocument('Heat_Checklist')">Download Heat Checklist</button>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold text-info" type="button" data-bs-toggle="collapse" data-bs-target="#acc-water">
                            💧 3. Dehydration and Electrolyte Imbalance
                        </button>
                    </h2>
                    <div id="acc-water" class="accordion-collapse collapse" data-bs-parent="#bodySignalsAccordion">
                        <div class="accordion-body">
                            <p class="small"><strong>ORS Solution Formula:</strong> 1 liter of pure water + 6 teaspoons sugar + 0.5 teaspoon salt.</p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#acc-wound">
                            🩹 4. Wound Infection and Sepsis
                        </button>
                    </h2>
                    <div id="acc-wound" class="accordion-collapse collapse" data-bs-parent="#bodySignalsAccordion">
                        <div class="accordion-body">
                            <p class="small mb-2">Core steps of field wound cleaning: <strong>Flush (high-pressure water) > Disinfect (iodine) > Bandage (sterile dressings)</strong>.</p>
                            <div class="alert alert-danger small py-2 mb-0"><strong>Danger Signal:</strong> If a red line extends from the wound towards the heart, it's a sign of severe infection. Evacuate immediately.</div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="mb-4 border-bottom border-secondary pb-2">Analog Equipment</h3>
            <div class="row g-3 mb-5">
                <div class="col-md-4">
                    <div class="card bg-dark text-white h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <h6 class="text-white-50 mb-3">Temperature Simulator <i class="fas fa-question-circle" title="Simulation only. Use real thermometer in the wild." data-bs-toggle="tooltip"></i></h6>
                            <h2 class="fw-bold text-success mb-3" id="ui-temp-val">37.0℃</h2>
                            <input type="range" class="form-range" min="34" max="42" step="0.1" value="37" oninput="updateVitalUI('temp', this.value)">
                            <div class="mt-2 small fw-bold" id="ui-temp-msg">Normal temperature range</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-dark text-white h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <h6 class="text-white-50 mb-3">Heart Rate Simulator <i class="fas fa-question-circle" title="Measure pulse for 15s and multiply by 4" data-bs-toggle="tooltip"></i></h6>
                            <h2 class="fw-bold text-info mb-3" id="ui-hr-val">75 bpm</h2>
                            <input type="range" class="form-range" min="40" max="180" step="1" value="75" oninput="updateVitalUI('hr', this.value)">
                            <div class="mt-2 small fw-bold" id="ui-hr-msg">Normal heart rate range</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-dark text-white h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <h6 class="text-white-50 mb-3">Urine Color Chart <i class="fas fa-question-circle" title="Compare to check dehydration level" data-bs-toggle="tooltip"></i></h6>
                            <div class="d-flex justify-content-center gap-2 mb-3">
                                <div onclick="checkUrineUI(1)" style="width:40px;height:40px;background:#ffffe0;cursor:pointer;border-radius:4px;border:1px solid #ccc;"></div>
                                <div onclick="checkUrineUI(2)" style="width:40px;height:40px;background:#ffeb3b;cursor:pointer;border-radius:4px;"></div>
                                <div onclick="checkUrineUI(3)" style="width:40px;height:40px;background:#fbc02d;cursor:pointer;border-radius:4px;"></div>
                                <div onclick="checkUrineUI(4)" style="width:40px;height:40px;background:#8b4513;cursor:pointer;border-radius:4px;"></div>
                            </div>
                            <div class="mt-2 small fw-bold text-warning" id="ui-urine-msg">Click color blocks to assess dehydration</div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="mb-4 border-bottom border-secondary pb-2">Emergency Action Phrases</h3>
            <div class="row g-3 mb-5">
                <div class="col-md-4">
                    <div class="card border-primary h-100 hover-card" style="cursor:pointer;" onclick="openDocument('DRSABCD')">
                        <div class="card-body text-center">
                            <i class="fas fa-heartbeat fa-2x text-primary mb-3"></i>
                            <h5 class="fw-bold">DRSABCD</h5>
                            <p class="small text-muted">Standard procedure for resuscitation and emergency care.</p>
                            <span class="badge bg-light text-primary">Click to view details</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-info h-100 hover-card" style="cursor:pointer;" onclick="openDocument('RICE')">
                        <div class="card-body text-center">
                            <i class="fas fa-band-aid fa-2x text-info mb-3"></i>
                            <h5 class="fw-bold">RICE Principle</h5>
                            <p class="small text-muted">The gold standard for soft tissue injuries.</p>
                            <span class="badge bg-light text-info">Click to view details</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-danger h-100 hover-card" style="cursor:pointer;" onclick="openDocument('MED_SAFETY')">
                        <div class="card-body text-center">
                            <i class="fas fa-pills fa-2x text-danger mb-3"></i>
                            <h5 class="fw-bold">Medicine Safety</h5>
                            <p class="small text-muted">Do not abuse, do not share, verify allergy history.</p>
                            <span class="badge bg-light text-danger">Click to view details</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mt-5 mb-3">
            <div class="row text-center text-muted small pb-4" style="font-size: 12px;">
                <div class="col-md-4">
                    <strong>Module 3</strong><br>Educational purposes only, not professional medical advice.
                </div>
                <div class="col-md-4">
                    <strong>Reference</strong><br>WMS Wilderness Medical Society
                </div>
                <div class="col-md-4">
                    <a href="#" class="text-muted text-decoration-none" onclick="alert('Thank you for feedback! We will continue to optimize.')">Report Errors</a>
                </div>
            </div>
        `,
        sidebarLinks: `
            <div class="list-group mt-3 shadow-sm">
                <button class="list-group-item list-group-item-action list-group-item-danger fw-bold" onclick="alert('🚨 If you truly feel extremely unwell right now, evacuation should always be your top priority!')">
                    <i class="fas fa-exclamation-triangle"></i> Evacuation Principle
                </button>
                <button class="list-group-item list-group-item-action text-success fw-bold" onclick="openSimulator('MedQuiz')">
                    <i class="fas fa-user-md"></i> Start First Aid Quiz
                </button>
                <button class="list-group-item list-group-item-action" onclick="openDocument('Body_Checklist')">
                    <i class="fas fa-file-pdf"></i> Body Checklist (PDF)
                </button>
            </div>
        `
    },

    // [Module 4: Pre-Departure Preparation (Advanced Accordion)]
    module4: {
        breadcrumb: "Home > Preparations and Equipment",
        title: "Expedition Protocol: Ultimate Pre-Departure Protocol",
        subtitle: "From medical first aid to survival tools, master the 5 core survival pillars. Export your action report.",
        goal: `
            <strong>🏆 Learning Goals:</strong><br>
            <ul class="mb-1 mt-2 pl-3">
                <li>Master the 5 core preparation modules.</li>
                <li>Record your personalized action report.</li>
                <li>Export your personalized action report (TXT) for emergency contacts.</li>
            </ul>
        `,
        hideSidebar: false,
        content: `
            <div class="adv-acc-container mt-4 mb-5">
                <div class="adv-acc-item active" id="acc-card-1" onclick="handleAdvCardClick(1)">
                    <img src="assets/gear-medical.jpg" class="adv-acc-img" alt="Medical">
                    <div class="adv-acc-overlay"></div>
                    <div class="adv-acc-icon-box" style="color: #ff5c5c;"><i class="fas fa-briefcase-medical"></i></div>
                    <div class="adv-acc-content">
                        <div class="adv-acc-title"><i class="fas fa-briefcase-medical" style="color: #ff5c5c;"></i> Medical</div>
                        <div class="adv-acc-subtitle">Trauma & First Aid</div>
                        <div class="adv-click-hint">Click to read & edit notes &rarr;</div>
                    </div>
                </div>

                <div class="adv-acc-item" id="acc-card-2" onclick="handleAdvCardClick(2)">
                    <img src="assets/gear-seeds.webp" class="adv-acc-img" alt="Seeds">
                    <div class="adv-acc-overlay"></div>
                    <div class="adv-acc-icon-box" style="color: #f9c74f;"><i class="fas fa-seedling"></i></div>
                    <div class="adv-acc-content">
                        <div class="adv-acc-title"><i class="fas fa-seedling" style="color: #f9c74f;"></i> Seeds</div>
                        <div class="adv-acc-subtitle">Flora & Sustenance</div>
                        <div class="adv-click-hint">Click to read & edit notes &rarr;</div>
                    </div>
                </div>

                <div class="adv-acc-item" id="acc-card-3" onclick="handleAdvCardClick(3)">
                    <img src="assets/gear-tools.avif" class="adv-acc-img" alt="Tools">
                    <div class="adv-acc-overlay"></div>
                    <div class="adv-acc-icon-box" style="color: #57cc99;"><i class="fas fa-wrench"></i></div>
                    <div class="adv-acc-content">
                        <div class="adv-acc-title"><i class="fas fa-wrench" style="color: #57cc99;"></i> Tools</div>
                        <div class="adv-acc-subtitle">Gear & Maintenance</div>
                        <div class="adv-click-hint">Click to read & edit notes &rarr;</div>
                    </div>
                </div>

                <div class="adv-acc-item" id="acc-card-4" onclick="handleAdvCardClick(4)">
                    <img src="assets/gear-dog.webp" class="adv-acc-img" alt="Companion">
                    <div class="adv-acc-overlay"></div>
                    <div class="adv-acc-icon-box" style="color: #4fa3ff;"><i class="fas fa-dog"></i></div>
                    <div class="adv-acc-content">
                        <div class="adv-acc-title"><i class="fas fa-dog" style="color: #4fa3ff;"></i> Companion</div>
                        <div class="adv-acc-subtitle">Team & K9 Protocol</div>
                        <div class="adv-click-hint">Click to read & edit notes &rarr;</div>
                    </div>
                </div>

                <div class="adv-acc-item" id="acc-card-5" onclick="handleAdvCardClick(5)">
                    <img src="assets/gear-skill.webp" class="adv-acc-img" alt="Skills">
                    <div class="adv-acc-overlay"></div>
                    <div class="adv-acc-icon-box" style="color: #a78bfa;"><i class="fas fa-book"></i></div>
                    <div class="adv-acc-content">
                        <div class="adv-acc-title"><i class="fas fa-book" style="color: #a78bfa;"></i> Skills</div>
                        <div class="adv-acc-subtitle">Bushcraft & Mastery</div>
                        <div class="adv-click-hint">Click to read & edit notes &rarr;</div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5 mb-5">
                <button class="adv-export-btn" onclick="exportProtocolNotes()">
                    <i class="fas fa-download me-2"></i> Export All Notes
                </button>
            </div>
        `,
        sidebarLinks: `
            <div class="list-group mt-3 shadow-sm">
                <button class="list-group-item list-group-item-action fw-bold text-dark bg-light" onclick="exportProtocolNotes()">
                    <i class="fas fa-print"></i> Export Pre-Departure Report (TXT)
                </button>
                <button class="list-group-item list-group-item-action" onclick="openDocument('10_Essentials')">
                    <i class="fas fa-file-pdf text-danger"></i> Download 10 Essentials List (PDF)
                </button>
            </div>
        `
    },
};

// 2. Document Database
// All materials that need to be opened using the "Modal Reader" are registered here
const documentDatabase = {
    'Debris_Hut': {
        title: "🍃 Debris Hut - Construction Guide",
        content: `
            <div class="alert alert-success py-2 mb-3"><strong>Category:</strong> Temporary Shelter (1-3 days) | <strong>Difficulty:</strong>⭐⭐</div>
            <h5 class="text-success fw-bold">1. Theory and Principles</h5>
            <p class="small">The Debris Hut is a simple shelter made from natural debris. It is a great choice for temporary shelter in cold weather.</p>
            <h5 class="text-success fw-bold mt-4">2. Materials and Collection Ethics</h5>
            <ul>
                <li><strong>Skeleton Materials:</strong> 1 long, sturdy main beam; 1 Y-type support beam; multiple side ribs.</li>
                <li><strong>Natural Covering:</strong> Large amounts of leaves, pine needles, or small branches.</li>
                <li class="text-muted small"><i class="fas fa-leaf"></i> <strong>LNT Principle:</strong> No cutting down live trees! Only collect ground debris.</li>
            </ul>
            <h5 class="text-success fw-bold mt-4">3. Fatal Errors Warning</h5>
            <div class="alert alert-danger small">
                <ul class="mb-0">
                    <li><strong>Covering Thickness:</strong> Must be at least 60-80cm to prevent heat loss.</li>
                    <li><strong>Space:</strong> Must be just enough to fit you, minimizing dead air space.</li>
                </ul>
            </div>
        `
    },
    'Wigwam_Guide': {
        title: "🏕️ Wigwam Construction Guide",
        content: `
            <div class="alert alert-info py-2 mb-3"><strong>Category:</strong> Long-term Shelter | <strong>Difficulty:</strong>⭐⭐⭐⭐</div>
            <p>Wigwam is a complex dome-shaped shelter utilizing young trees as a frame.</p>
            <h5 class="text-dark fw-bold mt-4">Step-by-Step Construction</h5>
            <ol>
                <li><strong>Basic Skeleton:</strong> Find young trees with flexible branches. Bend and tie them to form a stable dome.</li>
                <li><strong>Internal Optimization:</strong> Add horizontal branches to reinforce the main skeleton.</li>
                <li><strong>Covering:</strong> Cover with bark, animal skins, or thick grass.</li>
            </ol>
            <h5 class="text-dark fw-bold mt-4">Core Function Design</h5>   
            <ul>
                <li><strong>Ventilation:</strong> A vent hole must be left at the top if burning a fire inside to prevent CO poisoning.</li>
                <li><strong>Drainage:</strong> Ensure proper slope to prevent water pooling.</li>
            </ul>
        `
    },
    'Env_Checklist': {
        title: "📋 Environment Assessment Checklist",
        content: `
            <h5 class="fw-bold mt-3 text-success">Landform Checklist</h5>
            <ul class="list-group list-group-flush small border mb-4">
                <li class="list-group-item"><strong>⛈️ Riverbanks:</strong> Observe rock colors and floating debris lines. Never camp in dry riverbeds.</li>
                <li class="list-group-item"><strong>🐍 Rainforests:</strong> Build elevated beds to avoid ground-dwelling insects and reptiles.</li>
                <li class="list-group-item"><strong>💨 Forest Clearings:</strong> Camp at the forest edge, 5-10 meters away from the primary wind direction.</li>
                <li class="list-group-item"><strong>🏔️ Rocky Areas:</strong> Check rock stability. Avoid camping directly under overhangs prone to rockfalls.</li>
            </ul>
            <h5 class="fw-bold text-danger">⚠️ Shelter Function Check</h5>
            <div class="row g-2 mt-2">
                <div class="col-6"><div class="p-2 border rounded bg-light small">✔ Drainage trench dug around the shelter?</div></div>
                <div class="col-6"><div class="p-2 border rounded bg-light small">✔ Insulation covering at least 15cm thick?</div></div>
                <div class="col-6"><div class="p-2 border rounded bg-light small">✔ Structural integrity tested against wind?</div></div>
                <div class="col-6"><div class="p-2 border rounded bg-light small">✔ Adequate internal ventilation?</div></div>
            </div>
        `
    },
    'Plant_Edible': {
        title: "🍀 Edible Plant Safety Identification: Dandelion",
        content: `
            <div class="row">
                <div class="col-md-5"><img src="assets/dandelion-detail.jpg" class="img-fluid rounded border mb-3"></div>
                <div class="col-md-7">
                    <h6><strong>Key Features:</strong></h6>
                    <ul class="small">
                        <li><strong>Leaves:</strong> Deeply lobed, serrated edges, hairless veins.</li>
                        <li><strong>Flowers:</strong> Bright yellow, solitary on top of a hollow stem.</li>
                        <li><strong>Sap:</strong> Exudes white milky sap when broken (Note: not all white sap plants are safe, but dandelion is).</li>
                    </ul>
                </div>
            </div>
            <h6 class="mt-3"><strong>Cooking & Nutrition:</strong></h6>
            <p class="small">Young leaves can be eaten raw (slightly bitter); older leaves should be blanched. Washed and dried roots can be ground and boiled as an excellent electrolyte supplement.</p>
        `
    },
    'Mushroom_Guide': {
        title: "🍄 Mushroom Identification: Spore Print Comparison",
        content: `
            <p class="small">It is extremely unreliable to identify mushrooms by naked eyes alone. Experts adopt Spore Print Comparison.</p>
            <ol class="small">
                <li>Remove the cap of a mature mushroom and place it gills-down on a piece of white paper or glass.</li>
                <li>Place a bowl over it and leave it in a dark place for 6-12 hours.</li>
                <li>Observe the color of the spore print. Example: Deadly Amanitas often leave a pure white spore print.</li>
            </ol>
            <div class="p-3 bg-light rounded border text-center fw-bold">
                If you are not 100% sure about the identification, DO NOT eat it.
            </div>
        `
    },
    'Toxic_Checklist': {
        title: "☠️ Toxic Plant Quick Identification Checklist",
        content: `
            <div class="alert alert-danger py-2 mb-3"><strong>Core Principle:</strong> Never touch, never eat, never use as firewood!</div>
            <h5 class="fw-bold mt-3">1. General Danger Signals</h5>
            <ul class="small">
                <li><span class="text-danger fw-bold">Leaves of Three:</span> "Leaves of three, let it be." (e.g., Poison Ivy).</li>
                <li><span class="text-danger fw-bold">Umbrella Flowers + Bad Odor:</span> High probability of toxicity (e.g., Poison Hemlock).</li>
                <li><span class="text-danger fw-bold">White Milky Sap:</span> Often toxic (with a few exceptions like Dandelion).</li>
                <li><span class="text-danger fw-bold">Red/White Berries:</span> Unless positively identified, consider them toxic.</li>
            </ul>
            <h5 class="fw-bold mt-4">2. Emergency Treatment</h5>
            <ol class="small">
                <li><strong>Skin Contact:</strong> Immediately flush with cold water to remove toxic oils.</li>
                <li><strong>Eye Protection:</strong> Do not rub your eyes after touching unknown plants.</li>
            </ol>
        `
    },
    'Food_Ethics': {
        title: "🌿 LNT (Leave No Trace) Foraging Ethics",
        content: `
            <p class="small text-muted">Always follow Leave No Trace principles when foraging in the wild.</p>
            <h5 class="fw-bold text-success mt-3">Core Principles:</h5>
            <table class="table table-bordered mt-2 small">
                <thead class="table-light">
                    <tr><th>Principle</th><th>Standard</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>1. One-Tenth Rule</strong></td><td>Never harvest more than 1/10 of a plant community.</td></tr>
                    <tr><td><strong>2. Protect the Root</strong></td><td>Do not uproot plants unless the root is the specific part needed for survival.</td></tr>
                    <tr><td><strong>3. Danger Avoidance</strong></td><td>Never forage unrecognized species or protected flora.</td></tr>
                    <tr><td><strong>4. Animal First</strong></td><td>Leave enough food sources for local wildlife.</td></tr>
                </tbody>
            </table>
        `
    },
    'Heat_Checklist': {
        title: "🌡️ Heat Disease Quick Check and Cooling Guide",
        content: `
            <h5 class="fw-bold text-danger">Immediate Medical Attention Required If:</h5>
            <ul><li>Skin is dry and hot (no longer sweating)</li><li>Confusion or delirium</li><li>Loss of consciousness</li></ul>
            <p><strong>Cooling Protocol:</strong> Move to shade, remove excess clothing. Apply cold water or ice packs to the neck, armpits, and groin (where major arteries are) for rapid core cooling. Fan the patient.</p>
        `
    },
    'DRSABCD': {
        title: "❤️ DRSABCD Emergency Protocol",
        content: `
            <p class="small text-muted">International standard for CPR and emergency care:</p>
            <ul>
                <li><strong>D (Danger):</strong> Ensure the scene is safe for you and the patient.</li>
                <li><strong>R (Response):</strong> Check for consciousness (tap collarbone, shout).</li>
                <li><strong>S (Send for help):</strong> Call emergency services or use satellite SOS.</li>    
                <li><strong>A (Airway):</strong> Tilt head back, lift chin to clear airway.</li>
                <li><strong>B (Breathing):</strong> Look, listen, and feel for normal breathing for 10 seconds.</li>
                <li><strong>C (CPR):</strong> 30 chest compressions + 2 rescue breaths (100-120 bpm).</li>
                <li><strong>D (Defibrillator):</strong> Apply AED as soon as available and follow voice prompts.</li>
            </ul>
        `
    },
    'RICE': {
        title: "🧊 RICE Principle for Soft Tissue Injuries",
        content: `
            <p class="small text-muted">Standard protocol for sprains and strains:</p>
            <ul>
                <li><strong>R (Rest):</strong> Stop activity immediately to prevent further damage.</li>
                <li><strong>I (Ice):</strong> Apply ice wrapped in cloth for 15-20 minutes.</li>
                <li><strong>C (Compression):</strong> Wrap with an elastic bandage to reduce swelling.</li>
                <li><strong>E (Elevation):</strong> Elevate the injured limb above heart level to improve circulation.</li>
            </ul>
        `
    },
    'MED_SAFETY': {
        title: "💊 Medical Safety Principles",
        content: `
            <div class="alert alert-warning small">
                <strong>1. Do not abuse antibiotics:</strong> Useless against viral infections. Overuse disrupts gut flora causing diarrhea. Use only for severe bacterial infections.<br><br>
                <strong>2. Do not share prescriptions:</strong> Your medicine could be someone else's poison.<br><br>
                <strong>3. Verify Allergies:</strong> Always ask about drug allergies before administering any medication.
            </div>
        `
    },
    'Body_Checklist': {
        title: "📋 Daily Body Checklist",
        content: `
            <table class="table table-bordered small">
                <thead class="table-dark"><tr><th>Item</th><th>Normal Indicator</th><th>Warning Signal</th></tr></thead>
                <tbody>
                    <tr><td>Urine Color</td><td>Light yellow / Clear</td><td>Deep amber, brown, or no output.</td></tr>
                    <tr><td>Feet & Blisters</td><td>No pain or hot spots</td><td>Redness or pain. Apply blister tape immediately before it worsens.</td></tr>
                    <tr><td>Mental Status</td><td>Lucid, responsive</td><td>Irritability, sluggishness, frequent stumbling.</td></tr>
                </tbody>
            </table>
        `
    },
    '10_Essentials': {
        title: "🎒 The 10 Essentials for Wilderness Survival",
        content: `
            <p class="small text-muted">The absolute minimum gear required for safety:</p>
            <ul class="list-group list-group-flush small">
                <li class="list-group-item"><strong>1. Navigation:</strong> Topo map, compass (do not rely solely on GPS).</li>
                <li class="list-group-item"><strong>2. Headlamp:</strong> Plus extra batteries.</li>
                <li class="list-group-item"><strong>3. Sun Protection:</strong> Sunglasses, sunscreen, hat.</li>
                <li class="list-group-item"><strong>4. First Aid:</strong> Comprehensive trauma kit.</li>
                <li class="list-group-item"><strong>5. Knife & Repair:</strong> Fixed-blade knife, duct tape, paracord.</li>
                <li class="list-group-item"><strong>6. Fire:</strong> Ferrocerium rod or stormproof matches.</li>
                <li class="list-group-item"><strong>7. Shelter:</strong> Mylar emergency blanket or lightweight tarp.</li>
                <li class="list-group-item"><strong>8. Extra Food:</strong> +1 day supply of high-calorie rations.</li>
                <li class="list-group-item"><strong>9. Extra Water:</strong> + Water purification system (filter/tablets).</li>
                <li class="list-group-item"><strong>10. Extra Clothes:</strong> Avoid cotton. Pack insulating layers and a waterproof shell.</li> 
            </ul>
            <div class="alert alert-warning mt-3 py-2 small mb-0">
                <i class="fas fa-exclamation-circle"></i> <strong>Packing Law:</strong> Keep heavy items (water, food) close to your center of gravity to maintain balance.
            </div>
        `
    }
};

// 3. Exclusive Knowledge Base for Module 4 "Pre-Departure Preparation"
const protocolData = {
    1: { title: "Medical", icon: "fa-briefcase-medical", color: "#ff5c5c", knowledge: "<h5>1. Medicine and Emergency Response</h5><p>In the wild, stabilizing vital signs is paramount. <strong>DRSABCD</strong> is the foundation.</p><ul><li><strong>Tourniquet:</strong> Essential for massive arterial bleeding.</li><li><strong>Broad-spectrum antibiotics:</strong> Vital for deep infections.</li><li><strong>Emergency Blanket:</strong> Reflective side inwards to prevent hypothermia.</li></ul>" },
    2: { title: "Seeds", icon: "fa-seedling", color: "#f9c74f", knowledge: "<h5>2. Flora and Sustenance</h5><p>Never eat unidentified plants. Strictly follow the <strong>1/10 Foraging Rule</strong>.</p><ul><li><strong>Avoid:</strong> Plants with white sap and umbrella-shaped clusters.</li><li><strong>Safe Source:</strong> Pine needle tea provides Vitamin C.</li><li><strong>Emergency Calories:</strong> Carry high-calorie nut bars at all times.</li></ul>" },
    3: { title: "Tools", icon: "fa-wrench", color: "#57cc99", knowledge: "<h5>3. Tools & Equipment (The 5 C's)</h5><p>The five core survival items that are extremely difficult to craft in nature:</p><ul><li><strong>Cutting:</strong> Full-tang carbon steel knife.</li><li><strong>Combustion:</strong> Ferro rod and waterproof matches.</li><li><strong>Cover:</strong> Tarp or waterproof sheet.</li><li><strong>Container:</strong> Single-wall stainless steel bottle (for boiling water directly).</li><li><strong>Cordage:</strong> 550 paracord.</li></ul>" },
    4: { title: "Companion", icon: "fa-dog", color: "#4fa3ff", knowledge: "<h5>4. Team and K9 Protocol</h5><p>The team is the core defense. Never place teammates or working dogs in unnecessary danger.</p><ul><li><strong>K9 First Aid:</strong> Paw wax, tick removers.</li><li><strong>Hydration:</strong> Dogs overheat quickly. Reserve at least 1L of water per dog per day.</li><li><strong>Mental State:</strong> Use S.T.O.P. (Stop, Think, Observe, Plan) to prevent panic.</li></ul>" },
    5: { title: "Skills", icon: "fa-book", color: "#a78bfa", knowledge: "<h5>5. Skills and Rules</h5><p>Memorize the <strong>Rule of 3s for Survival:</strong></p><ul><li>3 minutes without oxygen.</li><li>3 hours without shelter in extreme environments.</li><li>3 days without water.</li><li>3 weeks without food.</li></ul>" }
};

// 4. Universal Quiz Engine Bank (Module 2 & Module 3)
// Module 2: Animal Evasion Quiz Bank
const simQuestions = [
    {
        env: "🌲 Forest",
        desc: "You see a lone deer fawn in the forest. You should:",
        options: [
            // Single quotes in failMsg must be escaped; this is handled in the universal engine
            { text: "A. Approach to pet or feed it.", correct: false, failMsg: "You're dead ☠️. The mother is likely nearby and will aggressively defend her young." },
            { text: "B. Keep your distance and leave the area.", correct: true }
        ]
    },
    {
        env: "🏜️ Desert",
        desc: "You hear a sound like sizzling water or maracas near a bush. You should:",
        options: [
            { text: "A. Quickly jump blindly to dodge.", correct: false, failMsg: "You're dead ☠️. It's a rattlesnake. Jumping blindly compromises your balance and exposes your femoral artery to a strike." },
            { text: "B. Freeze immediately, locate the sound, and slowly back away.", correct: true }
        ]
    },
    {
        env: "❄️ Snow/Cold",
        desc: "While sitting by your campfire at night, you notice several pairs of reflecting eyes at the edge of the woods. You should:",
        options: [
            { text: "A. Back against a tree, wave a burning branch, and shout assertively.", correct: true },
            { text: "B. Abandon camp and run as fast as you can.", correct: false, failMsg: "You're dead ☠️. You cannot outrun wolves in the snow. Running triggers their predatory chase instinct." }
        ]
    }
];

// Module 3: Medical Quiz Definitions
const medQuizQuestions = [
    {
        desc: "🚨 Question 1/5: A teammate is bitten on the calf by a venomous snake. Should you immediately suck the venom out with your mouth?",
        options: [
            { text: "A. Yes, suck it out to prevent spreading.", correct: false, failMsg: "Fatal mistake ☠️! Micro-abrasions in your mouth will transfer toxins into your bloodstream, making you a second victim." },
            { text: "B. Absolutely not. Keep them calm, limit movement, and seek evacuation.", correct: true }
        ]
    },
    {
        desc: "❄️ Question 2/5: A teammate fell into an icy river and was pulled out shivering violently. Should you give them a sip of liquor to warm them up?",
        options: [
            { text: "A. Absolutely not. Alcohol accelerates core heat loss.", correct: true },
            { text: "B. Yes, alcohol creates a warming sensation.", correct: false, failMsg: "Fatal mistake ☠️! Alcohol dilates peripheral blood vessels, pushing warm blood to the skin where it cools rapidly, plummeting core temperature." }
        ]
    },
    {
        desc: "🧊 Question 3/5: You severely sprain your ankle on the trail. Should you immediately massage the area vigorously to promote blood flow?",
        options: [
            { text: "A. No. Follow the RICE protocol (Rest, Ice, Compression, Elevation).", correct: true },
            { text: "B. Yes, massage helps break up blood clots.", correct: false, failMsg: "Fatal mistake ☠️! Massaging an acute sprain exacerbates internal bleeding and swelling." }
        ]
    },
    {
        desc: "☀️ Question 4/5: Someone collapses from heatstroke in the desert. Their skin is hot and dry (no longer sweating). Should you force them to drink water?",
        options: [
            { text: "A. Yes, they are severely dehydrated.", correct: false, failMsg: "Fatal mistake ☠️! Forcing liquids into an unconscious person's mouth can cause aspiration and suffocation." },
            { text: "B. No. Focus strictly on rapid external cooling (shade, water on skin, fanning).", correct: true }
        ]
    },
    {
        desc: "❤️ Question 5/5: Regarding 'Danger' in DRSABCD: If a victim is trapped in a highly dangerous environment (e.g., active rockfall), should you abandon immediate rescue if you cannot ensure your own safety?",
        options: [
            { text: "A. Yes. The rescuer's safety is the absolute first priority.", correct: true },
            { text: "B. No. Saving lives comes first, even at personal risk.", correct: false, failMsg: "Emergency Rescue Do's and Don'ts ☠️! Creating a 'second victim' helps no one. Scene safety is mandatory." }
        ]
    }
];

// ================= Camping Locations Database (12 Stunning Landscapes) =================
const campingLocations = [
    { id: "camp1", name: "Mount Wugong, Jiangxi", desc: "Alpine meadows and stunning sea of clouds. High winds require aerodynamic shelters.", img: "assets/camp-wugong.jpg"},
    { id: "camp2", name: "Sayram Lake, Xinjiang", desc: "The last tear of the Atlantic. Extreme temperature drops at night; insulation is critical.", img: "assets/camp-sailimu.jpg"},
    { id: "camp3", name: "Yuzi West, Sichuan", desc: "360-degree snow mountain view. High-altitude cold zone, severe hypothermia risk.", img: "assets/camp-yuzixi.jpg"},
    { id: "camp4", name: "Yubeng Village, Yunnan", desc: "Hidden paradise under Mount Meili. Deep forests pose risks of wild animals and getting lost.", img: "assets/camp-yubeng.jpg"},
    { id: "camp5", name: "Anji Grassland, Zhejiang", desc: "Surrounded by bamboo forests. Perfect safe environment for beginners to practice shelter building.", img: "assets/camp-anji.jpg"},
    { id: "camp6", name: "Dahuajiao, Hainan", desc: "Pebble beach camping. Requires defense against high salt winds, moisture, and rising tides.", img: "assets/camp-wanning.jpg"},
    { id: "camp7", name: "Hulunbuir, Inner Mongolia", desc: "Endless green ocean. High risk of mosquito swarms and sudden thunderstorms.", img: "assets/camp-hulun.jpg"},
    { id: "camp8", name: "Yamdrok Lake, Tibet", desc: "Sapphire at 4400m altitude. Extreme test for altitude sickness and freezing temperatures.", img: "assets/camp-yanghu.jpg"},
    { id: "camp9", name: "Mars Camp, Qinghai", desc: "Earth's most Mars-like terrain. Extreme water shortage and violent sandstorms.", img: "assets/camp-mars.jpg"},
    { id: "camp10", name: "Daxin, Guangxi", desc: "Karst landscape wonderland. Extremely humid summer, requiring elevated beds and snake defense.", img: "assets/camp-chongzuo.jpg"},
    { id: "camp11", name: "Siguniang Mountain, Sichuan", desc: "Hardcore trekker's dream. Rapid weather changes; LNT rules are strictly enforced.", img: "assets/camp-siguniang.jpg"},
    { id: "camp12", name: "Pingtan Island, Fujian", desc: "Stunning island with starry skies. Accurate tide prediction is required to avoid campsite flooding.", img: "assets/camp-pingtan.jpg"}
];