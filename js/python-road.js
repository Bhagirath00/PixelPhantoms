document.addEventListener('DOMContentLoaded', () => {
    initPythonRoadmap();
});

function initPythonRoadmap() {
    const container = document.getElementById('roadmap-content');
    if (!container) return;

    const pythonCurriculum = [
        { 
            title: "PHASE_01: Language_Foundations", 
            desc: "The fundamental syntax and logic of Python.", 
            modules: [
                { name: "Variables & Built-in Types", url: "https://docs.python.org/3/tutorial/introduction.html#numbers" },
                { name: "String Methods & Formatting", url: "https://realpython.com/python-strings/" },
                { name: "Type Casting & Conversion", url: "https://www.w3schools.com/python/python_datatypes.asp" }
            ] 
        },
        { 
            title: "PHASE_02: Logic_&_Control_Flow", 
            desc: "Branching code with conditions and loops.", 
            modules: [
                { name: "If/Else & Match-Case", url: "https://docs.python.org/3/tutorial/controlflow.html" },
                { name: "Iteration (For/While Loops)", url: "https://realpython.com/python-for-loop/" },
                { name: "List Comprehensions", url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions" }
            ] 
        },
        { 
            title: "PHASE_03: Mastering_Data_Structures", 
            desc: "Handling Lists, Dicts, Sets, and Tuples.", 
            modules: [
                { name: "List Slicing & Advanced Methods", url: "https://docs.python.org/3/tutorial/datastructures.html" },
                { name: "Dictionary Operations", url: "https://realpython.com/python-dicts/" },
                { name: "Immutable vs Mutable Logic", url: "https://realpython.com/python-mutable-vs-immutable-types/" }
            ] 
        },
        { 
            title: "PHASE_04: Functional_Paradigms", 
            desc: "Functions, Scope, and modular logic.", 
            modules: [
                { name: "Functions (*args & **kwargs)", url: "https://realpython.com/python-kwargs-and-args/" },
                { name: "Lambda, Map, & Filter", url: "https://www.w3schools.com/python/python_lambda.asp" },
                { name: "Decorators & Generators", url: "https://realpython.com/primer-on-python-decorators/" }
            ] 
        },
        { 
            title: "PHASE_05: OOP_Architecture", 
            desc: "Structuring systems with Classes and Inheritance.", 
            modules: [
                { name: "Classes & Instance State", url: "https://docs.python.org/3/tutorial/classes.html" },
                { name: "Inheritance & Polymorphism", url: "https://realpython.com/inheritance-composition-python/" },
                { name: "Dunder (Magic) Methods", url: "https://mathspp.com/blog/pydonts/dunder-methods" }
            ] 
        },
        { 
            title: "PHASE_06: System_&_File_Ops", 
            desc: "Persistence and system-level interactions.", 
            modules: [
                { name: "File Context Managers (with open)", url: "https://www.w3schools.com/python/python_file_handling.asp" },
                { name: "JSON & CSV Processing", url: "https://realpython.com/python-json/" },
                { name: "Exception Handling Protocols", url: "https://docs.python.org/3/tutorial/errors.html" }
            ] 
        },
        { 
            title: "PHASE_07: Advanced_Ecosystem", 
            desc: "Modern libraries for Data and APIs.", 
            modules: [
                { name: "NumPy: Numerical Arrays", url: "https://numpy.org/doc/stable/user/absolute_beginners.html" },
                { name: "Pandas: Data Analysis", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
                { name: "Requests: Web APIs", url: "https://requests.readthedocs.io/en/latest/" }
            ] 
        }
    ];

    container.innerHTML = ''; 

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
                <p class="phase-desc" style="color:#666; font-size:0.9rem;">${phase.desc}</p>
                <div class="module-list">
                    ${phase.modules.map(m => `
                        <a href="${m.url}" target="_blank" class="module-link">
                            <i class="fab fa-python" style="margin-right:10px; color:var(--py-blue);"></i>
                            ${m.name}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(node);
    });

    // Animate entrance
    gsap.from('.chapter-node', {
        scrollTrigger: { trigger: '.roadmap-wrapper', start: "top 80%" },
        opacity: 0,
        x: (i) => i % 2 === 0 ? -100 : 100,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
    });
}

function togglePythonModule(btn) {
    const details = btn.parentElement.nextElementSibling;
    btn.classList.toggle('active');
    details.classList.toggle('open');
    btn.innerText = btn.classList.contains('active') ? '×' : '+';
}