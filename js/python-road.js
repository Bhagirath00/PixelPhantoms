document.addEventListener('DOMContentLoaded', () => {
    initPythonRoadmap();
});

function initPythonRoadmap() {
    const container = document.getElementById('roadmap-content');
    
    // FULL COMPREHENSIVE PYTHON STUDY MATERIAL DATA
    const pythonCurriculum = [
        {
            title: "PHASE_01: Syntax_&_Foundations",
            desc: "Core rules, Indentation, and Basic CLI operations.",
            modules: [
                { name: "Variables & Standard Data Types", url: "https://docs.python.org/3/tutorial/introduction.html#numbers" },
                { name: "String Handling & Formatting (f-strings)", url: "https://realpython.com/python-f-strings/" },
                { name: "Type Casting & Dynamic Typing", url: "https://www.w3schools.com/python/python_datatypes.asp" }
            ]
        },
        {
            title: "PHASE_02: Control_Flow_&_Logic",
            desc: "Conditional branching and complex loop handling.",
            modules: [
                { name: "Conditional Statements (If/Else/Elif)", url: "https://docs.python.org/3/tutorial/controlflow.html" },
                { name: "Loops (For, While) & Break/Continue", url: "https://www.learnpython.org/en/Loops" },
                { name: "Match-Case (Python 3.10+)", url: "https://peps.python.org/pep-0636/" }
            ]
        },
        {
            title: "PHASE_03: Data_Structures_In-Depth",
            desc: "Managing Collections: Lists, Tuples, Sets, and Dictionaries.",
            modules: [
                { name: "List Methods & Slicing", url: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists" },
                { name: "Dictionary Operations & Comprehensions", url: "https://realpython.com/python-dicts/" },
                { name: "Immutable vs Mutable Objects", url: "https://realpython.com/python-mutable-vs-immutable-types/" }
            ]
        },
        {
            title: "PHASE_04: Functional_Programming",
            desc: "Reusable logic, Scope, and Lambda functions.",
            modules: [
                { name: "Functions (*args & **kwargs)", url: "https://realpython.com/python-kwargs-and-args/" },
                { name: "Lambda, Map, Filter, & Reduce", url: "https://www.w3schools.com/python/python_lambda.asp" },
                { name: "Decorators & Generators", url: "https://realpython.com/primer-on-python-decorators/" }
            ]
        },
        {
            title: "PHASE_05: Object_Oriented_Programming",
            desc: "Classes, Inheritance, and Dunder methods.",
            modules: [
                { name: "Classes & Instance Attributes", url: "https://docs.python.org/3/tutorial/classes.html" },
                { name: "Inheritance & Polymorphism", url: "https://realpython.com/inheritance-composition-python/" },
                { name: "Encapsulation & Property Decorators", url: "https://www.programiz.com/python-programming/property" }
            ]
        },
        {
            title: "PHASE_06: File_I/O_&_Exceptions",
            desc: "Persistence and Robust Error Handling.",
            modules: [
                { name: "File Context Managers (With open)", url: "https://www.w3schools.com/python/python_file_handling.asp" },
                { name: "Custom Exception Handling", url: "https://docs.python.org/3/tutorial/errors.html" },
                { name: "JSON & CSV Data Processing", url: "https://realpython.com/python-json/" }
            ]
        },
        {
            title: "PHASE_07: Standard_&_External_Libraries",
            desc: "Extending functionality with the ecosystem.",
            modules: [
                { name: "NumPy: Numerical Computation", url: "https://numpy.org/doc/stable/user/absolute_beginners.html" },
                { name: "Pandas: Data Analysis", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
                { name: "Requests: HTTP for Humans", url: "https://requests.readthedocs.io/en/latest/" },
                { name: "OS & Sys: System Integration", url: "https://docs.python.org/3/library/os.html" }
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
                <button class="toggle-btn" onclick="togglePythonModule(this)">+</button>
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

function togglePythonModule(btn) {
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
        y: 30,
        stagger: 0.2,
        duration: 0.8
    });
}