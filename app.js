// 6 ta savol
const questions = [
    {
        q: "HTML nimaning qisqartmasi?",
        a: ["Hyper Text Markup Language", "High Tool Multi Language", "Hyperlink Text Making Language"],
        c: 0
    },
    {
        q: "CSS qaysi so'zdan olingan?",
        a: ["Cascading Style Sheets", "Colorful Style System", "Creative Sheet Style"],
        c: 0
    },
    {
        q: "JavaScript nima?",
        a: ["Dasturlash tili", "Brauzer", "Operatsion tizim"],
        c: 0
    },
    {
        q: "HTMLda eng katta sarlavha qaysi?",
        a: ["<h6>", "<title>", "<h1>"],
        c: 2
    },
    {
        q: "CSS nimaga xizmat qiladi?",
        a: ["Struktura", "Dizayn", "Ma'lumotlar bazasi"],
        c: 1
    },
    {
        q: "JavaScript qayerda ishlaydi?",
        a: ["Serverda", "Brauzerda", "Fayl tizimida"],
        c: 1
    }
];

const quiz = document.getElementById("quiz-container");

// Savollarni chiqarish
questions.forEach((s, i) => {
    quiz.innerHTML += `
        <div class="question">
            <p><strong>${i + 1}. ${s.q}</strong></p>
            ${s.a.map((opt, idx) => `
                <label>
                    <input type="radio" name="q${i}" value="${idx}">
                    ${opt}
                </label><br>
            `).join("")}
        </div>
    `;
});

// Yakunlash tugmasi
document.getElementById("submit-btn").onclick = () => {
    let score = 0;

    questions.forEach((s, i) => {
        let checked = document.querySelector(`input[name="q${i}"]:checked`);
        if (checked && Number(checked.value) === s.c) score++;
    });

    document.getElementById("result").textContent = `Natija: ${score} / ${questions.length}`;
};
