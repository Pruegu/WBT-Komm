import './styles.css';

const lessons = [
  { id: 'intro', nav: 'Einleitung', title: 'KI in der Kommunikation', kicker: 'Start' },
  { id: 'principles', nav: 'Lektion 1', title: 'Prinzipien', kicker: 'mit Lernkontrolle' },
  { id: 'transparency', nav: 'Lektion 2', title: 'Transparenz', kicker: 'mit Lernkontrolle' },
  { id: 'quality', nav: 'Lektion 3', title: 'Freigabe & Qualitätssicherung', kicker: 'mit Lernkontrolle' },
  { id: 'usecases', nav: 'Lektion 4', title: 'Usecases entlang der Komm-Journey', kicker: 'Praxis' },
  { id: 'links', nav: 'Lektion 5', title: 'Link-Liste', kicker: 'Transfer' },
];

const principles = [
  ['Primat der menschlichen Absenderschaft', 'Publizierte Inhalte bleiben in menschlicher Verantwortung.'],
  ['Glaubwürdigkeit und Reputation', 'Fakten werden geprüft; Inhalte müssen den Werten der Stadt entsprechen.'],
  ['Wahrung der städtischen Identität', 'Tonalität, Sprach- und Gestaltungsvorgaben bleiben verbindlich.'],
  ['Rechte Dritter respektieren', 'Urheber-, Nutzungs- und Persönlichkeitsrechte werden beachtet.'],
  ['Transparenz', 'KI-Einsatz wird gemäss Regelung offengelegt oder gekennzeichnet.'],
];

const usecases = [
  ['Auftrag & Rahmen klären', 'Briefing strukturieren', 'Aus Auftrag, Zielgruppe, Kanal, Timing und Rahmenbedingungen eine kompakte Briefing-Struktur ableiten.', 'Ziel, Botschaft, Zuständigkeit, Freigabeweg und KI-Eignung entscheiden.'],
  ['Recherche', 'Themen-, Quellen- und Argumentelandkarte', 'Öffentliche Quellen zusammenfassen, Themencluster bilden und offene Punkte identifizieren.', 'Quellenqualität prüfen, Fakten verifizieren und vertrauliche Informationen schützen.'],
  ['Konzeption & Ideenfindung', 'Kommunikationsansätze entwickeln', 'Varianten für Zielgruppen, Kernbotschaften, Tonalität, Kanäle und Dramaturgie vorschlagen.', 'Strategische Passung, städtische Haltung, Verhältnismässigkeit und Umsetzbarkeit beurteilen.'],
  ['Redaktion / Text', 'Textentwürfe und Varianten erstellen', 'Rohtexte entwerfen, kürzen, strukturieren und barriereärmer formulieren.', 'Fakten, Tonalität, Sprachvorgaben, Rechte und politische Sensibilität prüfen.'],
  ['Audiovisueller Content', 'Storyboards und Alternativtexte vorbereiten', 'Bildideen, Storyboard-Strukturen, Szenenlisten und Alt-Texte vorbereiten.', 'Keine Realbilder ersetzen; KI-generierte Illustrationen kennzeichnen; keine Deepfakes.'],
  ['Publikation & Weboptimierung', 'Titel, Teaser und Meta-Angaben optimieren', 'Titelvarianten, SEO-Beschriebe, Zwischenüberschriften und Linktexte erstellen.', 'Publikationsstandards, CD/CI, Barrierefreiheit, Aktualität und Transparenzregelung prüfen.'],
  ['Interaktion & Moderation', 'Antwortentwürfe und Moderationshilfen', 'Antwortvorschläge, Kommentarcluster, Eskalationshinweise und konsistente Bausteine vorbereiten.', 'Empathie, politische Sensibilität, Rechtslage und Tonalität prüfen; heikle Fälle eskalieren.'],
  ['Monitoring & Wirkungsanalyse', 'Rückmeldungen strukturieren', 'Feedback, Medienresonanz, Webkennzahlen oder Kommentarverläufe clustern.', 'Datenqualität, Aussagekraft und Datenschutz prüfen; Schlussfolgerungen nicht automatisieren.'],
];

const linkList = [
  ['Governance', 'Leitlinien zur Regierungs- und Verwaltungskommunikation (STRB 83/2017)'],
  ['Governance', 'Richtlinie über die Nutzung von generativer KI (STRB 2281/2025)'],
  ['Governance', 'Komm-Anwendungsprinzipien für KI in der Kommunikation'],
  ['Transparenz', 'Transparenzregelung / Deklarationsbeispiele'],
  ['Deepfakes', 'Deepfake-Merkblatt / Eskalationsweg'],
  ['CD/CI', 'CD-Manual, Bildwelt und Office-Vorgaben Stadt Zürich'],
  ['Sprache', 'Sprachvorgaben der Stadt Zürich'],
  ['Toolbox', 'SharePoint der Kommunikation: Komm-spezifische KI-Werkzeuge'],
  ['Toolbox', 'ZüriA'],
  ['Toolbox', 'Capito'],
  ['Support', 'Kontakt Kommunikation / Toolverantwortliche'],
  ['Support', 'Kontakt Datenschutz / Informationssicherheit / ISDS'],
];

const transparencySteps = [
  ['1', 'Wird der Inhalt extern publiziert oder interagiert die Öffentlichkeit direkt damit?', 'Wenn nein, ist meist keine externe Deklaration nötig. Prüfen Sie trotzdem Tool- und Datennutzung.'],
  ['2', 'Ist der KI-Beitrag für Inhalt, Aussage, Bild oder Interaktion wesentlich?', 'Je wesentlicher der KI-Beitrag, desto stärker ist Transparenz zu prüfen.'],
  ['3', 'Wurde der Inhalt vollständig menschlich geprüft und verantwortet?', 'Bei vollständiger menschlicher Kontrolle ist Text in der Regel nicht deklarationspflichtig.'],
  ['4', 'Handelt es sich um Bild, Video, Audio oder automatische Interaktion?', 'Bei Multimedia und automatischer Interaktion gelten strengere Regeln.'],
  ['5', 'Ist Kennzeichnung, Hinweis oder Nichtverwendung erforderlich?', 'KI-generierte Illustrationen kennzeichnen; Deepfakes und irreführende Realitätsdarstellungen nicht verwenden.'],
];

let activeLesson = 'intro';
let transparencyStep = 0;
let mobileNavOpen = false;

function currentIndex() {
  return lessons.findIndex((lesson) => lesson.id === activeLesson);
}

function renderQuiz(id, question, answers) {
  return `
    <section class="quiz" aria-labelledby="${id}-title">
      <div class="section-label">Lernkontrolle</div>
      <h2 id="${id}-title">${question}</h2>
      <div class="answer-grid">
        ${answers.map((answer, index) => `
          <button class="answer" data-answer="${answer.correct ? 'true' : 'false'}" data-feedback="${id}-feedback-${index}">
            ${answer.text}
          </button>
          <p class="answer-feedback ${answer.correct ? 'is-correct' : 'is-wrong'}" id="${id}-feedback-${index}" hidden>${answer.feedback}</p>
        `).join('')}
      </div>
    </section>
  `;
}

function introTemplate() {
  return `
    <div class="grid two">
      <article class="card wide">
        <div class="section-label">Zielbild</div>
        <h2>Verantwortungsvoll KI-unterstützt kommunizieren</h2>
        <p>Dieses Web Based Training zeigt, wie KI in der Kommunikationsarbeit effizient, glaubwürdig und qualitätsgesichert eingesetzt wird.</p>
      </article>
      <article class="card"><h3>Lernziele</h3><p>Prinzipien anwenden, Transparenz beurteilen, Freigabeprozesse ergänzen, Usecases einordnen und relevante Grundlagen finden.</p></article>
      <article class="card"><h3>Abgrenzung</h3><p>Das WBT ersetzt keine rechtliche Einzelfallprüfung. Bei Personendaten, externen Tools, Deepfake-Verdacht oder unklarer Freigabe gilt der Eskalationsweg.</p></article>
    </div>
  `;
}

function principlesTemplate() {
  return `
    <div class="principle-grid">
      ${principles.map(([title, body], index) => `
        <article class="principle-card">
          <span aria-hidden="true">${index + 1}</span>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `).join('')}
    </div>
    <article class="statement">KI liefert Vorschläge, Varianten und Struktur. Die Kommunikation entscheidet über Wahrheit, Haltung, Tonalität, Rechte, Kontext und Publikation.</article>
    ${renderQuiz('principles-a', 'Wer trägt Verantwortung für einen publizierten KI-gestützten Inhalt?', [
      { text: 'Das KI-System.', correct: false, feedback: 'Nicht richtig: KI kann unterstützen, übernimmt aber keine Absenderschaft.' },
      { text: 'Die nutzende Person bzw. zuständige Dienstabteilung im bestehenden Freigabeprozess.', correct: true, feedback: 'Richtig: Verantwortung bleibt menschlich und organisatorisch verankert.' },
      { text: 'Der Toolanbieter.', correct: false, feedback: 'Nicht richtig: Der Toolanbieter ersetzt keine städtische Freigabe.' },
    ])}
  `;
}

function transparencyTemplate() {
  const step = transparencySteps[transparencyStep];
  return `
    <section class="decision" aria-labelledby="decision-title">
      <div class="section-label">Interaktive Entscheidungshilfe</div>
      <h2 id="decision-title">Transparenz prüfen</h2>
      <div class="step-counter">Schritt ${step[0]} von ${transparencySteps.length}</div>
      <p class="decision-question">${step[1]}</p>
      <p>${step[2]}</p>
      <div class="button-row">
        <button data-tree-next>Ja / weiter prüfen</button>
        <button data-tree-reset>Zurücksetzen</button>
      </div>
    </section>
    <div class="grid two">
      <article class="card"><h3>Textgenerierung</h3><p>Keine Deklaration, wenn Inhalte vollständig durch Menschen kontrolliert, geprüft und verantwortet wurden. Deklaration bei automatischer Publikation ohne menschliche Kontrolle.</p></article>
      <article class="card"><h3>Bild & Multimedia</h3><p>KI-generierte Bilder müssen gekennzeichnet werden. KI ersetzt keine Fotografie realer Gegebenheiten; fotorealistische Personenimitationen und Deepfakes sind nicht zulässig.</p></article>
    </div>
    ${renderQuiz('transparency-a', 'Welche Aussage ist korrekt?', [
      { text: 'KI-generierte Bilder müssen nur gekennzeichnet werden, wenn sie fotorealistisch sind.', correct: false, feedback: 'Nicht richtig: Die Kennzeichnungspflicht gilt für KI-generierte Bilder in der externen Publikation.' },
      { text: 'KI-generierte Bilder für externe Publikation sind als solche zu kennzeichnen.', correct: true, feedback: 'Richtig: Wegen Manipulationsrisiken gelten für Bild und Multimedia strengere Transparenzregeln.' },
      { text: 'Eine Kennzeichnung ist nur bei Social Media nötig.', correct: false, feedback: 'Nicht richtig: Die Regel ist kanalübergreifend zu prüfen.' },
    ])}
  `;
}

function qualityTemplate() {
  const checks = ['Fakten, Quellen, Zahlen, Kontext und Bias', 'Urheber-, Nutzungs- und Persönlichkeitsrechte', 'Tonalität, Sprachvorgaben, CD/CI und Bildwelt', 'Transparenz, Kennzeichnung oder Deklaration', 'Zulässige Tool- und Datennutzung', 'Bestehender Freigabeweg'];
  return `
    <section class="checklist" aria-labelledby="quality-title">
      <div class="section-label">Prüfpunkte</div>
      <h2 id="quality-title">Mit der Freigabe wird bestätigt</h2>
      ${checks.map((check, index) => `<label><input type="checkbox" data-check="${index}"> ${check}</label>`).join('')}
      <p class="check-status" aria-live="polite">0 von ${checks.length} Prüfpunkten markiert.</p>
    </section>
    <article class="statement">Freigabe und Qualitätssicherung sind der Ort, an dem Effizienzgewinn und Verantwortung zusammenkommen.</article>
    ${renderQuiz('quality-a', 'Was muss vor der Freigabe eines KI-unterstützten Kommunikationsmittels geprüft sein?', [
      { text: 'Tool hat plausibel geantwortet und der Text klingt gut.', correct: false, feedback: 'Nicht ausreichend: Sprachliche Glätte ist kein Qualitätsnachweis.' },
      { text: 'Fakten/Quellen, Bias, Rechte, Tonalität, Transparenz, Tool- und Datennutzung sowie Freigabeweg.', correct: true, feedback: 'Richtig: KI-spezifische Prüfung ergänzt den bestehenden Freigabeprozess.' },
      { text: 'Nur der Prompt und die finale Zeichenlänge.', correct: false, feedback: 'Nicht richtig: Promptqualität ersetzt keine fachliche Qualitätssicherung.' },
    ])}
  `;
}

function usecasesTemplate() {
  return `
    <div class="timeline">
      ${usecases.map(([step, title, ai, human], index) => `
        <article>
          <b>UC-${String(index + 1).padStart(2, '0')}</b>
          <h3>${step}: ${title}</h3>
          <p><strong>KI-Beitrag:</strong> ${ai}</p>
          <p><strong>Menschliche Aufgabe / QS:</strong> ${human}</p>
        </article>
      `).join('')}
    </div>
  `;
}

function linksTemplate() {
  return `
    <div class="link-list">
      ${linkList.map(([group, title]) => `
        <a href="#" aria-label="Platzhalterlink: ${title}">
          <span class="link-group">${group}</span>
          <strong>${title}</strong>
          <em>[Link einsetzen]</em>
        </a>
      `).join('')}
    </div>
    <article class="statement">
      <h2>Abschluss</h2>
      <p>KI kann Kommunikationsarbeit wirksamer machen, wenn sie entlang klarer Prinzipien, transparenter Kennzeichnung und sauberer Freigabe eingesetzt wird.</p>
      <p><strong>Transferfrage:</strong> Welche wiederkehrende Kommunikationsaufgabe könnte im eigenen Arbeitsbereich sinnvoll KI-unterstützt werden?</p>
    </article>
  `;
}

function lessonTemplate() {
  const templates = {
    intro: introTemplate,
    principles: principlesTemplate,
    transparency: transparencyTemplate,
    quality: qualityTemplate,
    usecases: usecasesTemplate,
    links: linksTemplate,
  };
  return templates[activeLesson]();
}

function render() {
  const index = currentIndex();
  const lesson = lessons[index];
  const progress = Math.round(((index + 1) / lessons.length) * 100);
  document.querySelector('#app').innerHTML = `
    <header class="topbar">
      <a class="skip-link" href="#content">Zum Inhalt springen</a>
      <div class="brand" aria-label="Stadt Zürich"><span class="crest" aria-hidden="true">▦</span><span>Stadt Zürich</span></div>
      <button class="menu" aria-expanded="${mobileNavOpen}" aria-controls="course-nav" data-menu>${mobileNavOpen ? 'Schliessen' : 'Menü'}</button>
    </header>
    <div class="shell">
      <nav id="course-nav" class="course-nav ${mobileNavOpen ? 'open' : ''}" aria-label="Kursnavigation">
        ${lessons.map((item, itemIndex) => `
          <button class="${item.id === activeLesson ? 'selected' : ''}" data-nav="${item.id}" aria-current="${item.id === activeLesson ? 'page' : 'false'}">
            <small>${String(itemIndex + 1).padStart(2, '0')} · ${item.kicker}</small>
            <span>${item.nav}</span>
          </button>
        `).join('')}
      </nav>
      <main id="content" tabindex="-1">
        <div class="progress" aria-label="Kursfortschritt ${progress} Prozent"><i style="width:${progress}%"></i></div>
        <section class="hero">
          <div>
            <p class="eyebrow">Web Based Training · ca. 30 Minuten</p>
            <h1>${lesson.title}</h1>
            <p>Verantwortungsvoll, transparent und qualitätsgesichert mit KI arbeiten — entlang der Kommunikationsprinzipien der Stadt Zürich.</p>
          </div>
          <div class="hero-mark" aria-hidden="true">KI</div>
        </section>
        ${lessonTemplate()}
        <div class="pager" aria-label="Lektionsnavigation">
          <button ${index === 0 ? 'disabled' : ''} data-prev>← Zurück</button>
          <button ${index === lessons.length - 1 ? 'disabled' : ''} data-next>Weiter →</button>
        </div>
      </main>
    </div>
  `;
}

function navigateTo(id) {
  activeLesson = id;
  mobileNavOpen = false;
  render();
  document.querySelector('#content')?.focus();
}

document.addEventListener('click', (event) => {
  const navButton = event.target.closest('[data-nav]');
  const nextButton = event.target.closest('[data-next]');
  const prevButton = event.target.closest('[data-prev]');
  const answerButton = event.target.closest('[data-answer]');

  if (navButton) navigateTo(navButton.dataset.nav);
  if (nextButton) navigateTo(lessons[Math.min(currentIndex() + 1, lessons.length - 1)].id);
  if (prevButton) navigateTo(lessons[Math.max(currentIndex() - 1, 0)].id);

  if (event.target.closest('[data-menu]')) {
    mobileNavOpen = !mobileNavOpen;
    render();
  }

  if (event.target.closest('[data-tree-next]')) {
    transparencyStep = Math.min(transparencyStep + 1, transparencySteps.length - 1);
    render();
  }

  if (event.target.closest('[data-tree-reset]')) {
    transparencyStep = 0;
    render();
  }

  if (answerButton) {
    const quiz = answerButton.closest('.quiz');
    quiz.querySelectorAll('.answer').forEach((button) => button.classList.remove('chosen'));
    quiz.querySelectorAll('.answer-feedback').forEach((feedback) => { feedback.hidden = true; });
    answerButton.classList.add('chosen');
    document.getElementById(answerButton.dataset.feedback).hidden = false;
  }
});

document.addEventListener('change', (event) => {
  if (!event.target.matches('[data-check]')) return;
  const checklist = event.target.closest('.checklist');
  const checked = checklist.querySelectorAll('[data-check]:checked').length;
  const total = checklist.querySelectorAll('[data-check]').length;
  checklist.querySelector('.check-status').textContent = `${checked} von ${total} Prüfpunkten markiert.`;
});

render();
