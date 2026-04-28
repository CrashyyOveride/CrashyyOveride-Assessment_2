    const quizData = [
    { title: "Scenario: Variable Assignment", options: ["SET x = 10", "x ← 10", "x := 10", "10 → x"], correct: 1, hint: "Pseudocode standard uses the assignment arrow (←)." },
    { title: "Scenario: Selection Structure (IF)", options: ["IF age > 18\n  OUTPUT 'Adult'\nENDIF", "IF age > 18 THEN\n  OUTPUT 'Adult'\nENDIF", "IF age > 18 DO\n  OUTPUT 'Adult'", "WHEN age > 18:\n  OUTPUT 'Adult'"], correct: 1, hint: "Formal notation requires 'THEN' and 'ENDIF'." },
    { title: "Scenario: Definite Iteration (FOR)", options: ["FOR i = 1 to 10\n  OUTPUT i\nNEXT i", "FOR i FROM 1 TO 10\n  OUTPUT i", "WHILE i < 10\n  OUTPUT i\nENDWHILE", "LOOP 10 TIMES\n  OUTPUT i"], correct: 0, hint: "Definite loops require a counter and 'NEXT'." },
    { title: "Scenario: Array Indexing", options: ["names.get(0)", "names{1}", "names[0]", "names.index(0)"], correct: 2, hint: "Square brackets [ ] are the industry standard." },
    { title: "Scenario: Boolean Logic (AND)", options: ["IF x > 0 && x < 10", "IF x > 0 AND x < 10 THEN", "IF x > 0 & x < 10", "IF (x > 0 + x < 10)"], correct: 1, hint: "Use keywords (AND/OR) for clarity in pseudocode." }
];

let state = { currentIndex: 0, score: 0, canAnswer: true };

const ui = {
    title: document.getElementById('scenario-title'),
    container: document.getElementById('options-container'),
    hint: document.getElementById('hint-box'),
    next: document.getElementById('next-btn'),
    progress: document.getElementById('p-bar'),
    progText: document.getElementById('progress-text'),
    quizView: document.getElementById('quiz-view'),
    reportView: document.getElementById('report-view'),
    rankText: document.getElementById('rank-text')
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
let temp = array[i];
array[i] = array[j];
array[j] = temp;
    }
    return array;
}

shuffle(quizData);

function init() { 
    state.canAnswer = true;
    const data = quizData[state.currentIndex];

    ui.title.innerText = data.title;
    ui.progText.innerText = `Scenario Question 0${state.currentIndex + 1} // ${quizData.length}`;
    ui.container.innerHTML = '';
    ui.next.style.display = 'none';
    ui.hint.classList.remove('visible');
    
    ui.progress.style.width = `${(state.currentIndex / quizData.length) * 100}%`;

    data.options.forEach((opt, i) => {
        const card = document.createElement('div');
        card.className = 'code-card';
        card.innerText = opt;
        card.onclick = () => handleChoice(i, card);
        ui.container.appendChild(card);
    });
}

function handleChoice(index, element) {
    if (!state.canAnswer) return;
    state.canAnswer = false;

    const correctIndex = quizData[state.currentIndex].correct;
    
    if (index === correctIndex) {
        element.classList.add('correct');
        state.score++;
    } else {
        element.classList.add('incorrect');
        ui.container.children[correctIndex].classList.add('missed');
    }

    ui.hint.innerText = quizData[state.currentIndex].hint;
    ui.hint.classList.add('visible');
    ui.next.style.display = 'block';
}

ui.next.onclick = () => {
    state.currentIndex++;
    if (state.currentIndex < quizData.length) {
        init();
    } else {
        showReport();
    }
};

function showReport() {
    ui.quizView.style.display = 'none';
    
    ui.reportView.classList.add('active'); 
    ui.progress.style.width = '100%';

    const percent = (state.score / quizData.length) * 100;
    const rank = percent === 100 ? "A+" : percent >= 90 ? "A" : percent >= 80 ? "B" : percent >= 70 ? "C" : percent >= 60 ? "D" : "F";

    ui.rankText.innerHTML = `<span class="animate-rank">${rank}</span>`;
    
    const summary = document.getElementById('performance-summary');
    if(percent === 100) summary.innerText = "System Optimised. Perfect Score attained.";
    else if(percent >= 70) summary.innerText = "Validation Successful. Knowledge base stable.";
    else summary.innerText = "Data Correlation Error. Review recommended.";


}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && ui.next.style.display !== 'none') {
        ui.next.click();
    }
});

init();

