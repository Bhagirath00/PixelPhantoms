document.addEventListener('DOMContentLoaded', () => {
    initPythonRoadmap();
});

function initPythonRoadmap() {
    const container = document.getElementById('roadmap-content');
    
    // EXCLUSIVE PYTHON CURRICULUM DATA
    const pythonCurriculum = [
        {
            title: "PHASE_01: Language_Foundations",
            desc: "Basic syntax, Indentation rules, and IDE setup.",
            modules: [
                { name: "Variables & Data Types", url: "https://docs.python.org/3/tutorial/introduction.html#numbers" },
                { name: "String Manipulation", url: "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str" },
                { name: "Operators & Math", url: "https://www.w3schools.com/python/python_operators.asp" }
            ]
        },
        {
            title: "PHASE_02: Complex_Data_Handling",
            desc: "Mastering Collections and logic flow.",
            modules: [
                { name: "Lists, Tuples & Sets", url: "https://docs.python.org/3/tutorial/datastructures.html" },
                { name: "Dictionary Operations", url: "https://realpython.com/python-dicts/" },
                { name: "Conditional Logic (If/Else)", url: "https://docs.python.org/3/tutorial/controlflow.html" }
            ]
        },
        {
            title: "PHASE_03: Functional_Programming",
            desc: "Iteration, Comprehensions, and Reusable code.",
            modules: [
                { name: "Loops (For/While)", url: "https://www.learnpython.org/en/Loops" },
                { name: "Functions & *args/**kwargs", url: "https://realpython.com/python-kwargs-and-args/" },
                { name: "List Comprehensions", url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions" }
            ]
        },
        {
            title: "PHASE_04: Advanced_Python_Ops",
            desc: "OOP, Error Handling, and File I/O.",
            modules: [
                { name: "Classes & Inheritance", url: "https://docs.python.org/3/tutorial/classes.html" },
                { name: "Exception Handling (Try/Except)", url: "https://docs.python.org/3/tutorial/errors.html" },
                { name: "File Handling", url: "https://www.w3schools.com/python/python_file_handling.asp" }
            ]
        },
        {
            title: "PHASE_05: Essential_Libraries",
            desc: "The Standard Library and beyond.",
            modules: [
                { name: "NumPy for Computation", url: "https://numpy.org/doc/stable/user/absolute_beginners.html" },
                { name: "Pandas for Data", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
                { name: "Requests for Web APIs", url: "https://requests.readthedocs.io/en/latest/" }
            ]
        }
    ];

    container.innerHTML = ''; // Clear loading text

    pythonCurriculum.forEach((phase, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        const node = document.createElement('div');
        node.className = `chapter-node ${side}`;
        
        node.innerHTML = `
            <div class="node-header">
                <h3>${phase.title}</h3>
                <button class="toggle-btn" onclick="toggleModule(this)">+</button>
            </div>
            <div class="chapter-details">
                <p class="phase-desc">${phase.desc}</p>
                <div class="module-list">
                    ${phase.modules.map(mod => `
                        <a href="${mod.url}" target="_blank" class="module-link">
                            <i class="fab fa-python"></i> ${mod.name}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(node);
    });

    animatePythonRoadmap();
}

function toggleModule(btn) {
    const details = btn.parentElement.nextElementSibling;
    btn.classList.toggle('active');
    details.classList.toggle('open');
    btn.innerText = btn.classList.contains('active') ? '×' : '+';
}

function animatePythonRoadmap() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.roadmap-spine', { height: 0, duration: 1.5 });
    gsap.from('.chapter-node', {
        scrollTrigger: { trigger: '.roadmap-wrapper', start: "top 80%" },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
    });
}