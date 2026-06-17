const lessons = [
  {
    id: 'intro',
    title: 'Einleitung',
    kicker: 'Start',
    type: 'content',
    duration: '5 Min.',
    content: [
      'KI-Werkzeuge verändern die Arbeitsweise der Kommunikation. Die Stadt Zürich nutzt KI, um effizienter zu arbeiten und die Dienstleistungsqualität zu erhöhen.',
      'Der technologische Wandel wird aktiv gestaltet: Inhalte bleiben menschlich verantwortet, faktenbasiert, verständlich und im Einklang mit den städtischen Vorgaben.'
    ],
    cards: [
      ['Ziel', 'Du erkennst, wann KI in der Kommunikation sinnvoll ist und welche Leitplanken gelten.'],
      ['Haltung', 'KI unterstützt die Kommunikation, ersetzt aber weder Verantwortung noch fachliche Prüfung.'],
      ['Ablauf', 'Fünf Lektionen führen von Grundlagen über Kontrollen bis zu konkreten Usecases.']
    ]
  },
  {
    id: 'principles',
    title: 'Lektion 1: Prinzipien',
    kicker: 'Grundlagen',
    type: 'quiz',
    duration: '12 Min.',
    content: [
      'Vier Prinzipien bilden die Basis: menschliche Absenderschaft, Glaubwürdigkeit, städtische Identität und der Respekt vor Rechten Dritter.',
      'Die Verantwortung für publizierte Inhalte liegt immer bei einem Menschen oder einer Dienstabteilung. KI-Ergebnisse werden geprüft, eingeordnet und an Tonalität sowie Gestaltungs- und Sprachvorgaben angepasst.'
    ],
    bullets: ['Human-in-the-loop bleibt verbindlich.', 'Fakten, Bias und Reputationsrisiken werden aktiv geprüft.', 'Urheber-, Nutzungs- und Persönlichkeitsrechte werden respektiert.'],
    quiz: {
      question: 'Welche Aussage entspricht dem Primat der menschlichen Absenderschaft?',
      options: ['KI kann Entwürfe liefern, aber ein Mensch trägt die Verantwortung.', 'Wenn KI eingesetzt wird, trägt das Tool die Verantwortung.', 'Bei internen Texten ist keine Prüfung nötig.'],
      answer: 0,
      feedback: 'Richtig: KI unterstützt, doch Verantwortung und Schlussprüfung bleiben bei Menschen bzw. der zuständigen Organisationseinheit.'
    }
  },
  {
    id: 'transparency',
    title: 'Lektion 2: Transparenz',
    kicker: 'Vertrauen',
    type: 'quiz',
    duration: '10 Min.',
    content: [
      'Transparenz schafft Vertrauen. Die Bevölkerung soll erkennen können, ob sie mit einer Maschine oder mit einem Menschen interagiert.',
      'Bei Texten richtet sich die Deklaration nach dem Grad der KI-Leistung. Kontrollierte Inhalte benötigen in der Regel keine Deklaration; unkontrolliert generierte Inhalte werden deklariert. KI-generierte Bilder und Multimedia-Inhalte sind bei externer Publikation besonders streng zu kennzeichnen.'
    ],
    bullets: ['KI-Einsatz auf Anfrage generell offenlegen.', 'KI-generierte Bilder als solche kennzeichnen.', 'Keine Deepfakes oder irreführenden Kontexte mit bekannten Gebäuden, Marken oder Personen erzeugen.'],
    quiz: {
      question: 'Ein KI-generiertes Bild wird extern publiziert. Was ist zwingend?',
      options: ['Eine Kennzeichnung, zum Beispiel als KI-generierte Illustration.', 'Keine Kennzeichnung, wenn das Bild gut aussieht.', 'Nur eine interne Notiz im Projektordner.'],
      answer: 0,
      feedback: 'Richtig: Bei KI-generierten Bildern ist eine klare Kennzeichnung erforderlich.'
    }
  },
  {
    id: 'quality',
    title: 'Lektion 3: Freigabe und Qualitätssicherung',
    kicker: 'Sicherheit',
    type: 'quiz',
    duration: '12 Min.',
    content: [
      'Der bestehende Freigabeprozess für Kommunikationsmittel bleibt bestehen. KI ergänzt die Aufgaben, ersetzt aber keine Zuständigkeiten.',
      'Mit der Freigabe wird bestätigt, dass Inhalte auf Richtigkeit, Bias, urheberrechtliche Risiken und städtische Tonalität geprüft wurden. ZüriA ist das bevorzugte Tool; externe KI-Werkzeuge dürfen nur gemäss städtischer KI-Richtlinie verwendet werden.'
    ],
    bullets: ['Fakten und Bias prüfen.', 'Rechte und Risiken klären.', 'Tonalität, CD/CI und Sprachvorgaben einhalten.', 'Daten nur gemäss Vorgaben ins jeweilige Tool eingeben.'],
    quiz: {
      question: 'Was passiert mit dem bestehenden Freigabeprozess beim Einsatz von KI?',
      options: ['Er bleibt bestehen und wird um KI-spezifische Prüfungen ergänzt.', 'Er entfällt, wenn ZüriA genutzt wird.', 'Er gilt nur noch für Medienmitteilungen.'],
      answer: 0,
      feedback: 'Richtig: KI ändert die Sorgfaltspflichten nicht, sondern macht zusätzliche Prüfungen nötig.'
    }
  },
  {
    id: 'usecases',
    title: 'Lektion 4: Usecases entlang der Komm-Journey',
    kicker: 'Praxis',
    type: 'content',
    duration: '15 Min.',
    content: ['Nutze KI dort, wo sie Recherche, Struktur, Variantenbildung oder Qualitätssicherung unterstützt. Kritische Entscheidungen, Freigaben und Verantwortung bleiben menschlich.'],
    usecases: [
      ['1. Auftrag klären', 'Briefing-Fragen generieren, Zielgruppen schärfen und fehlende Informationen sichtbar machen.'],
      ['2. Recherche strukturieren', 'Quellenlisten, Stakeholder-Maps und Themencluster vorbereiten; Fakten anschliessend prüfen.'],
      ['3. Botschaften entwickeln', 'Kernaussagen, Argumentationslinien und FAQ-Entwürfe formulieren lassen.'],
      ['4. Kanalplanung', 'Content-Ideen für Website, Newsletter, Social Media und interne Kommunikation ableiten.'],
      ['5. Textentwurf', 'Erste Entwürfe in städtischer Tonalität erstellen und durch Menschen redigieren.'],
      ['6. Barrierearmut & Verständlichkeit', 'Texte vereinfachen, Zusammenfassungen erstellen und alternative Formulierungen prüfen.'],
      ['7. Qualitätssicherung', 'Check auf Widersprüche, Tonalität, Bias, sensible Daten und fehlende Deklarationen.'],
      ['8. Evaluation', 'Feedback clustern, Learnings ableiten und Verbesserungen für nächste Massnahmen planen.']
    ]
  },
  {
    id: 'links',
    title: 'Lektion 5: Link-Liste',
    kicker: 'Grundlagen',
    type: 'content',
    duration: '5 Min.',
    content: ['Diese Grundlagen helfen bei der Vertiefung und bei konkreten Kommunikationsprojekten.'],
    links: [
      ['Leitlinien zur Regierungs- und Verwaltungskommunikation (STRB 83/2017)', '#'],
      ['Richtlinie über die Nutzung von generativer künstlicher Intelligenz (STRB 2281/2025)', '#'],
      ['CD-Manual und Bildwelt der Stadt Zürich', '#'],
      ['Sprachvorgaben der Stadt Zürich', '#']
    ]
  }
];

const state = { active: localStorage.getItem('activeLesson') || lessons[0].id, completed: new Set(JSON.parse(localStorage.getItem('completedLessons') || '[]')) };
const nav = document.querySelector('#lessonNav');
const view = document.querySelector('#lessonView');
const progressText = document.querySelector('#progressText');
const progressBar = document.querySelector('#progressBar');

function save() { localStorage.setItem('activeLesson', state.active); localStorage.setItem('completedLessons', JSON.stringify([...state.completed])); }
function renderNav() { nav.innerHTML = lessons.map((lesson, index) => `<button class="nav-item ${lesson.id === state.active ? 'active' : ''}" data-id="${lesson.id}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${lesson.title}</strong><small>${lesson.duration}</small>${state.completed.has(lesson.id) ? '<em>✓</em>' : ''}</button>`).join(''); }
function renderProgress() { const done = state.completed.size; progressText.textContent = `${done} von ${lessons.length} abgeschlossen`; progressBar.style.width = `${(done / lessons.length) * 100}%`; }
function cardGrid(lesson) { return lesson.cards ? `<div class="card-grid">${lesson.cards.map(([t, b]) => `<article><h3>${t}</h3><p>${b}</p></article>`).join('')}</div>` : ''; }
function bullets(lesson) { return lesson.bullets ? `<ul class="checklist">${lesson.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''; }
function usecases(lesson) { return lesson.usecases ? `<div class="usecase-grid">${lesson.usecases.map(([t, b]) => `<article><span>${t}</span><p>${b}</p></article>`).join('')}</div>` : ''; }
function links(lesson) { return lesson.links ? `<div class="link-list">${lesson.links.map(([t, h]) => `<a href="${h}" aria-label="${t}">${t}<span>↗</span></a>`).join('')}</div>` : ''; }
function quiz(lesson) { return lesson.quiz ? `<section class="quiz" aria-label="Lernkontrolle"><p class="eyebrow">Lernkontrolle</p><h2>${lesson.quiz.question}</h2>${lesson.quiz.options.map((o, i) => `<button class="answer" data-answer="${i}">${o}</button>`).join('')}<p id="quizFeedback" class="feedback" hidden></p></section>` : ''; }
function renderLesson() { const lesson = lessons.find(l => l.id === state.active); view.innerHTML = `<article class="lesson"><p class="eyebrow">${lesson.kicker}</p><h2>${lesson.title}</h2>${lesson.content.map(p => `<p class="lead">${p}</p>`).join('')}${cardGrid(lesson)}${bullets(lesson)}${usecases(lesson)}${links(lesson)}${quiz(lesson)}<button class="primary-button" id="completeLesson">${state.completed.has(lesson.id) ? 'Als abgeschlossen markiert ✓' : 'Lektion abschliessen'}</button></article>`; }
function render() { renderNav(); renderLesson(); renderProgress(); save(); }

nav.addEventListener('click', event => { const button = event.target.closest('button[data-id]'); if (!button) return; state.active = button.dataset.id; render(); });
view.addEventListener('click', event => {
  const answer = event.target.closest('.answer');
  if (answer) {
    const lesson = lessons.find(l => l.id === state.active);
    const ok = Number(answer.dataset.answer) === lesson.quiz.answer;
    document.querySelectorAll('.answer').forEach(btn => btn.classList.remove('correct', 'wrong'));
    answer.classList.add(ok ? 'correct' : 'wrong');
    const feedback = document.querySelector('#quizFeedback');
    feedback.hidden = false;
    feedback.textContent = ok ? lesson.quiz.feedback : 'Noch nicht ganz. Lies die Lektion nochmals und versuche es erneut.';
    if (ok) state.completed.add(lesson.id);
    renderProgress(); save(); renderNav();
  }
  if (event.target.id === 'completeLesson') { state.completed.add(state.active); render(); }
});
document.querySelector('#resetProgress').addEventListener('click', () => { state.completed.clear(); state.active = lessons[0].id; render(); });
render();
